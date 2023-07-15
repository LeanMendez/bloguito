import { getAllFilesFrontmatter } from '@/lib/mdx'
import { IPosts } from '@/types'
import React from 'react'
import PostListItem from '../ui/PostListItem'

const RecentPosts:React.FC<IPosts> = ({posts}) => {

  const slicedPosts = posts.slice(0, 3)
  console.log(slicedPosts)
  
  return (
    <div className={`min-h-[50vh]`}>
      <h2 className={`text-4xl font-medium mb-12`}>Artículos recientes</h2>
    <div className={`flex flex-col gap-4 place-items-center `}>
    {slicedPosts.length !== 0 ? slicedPosts.map((post)=> (<PostListItem frontmatter={post.frontmatter}/>)): <span>No hay posts disponibles</span>}
    </div>
    </div>
  )
}

export default RecentPosts


