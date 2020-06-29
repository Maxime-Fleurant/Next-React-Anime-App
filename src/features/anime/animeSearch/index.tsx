// IMPORT
import { FunctionComponent } from 'react';

import FormContainer from './container/FormContainer';
import { ContainerAnimeList } from './container/ContainerAnimeList';

// TYPE DEFINITION
type IndexComponent = FunctionComponent;

// REACT COMPONENT
const AnimeSearch: IndexComponent = () => {
  return (
    <>
      <FormContainer />
      <ContainerAnimeList />
    </>
  );
};

export default AnimeSearch;
