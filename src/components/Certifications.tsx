const certs = [
  {
    href: 'https://drive.google.com/file/d/1vVINlGr9e7kAq_qXUywUcZzsH68jgn60/view?usp=sharing',
    icon: 'fa-brands fa-aws',
    name: 'Cloud & Generative AI on AWS',
    issuer: 'Amazon Web Services (AWS) x Dicoding Indonesia',
    year: 'Oktober 2025',
  },
  {
    href: 'https://drive.google.com/file/d/1PapblFskqYdcDNKMg_emrBEkKnA1hPK1/view?usp=sharing',
    icon: 'fa-solid fa-brain',
    name: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    year: 'September 2025',
  },
  {
    href: 'https://drive.google.com/file/d/1E-0SBQDMWTV6fjpQY2D_jE_uZkBWHCC0/view?usp=sharing',
    icon: 'fa-solid fa-key',
    name: 'Classical Cryptography for Beginner',
    issuer: 'Cyber Academy Indonesia',
    year: 'January 2026',
  },
  {
    href: 'https://drive.google.com/file/d/1I3RtWCYHj8H-0L1tnJltTUVeSu7ZhN2V/view?usp=sharing',
    icon: 'fa-solid fa-flag',
    name: 'Certificate of Participation — Ramadan CTF 2026',
    issuer: 'VulnByDefault · Peringkat 59 / 697 Tim',
    year: 'Maret 2026',
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="full">
      <div className="cert-inner">
        <div className="section-label reveal">Certifications</div>
        <h2 className="section-title reveal">Sertifikasi & Kredensial</h2>
        <p className="section-desc reveal">
          Komitmen terhadap pembelajaran berkelanjutan — dari cloud computing, AI, hingga keamanan siber.
        </p>

        <div className="cert-grid">
          {certs.map((cert) => (
            <a href={cert.href} target="_blank" rel="noreferrer" className="cert-card reveal" key={cert.name}>
              <div className="cert-view-btn"><i className="fa-solid fa-eye"></i></div>
              <div className="cert-logo"><i className={cert.icon}></i></div>
              <div className="cert-body">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <span className="cert-year">{cert.year}</span>
              </div>
            </a>
          ))}

          <div className="cert-card reveal" style={{ borderStyle: 'dashed', opacity: 0.45, pointerEvents: 'none' }}>
            <div className="cert-logo" style={{ opacity: 0.35 }}><i className="fa-solid fa-hourglass-half"></i></div>
            <div className="cert-body">
              <div className="cert-name">Sertifikasi berikutnya sedang diproses...</div>
              <div className="cert-issuer">Ongoing Learning</div>
              <span className="cert-year">2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
