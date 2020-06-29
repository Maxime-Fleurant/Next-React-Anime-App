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
    loading?: boolean;
    pageHandler?: () => void;
    infinite?: boolean;
    total?: number;
    url?: string;
  }>
) => ReactElement;

// REACT COMPONENT
const GenericList: TGenericList = ({ entityList = [], loading }) => {
  let deskRowStart = 7;
  let deskColStart = 1;

  const entityListJsx = entityList.map((entity) => {
    if (deskColStart === 25) {
      deskColStart = 1;
      deskRowStart += 7;
    }

    const singleEntity = (
      <>
        <Cell
          key={`cover${entity.id}`}
          deskPos={{
            rowStart: deskRowStart,
            rowEnd: deskRowStart + 5,
            columnStart: deskColStart,
            columnEnd: deskColStart + 4,
          }}
          tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 9, columnEnd: 17 }}
          extraCss={[imgBorder]}
          ratio={0.7}
          backgroundImg="/img/akira.jpg"
        />

        <Cell
          key={`title${entity.id}`}
          deskPos={{
            rowStart: deskRowStart + 5,
            rowEnd: deskRowStart + 7,
            columnStart: deskColStart,
            columnEnd: deskColStart + 4,
          }}
          tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 9, columnEnd: 17 }}
          extraCss={[fontRegular, helveticaRegular, textLineHeight, textColor900]}
        >
          akira
        </Cell>
      </>
    );

    deskColStart += 4;

    return singleEntity;
  });

  return <>{entityListJsx}</>;
};

export default memo(GenericList);
