// IMPORT
import lodash from 'lodash';
import React, { FunctionComponent, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { searchObjFragment } from '../store/localQuery';
import { SEARCH_ANIME } from '../api/graphql-query';

// TYPE DEFINITION
export type FormComponent = FunctionComponent;

// REACT
const GlobalList: FormComponent = () => {
  const searchObjStateQuery = gql`
    query {
      searchAnimePage {
        searchObj {
          ...searchObjFragment
        }
      }
    }
    ${searchObjFragment}
  `;

  const { data: searchObjQueryResult } = useQuery(searchObjStateQuery);
  const [searchAnimeQuery, { data: searchAnimeQueryResult }] = useLazyQuery(SEARCH_ANIME);

  useEffect(() => {
    console.log('ANIMELIST update or mount');
  });

  useEffect(() => {
    console.log(searchObjQueryResult.searchAnimePage.searchObj, 'fdlfkdl');
    searchAnimeQuery({
      variables: {
        ...lodash.pickBy(searchObjQueryResult.searchAnimePage.searchObj, lodash.identity),
      },
    });
  }, [searchObjQueryResult]);

  const animeList = [];

  return <div>animeList</div>;
};

export default GlobalList;
