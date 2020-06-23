import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { initializeApollo } from '../../app/apolloClient';

import { ANIME } from '../../features/anime/animeDetail/graphql/anime';
import { AnimeDetail } from '../../features/anime/animeDetail';

// TYPE
type IndexComponent = FunctionComponent<{ anime: any }>;

// REACT
const Index: IndexComponent = ({ anime }) => {
  return <AnimeDetail anime={anime} />;
};

export default Index;

// SSR
// export const getStaticProps: GetStaticProps<{ anime: any } | {}> = async ({ params }) => {
//   const apolloClient = initializeApollo();

//   const anime = await apolloClient.query({
//     query: ANIME,
//     variables: { id: params?.id },
//   });

//   return {
//     props: {
//       anime: anime.data.Media,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
//   return { paths: [], fallback: true };
// };
