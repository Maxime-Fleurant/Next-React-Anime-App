import { FunctionComponent } from 'react';
import { css } from '@emotion/core';

import { Cell } from '../common/components/cell';
import { imgFit, imgBorder } from '../common/globalStyle';

const Index: FunctionComponent = () => {
  return (
    <>
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 7 }}
        tabPos={{ rowStart: 4, columnStart: 1, columnEnd: 7 }}
        extraCss={[imgBorder]}
        ratio={0.7}
      >
        <img src="/img/akira.jpg" alt="" css={[imgFit]} />
      </Cell>
    </>
  );
};

export default Index;
