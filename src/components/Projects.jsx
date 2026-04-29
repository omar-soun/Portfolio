const projects = [
  {
    title: 'Creature Archive',
    period: 'Sep 2025 – Apr 2026',
    desc: 'Offline-first React Native mobile app for academic zoological field research. Features on-device AI species identification using a MobileNetV2 CNN (TensorFlow Lite) with sub-2-second inference, Firestore data isolation, and a background cloud sync service with conflict resolution.',
    tech: ['React Native', 'TensorFlow Lite', 'Firebase', 'FastAPI', 'OpenCV'],
    github: 'https://github.com/omar-soun/Creature_Archive-Application',
    live: null,
  },
  {
    title: 'Cake House Website',
    period: 'Jan 2026 – Mar 2026',
    desc: 'Full-stack MERN bakery platform managing 100+ product SKUs. Integrated Google Gemini API for a multimodal AI chatbot that analyses user-uploaded images to identify cake themes and automate custom order quoting. Validated 20+ REST endpoints with Postman.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Gemini API'],
    github: 'https://github.com/omar-soun/cake-House-website',
    live: null,
  },
  {
    title: 'Sudoku Web Application',
    period: 'Nov 2025 – Dec 2025',
    desc: 'Full-stack Sudoku game with dynamic JavaScript grid generation, a PHP-powered "Life & Hint" system, and AJAX-driven single-page interactions. Game state, high scores, and recovery attempts are persisted in MySQL.',
    tech: ['PHP', 'JavaScript', 'MySQL', 'HTML / CSS', 'AJAX'],
    github: 'https://github.com/omar-soun/Sudoku_Arena',
    live: null,
  },
  {
    title: 'Healthcare Management System',
    period: 'Dec 2024 – Jan 2025',
    desc: 'Java-based healthcare application with MySQL integration. Includes modules for patient records, appointment scheduling, and billing automation. Implements role-based access control for doctors, patients, and administrators.',
    tech: ['Java', 'MySQL', 'JDBC'],
    github: '#',
    live: null,
  },
  {
    title: 'Restaurant Food Order',
    period: 'Oct 2023 – Nov 2023',
    desc: 'Full-stack food ordering application (MERN stack) with JWT authentication, real-time order tracking, and integrated payment gateway. Responsive UI/UX designed to improve customer engagement and operational efficiency.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    github: '#',
    live: null,
  },
  {
    title: 'Wastax.lk',
    period: 'Jul 2022 – Oct 2022',
    desc: 'Web-based waste management platform built with HTML, CSS, JavaScript, and PHP. Features workflow automation for waste collection and recycling, plus a real-time monitoring dashboard for data analytics.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/omar-soun/wastax.lk-Website',
    live: null,
  },
]

function IconFolder() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">03.</span> Projects
        </h2>
        <p className="section-subtitle">Things I&apos;ve designed and built</p>

        <div className="projects-grid">
          {projects.map(({ title, period, desc, tech, github }) => (
            <div key={title} className="project-card">
              <div className="project-header">
                <span className="project-folder"><IconFolder /></span>
                <div className="project-links">
                  <a href={github} title="View on GitHub">
                    <IconGitHub />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="project-title">{title}</h3>
                <p style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.72rem', color: 'var(--accent)', marginTop: '4px', opacity: 0.8 }}>{period}</p>
              </div>

              <p className="project-desc">{desc}</p>

              <div className="project-tech">
                {tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
