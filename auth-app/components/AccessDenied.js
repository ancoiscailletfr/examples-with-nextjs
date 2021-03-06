import React from 'react'
import { signIn } from 'next-auth/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AccessDenied = () => {
  return (
    <>
      <FontAwesomeIcon icon='lock' size='4x' />
      <h1>Access Denied</h1>
      <p>
        <a
          href='/api/auth/signin'
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >You must be signed in to view this page
        </a>
      </p>
    </>
  )
}

export default AccessDenied
