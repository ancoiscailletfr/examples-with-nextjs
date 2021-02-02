import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styled from '@emotion/styled'
import xw from 'xwind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/react'

const Header = () => {
  const [session, loading] = useSession()
  return (
    <HeaderStyled>
      <Link href='/'>
        <a>
          <div className='logo'>
            <FontAwesomeIcon icon={faLock} />
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
            )}
            {session && (
              <>
                {session.user.image && <span style={{ backgroundImage: `url(${session.user.image})` }} />}
                <span>
                  <small>Signed in as</small><br />
                  <strong>{session.user.email || session.user.name}</strong>
                </span>
                <a
                  className='button'
                  href='/api/auth/signout'
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </p>
        </div>
      </div>
      <div css={xw`absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-transparent to-gray-200`} />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header([xw`
  relative flex items-center justify-between 
  py-1 px-2 md:px-4
`, css`
  .logo{
    ${xw`w-12 h-12 rounded-md 
      bg-gradient-to-b from-gray-500 to-transparent 
      flex items-center justify-center 
      text-white text-xl`}
  }
  .button{
    ${xw`bg-gray-900 text-gray-100
      p-2 rounded-md hover[bg-gray-600 text-gray-200]`}
  }
  nav{${xw`mx-4`}}
  nav ul {
    ${xw`items-center flex text-gray-500`}
  }
  nav li {${xw`p-2 hover[text-gray-800 underline]`}}
  
  
`])

export default Header
