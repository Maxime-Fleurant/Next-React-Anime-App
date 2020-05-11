import { FunctionComponent, useEffect } from 'react';
import Link from 'next/link';

const Layout: FunctionComponent = ({ children }) => {
  useEffect(() => {
    // Update the document title using the browser API
    console.log('mount');
  }, []);

  return (
    <div>
      <Link href="/">Anime</Link>
      {children}
    </div>
  );
};

export default Layout;
