import './CV.css'

function CV() {
  const timeline = [
    {
      type: 'work',
      date: 'Present',
      title: 'Dual Study Program - Business IT',
      organization: 'BASF',
      description: 'Combining academic studies with practical work experience in business information technology at one of the world\'s leading chemical companies.'
    },
    {
      type: 'education',
      date: '2 Semesters',
      title: 'Chemical Engineering',
      organization: 'FH of Münster',
      description: 'Completed two semesters of chemical engineering studies, gaining knowledge in process engineering and technical principles.'
    },
    {
      type: 'education',
      date: 'Completed',
      title: 'Bachelor of Science in Chemistry',
      organization: 'University of Münster',
      description: 'Graduated with a degree in Chemistry, developing strong analytical and scientific research skills.'
    },
    {
      type: 'education',
      date: 'Graduated',
      title: 'High School Graduation',
      organization: 'High School',
      description: 'Completed secondary education and earned high school diploma.'
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
