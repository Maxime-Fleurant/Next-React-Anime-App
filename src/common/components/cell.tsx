import { FunctionComponent, useRef, useState, useEffect } from 'react';
import { css, SerializedStyles } from '@emotion/core';

// TYPE
interface IPos {
  rowStart: number;
  rowEnd: number;
  columnStart: number;
  columnEnd: number;
}

type TCell = FunctionComponent<{
  deskPos: IPos;
  tabPos?: IPos;
  mobilPos?: IPos;
  ratio?: number;
  style?: SerializedStyles;
}>;

export const Cell: TCell = ({ deskPos, tabPos, mobilPos, ratio, style, children }) => {
  const component = useRef<HTMLDivElement>(null);
  const [componentWidth, updatecomponentWidth] = useState(0);

  let withRatioCss = css``;

  const componentCss = css`
    grid-area: ${deskPos.rowStart} / ${deskPos.columnStart} / ${deskPos.rowEnd} /
      ${deskPos.columnEnd};
  `;

  if (ratio) {
    withRatioCss = css`
      @media (max-width: 1023px) {
        height: ${componentWidth / ratio}px;
      }
    `;
  }

  useEffect(() => {
    if (component && component.current) {
      updatecomponentWidth(component.current.offsetWidth);
    }

    window.addEventListener('resize', () => {
      if (component && component.current) {
        updatecomponentWidth(component.current.offsetWidth);
      }
    });
  }, []);

  return <div css={[componentCss, withRatioCss, style]}>{children}</div>;
};
