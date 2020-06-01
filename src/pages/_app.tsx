import { AppProps } from 'next/app';
import { FunctionComponent, useEffect } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ssrClient } from '../app/apollo';
import Layout from '../common/components/layout';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  console.log('app');
  return (
    <ApolloProvider client={ssrClient()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
export default MyApp;
