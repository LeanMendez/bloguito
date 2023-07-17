import React from 'react'

const FooterSection = () => {
  return (
    <footer className={`flex flex-col place-items-center`}>
      <span className={`text-base text-center leading-6 text-secondary-300 font-medium inline-block mt-8 mb-4 tracking-wider`}>Blog creado con NextJS, Typescript, TailwindCSS y desplegado en Vercel</span>
    </footer>
  )
}

export default FooterSection