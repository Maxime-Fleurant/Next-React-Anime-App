import { css } from '@emotion/core';
import { findLastIndex } from 'lodash';
import { backgroundColor900, baseColor900 } from '../../common/globalStyle';

export const gridCss = css`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-gap: 1.4rem;
  grid-auto-rows: ${(76 - 23 * 1.4) / 24}rem;

  font-family: helvetica neue;
  margin: 1rem 2rem;

  @media (max-width: 1023px) {
    grid-auto-rows: auto;
    // grid-template-columns: repeat(12, 1fr);
  }
`;

export const nav = css({
  gridArea: '1 / 1 / 3 / 25',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `0.08rem solid ${baseColor900}`,
});

export const navTab = css`
  @media (max-width: 1023px) {
    grid-area: 1 / 1 / 3 / 13;
  }
`;

export const navCss = css`
  display: flex;
  align-items: center;
`;

export const navSpanCss = css`
  span:not(:last-child) {
    margin-right: 1.666rem;
    font-size: 1.333rem;
  }
`;
