import './Skills.css'

function Skills() {
  const skillsData = {
    frontend: [
      { name: 'React', level: 82 },
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 80 },
      { name: 'JavaScript (ES6+)', level: 83 },
      { name: 'Tailwind CSS', level: 45 },
      { name: 'Bootstrap', level: 50 }
    ],
    languages: [
      { name: 'JavaScript', level: 83 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 78 },
      { name: 'SQL', level: 82 },
      { name: 'Go', level: 50 },
      { name: 'C++', level: 45 }
    ],
    backend: [
      { name: 'Flask', level: 78 },
      { name: 'Django', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Docker', level: 62 },
      { name: 'REST APIs', level: 85 },
      { name: 'Git & GitHub', level: 82 }
    ]
  }

  const categoryIcons = {
    frontend: '🎨',
    languages: '💻',
    backend: '⚙️'
  }

  const categoryTitles = {
    frontend: 'Frontend Development',
    languages: 'Programming Languages',
    backend: 'Backend & Database'
  }

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.keys(skillsData).map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3>
                <span className="category-icon">{categoryIcons[category]}</span>
                {' '}
                {categoryTitles[category]}
              </h3>
              <div className="skills-list">
                {skillsData[category].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ '--skill-level': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
