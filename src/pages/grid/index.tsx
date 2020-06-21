import { Cell } from '../../common/components/cell';
import { splashImg1 } from './style';
import { regularText } from '../../common/globalStyle';
import { logo } from './logo';

const Grid = () => {
  return (
    <>
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 1, columnEnd: 7 }}
        tabPos={{ rowStart: 4, rowEnd: 8, columnStart: 1, columnEnd: 13 }}
        ratio={1.55}
        extraCss={[splashImg1]}
      />
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 7, columnEnd: 13 }}
        tabPos={{ rowStart: 4, rowEnd: 8, columnStart: 13, columnEnd: 25 }}
        ratio={1.55}
      >
        {logo}
      </Cell>
      <Cell
        deskPos={{ rowStart: 8, rowEnd: 12, columnStart: 1, columnEnd: 13 }}
        tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 1, columnEnd: 25 }}
        extraCss={[regularText]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia massa eget malesuada
        consequat. Nam molestie eros non neque condimentum euismod eget id lectus. Proin vel ex
        quam. Duis non vestibulum enim, et interdum sem. Nam GraphQL nec libero in Aliqum eget quam
        massa. Morbi volutpat elit vitae sem fermentum malesuada. Nullam aliquet tellus sit amet
        lacus pharetra elementum. Nulla eget libero luctus, Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Morbi lacinia massa eget Nulla eget libero luctus, Lorem ipsum dolor sit
        amet,
      </Cell>
      <Cell
        deskPos={{ rowStart: 12, rowEnd: 14, columnStart: 13, columnEnd: 25 }}
        tabPos={{ rowStart: 10, rowEnd: 11, columnStart: 1, columnEnd: 25 }}
        extraCss={[regularText]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia massa eget malesuada
        consequat. Nam molestie eros non neque condimentum euismod eget id lectus. Proin vel ex
        quam.
      </Cell>
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 12, columnStart: 13, columnEnd: 25 }}
        tabPos={{ rowStart: 9, rowEnd: 10, columnStart: 1, columnEnd: 25 }}
        ratio={1.55}
        extraCss={[splashImg1]}
      />
    </>
  );
};
export default Grid;
