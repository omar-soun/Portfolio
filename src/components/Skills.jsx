const categories = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'PHP', 'Bash', 'PowerShell'],
  },
  {
    label: 'Mobile & Frontend',
    skills: ['React Native', 'React.js', 'HTML / CSS', 'Next.js', 'TensorFlow Lite'],
  },
  {
    label: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    label: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'Linux (Ubuntu)', 'VS Code', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">02.</span> Skills
        </h2>

        <div className="skills-grid">
          {categories.map(({ label, skills }) => (
            <div key={label} className="skill-card">
              <h3 className="skill-category">{label}</h3>
              <div className="skill-tags">
                {skills.map(s => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
