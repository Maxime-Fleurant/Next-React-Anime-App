// ******************************* IMPORT *******************************
import React, { FunctionComponent, useState, useEffect, Dispatch } from 'react';
import { useApolloClient } from '@apollo/react-hooks';

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

  const client = useApolloClient();

  const updateSearchAnimeQueyr = () => {
    client.writeData({ data: { searchAnime: { query: 'mecha' } } });
  };

  return (
    <div>
      form{' '}
      <button
        type="button"
        onClick={() => {
          updateSearchAnimeQueyr();
        }}
      >
        click
      </button>{' '}
    </div>
  );
};

export default Form;
