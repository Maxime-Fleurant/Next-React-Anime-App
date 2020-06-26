import gql from 'graphql-tag';

export const ANIME = gql`
  query test($id: ID!) {
    Anime(id: $id) {
      id
      desciption
      romajiTitle
      englishTitle
      nativeTitle
      trailer
      bannerImage
      largeCoverImage
      xLargeCoverImage
      reviews {
        body
        summary
      }
      characters {
        id
        name
        nativeName
        description
        largeImg
      }
    }
  }
`;
