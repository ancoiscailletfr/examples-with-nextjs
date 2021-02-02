import React from 'react'
import xw from 'xwind'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { dependencies } from '../package.json'

const Footer = () => {
  return (
    <FooterStyled>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <img src='/vercel.svg' alt='Vercel Logo' />
      </a>
      <span css={xw`mr-2`}>&</span>
      <a
        href='https://next-auth.js.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        <b>NextAuth</b>{' '}
        <img src='/next-auth.png' alt='NextAuth Logo' />
      </a>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer([xw`
  w-full h-36 
  border-t border-gray-200 
  flex justify-center items-center
`, css`
  a {${xw`flex justify-center items-center`}}
  img{${xw`mx-2 h-4`}}
`])

export default Footer
