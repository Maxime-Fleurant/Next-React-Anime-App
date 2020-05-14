import fetch from 'isomorphic-unfetch';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export const ssrClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ fetch, uri: 'https://graphql.anilist.co' }),
  });

  const vartest = new Date();
  const ttvar = vartest.getTime();

  client.writeData({ data: { test: ttvar } });

  return client;
};
