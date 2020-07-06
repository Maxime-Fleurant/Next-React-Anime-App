import { useMemo } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

let apolloClient: any;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    connectToDevTools: false,
    cache: new InMemoryCache({}),
    link: new HttpLink({
      fetch,
      uri: 'http://ec2-35-181-63-183.eu-west-3.compute.amazonaws.com/graphql',
    }),
  });
}

export function initializeApollo(initialState = null): ApolloClient<{}> {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any): ApolloClient<{}> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
