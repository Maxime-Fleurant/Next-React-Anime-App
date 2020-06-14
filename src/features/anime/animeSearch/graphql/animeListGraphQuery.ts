import gql from 'graphql-tag';

export const ANIME_LIST = gql`
  query searchAnime(
    $genre_in: [String]
    $tag_in: [String]
    $text: String
    $format: MediaFormat = TV
    $status: MediaStatus
    $page: Int = 1
  ) {
    Page(page: $page, perPage: 50) {
      pageInfo {
        hasNextPage
        currentPage
      }
      media(
        type: ANIME
        sort: POPULARITY_DESC
        status: $status
        isAdult: false
        popularity_greater: 7000
        genre_in: $genre_in
        tag_in: $tag_in
        search: $text
        format: $format
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
