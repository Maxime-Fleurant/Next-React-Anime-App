// IMPORT
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import SearchAnimeForm from '../components/SearchAnimeForm';
import AnimeList from '../components/AnimeList';
import { QueryMediaArgs, Media, PageInfo } from '../api';
import { SEARCH_ANIME } from '../api/graphql-query';

// TYPE DEFINITION
type IsearchSelection = Pick<QueryMediaArgs, 'tag_in' | 'genre_in' | 'format' | 'status'> &
  Partial<{
    text?: string;
    page?: number;
  }>;

interface IresultQuery {
  Page: {
    pageInfo: PageInfo;
    media: Media[];
  };
}

enum Direction {
  PREV = 'PREV',
  NEXT = 'NEXT',
}

// REACT
const SearchAnimeContainer = () => {
  useEffect(() => {
    console.log('CONTAINER update or mount');
  });

  const [searchSelection, updateSearchSelection] = useState<IsearchSelection>({});
  const [animeList, updateAnimeList] = useState<Media[]>([]);
  const [searchAnimeQuery, returnQuery] = useLazyQuery<IresultQuery, IsearchSelection>(
    SEARCH_ANIME
  );

  const paginationAction = (direction: Direction) => {
    if (returnQuery.data && returnQuery.data.Page.pageInfo.currentPage) {
      if (direction === Direction.NEXT && returnQuery.data.Page.pageInfo.hasNextPage) {
        searchAnimeQuery({
          variables: { ...searchSelection, page: returnQuery.data.Page.pageInfo.currentPage + 1 },
        });
      }

      if (direction === Direction.PREV && returnQuery.data.Page.pageInfo.currentPage > 1) {
        searchAnimeQuery({
          variables: { ...searchSelection, page: returnQuery.data.Page.pageInfo.currentPage - 1 },
        });
      }
    }
  };

  let nextButton: JSX.Element | undefined;
  let prevButton: JSX.Element | undefined;

  if (
    returnQuery.data &&
    returnQuery.data.Page.pageInfo.hasNextPage &&
    returnQuery.data.Page.pageInfo.currentPage
  ) {
    nextButton = (
      <button type="button" onClick={() => paginationAction(Direction.NEXT)}>
        NEXT
      </button>
    );
  }

  if (
    returnQuery.data &&
    returnQuery.data.Page.pageInfo.currentPage &&
    returnQuery.data.Page.pageInfo.currentPage > 1
  ) {
    prevButton = (
      <button type="button" onClick={() => paginationAction(Direction.PREV)}>
        PREV
      </button>
    );
  }

  useEffect(() => {
    console.log('searchSelection UseEffect', searchSelection);
    searchAnimeQuery({ variables: { ...searchSelection } });
  }, [searchSelection]);

  useEffect(() => {
    console.log('animeList UseEffect', animeList);
  }, [animeList]);

  useEffect(() => {
    console.log('returnQuery UseEffect', returnQuery);
    if (!returnQuery.loading && returnQuery.data) {
      updateAnimeList(returnQuery.data.Page.media);
    }
  }, [returnQuery]);

  return (
    <div>
      SearchAnimeContainer
      <SearchAnimeForm submitAction={updateSearchSelection} />
      <AnimeList animeList={animeList} />
      {prevButton}
      {nextButton}
    </div>
  );
};

export default SearchAnimeContainer;
