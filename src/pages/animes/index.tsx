// IMPORT
import { FunctionComponent } from 'react';
import AnimeSearch from '../../features/anime/animeSearch';

// TYPE DEFINITION
type IndexComponent = FunctionComponent;

// REACT COMPONENT
const GlobalAnimePage: IndexComponent = () => {
  return (
    <div>
      <AnimeSearch />
    </div>
  );
};

export default GlobalAnimePage;
