import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Space_Grotesk} from '@next/font/google';
import {Analytics} from '@vercel/analytics/react';
import Layout from '../components/Layout';
import ScrollToTop from "../components/ScrollToTop";

const inter = Space_Grotesk({subsets: ['latin']})

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ScrollToTop/>
      </main>
      <Analytics/>
    </>
  )
}
