import { FunctionComponent } from 'react';
import { css } from '@emotion/core';

import { useTheme } from 'emotion-theming';
import { Cell } from '../common/components/cell';
import {
  imgBorder,
  centerContent,
  font120,
  textColor900,
  textLineHeight,
  pointSize80,
  helveticaCondensedBold,
  titleLineHeight,
  italic,
  helveticaMedium,
  helveticaThin,
  font64,
  font40,
  font56,
  font48,
} from '../common/globalStyle';
import { ITheme } from '../features/layout/theme';
import {
  finalAnime,
  finalAnime2,
  animeReletive,
  finalAnime1,
  fillspan1,
  dashDec,
  fillspan3,
  fillspan4,
  dateleft,
  rotateSingle,
  rotate1,
  rotate2,
  rotate3,
  rotateWrap,
  rotate4,
  rotate5,
  rotate6,
  rotate8,
  rotate7,
} from '../features/splash/splashStyle';

const Index: FunctionComponent = () => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 7 }}
        tabPos={{ rowStart: 4, rowEnd: 8, columnStart: 1, columnEnd: 13 }}
        extraCss={[theme.imgBorder]}
        ratio={1.3}
        backgroundImg="/img/akira.jpg"
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 7, columnEnd: 10 }}
        tabPos={{ rowStart: 4, rowEnd: 6, columnStart: 13, columnEnd: 19 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/boy1.png"
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 10, columnEnd: 13 }}
        tabPos={{ rowStart: 4, rowEnd: 6, columnStart: 19, columnEnd: 25 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/girl1.jpg"
      />

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 7, columnEnd: 13 }}
        tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 13, columnEnd: 25 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/gif4.gif"
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 13, columnEnd: 25 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        extraCss={[
          ...centerContent,
          font120,
          theme.text.textColor900,
          textLineHeight,
          animeReletive,
        ]}
      >
        <div css={finalAnime1}>
          <div css={css(fillspan1, helveticaCondensedBold, titleLineHeight)}>
            ANIME こちょこちょ 👁
          </div>

          <div css={fillspan3(theme)}>
            💎 ゲッソリ, 📀 こちょこ, 🌎
            <span css={italic}> Brutalist</span>, ⌚️
            <span css={helveticaCondensedBold}>Test-Set</span>, 🔫 チュウチュウ
          </div>

          <div css={fillspan4}>
            <span css={css(helveticaThin, dateleft(theme))}>05-08</span>
            <span css={helveticaCondensedBold}>2020</span>
          </div>
        </div>

        <div css={finalAnime2}>
          <div css={css(fillspan1, helveticaCondensedBold, titleLineHeight)}>
            ANIME こちょこちょ 👁
          </div>

          <div css={fillspan3(theme)}>
            💎 ゲッソリ, 📀 こちょこ, 🌎<span css={italic}> Brutalist</span>, ⌚️{' '}
            <span css={helveticaCondensedBold}>Test-Set</span>, 🔫 チュウチュウ
          </div>

          <div css={fillspan4}>
            <span css={css(helveticaThin, dateleft(theme))}>05-08</span>
            <span css={helveticaCondensedBold}>2020</span>
          </div>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 13, columnEnd: 16 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 7 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={1.3}
      />

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 16, columnEnd: 19 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 7, columnEnd: 13 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/gif6.gif"
      />

      <Cell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 19, columnEnd: 25 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 13, columnEnd: 19 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/gif9.gif"
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 16, columnStart: 1, columnEnd: 4 }}
        tabPos={{ rowStart: 10, rowEnd: 14, columnStart: 1, columnEnd: 7 }}
        extraCss={[theme.imgBorder]}
        ratio={1.3}
        backgroundImg="/img/gif11.gif"
      />

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 20, columnStart: 1, columnEnd: 4 }}
        tabPos={{ rowStart: 14, rowEnd: 18, columnStart: 1, columnEnd: 7 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/pin1.jpg"
        ratio={1.3}
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 16, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 10, rowEnd: 14, columnStart: 7, columnEnd: 25 }}
        extraCss={[...centerContent, font48, theme.text.textColor900, textLineHeight, rotateWrap]}
      >
        <span css={[rotateSingle, rotate1]}>A</span>
        <span css={[rotateSingle, rotate2]}>N</span>
        <span css={[rotateSingle, rotate3]}>I</span>
        <span css={[rotateSingle, rotate4]}>M</span>
        <span css={[rotateSingle, rotate5]}>E</span>
        <span css={[rotateSingle, rotate6]}>ア</span>
        <span css={[rotateSingle, rotate7]}>ニ</span>
        <span css={[rotateSingle, rotate8]}>メ</span>
      </Cell>

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 20, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 14, rowEnd: 18, columnStart: 7, columnEnd: 25 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/gif3.gif"
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 20, columnStart: 19, columnEnd: 25 }}
        tabPos={{ rowStart: 18, rowEnd: 22, columnStart: 13, columnEnd: 25 }}
        extraCss={[theme.imgBorder]}
        ratio={1.3}
        backgroundImg="/img/cover3.jpg"
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 16, columnStart: 13, columnEnd: 19 }}
        tabPos={{ rowStart: 18, rowEnd: 19, columnStart: 1, columnEnd: 13 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/gif8.gif"
      />

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 20, columnStart: 13, columnEnd: 16 }}
        tabPos={{ rowStart: 20, rowEnd: 22, columnStart: 1, columnEnd: 7 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/gif1.gif"
      />

      <Cell
        deskPos={{ rowStart: 16, rowEnd: 20, columnStart: 16, columnEnd: 19 }}
        tabPos={{ rowStart: 20, rowEnd: 22, columnStart: 7, columnEnd: 13 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/girl5.png"
      />

      <Cell
        deskPos={{ rowStart: 20, rowEnd: 24, columnStart: 1, columnEnd: 7 }}
        tabPos={{ rowStart: 22, rowEnd: 23, columnStart: 1, columnEnd: 25 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/gif13.gif"
        ratio={0.3}
      />

      <Cell
        deskPos={{ rowStart: 20, rowEnd: 24, columnStart: 7, columnEnd: 13 }}
        tabPos={{ rowStart: 22, rowEnd: 23, columnStart: 1, columnEnd: 25 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/gif14.gif"
        ratio={0.3}
      />

      <Cell
        deskPos={{ rowStart: 24, rowEnd: 28, columnStart: 1, columnEnd: 4 }}
        tabPos={{ rowStart: 22, rowEnd: 23, columnStart: 1, columnEnd: 25 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/cover2.jpg"
        ratio={0.3}
      />

      <Cell
        deskPos={{ rowStart: 24, rowEnd: 28, columnStart: 4, columnEnd: 13 }}
        tabPos={{ rowStart: 22, rowEnd: 23, columnStart: 1, columnEnd: 25 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/gif44.gif"
        ratio={0.3}
      />

      <Cell
        deskPos={{ rowStart: 20, rowEnd: 28, columnStart: 13, columnEnd: 19 }}
        tabPos={{ rowStart: 24, rowEnd: 25, columnStart: 1, columnEnd: 13 }}
        extraCss={[theme.imgBorder]}
        backgroundImg="/img/cover5.png"
        ratio={1.3}
      />

      <Cell
        deskPos={{ rowStart: 20, rowEnd: 28, columnStart: 19, columnEnd: 25 }}
        tabPos={{ rowStart: 24, rowEnd: 25, columnStart: 13, columnEnd: 25 }}
        extraCss={[...centerContent, font120, theme.text.textColor900, textLineHeight]}
      >
        バキッ
      </Cell>
    </>
  );
};

export default Index;
