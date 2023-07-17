import { IArticle } from '@/types'
import Link from 'next/link'
import React from 'react'

const ArticleListItem:React.FC<Partial<IArticle>> = ({frontmatter}) => {
  return (
    <Link href={`/blog/${frontmatter?.slug}`}>
    <article className={`sm:max-w-xl max-w-xs pl-2 border-l-4 border-secondary-300 hover:border-brand-500`}>
      <h4 className={`text-sm sm:text-base font-semibold`}>{frontmatter?.title}</h4>
      <span className={`text-sm font-normal tracking-wide`}>{frontmatter?.description}</span>
    </article>
    </Link>
  )
}

export default ArticleListItem