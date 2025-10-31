import './Skills.css'

function Skills() {
  const skillsData = {
    frontend: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'C++', 'Go', 'PHP'],
    backend: ['Node.js', 'Express', 'Django', 'Flask', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs']
  }

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              {skillsData.frontend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              {skillsData.languages.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              {skillsData.backend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
