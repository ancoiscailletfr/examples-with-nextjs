import React from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import styled from '@emotion/styled'
import xw from 'xwind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/react'
import UserDetails from '@/components/UserDetails'

const Header = () => {
  const [session, loading] = useSession()
  return (
    <HeaderStyled>
      <Link href='/'>
        <a>
          <div className='logo'>
            {session ? <FontAwesomeIcon icon='unlock' /> : <FontAwesomeIcon icon='lock' />}
          </div>
        </a>
      </Link>
      <div css={xw`flex items-center`}>
        <nav>
          <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/client'><a>Client</a></Link></li>
            <li><Link href='/server'><a>Server</a></Link></li>
            <li><Link href='/protected'><a>Restricted Area</a></Link></li>
            <li><Link href='/api-example'><a>API</a></Link></li>
          </ul>
        </nav>
        <div>
          <p>
            {!session && (
              loading
                ? <span className='button'><FontAwesomeIcon icon='spinner' css={xw`animate-spin mx-5`} /></span>
                : (
                  <a
                    className='button'
                    href='/api/auth/signin'
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}
                  >
                    Sign in
                  </a>
                  )
            )}
            {session && <UserDetails user={session.user} />}
          </p>
        </div>
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header([xw`
  relative flex items-center justify-between
  py-1 px-2 md:px-4
`, css`
  .logo{
    ${xw`w-12 h-12 rounded-tr-2xl rounded-bl-2xl
      rounded-tl-sm rounded-br-sm
      bg-gradient-to-b from-gray-500 to-transparent
      flex items-center justify-center
      text-white text-xl`}
  }
  .button{
    ${xw`flex justify-center items-center bg-gray-700 text-gray-100
      p-2 rounded-md hover:bg-green-600`}
  }
  nav{${xw`mx-4 hidden sm:block`}}
  nav ul {
    ${xw`items-center flex text-gray-500 uppercase font-light tracking-tighter`}
  }
  nav li {${xw`p-2 hover[text-green-600 underline]`}}


`])

export default Header
