import { ApolloClient } from 'apollo-client';
import { InMemoryCache, HttpLink } from 'apollo-boost';

type ApolloCache = {
  testData: string;
  testNumb: number;
};

const link = new HttpLink({ uri: 'https://graphql.anilist.co' });

export const client = new ApolloClient({ link, cache: new InMemoryCache() });
