import './AboutMe.css'

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="photo-container">
            <div className="photo-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
          <div className="bio">
            <h3>Full Stack Developer & Data Analyst</h3>
            <p>
              Passionate software developer with expertise in building modern web applications 
              and analyzing complex data sets. I specialize in creating efficient, scalable 
              solutions that bridge the gap between technical excellence and user experience.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, I thrive 
              on solving challenging problems and continuously learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
