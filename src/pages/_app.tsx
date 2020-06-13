import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from '../features/layout';
import 'antd/dist/antd.css';
import { store } from '../app/store';
import { useApollo } from '../app/apolloClient';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}
export default MyApp;
