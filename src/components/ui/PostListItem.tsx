import { IPost } from '@/types'
import Link from 'next/link'
import React from 'react'

const PostListItem:React.FC<Partial<IPost>> = ({frontmatter}) => {
  return (
    <Link href={`/blog/${frontmatter?.slug}`}>
    <article className={`w-[800px] sm:max-w-xl max-w-xs px-6 py-2 rounded-2xl bg-yellow-mine-500 hover:bg-opacity-10 bg-opacity-5 bg-clip-padding backdrop-filter backdrop-blur-sm`}>
      <h4 className={`text-sm sm:text-base lg:text-lg font-medium text-slate-50`}>{frontmatter?.title}</h4>
      <span className={`text-xs lg:text-sm text-yellow-mine-500`}>{frontmatter?.date} <strong className={`text-slate-300 font-normal`}>Refactor descripcion</strong></span>
    </article>
    </Link>
  )
}

export default PostListItem