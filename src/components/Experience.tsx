const timelineItems = [
  {
    period: 'February 2026 – March 2026',
    type: 'Participant (Completed)',
    role: 'Individual Participant — Ramadan CTF 2026',
    company: 'VulnByDefault (VBD) — Remote, International',
    desc: 'Ranked 59 out of 702 international teams in Ramadan CTF 2026, completing a range of complex challenges including Web Exploitation (NoSQL injection & prototype pollution), Kernel Pwn analysis (heap leak), and forensic investigation with precision-coordinate OSINT.',
    tags: ['Web Exploitation', 'Digital Forensics', 'Binary Pwn', 'OSINT'],
  },
  {
    period: 'May 2026 – Present',
    type: 'Competitor',
    role: 'Bug Hunter — National Bug Bounty Program',
    company: 'Pusdatin Kemendikdasmen — Jakarta (Remote)',
    desc: 'Selected as an individual participant in a national cybersecurity competition. Focused on web application penetration testing of government ministry systems, applying the OWASP Top 10 2021 international security standard to strengthen the cyber resilience of Indonesia\'s education sector.',
    tags: ['Vulnerability Assessment', 'OWASP Top 10', 'Web Penetration Testing', 'Cyber Resilience'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="full">
      <div className="exp-inner">
        <div className="exp-header">
          <div>
            <div className="section-label">Experience</div>
            <h2 className="section-title">Track Record</h2>
          </div>
          <a href="https://github.com/DevanTQ" target="_blank" rel="noreferrer" className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
            <i className="fa-brands fa-github"></i>
            <span>View GitHub</span>
          </a>
        </div>

        <div className="timeline">
          {timelineItems.map((item) => (
            <div className="timeline-item reveal" key={item.role}>
              <div className="timeline-meta">
                <span className="timeline-period">{item.period}</span>
                <span className="timeline-type">{item.type}</span>
              </div>
              <div className="timeline-role">{item.role}</div>
              <div className="timeline-company">{item.company}</div>
              <div className="timeline-desc">{item.desc}</div>
              <div className="timeline-tags">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience