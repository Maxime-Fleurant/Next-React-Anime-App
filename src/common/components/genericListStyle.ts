import { css } from '@emotion/core';
import { textLineHeight, helveticaRegular } from '../globalStyle';

export const imgLink = css({
  height: '100%',
  cursor: 'pointer',

  width: '100%',
  position: 'absolute',
});

export const aLink = css(
  { textDecoration: 'none', cursor: 'pointer', wordBreak: 'break-word' },

  textLineHeight,
  helveticaRegular
);

export const imgWrapp = css({
  // position: 'relative',
});
