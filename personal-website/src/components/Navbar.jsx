import './Navbar.css'

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-name">Leon Berkemeier</span>
          <span className="brand-subtitle">Developer & Data Analyst</span>
        </div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('cv')}>CV</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
