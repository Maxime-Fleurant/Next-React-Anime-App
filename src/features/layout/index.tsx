import { useDispatch } from 'react-redux';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Head from 'next/head';

import { gridCss, navCss, nav, logo, logoRes } from './style';
import {
  font64,
  font20,
  font40,
  helveticaMedium,
  switchButton,
  helveticaRegular,
  titleLineHeight,
  footer,
} from '../../common/globalStyle';

import { updateLight } from './redux/themeSlice';
import { ITheme } from './theme';
import { normalize } from '../splash/normalize';

const Layout: FunctionComponent = ({ children }) => {
  const dispacth = useDispatch();
  const changeHandler = (): void => {
    dispacth(updateLight());
  };

  const theme = useTheme<ITheme>();

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Global
        styles={css`
          ${normalize}
          body {
            ${theme.background.backgroundColor100}
          }
        `}
      />
      <div css={theme.background.backgroundColor100}>
        <div css={gridCss}>
          <div css={[nav(theme)]}>
            <Link href="/">
              <span css={[font64, helveticaMedium, theme.text.textColor900, titleLineHeight, logo]}>
                {'Anime '}
                <span css={font20}>アニメ</span>
              </span>
            </Link>

            <Link href="/">
              <span
                css={[font64, helveticaMedium, theme.text.textColor900, titleLineHeight, logoRes]}
              >
                {'A '}
                <span css={font20}>アニメ</span>
              </span>
            </Link>

            <span css={navCss}>
              <Link href="/animes">
                <span
                  css={[
                    font40,
                    helveticaRegular,
                    theme.text.textColor900,
                    css({ marginRight: '2rem', cursor: 'pointer' }),
                  ]}
                >
                  {'Browse '}
                  <span css={font20}>ブラウズ</span>
                </span>
              </Link>

              <label css={switchButton(theme)}>
                qsd
                <input onChange={changeHandler} type="checkbox" />
                <div />
              </label>
            </span>
          </div>

          {children}
        </div>
        <div css={footer(theme)} />
      </div>
    </>
  );
};

export default Layout;
