import Intro        from './components/Intro'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Experience   from './components/Experience'
import Education    from './components/Education'
import Skills       from './components/Skills'
import Services     from './components/Services'
import Works        from './components/Works'
import Certifications from './components/Certifications'
import Metrics      from './components/Metrics'
import Blog         from './components/Blog'
import Highlights   from './components/Highlights'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

function App() {
  return (
    <>
      <Intro />

      <Navbar />

      <main>
        <Hero />

        <div className="gradient-divider" />
        <About />

        <div className="gradient-divider" />
        <Experience />

        <div className="gradient-divider" />
        <Education />

        <div className="gradient-divider" />
        <Skills />

        <div className="gradient-divider" />
        <Services />

        <div className="gradient-divider" />
        <Works />

        <div className="gradient-divider" />
        <Certifications />

        <div className="gradient-divider" />
        <Metrics />

        <div className="gradient-divider" />
        <Blog />

        <div className="gradient-divider" />
        <Highlights />

        <div className="gradient-divider" />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App