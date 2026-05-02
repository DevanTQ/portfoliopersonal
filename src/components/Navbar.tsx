import { useState } from 'react'

const navLinks = [
  { href: '#about',          label: 'About' },
  { href: '#experience',     label: 'Experience' },
  { href: '#education',      label: 'Education' },
  { href: '#skills',         label: 'Skills' },
  { href: '#services',       label: 'Focus' },
  { href: '#works',          label: 'Project' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#blog',           label: 'Blog' },
  { href: '#testimonials',   label: 'Highlights' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav id="navbar">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">Devandra El Syadam</a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta">Contact</a>
            </li>
          </ul>

          <button
            className="hamburger"
            id="hamburger"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay${isOpen ? ' open' : ''}`}
        onClick={closeMenu}
      />

      <div
        className={`mobile-menu${isOpen ? ' open' : ''}`}
        id="mobileMenu"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mob-link"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="mob-link" onClick={closeMenu}>Contact</a>
      </div>
    </>
  )
}

export default Navbar
