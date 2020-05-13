import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Layout from '../components/layout';
import { client } from '../apollo';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('mount');
  }, []);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
export default MyApp;
