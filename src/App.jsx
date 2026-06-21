import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Implement smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target
      if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for header height
            behavior: 'smooth'
          })
        }
      }
    }

    document.body.addEventListener('click', handleAnchorClick)
    
    return () => {
      document.body.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
