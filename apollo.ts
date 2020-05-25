import fetch from 'isomorphic-unfetch';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { searchObjFragment } from './store/localQuery';
import { initialState, searchObj } from './store/initial-state';

// TYPE DEFINITION

// APOLLO SETTING
export const ssrClient = () => {
  const client = new ApolloClient<NormalizedCacheObject>({
    cache: new InMemoryCache(),
    link: new HttpLink({ fetch, uri: 'https://graphql.anilist.co' }),
  });

  client.cache.writeData({
    data: initialState,
  });

  return client;
};
