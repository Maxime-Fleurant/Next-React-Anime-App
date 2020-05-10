import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/dist/client/router';
import { animeQuery, Anime } from '../../api/anime';
import dataFs from '../../scrap/fsData';

// ******************************* TYPE DEFINITION *******************************
type IndexComponent = FunctionComponent<{ anime: Anime }>;

// ******************************* REACT COMPONENT *******************************
const Index: IndexComponent = ({ anime }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div>{anime.title.romaji}</div>
      <div>{anime.title.english}</div>
      <div>{anime.title.native}</div>
      <div>{anime.title.userPreferred}</div>
      <div>{anime.description}</div>
      <div>{anime.episodes}</div>
      <div>{anime.id}</div>
    </div>
  );
};

export default Index;

// ******************************* SSR *******************************
export const getStaticProps: GetStaticProps<{ anime: Anime } | {}, { id: string }> = async ({ params }) => {
  if (params) {
    let animeProps: Anime;
    const animesBulk = await dataFs.getData();

    const fsMedia = animesBulk.find((anime) => anime.id === Number(params.id));

    if (fsMedia) {
      animeProps = fsMedia;
    } else {
      animeProps = await animeQuery(params?.id);
    }

    return { props: { anime: animeProps } };
  }

  return { props: {} };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const animesBulk = await dataFs.getData();

  const paramsList = animesBulk.map((anime) => {
    return { params: { id: String(anime.id) } };
  });

  return { paths: paramsList, fallback: true };
};
