// ******************************* IMPORT *******************************
import { FunctionComponent, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import useSWR from 'swr';

import { animeQuery, Anime } from '../../common/api/anime';
import dataFs from '../../common/scrap/fsData';
import { reviewQuery, Review } from '../../common/api/reviews';

// ******************************* TYPE DEFINITION *******************************
type IndexComponent = FunctionComponent<{ anime: Anime }>;

// ******************************* REACT COMPONENT *******************************
const Index: IndexComponent = ({ anime }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR<Review[]>(['review', id], reviewQuery);

  const loadingComponent = <div>loading</div>;
  let indexComponent = loadingComponent;
  let Reviews = loadingComponent;

  if (data) {
    Reviews = (
      <div>
        {data.map((review) => {
          return <div key={review.id}>{review.summary}</div>;
        })}
      </div>
    );
  }

  if (!router.isFallback) {
    const characters = anime.characters.nodes.map((character) => {
      return (
        <Link key={character.id} href="/characters/[id]" as={`/characters/${character.id}`}>
          <a>{character.name.native}</a>
        </Link>
      );
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
        <div>{Reviews}</div>
        <div>{characters}</div>
      </div>
    );
  }

  return indexComponent;
};

export default Index;

// ******************************* SSR *******************************
export const getStaticProps: GetStaticProps<{ anime: Anime } | {}, { id: string }> = async ({
  params,
}) => {
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
