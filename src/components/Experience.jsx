const education = [
  {
    degree: 'BSc in Computer Science (R)',
    institution: 'University of Bedfordshire (UOB)',
    location: 'Colombo, Sri Lanka',
    period: '2025 – Present',
    coursework: [
      'Research Methodologies and Emerging Technologies',
      'Distributed Service Architecture',
      'Agile Project Management',
      'Undergraduate Project',
    ],
  },
  {
    degree: 'Higher Diploma in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Colombo, Sri Lanka',
    period: '2022 – 2024',
    coursework: [
      'Object Oriented Programming & Data Structures and Algorithms',
      'Web Application Development',
      'Data Communications & Computer Networks',
      'Computer Security & Emerging Technologies',
      'Human Computer Interactions',
      'Probability and Statistics & Data Systems',
    ],
  },
]

export default function Experience() {
  return (
    <section id="education" className="section experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">04.</span> Education
        </h2>

        <div className="timeline">
          {education.map((edu, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{edu.degree}</h3>
                    <p className="exp-company">{edu.institution}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{edu.period}</span>
                    <span className="exp-location">{edu.location}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: "'Fira Code', monospace", marginBottom: '10px', opacity: 0.85 }}>
                  Relevant Coursework
                </p>
                <ul className="exp-bullets">
                  {edu.coursework.map((c, j) => (
                    <li key={j}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
