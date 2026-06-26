import { useState, useEffect, useRef } from 'react'

const filters = ['all', 'web', 'tools', 'ai', 'security']

const works = [
  {
    cat: ['ai', 'web'],
    thumb: '/assets/images/witnesschain-thumb.webp',
    link: 'https://developmentweb-service-185916174488.asia-southeast2.run.app',
    category: 'AI · Legal Tech',
    title: 'WitnessChain',
    desc: 'A legal evidence documentation platform driven by AI for victims of human rights violations in Indonesia. It was built using Next.js 14, Supabase, and Gemini 2.5 Flash, then deployed on Google Cloud Run. The system includes SHA-256 evidence hashing, Legal Radar AI, a Timeline Visualizer, and legal aid referrals via Google Maps.',
  },
  {
    cat: ['web'],
    thumb: '/assets/images/portfolio-thumb.webp',
    link: 'https://devandraelsyadam.netlify.app',
    category: 'Web · Portfolio',
    title: 'Portfolio Site v1',
    desc: 'A portfolio site optimized for high performance, achieving a GTmetrix Grade A (92%). It features a complete SEO setup, self-hosted fonts, and WebP images indexed on Search Console.',
  },
  {
    cat: ['web'],
    thumb: '/assets/images/kenangan-thumb.webp',
    link: 'https://kenangan-dotpainting.netlify.app/',
    category: 'Web · Creative',
    title: 'Digital Diary: Workshop Event',
    desc: 'A web diary that documents a dot painting workshop event. It includes copy protection, a structured folder hierarchy, and a custom frame for profile photos.',
  },
  {
    cat: ['tools', 'security'],
    thumb: '/assets/images/ford-thumb.webp',
    link: 'https://github.com/DevanTQ/Ford',
    category: 'Tools · CLI',
    title: 'FORD: Forensic Decoder',
    desc: 'A CLI tool with zero dependencies designed for quick encoding triage and multi-layered cryptanalysis. It automatically detects Base64, Hex, ROT, Caesar, and XOR while featuring recursive decoding (--depth), IOC extraction for flags, IPs, or URLs, Shannon entropy scoring, magic bytes, and hash identification for CTF and DFIR work.',
  },
]

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    requestAnimationFrame(() => {
      gridRef.current?.querySelectorAll('.work-card').forEach((el) => {
        el.classList.add('visible')
      })
    })
  }, [activeFilter])

  const filtered = works.filter(
    (w) => activeFilter === 'all' || w.cat.includes(activeFilter)
  )

  return (
    <section id="works" className="full">
      <div className="works-inner">
        <div className="section-label reveal">Portfolio</div>
        <h2 className="section-title reveal">Selected Projects</h2>
        <p className="section-desc reveal">
          A collection of tools, web applications, and technical experiments that I have built.
        </p>

        <div className="works-filter reveal">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div
          className="works-grid"
          id="worksGrid"
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns:
              filtered.length === 1
                ? 'minmax(0, 420px)'
                : filtered.length === 2
                ? 'repeat(2, minmax(0, 420px))'
                : 'repeat(3, minmax(0, 1fr))',
            gap: '1.5rem',
            width: '100%',
            justifyContent: filtered.length < 3 ? 'center' : 'unset',
          }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                gridColumn: '1 / -1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '4rem 2rem',
                border: '1px dashed rgba(255,255,255,0.08)',
                borderRadius: '16px',
                color: 'var(--text-muted)',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <i className="fa-solid fa-folder-open" style={{ fontSize: '2rem', opacity: 0.3 }}></i>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                No projects in this category yet
              </div>
              <div style={{ fontSize: '0.82rem', opacity: 0.6 }}>
                Check back soon, as more projects are currently on the way.
              </div>
            </div>
          ) : (
            filtered.map((work) => (
              <div
                className="work-card reveal visible"
                data-cat={work.cat.join(' ')}
                key={`${activeFilter}-${work.title}`}
              >
                <div
                  className="work-thumb"
                  style={{
                    backgroundImage: `url(${work.thumb})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    position: 'relative',
                    height: '200px',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(8,8,8,0.35)',
                      transition: 'background 0.3s',
                    }}
                    className="work-thumb-dim"
                  />
                  <div className="work-thumb-overlay">
                    <a href={work.link} className="work-link-btn" target="_blank" rel="noreferrer">
                      <i className="fa-solid fa-eye"></i>
                    </a>
                    <a href={work.link} className="work-link-btn" target="_blank" rel="noreferrer">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
                <div className="work-body">
                  <div className="work-cat">{work.category}</div>
                  <div className="work-title">{work.title}</div>
                  <div className="work-desc">{work.desc}</div>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
          <a href="https://github.com/DevanTQ" target="_blank" rel="noreferrer" className="btn-secondary">
            View All on GitHub <i className="fa-brands fa-github" style={{ marginLeft: '0.25rem' }}></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Works