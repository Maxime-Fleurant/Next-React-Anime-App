// IMPORT
import React, {
  ReactElement,
  PropsWithChildren,
  memo,
  useEffect,
  Fragment,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { Cell } from './cell';
import {
  imgBorder,
  fontRegular,
  helveticaRegular,
  textLineHeight,
  textColor900,
} from '../globalStyle';
import { imgLink, aLink } from './genericListStyle';

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
    fetchMore?: () => void;
    infinite?: boolean;
    total?: number;
    url?: string;
  }>
) => ReactElement;

// REACT COMPONENT
const GenericList: TGenericList = ({ entityList = [], fetchMore }) => {
  let deskRowStart = 7;
  let deskColStart = 1;

  const lastElem = useRef<HTMLDivElement>(null);

  const handleScroll = (): void => {
    if (lastElem && lastElem.current) {
      if (
        window.pageYOffset + window.innerHeight >
        lastElem.current.offsetTop + lastElem.current.clientHeight
      )
        if (fetchMore) {
          window.removeEventListener('scroll', handleScroll);
          fetchMore();
        }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [entityList]);

  const entityListJsx = entityList.map((entity, index, { length }) => {
    if (deskColStart === 25) {
      deskColStart = 1;
      deskRowStart += 7;
    }

    const singleEntity = (
      <Fragment key={entity.id}>
        <Cell
          deskPos={{
            rowStart: deskRowStart,
            rowEnd: deskRowStart + 5,
            columnStart: deskColStart,
            columnEnd: deskColStart + 4,
          }}
          tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 9, columnEnd: 17 }}
          extraCss={[imgBorder]}
          ratio={1.3}
          backgroundImg={entity.img}
        >
          <Link href="/animes/[id]" as={`/animes/${entity.id}`}>
            <div ref={index === length - 1 ? lastElem : null} css={imgLink} />
          </Link>
        </Cell>

        <Cell
          deskPos={{
            rowStart: deskRowStart + 5,
            rowEnd: deskRowStart + 7,
            columnStart: deskColStart,
            columnEnd: deskColStart + 4,
          }}
          tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 9, columnEnd: 17 }}
          extraCss={[fontRegular, helveticaRegular, textLineHeight, textColor900]}
        >
          <Link href="/animes/[id]" as={`/animes/${entity.id}`}>
            <a css={aLink}>{entity.label}</a>
          </Link>
        </Cell>
      </Fragment>
    );

    deskColStart += 4;

    return singleEntity;
  });

  return <>{entityListJsx}</>;
};

export default memo(GenericList);
