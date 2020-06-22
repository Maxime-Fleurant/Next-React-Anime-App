import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import { css } from '@emotion/core';
import { backgroundColor100 } from '../common/globalStyle';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <html
        css={[
          css`
             {
              font-size: 1.25vw;
              @media (max-width: 1023px) {
                font-size: 20px;
              }
            }
          `,
          backgroundColor100,
        ]}
      >
        <Head />
        <body css={backgroundColor100}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
