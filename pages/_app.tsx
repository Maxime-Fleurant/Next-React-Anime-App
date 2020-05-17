import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import 'antd/dist/antd.css';

import Layout from '../components/layout';
import { ssrClient } from '../apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={ssrClient()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
export default MyApp;
