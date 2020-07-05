import gql from 'graphql-tag';

export const ALLANIMES = gql`
  query {
    Animes {
      id
    }
  }
`;
