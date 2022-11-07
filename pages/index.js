import Head from 'next/head'
import { useRef } from 'react'

import NavBar from '../components/navBar'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToTarget = target => {
    target.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }

  return (
    <div>
      <Head>
        <title>{`Allen's Portfolio`}</title>
      </Head>

      <NavBar
        scrollToTarget={scrollToTarget}
        about={aboutRef}
        skills={skillsRef}
        projects={projectsRef}
        contact={contactRef}
      />

      {/* useRef + scrolling */}
      <div id='about' ref={aboutRef} className='container vh-100 d-flex justify-content-center align-items-center'>
        <About />
      </div>

      <div id='skills' ref={skillsRef} className='container vh-100 d-flex justify-content-center align-items-center'>
        <Skills />
      </div>

      <div id='projects' ref={projectsRef} className='container'>
        <Projects />
      </div>

      <div id='contact' ref={contactRef} className='container vh-100 d-flex justify-content-center align-items-center'>
        <Contact />
      </div>
    </div>
  )
}
