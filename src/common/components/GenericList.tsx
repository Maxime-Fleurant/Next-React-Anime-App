// IMPORT
import React, { ReactElement, PropsWithChildren, memo, useEffect, Fragment, useRef } from 'react';
import { useTheme } from 'emotion-theming';
import Link from 'next/link';
import { Cell } from './cell';
import { imgBorder, fontRegular, helveticaRegular, textLineHeight } from '../globalStyle';
import { imgLink, aLink, imgWrapp } from './genericListStyle';
import { ITheme } from '../../features/layout/theme';

// TYPE DEFINITION
export interface IEntity {
  label: string | null | undefined;
  img: string | null | undefined;
  id: string;
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

  let tabRowStart = 7;
  let tabColStart = 1;

  const lastElem = useRef<HTMLDivElement>(null);

  const theme = useTheme<ITheme>();

  const handleScroll = (): void => {
    if (lastElem && lastElem.current) {
      if (window.pageYOffset + window.innerHeight > lastElem.current.offsetTop) {
        if (fetchMore) {
          window.removeEventListener('scroll', handleScroll);
          fetchMore();
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [entityList]);

  const entityListJsx = entityList.map((entity, index, { length }) => {
    if (deskColStart === 25) {
      deskColStart = 1;
      deskRowStart += 7;
    }

    if (tabColStart === 25) {
      tabColStart = 1;
      tabRowStart += 2;
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
          tabPos={{
            rowStart: tabRowStart,
            rowEnd: tabRowStart + 1,
            columnStart: tabColStart,
            columnEnd: tabColStart + 6,
          }}
          extraCss={[imgBorder, imgWrapp]}
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
          tabPos={{
            rowStart: tabRowStart + 1,
            rowEnd: tabRowStart + 2,
            columnStart: tabColStart,
            columnEnd: tabColStart + 6,
          }}
          extraCss={[fontRegular, helveticaRegular, textLineHeight, theme.text.textColor900]}
        >
          <Link href="/animes/[id]" as={`/animes/${entity.id}`}>
            <a css={aLink}>{entity.label}</a>
          </Link>
        </Cell>
      </Fragment>
    );

    deskColStart += 4;
    tabColStart += 6;

    return singleEntity;
  });

  return <>{entityListJsx}</>;
};

export default memo(GenericList);
