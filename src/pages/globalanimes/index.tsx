// IMPORT
import { FunctionComponent, useEffect } from 'react';

import ListContainer from '../../features/anime/animeList/ListContainer';
import FormContainer from '../../features/anime/animeList/FormContainer';

// TYPE DEFINITION
type IndexComponent = FunctionComponent<{ animeList: any[] }>;

// REACT COMPONENT
const GlobalAnimePage: IndexComponent = () => {
  useEffect(() => {
    console.log('PAGE update or mount');
  });

  return (
    <div>
      <FormContainer />
      <ListContainer />
    </div>
  );
};

export default GlobalAnimePage;
