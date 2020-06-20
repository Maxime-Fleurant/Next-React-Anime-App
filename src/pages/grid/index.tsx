import { css } from '@emotion/core';

import { useRef, useEffect, useState } from 'react';
import { Cell } from '../../common/components/cell';

const Grid = () => {
  const testRef = useRef<HTMLDivElement>(null);
  const [imageWidth, updateImageWidth] = useState(0);

  const handleResize = () => {
    if (testRef && testRef.current) {
      updateImageWidth(testRef.current.offsetWidth);
    }
  };

  const cssImage = css`
    @media (max-width: 1023px) {
      height: ${imageWidth / 1.55}px;
    }
  `;

  useEffect(() => {
    if (testRef && testRef.current) {
      updateImageWidth(testRef.current.offsetWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      console.log('remove ');
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log('fdlk');
  return <Cell></Cell>;
};

export default Grid;
