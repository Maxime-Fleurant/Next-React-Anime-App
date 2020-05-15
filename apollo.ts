import fetch from 'isomorphic-unfetch';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

export const ssrClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ fetch, uri: 'https://graphql.anilist.co' }),
  });

  const vartest = new Date();
  const ttvar = vartest.getTime();

  client.writeData({
    data: {
      state: {
        hello: 'fdlk',
        searchAnime: {
          query: {
            __typename: 'query',
          },
          animeList: [],
          __typename: 'searchAnime',
        },
        __typename: 'state',
      },
    },
  });

  console.log(
    client.readQuery({
      query: gql`
        {
          state @client {
            
          }
        }
      `,
    })
  );

  return client;
};
