import { css, SerializedStyles } from '@emotion/core';
import { FunctionComponent, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { useSelector } from 'react-redux';
import { TStore } from '../../app/redux';
import { baseColor900, baseColor200 } from '../../common/globalStyle';

// TYPE
type TTheme = FunctionComponent;

export interface ITheme {
  colors: {
    primary: SerializedStyles;
  };
}

// REACT
export const Theme: TTheme = ({ children }) => {
  let theme = {
    colors: {
      primary: css({ color: baseColor900 }),
    },
  };

  const stateFormSelection = useSelector((state: TStore) => {
    return state.lightReducer.light;
  });

  // useEffect(() => {
  //   theme = {
  //     colors: {
  //       primary: css({ color: baseColor200 }),
  //     },
  //   };
  // }, [stateFormSelection]);

  if (!stateFormSelection) {
    theme = {
      colors: {
        primary: css({ color: baseColor200 }),
      },
    };
  }

  console.log(theme.colors.primary, 'fdlfkdflkd');

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
