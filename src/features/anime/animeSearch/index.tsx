// IMPORT
import { FunctionComponent, useEffect } from 'react';

import ListContainer from './container/ListContainer';
import FormContainer from './container/FormContainer';

// TYPE DEFINITION
type IndexComponent = FunctionComponent;

// REACT COMPONENT
const AnimeSearch: IndexComponent = () => {
  console.log('animeSearch');
  return (
    <>
      <FormContainer />
      <ListContainer />
    </>
  );
};

export default AnimeSearch;
