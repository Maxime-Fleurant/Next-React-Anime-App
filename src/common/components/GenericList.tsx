// IMPORT
import React, { ReactElement, PropsWithChildren, memo } from 'react';
import { Row, Col, Pagination } from 'antd';
import Link from 'next/link';
import { Cell } from './cell';
import {
  imgBorder,
  fontRegular,
  helveticaRegular,
  textLineHeight,
  textColor900,
} from '../globalStyle';

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
    pageHandler?: () => void;
    infinite?: boolean;
    total?: number;
    url: string;
  }>
) => ReactElement;

// REACT COMPONENT
const GenericList: TGenericList = ({
  infinite = false,
  entityList,
  pageHandler,
  loading,
  total,
  url,
}) => {
  let pagination: JSX.Element | null = null;

  const entityJsx = entityList.map((entity) => {
    return (
      <Col span={6} key={entity.id} style={{ border: '1px solid black' }}>
        <Link href={`${url}[id]`} as={`${url}${entity.id}`}>
          <a css={{ color: 'red' }}>{entity.label}</a>
        </Link>
      </Col>
    );
  });

  if (!infinite) {
    pagination = <Pagination total={total} pageSize={50} onChange={pageHandler} />;
  }

  return (
    <>
      <Cell
        deskPos={{ rowStart: 7, rowEnd: 12, columnStart: 1, columnEnd: 5 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 9 }}
        extraCss={[imgBorder]}
        ratio={0.7}
        backgroundImg="/img/akira.jpg"
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 14, columnStart: 1, columnEnd: 5 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 9 }}
        extraCss={[fontRegular, helveticaRegular, textLineHeight, textColor900]}
      >
        Akira
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 12, columnStart: 5, columnEnd: 9 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 9, columnEnd: 17 }}
        extraCss={[imgBorder]}
        ratio={0.7}
        backgroundImg="/img/akira.jpg"
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 14, columnStart: 5, columnEnd: 9 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 9, columnEnd: 17 }}
        extraCss={[fontRegular, helveticaRegular, textLineHeight, textColor900]}
      >
        Akira
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 12, columnStart: 9, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 17, columnEnd: 25 }}
        extraCss={[imgBorder]}
        ratio={0.7}
        backgroundImg="/img/akira.jpg"
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 14, columnStart: 9, columnEnd: 13 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 17, columnEnd: 25 }}
        extraCss={[fontRegular, helveticaRegular, textLineHeight, textColor900]}
      >
        Akira
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 12, columnStart: 13, columnEnd: 17 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 9 }}
        extraCss={[imgBorder]}
        ratio={0.7}
        backgroundImg="/img/akira.jpg"
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 14, columnStart: 13, columnEnd: 17 }}
        tabPos={{ rowStart: 10, rowEnd: 11, columnStart: 1, columnEnd: 9 }}
        extraCss={[fontRegular, helveticaRegular, textLineHeight, textColor900]}
      >
        Akira
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 12, columnStart: 17, columnEnd: 21 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 9, columnEnd: 17 }}
        extraCss={[imgBorder]}
        ratio={0.7}
        backgroundImg="/img/akira.jpg"
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 14, columnStart: 17, columnEnd: 21 }}
        tabPos={{ rowStart: 10, rowEnd: 11, columnStart: 9, columnEnd: 17 }}
        extraCss={[fontRegular, helveticaRegular, textLineHeight, textColor900]}
      >
        Akira
      </Cell>
    </>
  );
};

export default memo(GenericList);

{
  /* <Row>
{entityJsx}
<div>{loading ? 'loading' : 'loaded'}</div>
<button type="button" onClick={pageHandler}>
  ff
</button>
{pagination}
</Row> */
}
