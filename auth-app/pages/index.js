import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToHtml from '@/lib/markdownToHtml'
import xw from 'xwind'

export default function Home ({ readMe }) {
  return (
    <div css={xw`min-h-screen px-2 flex flex-col justify-center items-center`}>
      <div
        dangerouslySetInnerHTML={{ __html: readMe }}
      />
    </div>
  )
}

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
