import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`flex flex-col justify-between  h-screen max-h-screen`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
