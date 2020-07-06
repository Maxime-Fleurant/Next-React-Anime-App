import { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import { ApolloProvider } from '@apollo/react-hooks';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import Layout from '../features/layout';

import { useApollo } from '../app/apolloClient';
import { useStore } from '../app/redux';
import { Theme } from '../features/layout/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const reduxStore = useStore();

  return (
    <Provider store={reduxStore}>
      <ApolloProvider client={apolloClient}>
        <CacheProvider value={cache}>
          <Theme>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Theme>
        </CacheProvider>
      </ApolloProvider>
    </Provider>
  );
}
export default MyApp;
