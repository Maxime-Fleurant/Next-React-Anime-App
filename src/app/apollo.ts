import fetch from 'isomorphic-unfetch';

import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  NormalizedCacheObject,
  defaultDataIdFromObject,
} from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// TYPE DEFINITION

// APOLLO SETTING
export const ssrClient = () => {
  const client = new ApolloClient<NormalizedCacheObject>({
    connectToDevTools: true,
    cache: new InMemoryCache({}),
    link: new HttpLink({ fetch, uri: 'https://graphql.anilist.co' }),
  });

  return client;
};
