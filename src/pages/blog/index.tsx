import PostListItem from '@/components/ui/PostListItem'
import { getAllFilesFrontmatter } from '@/lib/mdx'
import { IPosts } from '@/types'
import { GetStaticProps } from 'next'
import React from 'react'

const index = ({posts}:IPosts) => {
  return (
    <main className={`min-h-[75vh] max-w-3xl mx-auto mt-10`}>
      <h2 className={`text-4xl font-semibold mb-12`}>Artículos</h2>
      <div className={`flex flex-col gap-4 place-items-center `}>
      {posts.length !== 0 ? posts.map((post)=> (<PostListItem frontmatter={post.frontmatter}/>)): <span>No hay posts disponibles</span>}
      </div>
    </main>
  )
}

export default index


export const getStaticProps:GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter("blog") //carpeta hardcodeada, en un futuro refactor implementar Enum con diferentes opciones
  
  return {
    props:{
      posts
    }
  }
}