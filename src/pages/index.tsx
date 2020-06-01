import { FC } from 'react';
import Link from 'next/link';

const Index: FC = () => {
  return (
    <div>
      <Link href="/globalanimes">
        <a>global</a>
      </Link>

      <Link href="/test1">
        <a>test1</a>
      </Link>

      <Link href="/test2">
        <a>test2</a>
      </Link>
    </div>
  );
};

export default Index;
