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
        lang="en"
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
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="Description" content="Brutalist Anime Demo" />
          <meta name="theme-color" content="#F0F2F4" />
          <link rel="apple-touch-icon" href="/icons/90icon-.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
