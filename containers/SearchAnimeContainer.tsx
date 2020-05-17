// IMPORT
import { useEffect, useState } from 'react';
import SearchAnimeForm from '../components/SearchAnimeForm';
import AnimeList from '../components/AnimeList';
import { QueryMediaArgs } from '../api';

// TYPE DEFINITION
export type TsearchSelection = Pick<QueryMediaArgs, 'tag_in' | 'genre_in' | 'format' | 'status'> &
  Partial<{
    text: string;
  }>;

// REACT
const SearchAnimeContainer = () => {
  const [searchSelection, updateSearchSelection] = useState<TsearchSelection>({});

  return (
    <div>
      SearchAnimeContainer
      <SearchAnimeForm submitAction={updateSearchSelection} />
      <AnimeList />
    </div>
  );
};

export default SearchAnimeContainer;
