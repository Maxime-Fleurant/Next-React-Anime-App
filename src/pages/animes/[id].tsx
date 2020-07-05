import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { initializeApollo } from '../../app/apolloClient';

import { AnimeDetail } from '../../features/anime/animeDetail';
import { Anime } from '../../common/graphqlType';
import { ANIME } from '../../features/anime/animeDetail/graphql/anime';
import { ALLANIMES } from '../../features/anime/animeDetail/graphql/allAnime';

// TYPE
type IndexComponent = FunctionComponent<{ anime: Anime }>;

// REACT
const Index: IndexComponent = ({ anime }) => {
  return <AnimeDetail anime={anime} />;
};

export default Index;

// SSR
export const getStaticProps: GetStaticProps<{ anime: Anime } | {}> = async ({ params }) => {
  const apolloClient = initializeApollo();

  const anime = await apolloClient.query<{ Anime: Anime }>({
    query: ANIME,
    variables: { id: params?.id },
  });

  return {
    props: {
      anime: anime.data.Anime,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const apolloClient = initializeApollo();

  const animes = await apolloClient.query<{ Animes: Anime[] }>({
    query: ALLANIMES,
  });

  const paths = animes.data.Animes.map((anime) => {
    return { params: { id: anime.id } };
  });

  return { paths, fallback: true };
};
