// ******************************* IMPORT *******************************
import { FunctionComponent, useState } from 'react';

// ******************************* TYPE DEFINITION *******************************
export type FormComponent = FunctionComponent<{ animeList: any[] }>;

// ******************************* REACT COMPONENT *******************************
const AnimeList: FormComponent = ({ animeList }) => {
  const animeArray = animeList.map((anime) => {
    return (
      <div key={anime.id}>
        {anime.id} <br />{' '}
      </div>
    );
  });

  return <div>{animeArray}</div>;
};

export default AnimeList;
