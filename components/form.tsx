// ******************************* IMPORT *******************************
import React, { FunctionComponent, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { MUTATE_SEARCH_ANIME_QUERY, TEST_MUTATE } from '../api/graphql-query';

// ******************************* TYPE DEFINITION *******************************
export type FormComponent = FunctionComponent;

// ******************************* REACT COMPONENT *******************************
const Form: FormComponent = () => {
  useEffect(() => {
    console.log('form mount');
  }, []);
  useEffect(() => {
    console.log('form update');
  });

  const [updateSearchAnimeQuery, { error, loading }] = useMutation(MUTATE_SEARCH_ANIME_QUERY);
  console.log(error, loading);
  return (
    <div>
      form{' '}
      <button
        type="button"
        onClick={() => {
          updateSearchAnimeQuery();
        }}
      >
        click
      </button>{' '}
    </div>
  );
};

export default Form;
