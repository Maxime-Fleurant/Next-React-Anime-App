// IMPORT
import { FunctionComponent, useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import lodash from 'lodash';
import { useSelector } from 'react-redux';

import { ANIME_LIST } from './animeListGraphQuery';
import GenericList, { IEntity } from '../../../common/components/GenericList';
import { Media } from '../../../../api';
import { TStore } from '../../../app/store';

// TYPE DEFINITION
type TListContainer = FunctionComponent;

// REACT COMPONENT
const ListContainer: TListContainer = () => {
  const stateFormSelection = useSelector(
    (state: TStore) => state.animeListPageReducers.formSelection
  );

  const [fetchAnime, { data: fetchAnimePageResult, loading, error }] = useLazyQuery<{
    Page: { media: Media[]; pageInfo: { hasNextPage: boolean; currentPage: number } };
  }>(ANIME_LIST, { fetchPolicy: 'no-cache' });

  const [formatedAnimeList, updateFormatedAnimeList] = useState<IEntity[]>([]);

  useEffect(() => {
    fetchAnime({
      variables: stateFormSelection,
    });
  }, [stateFormSelection]);

  useEffect(() => {
    if (fetchAnimePageResult) {
      const fetchAnimeList = lodash.get(fetchAnimePageResult, ['Page', 'media'], [] as Media[]);

      let newFormatedList = fetchAnimeList.map((anime) => {
        return {
          label: anime.title ? anime.title.romaji : null,
          img: anime.coverImage ? anime.coverImage?.large : null,
          id: anime.id,
        };
      });

      if (fetchAnimePageResult.Page.pageInfo.currentPage > 1) {
        newFormatedList = [...formatedAnimeList, ...newFormatedList];
      }

      updateFormatedAnimeList(newFormatedList);
    }
  }, [fetchAnimePageResult]);

  const pageHandler = () => {
    if (fetchAnimePageResult?.Page.pageInfo.hasNextPage) {
      fetchAnime({
        variables: {
          ...stateFormSelection,
          page: fetchAnimePageResult?.Page.pageInfo.currentPage + 1,
        },
      });
    }
  };

  return (
    <div>
      <GenericList
        entityList={formatedAnimeList}
        pageHandler={pageHandler}
        loading={loading}
        infinite
      />
    </div>
  );
};

export default ListContainer;
