import { FunctionComponent } from 'react';

import { Cell } from '../common/components/cell';
import {
  imgBorder,
  centerContent,
  font120,
  textColor900,
  textLineHeight,
} from '../common/globalStyle';

const Index: FunctionComponent = () => {
  return (
    <>
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 7 }}
        tabPos={{ rowStart: 4, rowEnd: 8, columnStart: 1, columnEnd: 13 }}
        extraCss={[imgBorder]}
        ratio={0.7}
        backgroundImg="/img/akira.jpg"
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 7, columnEnd: 10 }}
        tabPos={{ rowStart: 4, rowEnd: 6, columnStart: 13, columnEnd: 19 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/boy1.png"
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 10, columnEnd: 13 }}
        tabPos={{ rowStart: 4, rowEnd: 6, columnStart: 19, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl1.jpg"
      />

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 10, columnStart: 7, columnEnd: 13 }}
        tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 13, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/banner1.jpg"
      />

      <Cell
        deskPos={{ rowStart: 10, rowEnd: 12, columnStart: 7, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 13, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/banner2.jpg"
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 13, columnEnd: 25 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        extraCss={[...centerContent, font120, textColor900, textLineHeight]}
      >
        ゲッソリ
      </Cell>

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 13, columnEnd: 16 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 7 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 16, columnEnd: 19 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 7, columnEnd: 13 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl3.png"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 19, columnEnd: 22 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 13, columnEnd: 19 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl4.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 22, columnEnd: 25 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 19, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl5.png"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 16, columnStart: 1, columnEnd: 4 }}
        tabPos={{ rowStart: 10, rowEnd: 14, columnStart: 1, columnEnd: 7 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/cover2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 20, columnStart: 1, columnEnd: 4 }}
        tabPos={{ rowStart: 14, rowEnd: 18, columnStart: 1, columnEnd: 7 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/cover3.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 16, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 10, rowEnd: 14, columnStart: 7, columnEnd: 25 }}
        extraCss={[...centerContent, font120, textColor900, textLineHeight]}
      >
        バキッ
      </Cell>

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 20, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 14, rowEnd: 18, columnStart: 7, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/banner3.jpg"
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 20, columnStart: 19, columnEnd: 25 }}
        tabPos={{ rowStart: 18, rowEnd: 22, columnStart: 13, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/cover4.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 14, columnStart: 13, columnEnd: 19 }}
        tabPos={{ rowStart: 18, rowEnd: 19, columnStart: 1, columnEnd: 13 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/banner4.jpg"
      />

      <Cell
        deskPos={{ rowStart: 14, rowEnd: 16, columnStart: 13, columnEnd: 19 }}
        tabPos={{ rowStart: 19, rowEnd: 20, columnStart: 1, columnEnd: 13 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/banner5.jpg"
      />

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 20, columnStart: 13, columnEnd: 16 }}
        tabPos={{ rowStart: 20, rowEnd: 22, columnStart: 1, columnEnd: 7 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl6.jpg"
      />

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 20, columnStart: 16, columnEnd: 19 }}
        tabPos={{ rowStart: 20, rowEnd: 22, columnStart: 7, columnEnd: 13 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl7.jpg"
      />

      <Cell
        deskPos={{ rowStart: 20, rowEnd: 24, columnStart: 1, columnEnd: 13 }}
        tabPos={{ rowStart: 22, rowEnd: 23, columnStart: 1, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/banner6.jpg"
        ratio={3.2}
      />

      <Cell
        deskPos={{ rowStart: 24, rowEnd: 28, columnStart: 1, columnEnd: 13 }}
        tabPos={{ rowStart: 23, rowEnd: 24, columnStart: 1, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/banner7.jpg"
        ratio={3.2}
      />

      <Cell
        deskPos={{ rowStart: 20, rowEnd: 28, columnStart: 13, columnEnd: 19 }}
        tabPos={{ rowStart: 24, rowEnd: 25, columnStart: 1, columnEnd: 13 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/cover5.png"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 20, rowEnd: 28, columnStart: 19, columnEnd: 25 }}
        tabPos={{ rowStart: 24, rowEnd: 25, columnStart: 13, columnEnd: 25 }}
        extraCss={[...centerContent, font120, textColor900, textLineHeight]}
      >
        バキッ
      </Cell>
    </>
  );
};

export default Index;
