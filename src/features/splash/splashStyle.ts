import { keyframes, css, SerializedStyles } from '@emotion/core';
import {
  helveticaCondensedBold,
  pointSize32,
  font32,
  textLineHeight,
  font64,
  pointSize40,
  pointSize56,
  pointSize1,
  pointSize3,
  helveticaThin,
  titleLineHeight,
  pointSize88,
  font56,
  fontRegular,
  font40,
  font48,
} from '../../common/globalStyle';
import { ITheme } from '../layout/theme';

export const item1Anime = keyframes({
  '0%': {
    transform: `translateY(100%)`,
  },

  '100%': {
    transform: `translateY(-100%)`,
  },
});

export const resItem1Anime = keyframes({
  '0%': {
    transform: `translateY(125%)`,
  },

  '100%': {
    transform: `translateY(-125%)`,
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
  finalAnime,
  css`
    @media (max-width: 1023px) {
      ${font56};
      animation: ${resItem1Anime} 6s linear infinite;
    }
  `
);

export const finalAnime2 = css(
  {
    animation: `${item1Anime} 6s linear infinite`,
    animationDelay: '-3s',
  },
  finalAnime,
  css`
    @media (max-width: 1023px) {
      ${font56};
      animation: ${resItem1Anime} 6s linear infinite;
      animation-delay: -3s;
    }
  `
);

export const animeReletive = css({
  position: 'relative',
  overflow: 'hidden',
});

export const fillspan1 = css(
  { textAlign: 'center', margin: '0 3rem' },
  font64,
  css`
    @media (max-width: 1023px) {
      ${font56}
    }
  `
);
export const dashDec = css({ marginRight: '16rem' });

export const fillspan3 = (theme: ITheme): SerializedStyles =>
  css(
    {
      textAlign: 'center',
      margin: '0 4rem',
      marginTop: pointSize40,
      padding: '1rem 3rem',
      border: `${pointSize1} solid ${theme.base.baseColor900}`,
    },
    font32,
    textLineHeight,
    css`
      @media (max-width: 1023px) {
        ${fontRegular}
      }
    `
  );

export const fillspan4 = css(
  {
    textAlign: 'center',
    margin: '0 4rem',
    marginTop: pointSize56,
    marginBottom: pointSize56,
  },
  font64,
  css`
    @media (max-width: 1023px) {
      ${font56}
    }

    @media (max-width: 767px) {
      ${font48}
    }
  `
);

export const dateleft = (theme: ITheme): SerializedStyles =>
  css({
    border: `${pointSize3} solid ${theme.base.baseColor900}`,
    padding: '1rem 2rem',
    borderRadius: '70%',
    marginRight: pointSize40,
  });

// Rotate
export const rotateWrap = css(
  {
    position: 'relative',
  },
  css`
    @media (max-width: 767px) {
      ${font40};
    }
  `
);

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

// vertical column
export const verticalCollumnWrapper = css({ position: 'relative', overflow: 'hidden' });

export const commonVerticalCollum = css(
  { textAlign: 'center', width: '33%', position: 'absolute' },
  helveticaCondensedBold,
  font64,
  textLineHeight
);

export const verticalCol1 = keyframes({
  '0%': {
    transform: `translateY(-100%)`,
  },

  '100%': {
    transform: `translateY(100%)`,
  },
});

export const animateCenterCol1 = css({
  animation: `${verticalCol1} 6s linear infinite`,
});

export const animateCenterCol2 = css({
  animation: `${verticalCol1} 6s linear infinite`,
  animationDelay: '-3s',
});

export const animateCenterCol3 = css(
  {
    left: '70%',
    animation: `${verticalCol1} 16s linear infinite`,
  },
  helveticaThin,
  font32,
  textLineHeight
);

export const animateCenterCol4 = css(
  {
    left: '70%',
    animation: `${verticalCol1} 16s linear infinite`,
    animationDelay: '-8s',
  },
  helveticaThin,
  font32,
  textLineHeight
);

export const animateCenterCol5 = css(
  {
    right: '70%',
    animation: `${verticalCol1} 12s linear infinite`,
    animationDirection: 'reverse',
  },

  helveticaThin,
  font32,
  textLineHeight
);

export const animateCenterCol6 = css(
  {
    right: '70%',
    animation: `${verticalCol1} 12s linear infinite`,
    animationDirection: 'reverse',
    animationDelay: '-6s',
  },

  helveticaThin,
  font32,
  textLineHeight
);

// Horizontal anime

export const horiWrapper = (theme: ITheme): SerializedStyles =>
  css(
    {
      position: 'relative',
      overflow: 'hidden',
    },
    theme.text.textColor900
  );

export const horiAnime = keyframes({
  '0%': {
    transform: `translate(-100%, -50%)`,
  },

  '100%': {
    transform: `translate(100%, -50%)`,
  },
});

export const middleHori = css(
  {
    position: 'absolute',
    animation: `${horiAnime} 12s linear infinite`,
    top: '50%',
    fontSize: pointSize88,
    whiteSpace: 'nowrap',
  },
  helveticaCondensedBold,

  titleLineHeight
);

export const middleHori2 = css(
  {
    position: 'absolute',
    animation: `${horiAnime} 12s linear infinite`,
    top: '50%',
    animationDelay: '-6s',
    fontSize: pointSize88,
    whiteSpace: 'nowrap',
  },
  helveticaCondensedBold,

  titleLineHeight
);

export const middleHori3 = css(
  {
    position: 'absolute',
    animation: `${horiAnime} 8s linear infinite`,
    top: '15%',
    animationDelay: '-4s',
    fontSize: pointSize32,
    whiteSpace: 'nowrap',
    fontStyle: 'italic',
  },
  helveticaThin,

  titleLineHeight
);

export const middleHori4 = css(
  {
    position: 'absolute',
    animation: `${horiAnime} 8s linear infinite`,
    top: '15%',

    fontSize: pointSize32,
    whiteSpace: 'nowrap',
    fontStyle: 'italic',
  },
  helveticaThin,

  titleLineHeight
);

export const middleHori5 = css(
  {
    position: 'absolute',
    animation: `${horiAnime} 8s linear infinite`,
    bottom: '5%',
    animationDelay: '-4s',
    animationDirection: 'reverse',
    fontSize: pointSize32,
    whiteSpace: 'nowrap',
    fontStyle: 'italic',
  },
  helveticaThin,

  titleLineHeight
);

export const middleHori6 = css(
  {
    position: 'absolute',
    animation: `${horiAnime} 8s linear infinite`,
    top: '15%',

    fontSize: pointSize32,
    whiteSpace: 'nowrap',
    fontStyle: 'italic',
  },
  helveticaThin,

  titleLineHeight
);

export const girlRes = css`
  @media (max-width: 1023px) {
    display: none;
  }
`;
