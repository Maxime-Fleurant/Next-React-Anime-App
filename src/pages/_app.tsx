import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
// import { ssrClient } from '../app/apollo';
import Layout from '../features/layout';
import 'antd/dist/antd.css';
import { store } from '../app/store';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
