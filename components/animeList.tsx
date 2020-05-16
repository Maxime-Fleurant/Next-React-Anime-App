// ******************************* IMPORT *******************************
import { FunctionComponent, useState, useEffect } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import { LOCAL_SEARCHANIME_QUERY, SEARCH_ANIME, FIRST_QUERY } from '../api/graphql-query';
import gql from 'graphql-tag';

// ******************************* TYPE DEFINITION *******************************
export type FormComponent = FunctionComponent;

// ******************************* REACT COMPONENT *******************************
const AnimeList: FormComponent = () => {
  useEffect(() => {
    console.log('animeList mount');
  }, []);
  useEffect(() => {
    console.log('animeList update');
  });

  const { data, loading } = useQuery(
    gql`
      {
        searchAnimeQuery @client {
          genres
          tags
          tags
          text
          format
          status
        }
      }
    `
  );

  console.log(data, 'data');

  return <div>ff</div>;
};

export default AnimeList;
