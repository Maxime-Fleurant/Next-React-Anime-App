import { FunctionComponent, useRef, useState, useEffect, MouseEventHandler } from 'react';
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
  backgroundImg?: string;
  onClick?: MouseEventHandler;
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
}) => {
  const component = useRef<HTMLDivElement>(null);
  const [componentWidth, updatecomponentWidth] = useState(0);

  let withRatioCss = css``;
  let withtabPos = css``;
  let withBackground = css``;

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

  if (backgroundImg) {
    withBackground = css({
      backgroundImage: `url("${backgroundImg}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    });
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
    <div
      onClick={onClick}
      ref={component}
      css={[componentCss, withRatioCss, withtabPos, withBackground, ...extraCss]}
    >
      {children}
    </div>
  );
};
