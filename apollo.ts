import fetch from 'isomorphic-unfetch';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

// TYPE DEFINITION

// APOLLO SETTING
export const ssrClient = () => {
  const client = new ApolloClient<NormalizedCacheObject>({
    cache: new InMemoryCache(),
    link: new HttpLink({ fetch, uri: 'https://graphql.anilist.co' }),
    // typeDefs: `extend type Query {
    //   searchAnimePage: {
    //     name : {
    //       searchObj:
    //       __typename: string
    //       text: string
    //     }
    //     __typename: string
    //     id: number
    //   }
    // }`,
    resolvers: {
      Mutation: {
        testMut: (root, variables, { cache, getCacheKey }) => {
          console.log(variables, 'variables');
          cache.writeFragment({
            id: 'searchObj:1',
            fragment: gql`
              fragment searchFragment on searchObj {
                __typename
                text
                tag_in
                genre_in
                format
                status
                text
              }
            `,
            data: { ...variables.searchObj, __typename: 'searchObj', id: 1 },
          });
        },
      },
    },
  });

  client.cache.writeData({
    data: {
      searchAnimePage: {
        __typename: 'searchAnimePage',
        id: '1',
        searchObj: {
          __typename: 'searchObj',
          id: '1',
          tag_in: [],
          genre_in: [],
          format: '',
          status: '',
          text: '',
          page: 1,
        },
      },
    },
  });

  return client;
};
