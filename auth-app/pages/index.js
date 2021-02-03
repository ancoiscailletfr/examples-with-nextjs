import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToHtml from '@/lib/markdownToHtml'
import xw from 'xwind'
import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home ({ readMe, data: { author, avatar, website, lastBuild, ...socials } }) {
  return (
    <div css={xw`min-h-screen max-w-screen-md px-2 flex flex-col justify-center items-center`}>
      <div css={xw`flex w-full items-center justify-between`}>
        <div css={xw`flex items-center`}>
          <img css={xw`rounded-full h-12 w-12 mr-2`} src={avatar} alt={author} width={200} height={200} />
          <div css={xw`flex flex-col text-sm`}>
            <span css={xw`font-medium`}>{author}</span>
            <a
              href={website} target='_blank'
              rel='noopener noreferrer'
            >
              {website}
            </a>
            <div>
              {Object.keys(socials).map(key => (
                <a css={xw`overflow-hidden mx-1`} key={key} href={socials[key]} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon css={xw`text-gray-800`} icon={['fab', key]} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <span css={xw`w-full flex justify-end text-xs text-gray-500`}>Last build: {lastBuild}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: readMe }}
      />
    </div>
  )
}

export async function getStaticProps () {
  const readMeFullPath = join(process.cwd(), 'README.md')
  const readMeContents = fs.readFileSync(readMeFullPath, 'utf8')
  const { data, content } = matter(readMeContents)
  const html = await markdownToHtml(content || '')
  return {
    props: {
      readMe: html,
      data: {
        ...data,
        lastBuild: moment().format('LLL')
      }
    }
  }
}
