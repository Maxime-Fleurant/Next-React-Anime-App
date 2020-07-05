import Document, { Head, Main, NextScript } from 'next/document';

import { extractCritical } from 'emotion-server';

import { css } from '@emotion/core';

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

              @media (max-width: 767px) {
                font-size: 12px;
              }
            }
          `,
        ]}
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
