import { useState, useEffect, useRef } from 'react'

const filters = ['all', 'web', 'tools', 'ai', 'security']

const works = [
  {
    cat: 'web',
    gradient: 'work-gradient-2',
    icon: 'fa-user',
    link: 'https://devandraelsyadam.netlify.app',
    category: 'Web · Portfolio',
    title: 'Portfolio Site v1',
    desc: 'Portfolio berperforma tinggi dengan GTmetrix Grade A (92%). Full SEO, self-hosted fonts, WebP, dan terindex Search Console.',
  },
  {
    cat: 'web',
    gradient: 'work-gradient-4',
    icon: 'fa-book',
    link: 'https://kenangan-dotpainting.netlify.app/',
    category: 'Web · Creative',
    title: 'Digital Diary — Workshop Event',
    desc: 'Web diary dokumentasi event dot painting workshop dengan copy protection, folder hierarchy, dan photo frame profil.',
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
    (w) => activeFilter === 'all' || w.cat === activeFilter
  )

  return (
    <section id="works" className="full">
      <div className="works-inner">
        <div className="section-label reveal">Portfolio</div>
        <h2 className="section-title reveal">Proyek Pilihan</h2>
        <p className="section-desc reveal">
          Koleksi proyek yang telah saya bangun — dari tools, web apps, hingga eksperimen teknologi.
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

        <div className="works-grid" id="worksGrid" ref={gridRef}>
          {filtered.map((work) => (
            <div
              className="work-card reveal visible"
              data-cat={work.cat}
              key={`${activeFilter}-${work.title}`}
            >
              <div className={`work-thumb ${work.gradient}`}>
                <i className={`fa-solid ${work.icon} work-thumb-icon`}></i>
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
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
          <a href="https://github.com/DevanTQ" target="_blank" rel="noreferrer" className="btn-secondary">
            Semua di GitHub <i className="fa-brands fa-github" style={{ marginLeft: '0.25rem' }}></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Works