import React from 'react'
import Head from 'next/head'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import xw from 'xwind'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Authentification App with next-auth</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main css={xw`py-20 px-0 flex flex-col justify-center items-center flex-1`}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
