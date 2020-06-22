import { FunctionComponent } from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';

import { gridCss, navCss, nav, navTab } from './style';
import {
  font64,
  font20,
  font40,
  helveticaMedium,
  textColor900,
  switchButton,
  helveticaRegular,
} from '../../common/globalStyle';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div css={gridCss}>
      <div css={[nav]}>
        <Link href="/">
          <span css={[font64, helveticaMedium, textColor900]}>
            {'Anime '}
            <span css={font20}>アニメ</span>
          </span>
        </Link>
        <div css={navCss}>
          <Link href="/animes">
            <div css={[font40, helveticaRegular, textColor900, css({ marginRight: '2rem' })]}>
              {'Browse '}
              <span css={font20}>ブラウズ</span>
            </div>
          </Link>

          <label css={switchButton}>
            <input type="checkbox" id="fldk" />
            <div className="tt" />
          </label>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Layout;
