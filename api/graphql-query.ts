import gql from 'graphql-tag';

export const FIRST_QUERY = gql`
  {
    Page(page: 1, perPage: 50) {
      media(
        type: ANIME
        sort: POPULARITY_DESC
        format: TV
        isAdult: false
        popularity_greater: 7000
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

export const SEARCH_ANIME = gql`
  query searchAnime($genre: String) {
    Page(page: 1, perPage: 50) {
      media(
        type: ANIME
        sort: POPULARITY_DESC
        format: TV
        isAdult: false
        popularity_greater: 7000
        genre_in: [$genre]
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

export const LOCAL_SEARCHANIME_QUERY = gql`
  {
    searchAnime {
      query
    }
  }
`;
