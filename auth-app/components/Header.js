import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

const Header = () => {
  const [session, loading] = useSession()
  return (
    <header>
      <div>
        <p>
          {!session && (
            <>
              <span>You are not signed in</span>
              <a
                href='/api/auth/signin'
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session && (
            <>
              {session.user.image && <span style={{ backgroundImage: `url(${session.user.image})` }} />}
              <span>
                <small>Signed in as</small><br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <a
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
      <nav>
        <ul>
          <li><Link href='/'><a>Home</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
