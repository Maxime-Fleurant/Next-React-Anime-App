import { css } from '@emotion/core';

export const gridCss = css`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-gap: 1.4rem;
  grid-auto-rows: ${(76 - 23 * 1.4) / 24}rem;

  font-family: helvetica neue;
  margin: 0 2rem;

  @media (max-width: 1023px) {
    grid-auto-rows: auto;
  }
`;

export const item = css`
  grid-area: 1 / 1 / 3 / 4;
  font-size: 1.666rem;
  line-height: 1;
  align-self: center;
  margin: 1rem 0;
`;

export const topBorder = css`
  grid-area: 1 / 1 / 3 / 25;
  border-bottom: 0.12rem solid black;
`;

export const navCss = css`
  grid-area: 1 / 4 / 3 / 25;
  place-self: center right;
`;

export const navSpanCss = css`
  span:not(:last-child) {
    margin-right: 1.666rem;
    font-size: 1.333rem;
  }
`;
