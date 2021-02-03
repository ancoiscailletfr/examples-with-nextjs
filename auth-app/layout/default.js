import React from 'react'
import Head from 'next/head'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import xw from 'xwind'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Authentification App with next-auth</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <MainStyled>
        <div className='container'>
          {children}
        </div>
      </MainStyled>
      <Footer />
    </>
  )
}

const MainStyled = styled.main(xw`
  py-10 px-0 flex flex-col justify-center items-center flex-1
`, css`
  h1{${xw`text-4xl my-5`}}
  h2{${xw`text-3xl my-4`}}
  h4{${xw`text-xl my-2`}}
  p, ul, ol, blockquote{${xw`my-6`}}
  li{${xw`break-all`}}
  ul {${xw`mb-3 ml-6`}}
  li+li, ul ul{${xw`mt-1`}}
  pre{${xw`bg-gray-800 text-gray-100 px-5 py-3 m-0 text-sm rounded-md w-auto`}}
  a{${xw`text-green-600 hover:underline`}}
  .container{
    ${xw`min-h-screen px-2 flex flex-col justify-center items-center`}
  }
`)

export default DefaultLayout
