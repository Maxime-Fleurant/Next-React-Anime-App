// IMPORT
import { FunctionComponent, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import lodash from 'lodash';

import { ANIME_LIST } from './animeListGraphQuery';
import GenericList from '../../../common/components/GenericList';
import { Page, Media, Query } from '../../../../api';
import Maybe from 'graphql/tsutils/Maybe';

// TYPE DEFINITION
type TListContainer = FunctionComponent;

// REACT COMPONENT
const ListContainer: TListContainer = () => {
  const { data, fetchMore, networkStatus, loading } = useQuery<{ Page: Page }>(ANIME_LIST);
  useEffect(() => {
    console.log('ListContainer Update');
  });

  const x = lodash.get(data, ['Page', 'media'], []);
  console.log(x);

  // console.log(loading, networkStatus, data?.Page.media);

  return (
    <div>
      <GenericList
        entityList={[
          { label: 'fdlk', img: 'fdlk', id: 2133123443413 },
          { label: 'fdlk', img: 'fdlk', id: 21312343413 },
          { label: 'fdlk', img: 'fdlk', id: 213343413 },
        ]}
        pageHandler={console.log}
      />
    </div>
  );
};

export default ListContainer;
