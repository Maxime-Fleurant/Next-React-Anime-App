import { FunctionComponent } from 'react';
import Link from 'next/link';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <a>Anime World</a>
      </Link>

      <Link href="/animes">
        <a>Anime</a>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
