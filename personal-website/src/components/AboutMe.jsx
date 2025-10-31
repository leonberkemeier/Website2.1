import './AboutMe.css'

function AboutMe() {
  const interests = [
    { icon: '🎨', text: 'UI/UX Design' },
    { icon: '🤖', text: 'AI & Machine Learning' },
    { icon: '📊', text: 'Data Visualization' },
    { icon: '☁️', text: 'Cloud Computing' }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="photo-container">
            <div className="photo-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
          <div className="bio">
            <h3>Full Stack Developer & Data Analyst</h3>
            <p className="intro-text">
              Passionate software developer with expertise in building modern web applications 
              and analyzing complex data sets. I specialize in creating efficient, scalable 
              solutions that bridge the gap between technical excellence and user experience.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, I thrive 
              on solving challenging problems and continuously learning new technologies.
            </p>

            <div className="interests-section">
              <h4>Interests & Expertise</h4>
              <div className="interests-list">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-item">
                    <span className="interest-icon">{interest.icon}</span>
                    <span>{interest.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cta-buttons">
              <a href="#cv" className="btn-primary">View My CV</a>
              <a href="#projects" className="btn-secondary">See Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
