import { useState, useEffect, useRef } from 'react'

const filters = ['all', 'web', 'tools', 'ai', 'security']

const works = [
  {
    cat: 'ai',
    gradient: 'work-gradient-1',
    icon: 'fa-shield-halved',
    link: 'https://developmentweb-service-185916174488.asia-southeast2.run.app',
    category: 'AI · Legal Tech',
    title: 'WitnessChain',
    desc: 'AI-powered legal evidence documentation platform for human rights violation victims in Indonesia. Built with Next.js 14, Supabase, Gemini 2.5 Flash, and deployed on Google Cloud Run. Features SHA-256 evidence hashing, Legal Radar AI, Timeline Visualizer, and Google Maps legal aid referral.',
  },
  {
    cat: 'web',
    gradient: 'work-gradient-2',
    icon: 'fa-user',
    link: 'https://devandraelsyadam.netlify.app',
    category: 'Web · Portfolio',
    title: 'Portfolio Site v1',
    desc: 'High-performance portfolio with GTmetrix Grade A (92%). Full SEO, self-hosted fonts, WebP images, and indexed on Search Console.',
  },
  {
    cat: 'web',
    gradient: 'work-gradient-4',
    icon: 'fa-book',
    link: 'https://kenangan-dotpainting.netlify.app/',
    category: 'Web · Creative',
    title: 'Digital Diary — Workshop Event',
    desc: 'Web diary documenting a dot painting workshop event, featuring copy protection, folder hierarchy, and profile photo frame.',
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
        <h2 className="section-title reveal">Selected Projects</h2>
        <p className="section-desc reveal">
          A collection of projects I've built — from tools and web apps to technology experiments.
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
            View All on GitHub <i className="fa-brands fa-github" style={{ marginLeft: '0.25rem' }}></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Works