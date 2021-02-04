import React from 'react'
import Head from 'next/head'
import xw from 'xwind'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Footer from '@/components/Footer'

const LoginLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Sign in | Authentification App with next-auth</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainStyled>
        <div className='container'>
          {children}
        </div>
      </MainStyled>
      <Footer />
    </>
  )
}

const MainStyled = styled.main([xw`
   relative min-h-screen w-full 
   flex flex-col items-center justify-center 
   bg-gradient-to-br from-orange-400 via-orange-800 to-blue-900 bg-fixed bg-cover
`, css`
  .container{${xw`relative mx-auto my-0 w-full max-w-screen-sm overflow-hidden`}}
`])

export default LoginLayout
