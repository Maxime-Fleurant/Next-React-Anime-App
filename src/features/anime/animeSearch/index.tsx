// IMPORT
import { FunctionComponent, useEffect } from 'react';

import ListContainer from './ListContainer';
import FormContainer from './FormContainer';

// TYPE DEFINITION
type IndexComponent = FunctionComponent;

// REACT COMPONENT
const AnimeSearch: IndexComponent = () => {
  console.log('animeSearch');
  return (
    <div>
      <FormContainer />
      <ListContainer />
    </div>
  );
};

export default AnimeSearch;
