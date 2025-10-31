import './AboutMe.css'

function AboutMe() {
  const interests = [
    { icon: '💻', text: 'Software Engineering' },
    { icon: '🤖', text: 'Machine Learning' },
    { icon: '📊', text: 'Business Data Analytics' },
    { icon: '🧪', text: 'Chemistry & Science' }
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
            <h3>Developer & Data Analyst</h3>
            <p className="intro-text">
              Hi, I'm Leon, a Developer & Data Analyst with a foundation in science.
            </p>
            <p>
              Leveraging a B.S. in Chemistry, I am currently pursuing a second Bachelor's in Business IT to merge analytical rigor with technical development. My core focus areas include Software Engineering, Machine Learning (ML), and Coding. I am specializing in Business Data Analytics to build efficient, data-driven solutions that translate complex insights into business value. I'm passionate about developing software and leveraging data to solve real-world problems.
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
