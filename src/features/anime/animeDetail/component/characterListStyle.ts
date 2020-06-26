import { css } from '@emotion/core';

export const charDesc = css([
  { overflowY: 'scroll' },
  css`
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
  `,
]);

export const descBack = css({ textAlign: 'right', cursor: 'pointer' });

export const picCharact = css({ cursor: 'pointer' });
