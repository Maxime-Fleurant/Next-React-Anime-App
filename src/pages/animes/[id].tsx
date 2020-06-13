// ******************************* IMPORT *******************************
import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import gql from 'graphql-tag';
import { initializeApollo } from '../../app/apolloClient';

import { animeQuery, Anime } from '../../common/api/anime';

// ******************************* TYPE DEFINITION *******************************
type IndexComponent = FunctionComponent<{ anime: Anime }>;

// ******************************* REACT COMPONENT *******************************
const Index: IndexComponent = ({ anime }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(anime, 'fmldk');
  const { data } = useQuery<{ Page: { reviews: any[] } }>(gql`query {
    Page(page:1, perPage:8){
      reviews(mediaId:${id}, sort:	SCORE_DESC) {
        id
        summary
        body(asHtml:false)
        score
      }
    }
  }`);

  const loadingComponent = <div>loading</div>;
  let indexComponent = loadingComponent;
  let Reviews = loadingComponent;

  if (data) {
    Reviews = (
      <div>
        {data.Page.reviews.map((review: any) => {
          return <div key={review.id}>{review.summary}</div>;
        })}
      </div>
    );
  }

  if (!router.isFallback) {
    const characters = anime.characters.nodes.map((character) => {
      return (
        <Link key={character.id} href="/characters/[id]" as={`/characters/${character.id}`}>
          <a>{character.name.native}</a>
        </Link>
      );
    });

    indexComponent = (
      <div>
        <div>{anime.title.romaji}</div>
        <div>{anime.title.english}</div>
        <div>{anime.title.native}</div>
        <div>{anime.title.userPreferred}</div>
        <div>{anime.description}</div>
        <div>{anime.episodes}</div>
        <div>{anime.id}</div>
        <div>{Reviews}</div>
        <div>{characters}</div>
      </div>
    );
  }

  return indexComponent;
};

export default Index;

// ******************************* SSR *******************************
export const getStaticProps: GetStaticProps<{ anime: Anime } | {}> = async ({ params }) => {
  const apolloClient = initializeApollo();
  console.log(params, 'fdlfkdl');

  const anime = await apolloClient.query({
    query: gql`
      query test($id: Int) {
        Media(id: $id, type: ANIME) {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          description
          episodes
          trailer {
            id
            site
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          genres
          tags {
            id
            name
            description
            rank
          }
          characters(sort: FAVOURITES_DESC, perPage: 10) {
            nodes {
              id
              name {
                first
                last
                full
                native
              }
              image {
                large
                medium
              }
            }
          }
        }
      }
    `,
    variables: { id: params?.id },
  });

  return {
    props: {
      anime: anime.data.Media,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return { paths: [], fallback: true };
};
