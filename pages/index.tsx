import { FC } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

const Index: FC = () => {
  return (
    <div>
      <Link href="/animes">animes</Link>
      <Link href="/animes/1">animes/1</Link>
    </div>
  );
};

export default Index;
