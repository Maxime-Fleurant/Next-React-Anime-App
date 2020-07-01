import gql from 'graphql-tag';

export const SEARCH_ANIME = gql`
  query(
    $text: String
    $status: String
    $format: String
    $tagsIn: [String!]
    $genresIn: [String!]
    $skip: Float!
  ) {
    searchAnime(
      searchInput: {
        limit: 50
        skip: $skip
        text: $text
        status: $status
        format: $format
        tagsIn: $tagsIn
        genresIn: $genresIn
      }
    ) {
      id
      xLargeCoverImage
      romajiTitle
    }
  }
`;
