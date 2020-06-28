import { css } from '@emotion/core';
import { pointSize16, pointSize1, baseColor900 } from '../../../../common/globalStyle';

export const charDesc = css([
  { overflowY: 'scroll' },
  { marginTop: pointSize16 },
  css`
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  `,
]);

export const characterSecondName = css({ marginTop: pointSize16 });

export const descBack = css({ textAlign: 'center', cursor: 'pointer' });

export const picCharact = css({ cursor: 'pointer' });

export const returnButton = css({
  padding: `${pointSize16} 0`,
  border: `${pointSize1} solid ${baseColor900}`,
});
