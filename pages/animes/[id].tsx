import { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';

// ****** TS ******
interface MediaListEntry {
  id: number;
}

interface Media {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  description: string;
}

interface AnilistQueryAll {
  data: {
    Page: {
      media: MediaListEntry[];
    };
  };
}

interface AnilistQueryOne {
  data: {
    Media: Media;
  };
}

// ****** React Component ******
const Index: FC<{ anime: Media }> = ({ anime }) => {
  return <div>{anime.description}</div>;
};

export default Index;

// ****** SSR ******
export const getStaticProps: GetStaticProps<{ anime: Media }, { id: string }> = async ({ params }) => {
  const query = `query {
      Media(id:${params?.id}) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        description(asHtml: false)
      }
    }`;

  const graphqlQuery = await axios.post<AnilistQueryOne>('https://graphql.anilist.co', {
    query,
  });

  return { props: { anime: graphqlQuery.data.data.Media } };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const readQuery = await fs.readFile(path.join(process.cwd(), '/scrap/data.json'));
  const doc = JSON.parse(readQuery.toString());
  console.log(doc.length);

  const query = `query {
    Page(page:1, perPage:1){
      media(type:MANGA) {
        id
      }
    }
  }`;

  const graphqlQuery = await axios.post<AnilistQueryAll>('https://graphql.anilist.co', {
    query,
  });

  const animeList = graphqlQuery.data.data.Page.media.map((media) => {
    return { params: { id: String(media.id) } };
  });

  return { paths: animeList, fallback: false };
};
