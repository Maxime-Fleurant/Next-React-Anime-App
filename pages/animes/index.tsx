// React
import { FunctionComponent, useState, useEffect } from 'react';
// Next
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
// Apollo
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// Component
import Form from '../../components/form';
import AnimeList from '../../components/animeList';
// Misc
import { FIRST_QUERY, SEARCH_ANIME } from '../../api/graphql-query';
import { ssrClient } from '../../apollo';

// TYPE DEFINITION
type IndexComponent = FunctionComponent<{ animeList: any[] }>;

// REACT COMPONENT
const Index: IndexComponent = ({ animeList }) => {
  useEffect(() => {
    console.log('index mount');
  }, []);
  useEffect(() => {
    console.log('index update');
  });

  return (
    <div>
      <Form />
      <AnimeList />
    </div>
  );
};

export default Index;
// SSR
export const getStaticProps: GetStaticProps<{}> = async ({ params }) => {
  const client = ssrClient();

  const { media } = (await client.query({ query: FIRST_QUERY })).data.Page;

  return { props: { animeList: media } };
};
