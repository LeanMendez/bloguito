import { GetStaticPaths, GetStaticProps } from 'next'
import { getFiles, getPostBySlug } from '@/lib/mdx'

import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { IPost, IPosts } from '@/types'


const Post:React.FC<IPost> = ({content , frontmatter}) => {
  const {date, slug, title} = frontmatter
  return (
    <main className='flex flex-col mx-auto min-w-[800px] prose prose-mine'>
      <span className={`text-xs text-gray-400`}>{date}</span>
      <h1>{title}</h1>
      <MDXRemote {...content}/>
    </main>
  )
}

export default Post



export const getStaticProps:GetStaticProps = async({params}) => {
  const slug = params?.slug as string;
  const {content, frontmatter} = await getPostBySlug("blog", slug)

  return {
    props: {
      content, frontmatter: {
        slug: params?.slug as string,
        ...frontmatter
      }
    }
  }
}

export const getStaticPaths:GetStaticPaths = async () => {
  const posts = await getFiles("blog")  //carpeta hardcodeada, en un futuro refactor implementar Enum con diferentes opciones
  const paths = posts.map((post)=> ({
    params: {
        slug: post.replace(/\.mdx/, ""),
  },
}));
  return {
    paths,
    fallback: false
  }
}