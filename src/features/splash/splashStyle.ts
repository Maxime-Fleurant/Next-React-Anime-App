import { keyframes, css } from '@emotion/core';
import { pointSize80, helveticaCondensedBold } from '../../common/globalStyle';

export const item1Anime = keyframes({
  '0%': {
    transform: `translateY(100%)`,
  },

  '100%': {
    transform: `translateY(-100%)`,
  },
});

export const finalAnime = css({
  position: 'absolute',
  width: '100%;',
});

export const finalAnime1 = css(
  {
    // animation: `${item1Anime} 4s linear infinite`,
  },
  finalAnime
);

export const finalAnime2 = css(
  {
    animation: `${item1Anime} 4s linear infinite`,
    animationDelay: '-2s',
  },
  finalAnime
);

export const animeReletive = css({
  position: 'relative',
  // overflow: 'hidden',
});

export const fillspan1 = css({ fontSize: pointSize80, float: 'right' });
