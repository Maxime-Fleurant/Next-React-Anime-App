import { FunctionComponent, useRef, useState, useEffect } from 'react';
import { css, SerializedStyles } from '@emotion/core';

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
}>;

// REACT
export const Cell: TCell = ({ deskPos, tabPos, mobilPos, ratio, children, extraCss = [] }) => {
  const component = useRef<HTMLDivElement>(null);
  const [componentWidth, updatecomponentWidth] = useState(0);

  let withRatioCss = css``;
  let withtabPos = css``;

  const handleResize = (): void => {
    if (component && component.current) {
      updatecomponentWidth(component.current.offsetWidth);
    }
  };

  const componentCss = css`
    grid-row-start: ${deskPos.rowStart};
    grid-row-end: ${deskPos.rowEnd};
    grid-column-start: ${deskPos.columnStart};
    grid-column-end: ${deskPos.columnEnd};
  `;

  if (ratio) {
    withRatioCss = css`
      @media (max-width: 1023px) {
        height: ${componentWidth / ratio}px;
      }
    `;
  }

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

  useEffect(() => {
    if (component && component.current) {
      updatecomponentWidth(component.current.offsetWidth);
    }

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={component} css={[componentCss, withRatioCss, withtabPos, ...extraCss]}>
      {children}
    </div>
  );
};
