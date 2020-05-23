// ******************************* IMPORT *******************************
import React, { FunctionComponent, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// ******************************* TYPE DEFINITION *******************************
export type FormComponent = FunctionComponent;

// ******************************* REACT COMPONENT *******************************
const GlobalList: FormComponent = () => {
  const query = gql`
    query {
      searchAnimePage @client {
        searchObj {
          text
        }
      }
    }
  `;

  const { data } = useQuery(query, { fetchPolicy: 'network-only' });

  console.log(data, 'client');

  useEffect(() => {
    console.log('ANIMELIST update or mount');
  });

  return <div>animeList</div>;
};

export default GlobalList;
