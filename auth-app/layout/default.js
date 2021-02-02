import React from 'react'
import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Authentification App with next-auth</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
