import gql from 'graphql-tag';

export const ANIME = gql`
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
      reviews {
        nodes {
          id
          summary
          body
          score
        }
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
`;
