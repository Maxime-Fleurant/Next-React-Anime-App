import { FC } from 'react';
import Link from 'next/link';

const Index: FC = () => {
  return (
    <div>
      <Link href="/animes/[id]" as="/animes/16498">
        <a>msdl</a>
      </Link>

      <Link href="/animes/[id]" as="/animes/118465">
        <a>rr</a>
      </Link>
    </div>
  );
};

export default Index;
