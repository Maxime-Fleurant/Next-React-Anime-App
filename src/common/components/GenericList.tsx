// IMPORT
import React, { useEffect, ReactElement, PropsWithChildren } from 'react';
import { Row, Col, Pagination } from 'antd';

// TYPE DEFINITION
export interface IEntity {
  label: string | null | undefined;
  img: string | null | undefined;
  id: number;
  desc: string | null | undefined;
}

type TGenericList = (
  props: PropsWithChildren<{
    entityList: IEntity[];
    loading: boolean;
    pageHandler: (pageNumber: number) => void;
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
  const entityJsx = entityList.map((entity) => {
    return (
      <Col span={6} key={entity.id}>
        {entity.label}
      </Col>
    );
  });

  return (
    <Row>
      {entityJsx}
      <Pagination total={total} pageSize={50} onChange={pageHandler} />
    </Row>
  );
};

export default GenericList;
