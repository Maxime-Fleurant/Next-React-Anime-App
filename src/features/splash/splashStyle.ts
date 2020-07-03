import { keyframes, css } from '@emotion/core';
import {
  pointSize80,
  helveticaCondensedBold,
  pointSize32,
  font32,
  textLineHeight,
  font64,
  pointSize40,
  pointSize56,
  pointSize1,
  pointSize4,
  pointSize2,
  pointSize3,
} from '../../common/globalStyle';
import { ITheme } from '../layout/theme';

export const item1Anime = keyframes({
  '0%': {
    transform: `translateY(130%)`,
  },

  '100%': {
    transform: `translateY(-130%)`,
  },
});

export const finalAnime = css({
  position: 'absolute',
  width: '100%;',
});

export const finalAnime1 = css(
  {
    animation: `${item1Anime} 6s linear infinite`,
  },
  finalAnime
);

export const finalAnime2 = css(
  {
    animation: `${item1Anime} 6s linear infinite`,
    animationDelay: '-3s',
  },
  finalAnime
);

export const animeReletive = css({
  position: 'relative',
  overflow: 'hidden',
});

export const fillspan1 = css({ textAlign: 'center', margin: '0 3rem' }, font64);
export const dashDec = css({ marginRight: '16rem' });

export const fillspan3 = (theme: ITheme) =>
  css(
    {
      textAlign: 'center',
      margin: '0 4rem',
      marginTop: pointSize40,
      padding: '1rem 3rem',
      border: `${pointSize1} solid ${theme.base.baseColor900}`,
    },
    font32,
    textLineHeight
  );

export const fillspan4 = css(
  {
    textAlign: 'center',
    margin: '0 4rem',
    marginTop: pointSize56,
  },
  font64
);

export const dateleft = (theme: ITheme) =>
  css({
    border: `${pointSize3} solid ${theme.base.baseColor900}`,
    padding: '1rem 2rem',
    borderRadius: '70%',
    marginRight: pointSize40,
  });

export const rotateWrap = css({
  position: 'relative',
});

export const rotateSingle = css({
  height: '50%',
  transformOrigin: 'bottom center',
  top: '0',
  position: 'absolute',
  width: '3rem',
  textAlign: 'center',
});

export const rotateAnime = keyframes({
  '0%': {
    transform: `rotate(0deg)`,
  },

  '100%': {
    transform: `rotate(360deg)`,
  },
});

export const rotate1 = css({
  animation: `${rotateAnime} 3s linear infinite`,
  animationDelay: '-2.25s',
});

export const rotate2 = css({
  animation: `${rotateAnime} 3s linear infinite`,
  animationDelay: '-2.625s',
});

export const rotate3 = css({
  animation: `${rotateAnime} 3s linear infinite`,
});

export const rotate4 = css({
  animation: `${rotateAnime} 3s linear infinite`,
  animationDelay: '-0.375s',
});

export const rotate5 = css({
  animation: `${rotateAnime} 3s linear infinite`,
  animationDelay: '-0.75s',
});

export const rotate6 = css({
  animation: `${rotateAnime} 3s linear infinite`,
  animationDelay: '-1.125s',
});

export const rotate7 = css({
  animation: `${rotateAnime} 3s linear infinite`,
  animationDelay: '-1.5s',
});

export const rotate8 = css({
  animation: `${rotateAnime} 3s linear infinite`,
  animationDelay: '-1.875s',
});
