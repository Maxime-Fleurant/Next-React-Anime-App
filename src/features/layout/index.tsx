import { useSelector, useDispatch } from 'react-redux';
import { FunctionComponent, useEffect } from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';
import { ThemeProvider, useTheme } from 'emotion-theming';

import { gridCss, navCss, nav, navTab, logo } from './style';
import {
  font64,
  font20,
  font40,
  helveticaMedium,
  textColor900,
  switchButton,
  helveticaRegular,
  titleLineHeight,
  footer,
} from '../../common/globalStyle';

import { updateLight } from './redux/themeSlice';
import { ITheme } from './theme';

const Layout: FunctionComponent = ({ children }) => {
  const dispacth = useDispatch();
  const changeHandler = () => {
    dispacth(updateLight());
  };

  const theme = useTheme<ITheme>();

  return (
    <>
      <div css={gridCss}>
        <div css={[nav]}>
          <Link href="/">
            <span css={[font64, helveticaMedium, theme.colors.primary, titleLineHeight, logo]}>
              {'Anime '}
              <span css={font20}>アニメ</span>
            </span>
          </Link>

          <span css={navCss}>
            <Link href="/animes">
              <span css={[font40, helveticaRegular, textColor900, css({ marginRight: '2rem' })]}>
                {'Browse '}
                <span css={font20}>ブラウズ</span>
              </span>
            </Link>

            <label css={switchButton}>
              <input onChange={changeHandler} type="checkbox" id="fldk" />
              <div className="tt" />
            </label>
          </span>
        </div>

        {children}
      </div>
      <div css={footer} />
    </>
  );
};

export default Layout;
