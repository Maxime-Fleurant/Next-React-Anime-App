// ******************************* IMPORT *******************************
import React, { FunctionComponent, useEffect } from 'react';
import { Media } from '../api';

// ******************************* TYPE DEFINITION *******************************
export type FormComponent = FunctionComponent<{ animeList: Media[] }>;

// ******************************* REACT COMPONENT *******************************
const AnimeList: FormComponent = ({ animeList }) => {
  useEffect(() => {
    console.log('ANIMELIST update or mount');
  });

  let jsxAnimeList: JSX.Element[] = [];

  if (animeList) {
    jsxAnimeList = animeList.map((anime) => <div key={anime.id}>{anime.title?.romaji}</div>);
  }

  return <div>{jsxAnimeList}</div>;
};

export default React.memo(AnimeList);
