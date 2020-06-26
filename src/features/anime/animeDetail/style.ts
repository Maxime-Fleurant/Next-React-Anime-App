import { css } from '@emotion/core';
import {
  pointSize32,
  baseColor900,
  baseColor200,
  pointSize1,
  pointSize64,
} from '../../../common/globalStyle';

export const titleMargin = css({ marginTop: pointSize32 });

export const cellVideo = css({ filter: 'brightness(0.6)' });
export const youtubeContainer = css`
  div:first-child {
    width: 100%;
    height: 100%;
  }
`;

export const cellButton = css({
  zIndex: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const youtubePlayer = css({ width: '100%', height: '100%' });

export const playerButton = css({
  backgroundColor: baseColor200,
  border: `${pointSize1} solid ${baseColor900}`,
  padding: `${pointSize32} ${pointSize64}`,
});

export const desc = [
  css({
    overflowY: 'scroll',
  }),
  css`
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  `,
];
