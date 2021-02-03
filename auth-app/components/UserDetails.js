import React, { useState } from 'react'
import { signOut } from 'next-auth/client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import xw from 'xwind'
import { css } from '@emotion/react'

const UserDetails = ({ user }) => {
  const [showMenuDetails, setShowMenuDetails] = useState(false)
  const toggleMenuDetails = () => {
    setShowMenuDetails(s => !s)
  }
  return (
    <UserDetailsStyled>
      <details>
        <summary role='button' aria-label='View profile and more' onClick={() => toggleMenuDetails()}>
          {user.image
            ? <img alt={user.name} width={30} height={30} src={user.image} />
            : <span><FontAwesomeIcon icon='user' /></span>}
          {showMenuDetails ? <FontAwesomeIcon icon='caret-up' /> : <FontAwesomeIcon icon='caret-down' />}
        </summary>
      </details>
      {showMenuDetails && (
        <details-menu>
          <Link href='/profile'>
            <a className='menuItem'>
              Signed in as{' '}
              <strong>{user.email || user.name}</strong>
            </a>
          </Link>
          <div css={xw`border-t border-gray-500 my-2`} />
          <a
            className='menuItem'
            href='/api/auth/signout'
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Sign out
          </a>
        </details-menu>
      )}
    </UserDetailsStyled>
  )
}

const UserDetailsStyled = styled.div([xw`
  flex items-center relative
`, css`
  summary {
    ${xw`list-none flex items-center focus[outline-none]`}
  }
  summary::-webkit-details-marker {
    ${xw`hidden`}
  }
  summary img, summary span{
    ${xw`rounded-full mr-1 w-8 h-8`}
  }
  summary span{
    ${xw`flex justify-center items-center bg-gray-400 text-gray-100`}
  }
  details-menu{
    ${xw`absolute top-full right-0 z-10 py-2 mt-1 list-none rounded-md bg-gray-800`};
    width: 180px;
  }
  .menuItem{
    ${xw`px-3 py-2 mb-2 mt-1 block text-gray-100 hover:bg-green-600`}
    strong{
      ${xw`truncate inline-block max-w-full`}
    }
  }
`])

export default UserDetails
