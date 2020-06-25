// IMPORT
import { FunctionComponent, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import _ from 'lodash';
import { useSelector } from 'react-redux';

import { ANIME_LIST } from '../graphql/animeListGraphQuery';
import GenericList, { IEntity } from '../../../../common/components/GenericList';
import { Media } from '../../../../../api';
import { TStore } from '../../../../app/store';

// TYPE DEFINITION
type TListContainer = FunctionComponent;

// REACT COMPONENT
const ListContainer: TListContainer = () => {
  const stateFormSelection = useSelector((state: TStore) => {
    return state.animeListPageReducers.formSelection;
  });

  const [fetchAnime, { data: fetchAnimePageResult, loading, error }] = useLazyQuery<{
    Page: { media: Media[]; pageInfo: { hasNextPage: boolean; currentPage: number } };
  }>(ANIME_LIST, { fetchPolicy: 'no-cache', ssr: false });

  const [formatedAnimeList, updateFormatedAnimeList] = useState<IEntity[]>([]);

  const pageHandler = (): void => {
    if (fetchAnimePageResult && fetchAnimePageResult.Page.pageInfo.hasNextPage) {
      fetchAnime({
        variables: {
          ...stateFormSelection,
          page: fetchAnimePageResult.Page.pageInfo.currentPage + 1,
        },
      });
    }
  };

  useEffect(() => {
    fetchAnime({
      variables: stateFormSelection,
    });
  }, [stateFormSelection]);

  useEffect(() => {
    if (fetchAnimePageResult) {
      const fetchAnimeList = _.get(fetchAnimePageResult, ['Page', 'media'], [] as Media[]);

      let newFormatedList = fetchAnimeList.map((anime) => {
        return {
          label: anime.title ? anime.title.romaji : 'noname',
          img: anime.coverImage ? anime.coverImage?.large : null,
          id: anime.id,
        };
      });

      if (fetchAnimePageResult.Page.pageInfo.currentPage > 1) {
        newFormatedList = _.uniqBy([...formatedAnimeList, ...newFormatedList], 'id');
      }

      updateFormatedAnimeList(newFormatedList);
    }
  }, [fetchAnimePageResult]);

  return (
    <GenericList
      entityList={formatedAnimeList}
      pageHandler={pageHandler}
      loading={loading}
      infinite
      url="/animes/"
    />
  );
};

export default ListContainer;
