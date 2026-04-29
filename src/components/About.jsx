export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">01.</span> About Me
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I&apos;m <strong style={{ color: 'var(--white)' }}>Mohamed Hasoon</strong>, a
              Computer Science student at the{' '}
              <strong style={{ color: 'var(--white)' }}>University of Bedfordshire (UOB)</strong> in
              Colombo, Sri Lanka. I&apos;m passionate about building intelligent, user-centric
              software across mobile and web platforms.
            </p>
            <p>
              I specialise in full-stack development using the MERN stack and React Native for
              mobile, with a growing focus on applied AI and machine learning. My recent work
              includes an offline-first mobile app with on-device AI species identification
              (TensorFlow Lite) and a multimodal AI chatbot powered by Google&apos;s Gemini API.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring new frameworks, deepening my knowledge
              of distributed systems, or building personal projects that solve real-world problems.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">University</span>
                <span className="detail-value">University of Bedfordshire</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Degree</span>
                <span className="detail-value">BSc Computer Science</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Colombo, Sri Lanka</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className="detail-value" style={{ color: 'var(--accent)' }}>Open to Internships</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="avatar-wrapper">
              <div className="avatar-placeholder">MH</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
