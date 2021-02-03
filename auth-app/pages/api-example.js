import React from 'react'
import xw from 'xwind'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const ApiExample = () => {
  return (
    <div css={xw`w-full`}>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p><em>You must be signed in to see responses.</em></p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <ExempleStyled src='/api/examples/session' />
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      <ExempleStyled src='/api/examples/jwt' />
    </div>
  )
}

const ExempleStyled = styled.iframe([xw`
  rounded-md bg-gray-300 text-white w-full
`, css`
  filter: invert(1)
`])

export default ApiExample
