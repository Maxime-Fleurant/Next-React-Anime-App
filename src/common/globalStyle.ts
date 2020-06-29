import { css } from '@emotion/core';

export const baseColor1000 = '#16191D';
export const baseColor900 = '#2D3239';
export const baseColor800 = '#454B54';
export const baseColor700 = '#5E656E';
export const baseColor600 = '#787E87';
export const baseColor500 = '#9198A1';
export const baseColor400 = '#ABB1BA';
export const baseColor300 = '#C6CBD2';
export const baseColor200 = '#E2E5E9';
export const baseColor100 = '#F0F2F4';

export const baseHelveticaRegular =
  ' HelveticaNeue, Helvetica Neue, HelveticaNeueRoman, HelveticaNeue-Roman, Helvetica Neue Roman, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial, sans-serif; font-weight:400; font-stretch:normal;';

export const pointSize1 = '0.04rem';
export const pointSize4 = '0.16rem';
export const pointSize8 = '0.32rem';
export const pointSize16 = '0.64rem';
export const pointSize24 = '1rem';
export const pointSize20 = '0.8rem';
export const pointSize32 = '1.333rem';
export const pointSize40 = '1.666rem';
export const pointSize48 = '2rem';
export const pointSize56 = '2.333rem';
export const pointSize64 = '2.666rem';
export const pointSize120 = '5rem';

export const textColor1000 = css({ color: baseColor1000 });
export const textColor900 = css({ color: baseColor900 });
export const textColor800 = css({ color: baseColor800 });
export const textColor700 = css({ color: baseColor700 });
export const textColor600 = css({ color: baseColor600 });
export const textColor500 = css({ color: baseColor500 });
export const textColor400 = css({ color: baseColor400 });
export const textColor300 = css({ color: baseColor300 });
export const textColor200 = css({ color: baseColor200 });
export const textColor100 = css({ color: baseColor100 });

export const backgroundColor1000 = css({ backgroundColor: baseColor1000 });
export const backgroundColor900 = css({ backgroundColor: baseColor900 });
export const backgroundColor800 = css({ backgroundColor: baseColor800 });
export const backgroundColor700 = css({ backgroundColor: baseColor700 });
export const backgroundColor600 = css({ backgroundColor: baseColor600 });
export const backgroundColor500 = css({ backgroundColor: baseColor500 });
export const backgroundColor400 = css({ backgroundColor: baseColor400 });
export const backgroundColor300 = css({ backgroundColor: baseColor300 });
export const backgroundColor200 = css({ backgroundColor: baseColor200 });
export const backgroundColor100 = css({ backgroundColor: baseColor100 });

export const textLineHeight = css({ lineHeight: 1.4 });
export const titleLineHeight = css({ lineHeight: 1 });

export const regularText = [css({ fontSize: pointSize24, textAlign: 'justify' }), textLineHeight];
export const fontRegular = css({ fontSize: pointSize24 });
export const font20 = css({ fontSize: pointSize20 });
export const font32 = css({ fontSize: pointSize32 });
export const font40 = css({ fontSize: pointSize40 });
export const font48 = css({ fontSize: pointSize48 });
export const font56 = css({ fontSize: pointSize56 });
export const font64 = css({ fontSize: pointSize64 });
export const font120 = css({ fontSize: pointSize120 });

export const helveticaMedium = css({
  fontFamily:
    'HelveticaNeueMedium, HelveticaNeue-Medium, Helvetica Neue Medium, HelveticaNeue, Helvetica Neue, TeXGyreHerosRegular, Helvetica, Tahoma, Geneva, Arial, sans-serif; font-weight:500; font-stretch:normal',
});

export const helveticaRegular = css({
  fontFamily: baseHelveticaRegular,
});

const flexElement = css({ display: 'flex' });

export const centerContent = [flexElement, css({ justifyContent: 'center', alignItems: 'center' })];

export const imgFit = css({
  width: '100%',
  height: '100%',
});

export const imgBorder = css({
  border: `0.04rem solid ${baseColor600}`,
});

export const switchButton = css`
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.333rem;

  input {
    opacity: 0;
    height: 0;
    width: 0;
  }

  input:checked + div:before {
    transform: translateX(1.15rem);
  }

  div {
    display: flex;
    border-radius: 1rem;
    align-items: center;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #9198a1;

    &:before {
      position: absolute;
      content: '';
      height: 0.85rem;
      width: 0.85rem;
      margin-left: 0.25rem;
      background-color: #f0f2f4;
      border-radius: 1rem;
      transition: 0.2s;
    }
  }
`;

export const footer = css({
  borderBottom: `${pointSize1} solid ${baseColor900}`,
  margin: '6rem 2rem',
});
