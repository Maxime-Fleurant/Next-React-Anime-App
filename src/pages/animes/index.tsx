// IMPORT
import { FunctionComponent } from 'react';
import AnimeSearch from '../../features/anime/animeSearch';

// TYPE DEFINITION
type IndexComponent = FunctionComponent;

// REACT COMPONENT
const GlobalAnimePage: IndexComponent = () => {
  return <AnimeSearch />;
};

export default GlobalAnimePage;
