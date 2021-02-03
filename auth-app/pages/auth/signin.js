import { providers, csrfToken, signIn } from 'next-auth/client'
import xw from 'xwind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export default function SignIn ({ providers, csrfToken }) {
  return (
    <div css={xw`flex flex-col justify-center items-center`}>
      <h1 css={xw`text-5xl font-extrabold text-center mb-12 text-white leading-relaxed`}>Sign in to AuthApp{' '}
        <FontAwesomeIcon icon='lock' />
      </h1>
      <div css={xw`w-full max-w-sm h-auto flex flex-col bg-white rounded-xl p-4 shadow-xl`}>
        <form
          css={xw`flex flex-col justify-center items-center pt-2 pb-4 border-b border-gray-200 px-4`}
          method='post'
          action='/api/auth/signin/email'
        >
          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
          <label css={xw`flex items-center rounded-md border border-gray-400 my-0 mx-auto w-full shadow-inner`}>
            <span css={xw`my-0 mx-3 inline-flex text-center text-gray-700`}>
              <FontAwesomeIcon icon={['far', 'envelope']} />
            </span>
            <div css={xw`h-10 my-0 mx-auto relative w-full leading-10`}>
              <input
                css={xw`rounded-md bg-transparent block`}
                type='text' id='email' name='email'
                placeholder='your@email.com'
              />
            </div>
          </label>
          <ButtonStyled type='submit' css={xw`bg-gray-800`}>Continue</ButtonStyled>
        </form>
        <div css={xw`flex flex-col justify-center items-center pt-2 pb-4 px-4`}>
          {Object.values(providers).filter(p => p.name !== 'Email').map(provider => (
            <ButtonStyled
              provider={provider.id}
              key={provider.name}
              css={xw`flex items-center`}
              onClick={() => signIn(provider.id)}
            >
              <span css={xw`absolute my-0 mx-3 inline-flex text-center text-white`}>
                <FontAwesomeIcon icon={['fab', provider.id]} />
              </span>
              <span css={xw`my-0 mx-auto`}>
                Continue with {provider.name}
              </span>
            </ButtonStyled>
          ))}
        </div>
      </div>
    </div>
  )
}

const ButtonStyled = styled.button([xw`
  rounded text-white py-2 w-full mt-3
`, props => {
  switch (props.provider) {
    case 'google':
      return css`background-color: #DB4437;`
    case 'twitter':
      return css`background-color: #1DA1F2;`
    case 'github':
      return css`background-color: #333`
    case 'facebook':
      return css`background-color: #4267B2;`
    default:
      return xw`bg-blue-600`
  }
}])

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    csrfToken: await csrfToken(context)
  }
}

SignIn.layout = 'login'
