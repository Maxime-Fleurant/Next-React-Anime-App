import { css } from '@emotion/core';
import {
  pointSize24,
  pointSize4,
  baseHelveticaRegular,
  baseColor200,
} from '../../../../common/globalStyle';

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

export const globalAnt = css`
  .ant-select-item-option-content {
    font-size: 1rem;
    font-family: ${baseHelveticaRegular};
  }
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border: none;
    box-shadow: none;
  }

  .ant-select-multiple .ant-select-selector::after {
    line-height: 1rem;
  }

  .ant-select-item-option-active: not(.ant-select-item-option-disabled) {
    background-color: ${baseColor200};
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${baseColor200};
  }
`;
