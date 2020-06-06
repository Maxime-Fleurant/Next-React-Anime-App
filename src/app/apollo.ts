import fetch from 'isomorphic-unfetch';

import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  NormalizedCacheObject,
  defaultDataIdFromObject,
  IdGetterObj,
} from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// TYPE DEFINITION

// APOLLO SETTING
export const ssrClient = () => {
  const client = new ApolloClient<NormalizedCacheObject>({
    connectToDevTools: true,
    cache: new InMemoryCache({
      dataIdFromObject: (object: IdGetterObj) => {
        switch (object.__typename) {
          case 'PageInfo':
            console.log(object);
            return 'fdfdlfdlkf'; // use the `key` field as the identifier

          default:
            return defaultDataIdFromObject(object); // fall back to default handling
        }
      },
    }),
    link: new HttpLink({ fetch, uri: 'https://graphql.anilist.co' }),
  });

  return client;
};
