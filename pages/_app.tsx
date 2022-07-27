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
import PlausibleProvider from 'next-plausible'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <PlausibleProvider domain="hanymorcos.github.io" trackOutboundLinks>
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
    </PlausibleProvider>
  )
}

export default MyApp
