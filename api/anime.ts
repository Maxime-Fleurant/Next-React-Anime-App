import axios from 'axios';

// ****** TYPES DECLARATION ******
export interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  description: string;
  episodes: number;
  trailer: {
    id: string;
    site: string;
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
  characters: {
    nodes: Array<{
      id: number;
      name: {
        first: string;
        last: string;
        full: string;
        native: string;
      };
      image: {
        large: string;
        medium: string;
      };
    }>;
  };
}

interface AnilistQueryOne {
  data: {
    Media: Anime;
  };
}

type AnimeQuery = (id: string) => Promise<Anime>;

// ****** IMPLEMENTATION ******
export const animeQuery: AnimeQuery = async (id) => {
  const query = `query {
    Media(id: ${id}, type:ANIME) {
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
      characters(sort:FAVOURITES_DESC, perPage:10) {
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
  }`;

  const graphqlQuery = await axios.post<AnilistQueryOne>('https://graphql.anilist.co', {
    query,
  });

  return graphqlQuery.data.data.Media;
};
