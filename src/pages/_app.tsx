import { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import { ApolloProvider } from '@apollo/react-hooks';
import { CacheProvider, Global, css } from '@emotion/core';
import { cache } from 'emotion';
import Layout from '../features/layout';

import { useApollo } from '../app/apolloClient';
import { useStore } from '../app/redux';
import { normalize } from './normalize';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const reduxStore = useStore();

  return (
    <Provider store={reduxStore}>
      <ApolloProvider client={apolloClient}>
        <CacheProvider value={cache}>
          <Global
            styles={css`
              ${normalize}
            `}
          />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CacheProvider>
      </ApolloProvider>
    </Provider>
  );
}
export default MyApp;
