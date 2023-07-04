import { Inter } from 'next/font/google'
import HeroSection from '../components/sections/HeroSection'
import RecentPosts from '@/components/sections/RecentPosts'
import { getAllFilesFrontmatter } from '@/lib/mdx'
import { IPosts } from '@/types'
import { GetStaticProps } from 'next'
import FooterSection from '@/components/sections/FooterSection'
const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}:IPosts) {
  return (
    <main className={`flex flex-col lg:max-w-3xl mx-auto min-h-screen justify-between`}>
      <section>
      <HeroSection/>
      <RecentPosts posts={posts}/>
      </section>
      <footer className={`flex flex-col place-items-center`}>
        <FooterSection/>
      </footer>
    </main>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter("blog") //carpeta hardcodeada, en un futuro refactor implementar Enum con diferentes opciones
  
  return {
    props:{
      posts
    }
  }
}