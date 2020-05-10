import axios from 'axios';

// ****** TYPES DECLARATION ******
export interface AnimeLight {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  genres: string[];
  tags: Array<{
    id: number;
    name: string;
    description: string;
    rank: number;
  }>;
}

interface AnilistQueryMulti {
  data: {
    Page: {
      media: AnimeLight[];
    };
  };
}

type AnimeQuery = () => Promise<AnimeLight[]>;

// ****** IMPLEMENTATION ******
export const animeListQuery: AnimeQuery = async () => {
  const query = `query {
    Page(page:1, perPage:50){
      media(type:ANIME, sort:POPULARITY_DESC, format:TV, isAdult:false, popularity_greater:7000) {
        id
        title {
          romaji
          english
          native
          userPreferred
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
      }
    }
  }`;

  const graphqlQuery = await axios.post<AnilistQueryMulti>('https://graphql.anilist.co', {
    query,
  });
  console.log(graphqlQuery.data.data);
  return graphqlQuery.data.data.Page.media;
};
