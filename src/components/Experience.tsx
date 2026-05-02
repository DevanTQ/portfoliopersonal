const timelineItems = [
  {
    period: 'Februari 2026 – Maret 2026',
    type: 'Participant (Completed)',
    role: 'Individual Participant — Ramadan CTF 2026',
    company: 'VulnByDefault (VBD) — Remote, Internasional',
    desc: 'Berhasil menempati peringkat 59 dari 697 tim internasional dalam Ramadan CTF 2026 dengan menuntaskan berbagai tantangan kompleks, mulai dari eksploitasi Web (NoSQL injection & prototype pollution), analisis Kernel Pwn (heap leak), hingga investigasi forensik dan OSINT berbasis koordinat presisi.',
    tags: ['Web Exploitation', 'Digital Forensics', 'Binary Pwn', 'OSINT'],
  },
  {
    period: 'Mei 2026 – Sekarang',
    type: 'Competitor',
    role: 'Bug Hunter — National Bug Bounty Program',
    company: 'Pusdatin Kemendikdasmen — Jakarta (Remote)',
    desc: 'Terpilih sebagai peserta individu dalam ajang kompetisi keamanan siber tingkat nasional. Berfokus pada pengujian penetrasi aplikasi web kementerian dengan mengacu pada standar keamanan siber internasional OWASP Top 10 2021 untuk membangun resiliensi siber pendidikan Indonesia.',
    tags: ['Vulnerability Assessment', 'OWASP Top 10', 'Web Penetration Testing', 'Cyber Resilience'],
  },
]

const Experience = () => {
  const handleCVDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=ID_FILE_KAMU')
  }

  return (
    <section id="experience" className="full">
      <div className="exp-inner">
        <div className="exp-header">
          <div>
            <div className="section-label">Experience</div>
            <h2 className="section-title">Rekam Jejak</h2>
          </div>
          <button className="btn-secondary" onClick={handleCVDownload} style={{ whiteSpace: 'nowrap' }}>
            <i className="fa-solid fa-download"></i>
            <span>Download CV</span>
          </button>
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
