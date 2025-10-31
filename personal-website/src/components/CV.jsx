import './CV.css'

function CV() {
  const timeline = [
    {
      type: 'work',
      date: '2022 - Present',
      title: 'Senior Full Stack Developer',
      organization: 'Tech Solutions Inc.',
      description: 'Lead development of enterprise web applications. Mentor junior developers and architect scalable solutions.'
    },
    {
      type: 'work',
      date: '2020 - 2022',
      title: 'Full Stack Developer',
      organization: 'Digital Innovations Ltd.',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud services.'
    },
    {
      type: 'education',
      date: '2016 - 2020',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Technology',
      description: 'Graduated with honors. Focus on software engineering, data structures, and algorithms.'
    },
    {
      type: 'work',
      date: '2019 - 2020',
      title: 'Junior Developer Intern',
      organization: 'StartUp Hub',
      description: 'Assisted in building web applications and mobile apps. Gained experience in agile development.'
    },
    {
      type: 'education',
      date: '2018',
      title: 'Data Science Certificate',
      organization: 'Online Learning Platform',
      description: 'Completed intensive course covering machine learning, data analysis, and statistical modeling.'
    }
  ]

  return (
    <section id="cv" className="cv-section">
      <div className="container">
        <h2>Curriculum Vitae</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h4>{item.title}</h4>
                <div className="timeline-org">{item.organization}</div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CV
