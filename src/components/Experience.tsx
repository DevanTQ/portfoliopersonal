import CountdownBadge from './CountdownBadge'

const timelineItems = [
  {
    period: 'February – March 2026',
    type: 'Participant (Completed)',
    role: 'Individual Participant (Ramadan CTF 2026)',
    company: 'VulnByDefault (VBD) • Remote',
    desc: 'Ranked 59 out of 702 international teams in Ramadan CTF 2026. Completed a range of complex challenges including Web Exploitation (NoSQL injection & prototype pollution), Kernel Pwn analysis (heap leak), and forensic investigation with precision-coordinate OSINT.',
    tags: ['Web Exploitation', 'Digital Forensics', 'Binary Pwn', 'OSINT'],
    countdown: null,
  },
  {
    period: 'May 2026',
    type: 'Contestant (Completed)',
    role: 'Solo Developer (JuaraVibeCoding 2026)',
    company: 'Google for Developers Indonesia • Remote',
    desc: 'Built and submitted WitnessChain, an AI-powered legal evidence documentation platform for forced eviction and human rights violation victims in Indonesia. Stack: Next.js 14, Supabase, Gemini 2.5 Flash, Google Cloud Run. Features include AI-guided interview, SHA-256 evidence hashing, Legal Radar AI, Timeline Visualizer, and Google Maps legal aid referral.',
    tags: ['Next.js 14', 'Supabase', 'Gemini AI', 'Google Cloud Run', 'Full-Stack'],
    countdown: null,
  },
  {
    period: 'June – July 2026',
    type: 'Upcoming • Solo • General Track',
    role: 'Competitor (Wreck-IT 7.0 CTF)',
    company: 'Poltek SSN (BSSN) • Hybrid',
    desc: 'Selected to compete solo in the General Track of Wreck-IT 7.0, a national-level CTF organized by Poltek SSN under BSSN. Covering forensics, cryptography, web exploitation, steganography, and network forensics. Online qualifier kicks off on June 20, 2026, with the on-site final held on July 8, 2026 in Jakarta.',
    tags: ['Forensics', 'Cryptography', 'Web Exploitation', 'Steganography', 'Network Forensics'],
    countdown: {
      qualifier: { date: '2026-07-04T00:00:00+07:00', label: 'Online Qualifier (July 4, 2026)' },
      final:     { date: '2026-07-08T00:00:00+07:00', label: 'On-site Final (Pending)' },
    },
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

              {item.countdown && (
                <div className="timeline-countdown" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  margin: '1rem 0',
                }}>
                  <CountdownBadge
                    targetDate={item.countdown.qualifier.date}
                    label={item.countdown.qualifier.label}
                  />
                </div>
              )}

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