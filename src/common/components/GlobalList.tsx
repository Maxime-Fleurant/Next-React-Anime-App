// IMPORT

import React, { FunctionComponent, useEffect } from 'react';

// TYPE DEFINITION
export type FormComponent = FunctionComponent;

// REACT
const GlobalList: FormComponent = () => {
  useEffect(() => {
    console.log('ANIMELIST update or mount');
  });

  const animeList = [];

  return <div>animeList</div>;
};

export default GlobalList;
