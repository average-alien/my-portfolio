import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body data-bs-spy="scroll" data-bs-target="#navbar" tabIndex={0}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}