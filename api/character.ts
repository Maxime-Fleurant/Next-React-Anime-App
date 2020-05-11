import axios from 'axios';

// ******************************* TYPE DEFINITION *******************************
export type CharacterAxiosQuery = {
  data: {
    Character: Character;
  };
};

export type Character = {
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
  description: string;
  media: {
    nodes: Array<{
      title: {
        romaji: string;
        english: string;
        native: string;
        userPreferred: string;
      };
    }>;
  };
};

type CharacterQuery = (id: string) => Promise<Character>;

// ******************************* IMPLEMENTATION *******************************
export const characterQuery: CharacterQuery = async (id) => {
  const query = `query {
    Character(id:${id}) {
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
      description
      media {
        nodes{
          title {
            romaji
            english
            native
            userPreferred
          }
        }
      }
    }
  }`;

  const graphqlQuery = await axios.post<CharacterAxiosQuery>('https://graphql.anilist.co', {
    query,
  });

  return graphqlQuery.data.data.Character;
};
