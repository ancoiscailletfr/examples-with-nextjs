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
        <span className='credit'>Photo by{' '}
          <a
            href='https://unsplash.com/@whileimout?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'
          >Gabriel Santiago
          </a> on{' '}
          <a href='https://unsplash.com/s/photos/blur?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
            Unsplash
          </a>
        </span>
      </MainStyled>
      <Footer />
    </>
  )
}

const MainStyled = styled.main([xw`
   relative min-h-screen w-full 
   flex flex-col items-center justify-center 
   bg-fixed bg-login bg-center bg-cover
`, css`
  .credit{${xw`text-xs text-white absolute bottom-10 opacity-80`}}
  .credit a{${xw`font-bold hover:underline`}}
  .container{${xw`relative mx-auto my-0 w-full max-w-screen-sm overflow-hidden`}}
`])

export default LoginLayout
