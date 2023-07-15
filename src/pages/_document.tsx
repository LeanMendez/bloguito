import FooterSection from '@/components/sections/FooterSection'
import Nav from '@/components/sections/Nav'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`bg-jet-mine-800 text-slate-300 min-h-screen`}>
        <Nav/>
        <Main />
        <footer className={`flex flex-col place-items-center`}>
        <FooterSection/>
      </footer>
        <NextScript />
      </body>
    </Html>
  )
}
