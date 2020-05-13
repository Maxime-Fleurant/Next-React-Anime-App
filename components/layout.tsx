import { FunctionComponent, useEffect } from 'react';
import Link from 'next/link';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <a>Anime</a>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
