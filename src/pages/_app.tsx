import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from '../features/layout';
import 'antd/dist/antd.css';

import { useApollo } from '../app/apolloClient';
import { useStore } from '../app/redux';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const reduxStore = useStore();

  return (
    <Provider store={reduxStore}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}
export default MyApp;
