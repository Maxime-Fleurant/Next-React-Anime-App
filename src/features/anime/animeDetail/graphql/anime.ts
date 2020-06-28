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
      status
      format
      tags {
        name
        id
      }
      genres {
        name
      }
      externalLinks {
        site
        url
      }
      studio {
        name
      }
      reviews {
        id
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
