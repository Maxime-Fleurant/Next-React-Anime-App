import { FunctionComponent, useRef, useState, MouseEventHandler, useEffect } from 'react';
import { css, SerializedStyles } from '@emotion/core';
import useIsomorphicLayoutEffect from '../hooks/isomorphUseLayout';

// TYPE
interface IPos {
  rowStart: number;
  rowEnd?: number;
  columnStart: number;
  columnEnd: number;
}

type TCell = FunctionComponent<{
  deskPos: IPos;
  tabPos?: IPos;
  mobilPos?: IPos;
  ratio?: number;
  extraCss?: SerializedStyles[];
  backgroundImg?: string | null;
  onClick?: MouseEventHandler;
  autoRow?: boolean;
  endRowCallback?: (endRow: number) => void;
}>;

// REACT
export const Cell: TCell = ({
  deskPos,
  tabPos,
  mobilPos,
  ratio,
  children,
  extraCss = [],
  backgroundImg,
  onClick,
  autoRow,
  endRowCallback,
}) => {
  const component = useRef<HTMLDivElement>(null);
  const inerComponent = useRef<HTMLDivElement>(null);

  const [componentRow, updateComponentRow] = useState(0);
  const rowRef = useRef(componentRow);

  let withRatioCss = css``;
  let withtabPos = css``;
  let withBackground = css``;

  const handleResize = (): void => {
    if (component && component.current) {
      if (
        autoRow &&
        inerComponent &&
        inerComponent.current &&
        !rowRef.current &&
        window.innerWidth > 1023
      ) {
        window.removeEventListener('resize', handleResize);
        const remUnitToPx = (document.body.clientWidth / 100) * 1.25;
        const cellSideToPx = ((76 - 23 * 1.4) / 24) * remUnitToPx;
        const gapToPx = remUnitToPx * 1.4;
        const endRow = Math.ceil(
          (inerComponent.current.offsetHeight + gapToPx) / (cellSideToPx + gapToPx)
        );
        rowRef.current = endRow;
        updateComponentRow(endRow);
        if (endRowCallback) {
          endRowCallback(deskPos.rowStart + endRow);
        }
      }
    }
  };

  const componentCss = css`
    grid-row-start: ${deskPos.rowStart};
    grid-row-end: ${componentRow ? deskPos.rowStart + componentRow : deskPos.rowEnd};
    grid-column-start: ${deskPos.columnStart};
    grid-column-end: ${deskPos.columnEnd};
  `;

  if (tabPos) {
    withtabPos = css`
      @media (max-width: 1023px) {
        grid-row-start: ${tabPos.rowStart};
        grid-row-end: ${tabPos.rowEnd || 'initial'};
        grid-column-start: ${tabPos.columnStart};
        grid-column-end: ${tabPos.columnEnd};
      }
    `;
  }

  if (ratio) {
    withRatioCss = css`
      @media (max-width: 1023px) {
        padding-top: ${100 * ratio}%;
      }
    `;
  }

  if (backgroundImg) {
    withBackground = css({
      backgroundImage: `url("${backgroundImg}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    });
  }

  useIsomorphicLayoutEffect(() => {
    if (autoRow && inerComponent && inerComponent.current) {
      if (window.innerWidth > 1023) {
        const remUnitToPx = (document.body.clientWidth / 100) * 1.25;
        const cellSideToPx = ((76 - 23 * 1.4) / 24) * remUnitToPx;
        const gapToPx = remUnitToPx * 1.4;

        updateComponentRow(
          Math.ceil((inerComponent.current.offsetHeight + gapToPx) / (cellSideToPx + gapToPx))
        );

        const endRow = Math.ceil(
          (inerComponent.current.offsetHeight + gapToPx) / (cellSideToPx + gapToPx)
        );
        rowRef.current = endRow;
        updateComponentRow(endRow);

        if (endRowCallback) {
          endRowCallback(deskPos.rowStart + endRow);
        }
      } else {
        window.addEventListener('resize', handleResize);
      }
    }

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (autoRow) {
    return (
      <div
        onClick={onClick}
        ref={component}
        css={[componentCss, withRatioCss, withtabPos, withBackground, ...extraCss]}
      >
        <div ref={inerComponent}>{children}</div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      ref={component}
      css={[componentCss, withRatioCss, withtabPos, withBackground, ...extraCss]}
    >
      {children}
    </div>
  );
};
