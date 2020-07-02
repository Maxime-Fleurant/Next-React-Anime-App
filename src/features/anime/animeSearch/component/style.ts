import { css } from '@emotion/core';
import {
  pointSize24,
  pointSize4,
  baseHelveticaRegular,
  baseColor200,
  helveticaRegular,
  pointSize20,
  pointSize16,
  backgroundColor200,
  backgroundColor100,
  pointSize1,
  baseColor900,
  textColor900,
  font32,
  titleLineHeight,
  helveticaMedium,
} from '../../../../common/globalStyle';
import { ITheme } from '../../../layout/theme';

export const itemSelect = css`
  width: 100%;
  margin: 0;
  .ant-form-item-control-input {
    min-height: 0;
  }
  .ant-select-selector {
    font-size: ${pointSize24};
    padding: ${pointSize4} ${pointSize4};
    margin: 0;
    line-height: 1;
    border: none;
  }
`;

export const selectAnt = css`
  .ant-select-item ant-select-item-option ant-select-item-option-active {
    font-size: ${pointSize24};
  }
`;

export const inputText = (theme: ITheme) => [
  css({
    fontSize: '1rem',
    outline: 'none',
    border: 'none',
    fontFamily: baseHelveticaRegular,
    width: '100%',
    height: '100%',
    padding: `0  `,
    boxSizing: 'border-box',
    borderBottom: `${pointSize1} solid ${theme.base.baseColor900}`,
  }),
  theme.background.backgroundColor100,
  theme.text.textColor900,
];

export const selectStyle = (theme: ITheme) => [
  css({
    fontSize: '1rem',
    height: '100%',
    outline: 'none',
    border: 'none',
    width: '100%',
    fontFamily: baseHelveticaRegular,
  }),
  theme.background.backgroundColor100,
  theme.text.textColor900,
];

export const inputLabel = css([[font32, titleLineHeight, helveticaMedium]]);
