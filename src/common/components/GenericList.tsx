// IMPORT
import React, { useEffect, ReactElement, PropsWithChildren } from 'react';
import { Row, Col, Pagination } from 'antd';

// TYPE DEFINITION
interface Ientity {
  label: string;
  img: string;
  id: number;
  desc?: string;
}

function GenericList(
  props: PropsWithChildren<{
    entityList: Ientity[];
    loading?: boolean;
    infinite: boolean;
  }>
): ReactElement;

function GenericList(
  props: PropsWithChildren<{
    entityList: Ientity[];
    loading?: boolean;
    pageHandler: (pageNumber: number) => void;
  }>
): ReactElement;

// REACT COMPONENT
function GenericList({
  infinite = false,
  entityList,
  pageHandler,
  loading,
}: PropsWithChildren<{
  entityList: Ientity[];
  infinite?: boolean;
  loading?: boolean;
  pageHandler?: (pageNumber: number) => void;
}>): ReactElement {
  useEffect(() => {
    console.log('GenericList update');
  });

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
      <Pagination total={entityList.length} pageSize={2} onChange={pageHandler} />
    </Row>
  );
}

export default GenericList;
