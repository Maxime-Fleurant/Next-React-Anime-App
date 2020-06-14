import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { characterQuery, Character } from '../../common/api/character';
import { initializeApollo } from '../../app/apolloClient';
import { CHARACTER } from '../../features/character/characterDetail/graphql/character';

// TYPE
type IndexComponent = FunctionComponent<{ character: Character }>;

// REACT
const Index: IndexComponent = ({ character }) => {
  if (character) {
    return <div>{character.id}</div>;
  }

  return <div>loading</div>;
};

export default Index;

// SSR
export const getStaticProps: GetStaticProps<
  { character: Character } | {},
  { id: string }
> = async ({ params }) => {
  if (params) {
    const apolloClient = initializeApollo();
    const character = await apolloClient.query({
      query: CHARACTER,
      variables: { id: params.id },
    });

    return { props: { character: character.data.Character } };
  }

  return { props: {} };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return { paths: [], fallback: true };
};
