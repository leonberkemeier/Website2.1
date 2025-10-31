import './Projects.css'

function Projects() {
  const projects = [
    {
      category: 'IT',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux']
    },
    {
      category: 'IT',
      title: 'Task Management System',
      description: 'Real-time collaborative task management tool with drag-and-drop functionality and team collaboration features.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'WebSocket', 'Docker']
    },
    {
      category: 'IT',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms with real-time updates.',
      technologies: ['React', 'TypeScript', 'GraphQL', 'Chart.js', 'AWS']
    },
    {
      category: 'Data',
      title: 'Customer Churn Prediction',
      description: 'Machine learning model to predict customer churn with 89% accuracy using historical transaction data.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter', 'XGBoost']
    },
    {
      category: 'Data',
      title: 'Sales Forecasting System',
      description: 'Time series analysis tool for predicting sales trends and generating actionable business insights.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib', 'SQL']
    },
    {
      category: 'Data',
      title: 'Real-time Data Pipeline',
      description: 'Scalable ETL pipeline for processing and analyzing large volumes of streaming data from IoT devices.',
      technologies: ['Apache Kafka', 'Spark', 'Python', 'Elasticsearch', 'Kibana']
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-categories-wrapper">
          <div className="projects-category">
            <h3>IT Projects</h3>
            <div className="projects-grid">
              {projects.filter(p => p.category === 'IT').map((project, index) => (
                <div key={index} className="project-box">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="projects-category">
            <h3>Data Projects</h3>
            <div className="projects-grid">
              {projects.filter(p => p.category === 'Data').map((project, index) => (
                <div key={index} className="project-box">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
