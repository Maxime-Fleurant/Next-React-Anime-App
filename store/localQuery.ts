import gql from 'graphql-tag';

export const searchObjFragment = gql`
  fragment searchObjFragment on searchObj {
    __typename
    id
    text
    tag_in
    genre_in
    format
    status
  }
`;

export const searchAnimePageFragment = gql`
  fragment searchAnimePageFragment on searchAnimePage {
    __typename
    id
    searchObj {
      ...searchObjFragment
    }
  }
  ${searchObjFragment}
`;
