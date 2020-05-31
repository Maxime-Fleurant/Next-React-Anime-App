// IMPORT
import { FunctionComponent, useEffect } from 'react';
import SearchAnimeContainer from '../../containers/SearchAnimeContainer';

// TYPE DEFINITION
type IndexComponent = FunctionComponent<{ animeList: any[] }>;

// REACT COMPONENT
const AnimePage: IndexComponent = () => {
  useEffect(() => {
    console.log('PAGE update or mount');
  });
  return (
    <div>
      <SearchAnimeContainer />
    </div>
  );
};

export default AnimePage;
