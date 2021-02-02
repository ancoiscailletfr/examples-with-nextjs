import React from 'react'
import { useRouter } from 'next/router'

const Error = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div />
  )
}

export default Error
