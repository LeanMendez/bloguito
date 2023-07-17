import { IArticles } from '@/types'
import React from 'react'
import ArticleListItem from '../ui/ArticleListItem'

const FeaturedArticles:React.FC<IArticles> = ({articles, colorFont, cant}) => {

  const slicedArticles = cant ? articles.slice(1, 1+cant) : articles
  
  return (
    <>
    <div className={`flex flex-col gap-4 ${colorFont}`}>
    {slicedArticles.length !== 0 ? slicedArticles.map((article)=> (<ArticleListItem key={article.frontmatter.slug} frontmatter={article.frontmatter}/>)): <span className={`text-lg text-light-primary-100`}>No hay artículos disponibles</span>}
    </div>
    </>
  )
}

export default FeaturedArticles


