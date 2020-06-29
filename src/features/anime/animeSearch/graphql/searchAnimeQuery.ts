import gql from 'graphql-tag';

export const SEARCH_ANIME = gql`
  query {
    searchAnime(searchInput: { limit: 200 }) {
      id
      xLargeCoverImage
      romajiTitle
    }
  }
`;
