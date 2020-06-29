import { css } from '@emotion/core';
import {
  pointSize32,
  baseColor900,
  baseColor200,
  pointSize1,
  pointSize64,
  pointSize24,
  pointSize16,
  pointSize8,
  textLineHeight,
  font40,
  textColor900,
  helveticaMedium,
  font20,
  textColor600,
  fontRegular,
  font32,
  titleLineHeight,
  helveticaRegular,
  textColor200,
  backgroundColor900,
  baseColor100,
} from '../../../common/globalStyle';

export const titleMargin = css({ marginTop: pointSize16 });

export const cellVideo = css({ filter: 'brightness(0.6)' });
export const youtubeContainer = css`
  div:first-child {
    width: 100%;
    height: 100%;
  }
`;

export const descBlock = css({
  paddingTop: pointSize16,
  borderTop: `${pointSize8} solid ${baseColor900}`,
});

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

export const allVid = css([{ alignSelf: 'end' }]);

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

export const studioCell = css([
  { textAlign: 'right' },
  textLineHeight,
  font32,
  textColor900,
  helveticaMedium,
  css`
    @media (max-width: 1023px) {
      align-self: end;
    }
  `,
]);

export const studioQu = css([font20, textLineHeight, textColor600]);

export const externalLinkButton = css([
  fontRegular,
  titleLineHeight,
  {
    padding: `${pointSize16} 0`,
    textAlign: 'center',
    marginTop: pointSize16,
    border: `${pointSize1} solid ${baseColor900}`,
    display: 'block',
    textDecoration: 'none',
  },
  css`
    &:hover {
      color: ${baseColor100};
      background-color: ${baseColor900};
    }
  `,
  helveticaRegular,
  textColor900,
]);

export const sideCat = css([
  font32,
  textLineHeight,
  helveticaMedium,
  textColor900,
  { marginTop: pointSize32 },
]);

export const sideInfo = css([font20, textLineHeight, helveticaRegular, textColor600], {
  marginTop: pointSize16,
});

export const linkContainer = css`
  a:first-child {
    margin-top: 0;
  }
`;

export const tabLinkContainer = css`
  @media (max-width: 1023px) {
    display: none;
  }
`;
