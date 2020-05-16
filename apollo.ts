import fetch from 'isomorphic-unfetch';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

// TYPE DEFINITION
interface LocalCache {
  State: object;
}

// APOLLO SETTING
export const ssrClient = () => {
  const client = new ApolloClient<NormalizedCacheObject>({
    cache: new InMemoryCache(),
    link: new HttpLink({ fetch, uri: 'https://graphql.anilist.co' }),
    resolvers: {
      Mutation: {
        updateSearchAnimeQuery: (obj, args, context) => {
          console.log('update');
          const query = gql`
            {
              searchAnimeQuery {
                text
                __typename
              }
            }
          `;
          context.cache.writeQuery({
            query,
            data: { searchAnimeQuery: { text: 'ok', __typename: 'searchAnimeQuery', id: 1 } },
          });
        },
      },
    },
  });

  client.writeData({
    data: {
      searchAnimeQuery: {
        __typename: 'searchAnimeQuery',
        id: 1,
        genres: [],
        tags: [],
        text: '',
        format: '',
        status: '',
      },
    },
  });

  return client;
};
