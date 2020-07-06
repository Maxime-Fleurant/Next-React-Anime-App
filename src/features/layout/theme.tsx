import { css, SerializedStyles } from '@emotion/core';
import { FunctionComponent } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { useSelector } from 'react-redux';
import { TStore } from '../../app/redux';
import {
  baseColor900,
  baseColor200,
  baseColor1000,
  baseColor800,
  baseColor700,
  baseColor600,
  baseColor500,
  baseColor400,
  baseColor300,
  baseColor100,
} from '../../common/globalStyle';

// TYPE
type TTheme = FunctionComponent;

export interface ITheme {
  text: {
    textColor1000: SerializedStyles;
    textColor900: SerializedStyles;
    textColor800: SerializedStyles;
    textColor700: SerializedStyles;
    textColor600: SerializedStyles;
    textColor500: SerializedStyles;
    textColor400: SerializedStyles;
    textColor300: SerializedStyles;
    textColor200: SerializedStyles;
    textColor100: SerializedStyles;
  };
  background: {
    backgroundColor1000: SerializedStyles;
    backgroundColor900: SerializedStyles;
    backgroundColor800: SerializedStyles;
    backgroundColor700: SerializedStyles;
    backgroundColor600: SerializedStyles;
    backgroundColor500: SerializedStyles;
    backgroundColor400: SerializedStyles;
    backgroundColor300: SerializedStyles;
    backgroundColor200: SerializedStyles;
    backgroundColor100: SerializedStyles;
  };
  base: {
    baseColor1000: string;
    baseColor900: string;
    baseColor800: string;
    baseColor700: string;
    baseColor600: string;
    baseColor500: string;
    baseColor400: string;
    baseColor300: string;
    baseColor200: string;
    baseColor100: string;
  };
  imgBorder: SerializedStyles;
}

// HELPER
const base = {
  baseColor1000: '#16191D',
  baseColor900: '#2D3239',
  baseColor800: '#454B54',
  baseColor700: '#5E656E',
  baseColor600: '#787E87',
  baseColor500: '#9198A1',
  baseColor400: '#ABB1BA',
  baseColor300: '#C6CBD2',
  baseColor200: '#E2E5E9',
  baseColor100: '#F0F2F4',
};

// REACT
export const Theme: TTheme = ({ children }) => {
  const stateFormSelection = useSelector((state: TStore) => {
    return state.lightReducer.light;
  });

  let theme = {
    text: {
      textColor1000: css({ color: baseColor1000 }),
      textColor900: css({ color: baseColor900 }),
      textColor800: css({ color: baseColor800 }),
      textColor700: css({ color: baseColor700 }),
      textColor600: css({ color: baseColor600 }),
      textColor500: css({ color: baseColor500 }),
      textColor400: css({ color: baseColor400 }),
      textColor300: css({ color: baseColor300 }),
      textColor200: css({ color: baseColor200 }),
      textColor100: css({ color: baseColor100 }),
    },
    background: {
      backgroundColor1000: css({ backgroundColor: baseColor1000 }),
      backgroundColor900: css({ backgroundColor: baseColor900 }),
      backgroundColor800: css({ backgroundColor: baseColor800 }),
      backgroundColor700: css({ backgroundColor: baseColor700 }),
      backgroundColor600: css({ backgroundColor: baseColor600 }),
      backgroundColor500: css({ backgroundColor: baseColor500 }),
      backgroundColor400: css({ backgroundColor: baseColor400 }),
      backgroundColor300: css({ backgroundColor: baseColor300 }),
      backgroundColor200: css({ backgroundColor: baseColor200 }),
      backgroundColor100: css({ backgroundColor: baseColor100 }),
    },
    base: {
      baseColor1000: '#16191D',
      baseColor900: '#2D3239',
      baseColor800: '#454B54',
      baseColor700: '#5E656E',
      baseColor600: '#787E87',
      baseColor500: '#9198A1',
      baseColor400: '#ABB1BA',
      baseColor300: '#C6CBD2',
      baseColor200: '#E2E5E9',
      baseColor100: '#F0F2F4',
    },
    imgBorder: css({
      border: `0.04rem solid ${base.baseColor600}`,
    }),
  };

  if (!stateFormSelection) {
    theme = {
      text: {
        textColor1000: css({ color: baseColor100 }),
        textColor900: css({ color: baseColor200 }),
        textColor800: css({ color: baseColor300 }),
        textColor700: css({ color: baseColor400 }),
        textColor600: css({ color: baseColor500 }),
        textColor500: css({ color: baseColor600 }),
        textColor400: css({ color: baseColor700 }),
        textColor300: css({ color: baseColor800 }),
        textColor200: css({ color: baseColor900 }),
        textColor100: css({ color: baseColor1000 }),
      },
      background: {
        backgroundColor1000: css({ backgroundColor: baseColor100 }),
        backgroundColor900: css({ backgroundColor: baseColor200 }),
        backgroundColor800: css({ backgroundColor: baseColor300 }),
        backgroundColor700: css({ backgroundColor: baseColor400 }),
        backgroundColor600: css({ backgroundColor: baseColor500 }),
        backgroundColor500: css({ backgroundColor: baseColor600 }),
        backgroundColor400: css({ backgroundColor: baseColor700 }),
        backgroundColor300: css({ backgroundColor: baseColor800 }),
        backgroundColor200: css({ backgroundColor: baseColor900 }),
        backgroundColor100: css({ backgroundColor: baseColor1000 }),
      },
      base: {
        baseColor1000: '#F0F2F4',
        baseColor900: '#E2E5E9',
        baseColor800: '#C6CBD2',
        baseColor700: '#ABB1BA',
        baseColor600: '#9198A1',
        baseColor500: '#787E87',
        baseColor400: '#5E656E',
        baseColor300: '#454B54',
        baseColor200: '#2D3239',
        baseColor100: '#16191D',
      },
      imgBorder: css({
        border: `0.04rem solid transparent`,
      }),
    };
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
