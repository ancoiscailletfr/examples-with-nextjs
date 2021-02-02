import { providers, csrfToken, signIn } from 'next-auth/client'

export default function SignIn ({ providers, csrfToken }) {
  return (
    <>
      <form method='post' action='/api/auth/signin/email'>
        <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
        <label>
          Email address
          <input type='text' id='email' name='email' />
        </label>
        <button type='submit'>Sign in with Email</button>
      </form>
      {Object.values(providers).filter(p => p.name !== 'Email').map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}
    </>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    csrfToken: await csrfToken(context)
  }
}
