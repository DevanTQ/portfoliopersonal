const About = () => {
  const skillBars = [
    { label: 'Cybersecurity Fundamentals', pct: 65 },
    { label: 'Digital Forensics',          pct: 63 },
    { label: 'Networking',                 pct: 68 },
    { label: 'Linux & System',             pct: 70 },
    { label: 'Visual Design (DKV)',        pct: 80 },
  ]

  const highlights = [
    { icon: 'fa-atom',             title: 'Scientific & Analytical',  desc: 'Every problem gets broken down with logic and scientific thinking at its core.' },
    { icon: 'fa-seedling',         title: 'Continuous Learner',       desc: 'Self-study, experimentation, and staying adaptable are habits I keep every day.' },
    { icon: 'fa-compass-drafting', title: 'Creative & Technical',     desc: 'Years in design sharpened my visual instincts, and they carry over into everything technical I build.' },
    { icon: 'fa-hammer',           title: 'Builder Mindset',          desc: 'Whether it\'s a website, a CLI tool, or a rough idea, I like seeing things go from concept to something real.' },
  ]

  return (
    <section id="about" className="full">
      <div className="about-inner">

        <div className="about-text reveal-left">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Curiosity-Driven, Science-Backed</h2>
          <p>
            I'm <strong>Devandra El Syadam</strong>, a Physics student at UIN Jakarta who started out in the world of design at SMKS Sasmita Jaya 1.
            It might seem like an unusual path, but to me, Design, Physics, and Technology go hand in hand — all about reading patterns and solving the right problems.
          </p>
          <p>
            Most of my time now sits somewhere between lectures and the screen, where
            <strong> scientific logic</strong> meets the world of <strong>cybersecurity</strong>.
            Every line of code and every security vulnerability is an experiment that demands precision.
          </p>
          <p>
            Outside of class, I keep my <em>problem-solving</em> sharp through CTF (Capture The Flag) platforms and
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