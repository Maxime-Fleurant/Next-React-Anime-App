// IMPORT
import React, { useEffect, ReactElement, PropsWithChildren, memo } from 'react';
import { Row, Col, Pagination } from 'antd';

// TYPE DEFINITION
export interface IEntity {
  label: string | null | undefined;
  img: string | null | undefined;
  id: number;
}

type TGenericList = (
  props: PropsWithChildren<{
    entityList: IEntity[];
    loading: boolean;
    pageHandler: () => void;
    infinite?: boolean;
    total?: number;
  }>
) => ReactElement;

// REACT COMPONENT
const GenericList: TGenericList = ({
  infinite = false,
  entityList,
  pageHandler,
  loading,
  total,
}) => {
  let pagination: JSX.Element | null = null;
  console.log('list render');
  const entityJsx = entityList.map((entity) => {
    return (
      <Col span={6} key={entity.id}>
        {entity.label}
      </Col>
    );
  });

  if (!infinite) {
    pagination = <Pagination total={total} pageSize={50} onChange={pageHandler} />;
  }

  return (
    <Row>
      {entityJsx}
      <div>{loading ? 'loading' : 'loaded'}</div>
      <button type="button" onClick={pageHandler}>
        ff
      </button>
      {pagination}
    </Row>
  );
};

export default memo(GenericList);
