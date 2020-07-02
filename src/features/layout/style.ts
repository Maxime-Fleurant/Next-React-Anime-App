import { css } from '@emotion/core';
import { baseColor900 } from '../../common/globalStyle';
import { ITheme } from './theme';

export const gridCss = css`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-gap: 1.4rem;
  grid-auto-rows: ${(76 - 23 * 1.4) / 24}rem;

  font-family: helvetica neue;
  margin: 0 2rem;
  padding: 1rem 0;

  @media (max-width: 1023px) {
    grid-auto-rows: auto;
  }
`;

export const subGrid = css`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-gap: 1.4rem;
  grid-auto-rows: ${(76 - 23 * 1.4) / 24}rem;

  font-family: helvetica neue;

  @media (max-width: 1023px) {
    grid-auto-rows: auto;
  }
`;

export const nav = (theme: ITheme) =>
  css({
    gridArea: '1 / 1 / 3 / 25',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderBottom: `0.08rem solid ${theme.base.baseColor900}`,
  });

export const logo = css({
  margin: '1rem 0',
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
