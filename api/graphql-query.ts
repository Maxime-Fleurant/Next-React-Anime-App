import gql from 'graphql-tag';

export const SEARCH_ANIME = gql`
  query searchAnime($genre_in: [String]) {
    Page(page: 1, perPage: 50) {
      media(
        type: ANIME
        sort: POPULARITY_DESC
        format: TV
        isAdult: false
        popularity_greater: 7000
        genre_in: $genre_in
      ) {
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
  }
`;
