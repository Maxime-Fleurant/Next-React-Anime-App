import gql from 'graphql-tag';

export const CHARACTER = gql`
  query($id: Int) {
    Character(id: $id) {
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
        nodes {
          title {
            romaji
            english
            native
            userPreferred
          }
        }
      }
    }
  }
`;
