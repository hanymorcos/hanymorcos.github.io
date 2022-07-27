import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { GA_TRACKING_ID } from "../utils/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
  {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                      async
                      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7095965118332792"
                      crossOrigin="anonymous"
                    ></script>
            <script
                      async
                      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                    `
                      }}
                    />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
