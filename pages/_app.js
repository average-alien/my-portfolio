import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"

import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  }, [])

  return (
    <>
      <Head>
        <meta
          charSet="utf-8"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      {/* header */}
      
      <Component {...pageProps} />

      {/* footer */}
    </>
  )
}

export default MyApp
