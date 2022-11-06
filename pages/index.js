import Head from 'next/head'
import NavBar from '../components/navBar'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`Allen's Portfolio`}</title>
      </Head>

      <NavBar />

      {/* useRef + scrolling */}
      <About />

      <Skills />

      <Projects />
    </div>
  )
}
