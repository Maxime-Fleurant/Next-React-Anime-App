// IMPORT
import { FunctionComponent, useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import lodash from 'lodash';
import { connect, useSelector } from 'react-redux';

import { ANIME_LIST } from './animeListGraphQuery';
import GenericList, { IEntity } from '../../../common/components/GenericList';
import { Page, Media, Maybe, PageInfo } from '../../../../api';
import { TStore } from '../../../app/store';

// TYPE DEFINITION
type TListContainer = FunctionComponent;

// REACT COMPONENT
const ListContainer: TListContainer = () => {
  const stateFormSelection = useSelector(
    (state: TStore) => state.animeListPageReducers.formSelection
  );

  const { data: fetchAnimePageResult, fetchMore, loading, error } = useQuery<{
    Page: { media: Media[]; pageInfo: PageInfo };
  }>(ANIME_LIST, {
    notifyOnNetworkStatusChange: true,
    variables: stateFormSelection,
  });

  let formatedAnimeList: IEntity[] = [];
  const totalItem = fetchAnimePageResult ? (fetchAnimePageResult.Page.pageInfo.total as number) : 0;

  // const pageHandler = (pageNumber: number) =>
  //   fetchMore({
  //     variables: { page: pageNumber },
  //     updateQuery: (prevResult, { fetchMoreResult }) => {
  //       return fetchMoreResult || prevResult;
  //     },
  //   });

  if (fetchAnimePageResult) {
    const fetchAnimeList = lodash.get(fetchAnimePageResult, ['Page', 'media'], [] as Media[]);

    formatedAnimeList = fetchAnimeList.map((anime) => {
      return {
        label: anime.title ? anime.title.romaji : null,
        img: anime.coverImage ? anime.coverImage?.large : null,
        id: anime.id,
        desc: anime.description,
      };
    });
  }
  console.log(
    fetchAnimePageResult?.Page.media,
    fetchAnimePageResult?.Page.pageInfo,

    'fdlk'
  );
  return (
    <div>
      <GenericList
        entityList={formatedAnimeList}
        pageHandler={console.log}
        loading={loading}
        total={totalItem}
      />
    </div>
  );
};

export default ListContainer;
