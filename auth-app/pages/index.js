import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToHtml from '@/lib/markdownToHtml'
import xw from 'xwind'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export default function Home ({ readMe }) {
  return (
    <div css={xw`min-h-screen px-2 flex flex-col justify-center items-center`}>
      <MarkdownStyled
        dangerouslySetInnerHTML={{ __html: readMe }}
      />
    </div>
  )
}

const MarkdownStyled = styled.div(css`
  h1{${xw`text-4xl my-5`}}
  h2{${xw`text-3xl my-4`}}
  h4{${xw`text-xl my-2`}}
  p, ul, ol, blockquote{${xw`my-6`}}
  li{${xw`break-all`}}
  ul {${xw`mb-3 ml-6`}}
  li+li{${xw`mt-1`}}
  ul ul{${xw`mt-1`}}
  pre{${xw`bg-gray-800 text-gray-100 px-5 py-3 m-0 text-sm rounded-md w-auto`}}
  a{${xw`text-green-600 hover:underline`}}
  
`)

export async function getStaticProps () {
  const readMeFullPath = join(process.cwd(), 'README.md')
  const readMeContents = fs.readFileSync(readMeFullPath, 'utf8')
  const { content } = matter(readMeContents)
  const html = await markdownToHtml(content || '')
  return {
    props: {
      readMe: html
    }
  }
}

Home.layout = 'default'
