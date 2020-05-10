import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
import { animeListQuery, AnimeLight } from '../../api/animelist';

// ******************************* TYPE DEFINITION *******************************
type IndexComponent = FunctionComponent<{ animes: AnimeLight[] }>;

// ******************************* REACT COMPONENT *******************************
const Index: IndexComponent = ({ animes }) => {
  const animesArray = animes.map((anime) => {
    return <div>{anime.title.english}</div>;
  });

  return <div>{animesArray}</div>;
};

export default Index;

// ******************************* SSR *******************************
export const getStaticProps: GetStaticProps<{ animes: AnimeLight[] }> = async () => {
  const animeList = await animeListQuery();

  return { props: { animes: animeList } };
};
