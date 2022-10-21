import '../styles/globals.css'
import NavBar from "../components/navBar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* header */}
      <NavBar />
      
      <Component {...pageProps} />

      {/* footer */}
    </>
  )
}

export default MyApp
