const About = () => {
  const skillBars = [
    { label: 'Cybersecurity Fundamentals', pct: 65 },
    { label: 'Digital Forensics',          pct: 63 },
    { label: 'Networking',                 pct: 68 },
    { label: 'Linux & System',             pct: 70 },
    { label: 'Visual Design (DKV)',        pct: 80 },
  ]

  const highlights = [
    { icon: 'fa-atom',             title: 'Scientific & Analytical',  desc: 'Approaching every problem with logic and scientific methods as the foundation.' },
    { icon: 'fa-seedling',         title: 'Continuous Learner',       desc: 'Self-study, experimentation, and adaptation are a core part of my daily routine.' },
    { icon: 'fa-compass-drafting', title: 'Creative & Technical',     desc: 'A design background gives me visual sensitivity that complements my technical skills.' },
    { icon: 'fa-hammer',           title: 'Builder Mindset',          desc: 'I enjoy building things — from websites and tools to ideas that become real products.' },
  ]

  return (
    <section id="about" className="full">
      <div className="about-inner">

        <div className="about-text reveal-left">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Curiosity-Driven, Science-Backed</h2>
          <p>
            I'm <strong>Devandra El Syadam</strong>, a Physics student at UIN Jakarta who started out in the world of design at SMKS Sasmita Jaya 1.
            It might seem like an unusual path, but to me, Design, Physics, and Technology are one package — all about understanding patterns and solving problems.
          </p>
          <p>
            These days, I spend most of my time between lectures and the screen, combining
            <strong> scientific logic</strong> with the world of <strong>cybersecurity</strong>.
            Every line of code and every security vulnerability is an experiment that demands precision.
          </p>
          <p>
            Outside of class, I actively sharpen my <em>problem-solving</em> through CTF (Capture The Flag) platforms and
            various cybersecurity challenges, particularly in log analysis, digital trails, and forensic investigation
            to understand and secure digital systems.
          </p>

          <div className="about-highlights" style={{ marginTop: '2rem' }}>
            {highlights.map((h) => (
              <div className="highlight-item" key={h.title}>
                <div className="highlight-icon"><i className={`fa-solid ${h.icon}`}></i></div>
                <div className="highlight-title">{h.title}</div>
                <div className="highlight-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual-wrap reveal-right">
          <div className="about-chart-card">
            <div className="about-chart-title">Core Competencies</div>
            {skillBars.map((bar) => (
              <div className="skill-bar-item" key={bar.label}>
                <div className="skill-bar-label">
                  <span>{bar.label}</span>
                  <span>{bar.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" data-width={bar.pct}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About