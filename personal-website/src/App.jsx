import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CV from './components/CV'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <CV />
      </main>
      <Footer />
    </div>
  )
}

export default App
