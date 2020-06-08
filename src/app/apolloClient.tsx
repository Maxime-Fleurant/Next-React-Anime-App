// lib/withApollo.js
import withApollo from 'next-with-apollo';
import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  NormalizedCacheObject,
  defaultDataIdFromObject,
} from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

export default testApollo(
  ({ initialState }) => {
    return new ApolloClient<NormalizedCacheObject>({
      connectToDevTools: true,
      cache: new InMemoryCache({}),
      link: new HttpLink({ fetch, uri: 'https://graphql.anilist.co' }),
    });
  },
  {
    render: ({ Page, props }) => {
      const { apollo } = props;
      return (
        <ApolloProvider client={apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
