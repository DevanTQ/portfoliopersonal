import { useState, useEffect } from 'react';

const navCol1 = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Focus' },
]

const navCol2 = [
  { href: '#works', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#blog', label: 'Blog' },
  { href: '#testimonials', label: 'Highlights' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { href: 'https://linkedin.com/in/devandraelsyadam', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://github.com/DevanTQ',               icon: 'fa-brands fa-github',      label: 'GitHub' },
  { href: 'https://instagram.com/dvnnaell',           icon: 'fa-brands fa-instagram',   label: 'Instagram' },
  { href: 'https://devandraelsyadam.netlify.app',     icon: 'fa-solid fa-globe',        label: 'Portfolio' },
]

const Footer = () => {
  // 1. Tambahkan state untuk mengontrol kapan tombol muncul
  const [isVisible, setIsVisible] = useState(false);

  // 2. Gunakan useEffect untuk memantau scroll murni dari React
  useEffect(() => {
    const toggleVisibility = () => {
      // Munculkan tombol jika di-scroll lebih dari 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer>
        <div className="footer-inner">
          <div className="footer-top">

            {/* Brand Section */}
            <div>
              <div className="footer-brand-name">Devandra El Syadam</div>
              <div className="footer-brand-desc">
                Physics student and tech enthusiast based in South Tangerang. 
                Bridging the gap between scientific theory and digital innovation.
              </div>
              <div className="footer-social">
                {socials.map((s) => (
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} key={s.label}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div>
              <div className="footer-col-title">Navigation</div>
              <ul className="footer-links">
                {navCol1.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Content</div>
              <ul className="footer-links">
                {navCol2.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Focus Areas</div>
              <ul className="footer-links" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <li>Computational Physics</li>
                <li>Cybersecurity & Forensics</li>
                <li>AI & Machine Learning</li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              &copy; 2026 Devandra El Syadam. Built with precision in South Tangerang.
            </div>
            <div className="footer-legal">
              <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">Privacy</a>
              <a href="/terms-of-use.html" target="_blank" rel="noopener noreferrer">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 3. Gunakan state isVisible untuk mengontrol class */}
      <button 
        className={`scroll-top ${isVisible ? 'visible' : ''}`} 
        id="scrollTop" 
        aria-label="Scroll to top" 
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </>
  )
}

export default Footer