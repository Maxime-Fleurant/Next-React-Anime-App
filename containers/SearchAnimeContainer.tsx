// IMPORT
import { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import SearchAnimeForm from '../components/SearchAnimeForm';
import AnimeList from '../components/AnimeList';
import { QueryMediaArgs } from '../api';
import { SEARCH_ANIME } from '../api/graphql-query';

// TYPE DEFINITION
export type TsearchSelection = Pick<QueryMediaArgs, 'tag_in' | 'genre_in' | 'format' | 'status'> &
  Partial<{
    text: string;
  }>;

// REACT
const SearchAnimeContainer = () => {
  const [searchSelection, updateSearchSelection] = useState<TsearchSelection>({});
  const [searchAnimeQuery, returnQuery] = useLazyQuery(SEARCH_ANIME, {
    variables: searchSelection,
  });

  useEffect(() => {
    searchAnimeQuery();
  }, [searchSelection]);

  console.log(returnQuery.data);

  return (
    <div>
      SearchAnimeContainer
      <SearchAnimeForm submitAction={updateSearchSelection} />
      <AnimeList />
    </div>
  );
};

export default SearchAnimeContainer;
