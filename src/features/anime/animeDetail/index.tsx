import { FunctionComponent } from 'react';

import { ReviewList } from './component/reviewList';
import GenericList from '../../../common/components/GenericList';

// TYPE
type TAnimeDetail = FunctionComponent<{ anime: any }>;

// REACT
export const AnimeDetail: TAnimeDetail = ({ anime }) => {
  let indexComponent = <div>loading</div>;

  if (anime) {
    const characters = anime.characters.nodes.map((character: any) => {
      return {
        label: character.name.full,
        img: character.image.large,
        id: character.id,
      };
    });

    indexComponent = (
      <div>
        <div>{anime.title.romaji}</div>
        <div>{anime.title.english}</div>
        <div>{anime.title.native}</div>
        <div>{anime.title.userPreferred}</div>
        <div>{anime.description}</div>
        <div>{anime.episodes}</div>
        <div>{anime.id}</div>
        <GenericList entityList={characters} loading={false} url="/characters/" infinite />
        <ReviewList reviewList={anime.reviews.nodes} />
      </div>
    );
  }

  return indexComponent;
};
