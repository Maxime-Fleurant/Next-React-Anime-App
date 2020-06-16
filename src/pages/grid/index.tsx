import { css } from '@emotion/core';
import { BarcodeOutlined } from '@ant-design/icons';

const gridCss = css`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: ${(76 - 23) / 24}rem;

  font-family: helvetica neue;
  margin: 0 2rem;

  // @media (max-width: 1023px) {
  //   grid-gap: 1rem;
  //   grid-auto-rows: auto;
  // }
`;

const item = css`
  grid-area: 1 / 1 / 3 / 4;
  font-size: 1.666rem;
  line-height: 1;
  align-self: center;
  margin: 1rem 0;
`;

const topBorder = css`
  grid-area: 1 / 1 / 3 / 25;
  border-bottom: 0.12rem solid black;
`;

const navCss = css`
  grid-area: 1 / 4 / 3 / 25;
  place-self: center right;
`;

const navSpanCss = css`
  span:not(:last-child) {
    margin-right: 1.666rem;
    font-size: 1.333rem;
  }
`;

const presBlockCss = css`
  grid-area: 5 / 7 / 9/ 13;
  background-color: red;
`;

const textBLock = css`
  grid-area: 5 / 1 / 9/ 7;
  font-size: 1rem;
  line-height: 1.4;
  text-align: justify;
`;

const textBlock2 = css({
  gridArea: '5 / 13 / 13/ 25',
  fontSize: '1rem',
  textAlign: 'justify',
  lineHeight: 1.4,
});

const imageBlock1 = css({ backgroundColor: 'red', gridArea: '9 / 7 / 13/ 13' });

const Grid = () => {
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
          <span>Design</span>
          <span>Compute</span>
          <span>Project</span>
          <span>Life</span>
          <BarcodeOutlined />
        </span>
      </div>
      <div css={presBlockCss} />
      <div css={textBLock}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
      </div>
      <div css={imageBlock1} />
      <div css={textBlock2}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old. Richard
        McClintock,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
        in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
        McClintock,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
        in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
        McClintock,
      </div>
      <div css={imageBlock1} />
      <div css={imageBlock1} />
      <div css={imageBlock1} />
      <div css={imageBlock1} />
    </div>
  );
};

export default Grid;
