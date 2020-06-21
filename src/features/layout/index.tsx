import { FunctionComponent } from 'react';
import Link from 'next/link';
import { BarcodeOutlined } from '@ant-design/icons';
import { gridCss, topBorder, item, navCss, navSpanCss } from './style';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div css={gridCss}>
      <div css={topBorder} />
      <div css={item}>
        Design,
        <br />
        Compute.
      </div>
      <div css={navCss}>
        <span css={navSpanCss}>
          <span>
            <Link href="/animes">Design</Link>
          </span>
          <span>
            <Link href="/grid">Compute</Link>
          </span>
          <span>Project</span>
          <span>Life</span>
          <BarcodeOutlined />
        </span>
      </div>
      {children}
    </div>
  );
};

export default Layout;
