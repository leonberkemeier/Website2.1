import './Skills.css'

function Skills() {
  const skillsData = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'Vue.js', level: 85 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 85 }
    ],
    languages: [
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 82 },
      { name: 'SQL', level: 87 },
      { name: 'C++', level: 75 },
      { name: 'Go', level: 70 },
      { name: 'PHP', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 93 },
      { name: 'Express', level: 90 },
      { name: 'Django', level: 85 },
      { name: 'Flask', level: 82 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 90 },
      { name: 'Redis', level: 80 },
      { name: 'REST APIs', level: 95 }
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
