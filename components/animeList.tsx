// ******************************* IMPORT *******************************
import { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LOCAL_SEARCHANIME_QUERY } from '../api/graphql-query';

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

  const { data, loading, error } = useQuery(LOCAL_SEARCHANIME_QUERY);

  console.log(data, loading, error);

  // const animeArray = animeList.map((anime) => {
  //   return (
  //     <div key={anime.title.english}>
  //       {anime.id} <br />{' '}
  //     </div>
  //   );
  // });

  return <div>animelist</div>;
};

export default AnimeList;
