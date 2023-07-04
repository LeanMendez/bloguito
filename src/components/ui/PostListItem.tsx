import { IPost } from '@/types'
import Link from 'next/link'
import React from 'react'

const PostListItem:React.FC<Partial<IPost>> = ({frontmatter}) => {
  return (
    <Link href={`/blog/${frontmatter?.slug}`}>
    <article className={`lg:w-[600px] px-6 py-2 rounded-2xl bg-slate-400 bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-sm`}>
      <h4 className={`text-base`}>{frontmatter?.title}</h4>
      <span className={`text-sm text-green-600`}>{frontmatter?.date} - Refactor descripcion</span>
    </article>
    </Link>
  )
}

export default PostListItem