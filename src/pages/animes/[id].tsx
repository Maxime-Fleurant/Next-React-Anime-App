import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { initializeApollo } from '../../app/apolloClient';

import { ANIME } from '../../features/anime/animeDetail/graphql/anime';
import { AnimeDetail } from '../../features/anime/animeDetail';
import { Anime } from '../../common/graphqlType';

// TYPE
type IndexComponent = FunctionComponent<{ anime: Anime }>;

// REACT
const Index: IndexComponent = ({ anime }) => {
  return <AnimeDetail anime={anime} />;
};

export default Index;

// SSR
export const getStaticProps: GetStaticProps<{ anime: Anime } | {}> = async ({ params }) => {
  console.log('serverside');
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
  return { paths: [{ params: { id: '65' } }], fallback: true };
};
