const navCol1 = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Focus' },
]

const navCol2 = [
  { href: '#works', label: 'Project' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#blog', label: 'Blog' },
  { href: '#testimonials', label: 'Highlights' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { href: 'https://linkedin.com/in/devandraelsyadam', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://github.com/DevanTQ',               icon: 'fa-brands fa-github',      label: 'GitHub' },
  { href: 'https://instagram.com/dvandr404',         icon: 'fa-brands fa-instagram',   label: 'Instagram' },
  { href: 'https://devandraelsyadam.netlify.app',     icon: 'fa-solid fa-globe',         label: 'Portfolio' },
]

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer>
        <div className="footer-inner">
          <div className="footer-top">

            <div>
              <div className="footer-brand-name">Devandra El Syadam</div>
              <div className="footer-brand-desc">
                Physics student, tech enthusiast di Tangerang Selatan, Indonesia.
                Membangun di persimpangan sains, teknologi, dan kreativitas.
              </div>
              <div className="footer-social">
                {socials.map((s) => (
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} key={s.label}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="footer-col-title">Navigasi</div>
              <ul className="footer-links">
                {navCol1.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Konten</div>
              <ul className="footer-links">
                {navCol2.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Lainnya</div>
              <ul className="footer-links">
                <li><a href="#blog"><i className="fa-solid fa-pen-nib" style={{ fontSize: '0.7rem', marginRight: '0.3rem' }}></i>Blog & Tulisan</a></li>
                <li><a href="#about">Tentang Saya</a></li>
                <li><a href="https://github.com/DevanTQ" target="_blank" rel="noreferrer">GitHub Repos</a></li>
                <li><a href="https://devandraelsyadam.netlify.app" target="_blank" rel="noreferrer">Live Portfolio</a></li>
                <li><a href="#contact">Hubungi Saya</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              &copy; 2026 Devandra El Syadam. All rights reserved. Built with passion in South Tangerang.
            </div>
            <div className="footer-legal">
              <a href="https://www.termsfeed.com/live/1a8cc740-9e59-4f82-967d-bdb0a3c5eb6c" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="https://www.termsfeed.com/live/17d2023a-5579-4443-a6a5-9768ebcb35e1" target="_blank" rel="noopener noreferrer">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      <button className="scroll-top" id="scrollTop" aria-label="Scroll to top" onClick={scrollToTop}>
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </>
  )
}

export default Footer