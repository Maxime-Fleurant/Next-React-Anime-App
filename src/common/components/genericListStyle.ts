import { css } from '@emotion/core';
import { textColor900, textLineHeight, helveticaRegular } from '../globalStyle';

export const imgLink = css({ height: '100%', cursor: 'pointer' });

export const aLink = css(
  { textDecoration: 'none', cursor: 'pointer' },
  textColor900,
  textLineHeight,
  helveticaRegular
);
