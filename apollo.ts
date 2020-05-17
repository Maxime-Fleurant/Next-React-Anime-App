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
  });

  return client;
};
