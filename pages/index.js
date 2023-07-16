import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Mid from './mid'
import WhoWeAre from './whoWeAre'
import MixProsuct from './mixProsuct'
import FamileyClick from './famileyClick'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kshianki: Discover Bedding Bliss for Every Night!</title>
        <meta name='description' content='Kshianki: Discover Bedding Bliss for Every Night!'></meta>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Mid/>
      <WhoWeAre/>
      <MixProsuct/>
      <FamileyClick/>
    </>
  )
}
