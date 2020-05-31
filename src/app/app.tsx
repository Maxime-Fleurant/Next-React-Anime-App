import { ApolloProvider } from '@apollo/react-hooks';

import { FunctionComponent, useEffect } from 'react';
import Layout from '../common/components/layout';
import { ssrClient } from './apollo';

const App: FunctionComponent = ({ children }) => {
  useEffect(() => {
    console.log('app update');
  });
  return (
    <ApolloProvider client={ssrClient()}>
      <Layout>{children}</Layout>
    </ApolloProvider>
  );
};
export default App;
