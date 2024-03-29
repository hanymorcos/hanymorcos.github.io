import React from 'react'
import 'normalize.css'
import '../styles/menu.css'
import '../styles/globals.css'
import 'prism-themes/themes/prism-night-owl.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import socials from '../.generated/meta/socialsTs'
import Menubar from '../components/Menubar'
import SchemeProvider from '../components/SchemeProvider'
import googleAnalytics from '@analytics/google-analytics'
import { Analytics } from 'analytics'
import { AnalyticsProvider, useAnalytics } from 'use-analytics'

/* Initialize analytics & load plugins */
const analytics = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-C4BR8LSDBE'],
    }),
  ],
})

function MyApp({ Component, pageProps }) {
  return (
    <AnalyticsProvider instance={analytics}>
      <SchemeProvider>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
          <link rel="icon" type="image/svg" sizes="16x16" href="/favicon.svg" />
          <link rel="mask-icon" href="/favicon.svg" color="#ffffff"></link>
          <link rel="manifest" href="/site.webmanifest" />

          <title>Hany Morcos </title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="msapplication-TileColor" content="#007cf0" />
          <meta name="theme-color" content="#ffff" />
          <meta name="description" content={socials.description} />
        </Head>

        <div id="outer-container">
          <Nav />
          <Menubar />
          <div id="page-wrap">
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </SchemeProvider>
    </AnalyticsProvider>
  )
}

export default MyApp
