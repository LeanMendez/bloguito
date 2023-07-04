import { getAllFilesFrontmatter } from '@/lib/mdx'
import { IPosts } from '@/types'
import React from 'react'
import PostListItem from '../ui/PostListItem'

const RecentPosts:React.FC<IPosts> = ({posts}) => {

  console.log(posts)
  
  return (
    <div className={``}>
      <h2 className={`text-2xl font-medium mb-12`}>Recent Posts</h2>
    <div className={`flex flex-col gap-3 place-items-center `}>
    {posts.map((post)=> (<PostListItem frontmatter={post.frontmatter}/>))}
    </div>
    </div>
  )
}

export default RecentPosts


