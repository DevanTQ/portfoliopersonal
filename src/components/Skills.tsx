import { useState, useEffect } from 'react'

const tabs = [
  { id: 'physics', icon: 'fa-atom',          label: 'Physics & Science' },
  { id: 'cyber',   icon: 'fa-shield-halved', label: 'Cyber & Forensics' },
  { id: 'design',  icon: 'fa-palette',       label: 'Design & Creative' },
  { id: 'web',     icon: 'fa-globe',         label: 'Web & Tools' },
]

const toolsByDomain: Record<string, { icon: string; label: string }[]> = {
  physics: [
    { icon: 'fa-atom',            label: 'Classical Mechanics' },
    { icon: 'fa-wave-square',     label: 'Wave Physics' },
    { icon: 'fa-calculator',      label: 'Calculus & Mathematical Physics' },
    { icon: 'fa-chart-line',      label: 'Experimental Data Analysis' },
    { icon: 'fa-flask',           label: 'Physics Laboratory' },
    { icon: 'fa-brands fa-python', label: 'Python for Science' },
    { icon: 'fa-diagram-project', label: 'Scientific Thinking' },
    { icon: 'fa-subscript',       label: 'LaTeX' },
  ],
  cyber: [
    { icon: 'fa-network-wired',     label: 'Wireshark' },
    { icon: 'fa-magnifying-glass',  label: 'Autopsy' },
    { icon: 'fa-hard-drive',        label: 'FTK Imager' },
    { icon: 'fa-layer-group',       label: 'Volatility' },
    { icon: 'fa-database',          label: 'Sleuth Kit' },
    { icon: 'fa-bug',               label: 'Malware Analysis' },
    { icon: 'fa-globe',             label: 'OSINT' },
    { icon: 'fa-terminal',          label: 'Bash Scripting' },
    { icon: 'fa-brands fa-linux',   label: 'Linux' },
    { icon: 'fa-user-secret',       label: 'Web Exploitation' },
    { icon: 'fa-file-shield',       label: 'Log Analysis' },
    { icon: 'fa-clock-rotate-left', label: 'Timeline Analysis' },
  ],
  design: [
    { icon: 'fa-pen-ruler',    label: 'Adobe Illustrator' },
    { icon: 'fa-image',        label: 'Adobe Photoshop' },
    { icon: 'fa-film',         label: 'Adobe Premiere Pro' },
    { icon: 'fa-star',         label: 'Canva' },
    { icon: 'fa-layer-group',  label: 'Figma' },
    { icon: 'fa-palette',      label: 'Graphic Design' },
    { icon: 'fa-scissors',     label: 'Video Editing' },
    { icon: 'fa-eye',          label: 'UI/UX Principles' },
    { icon: 'fa-font',         label: 'Typography' },
    { icon: 'fa-swatchbook',   label: 'Branding & Visual Identity' },
  ],
  web: [
    { icon: 'fa-brands fa-html5',    label: 'HTML5' },
    { icon: 'fa-brands fa-css3-alt', label: 'CSS3' },
    { icon: 'fa-brands fa-js',       label: 'JavaScript' },
    { icon: 'fa-brands fa-python',   label: 'Python' },
    { icon: 'fa-brands fa-git-alt',  label: 'Git' },
    { icon: 'fa-brands fa-github',   label: 'GitHub' },
    { icon: 'fa-chart-line',         label: 'SEO & Core Web Vitals' },
    { icon: 'fa-brands fa-google',   label: 'Search Console' },
    { icon: 'fa-gauge-high',         label: 'GTmetrix' },
    { icon: 'fa-qrcode',             label: 'Python Automation' },
    { icon: 'fa-robot',              label: 'AI Integration' },
    { icon: 'fa-server',             label: 'Netlify / Hosting' },
  ],
}

const chartByDomain: Record<string, { id: string; label: string }> = {
  physics: { id: 'radarChart',    label: 'Proficiency Radar — Science & Computing' },
  cyber:   { id: 'platformChart', label: 'Proficiency — Cyber & Forensics' },
  design:  { id: 'donutChart',    label: 'Skill Distribution — Design' },
  web:     { id: 'lineChart',     label: 'Skill Growth — Web & Programming' },
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('physics')

  useEffect(() => {
    const canvasId = chartByDomain[activeTab].id
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null
    if (canvas) {
      const existing = (window as any).Chart?.getChart?.(canvas)
      if (existing) existing.destroy()
    }

    if ((window as any)._chartInited) {
      (window as any)._chartInited[activeTab] = false
    }

    // Wait for Chart.js to be available (loaded via main.js)
    const tryInitChart = (retries = 10) => {
      if (typeof (window as any).initChart === 'function') {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            (window as any).initChart(activeTab)

            const panel = document.getElementById(`panel-${activeTab}`)
            if (panel) {
              panel.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
                if (!el.classList.contains('visible')) {
                  el.classList.add('visible')
                }
              })
            }
          })
        })
      } else if (retries > 0) {
        setTimeout(() => tryInitChart(retries - 1), 150)
      }
    }

    tryInitChart()
  }, [activeTab])

  return (
    <section id="skills" className="full">
      <div className="skills-inner">
        <div className="section-label reveal">Skills & Tools</div>
        <h2 className="section-title reveal">Skills & Domains</h2>
        <p className="section-desc reveal">
          Four domains I actively develop — science, digital security, design, and technology.
          Not narrow specializations, but a combination that complements each other.
        </p>

        <div className="domain-tabs reveal" style={{ marginTop: '3rem' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`domain-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fa-solid ${tab.icon}`}></i> {tab.label}
            </button>
          ))}
        </div>

        <div className="domain-panels">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`domain-panel reveal${activeTab === tab.id ? ' active' : ''}`}
              id={`panel-${tab.id}`}
            >
              <div className="skills-grid" style={{ marginTop: 0 }}>

                <div className="skills-chart-scroll-wrap">
                  <div className="skills-chart-card">
                    <div className="about-chart-title" style={{ marginBottom: '1.5rem' }}>
                      {chartByDomain[tab.id].label}
                    </div>
                    <canvas
                      id={chartByDomain[tab.id].id}
                      style={{ maxHeight: '320px' }}
                    ></canvas>
                  </div>
                </div>

                {tab.id === 'physics' && (
                  <div className="skills-list-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <div className="about-chart-title">Areas of Study</div>
                      <div className="tool-tags" style={{ marginTop: '1rem' }}>
                        {toolsByDomain['physics'].map((tool) => (
                          <span className="tool-tag" key={tool.label}>
                            <i className={tool.icon.startsWith('fa-brands') ? tool.icon : `fa-solid ${tool.icon}`}></i>{' '}
                            {tool.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="about-chart-title">Scientific Approach</div>
                      <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                        As a <strong style={{ color: 'var(--text-secondary)' }}>Physics student at UIN Jakarta</strong>, I approach every problem using the scientific method — hypothesis,
                        observation, analysis. This mindset is what connects physics with cybersecurity.
                      </p>
                    </div>
                  </div>
                )}

                {tab.id === 'cyber' && (
                  <div className="skills-list-card">
                    <div className="about-chart-title">Tools & Techniques</div>
                    <div className="tool-tags" style={{ marginTop: '1rem' }}>
                      {toolsByDomain['cyber'].map((tool) => (
                        <span className="tool-tag" key={tool.label}>
                          <i className={tool.icon.startsWith('fa-brands') ? tool.icon : `fa-solid ${tool.icon}`}></i>{' '}
                          {tool.label}
                        </span>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '1.25rem' }}>
                      Actively competing in <strong style={{ color: 'var(--text-secondary)' }}>CTF (Capture The Flag)</strong> competitions both internationally and nationally,
                      covering web exploitation, binary pwn, digital forensics, and OSINT. Latest achievement: ranked 59/702 in Ramadan CTF 2026.
                    </p>
                  </div>
                )}

                {tab.id === 'design' && (
                  <div className="skills-list-card">
                    <div className="about-chart-title">Design & Editing Tools</div>
                    <div className="tool-tags" style={{ marginTop: '1rem' }}>
                      {toolsByDomain['design'].map((tool) => (
                        <span className="tool-tag" key={tool.label}>
                          <i className={tool.icon.startsWith('fa-brands') ? tool.icon : `fa-solid ${tool.icon}`}></i>{' '}
                          {tool.label}
                        </span>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '1.25rem' }}>
                      Three years of <strong style={{ color: 'var(--text-secondary)' }}>Visual Communication Design</strong> at
                      SMKS Sasmita Jaya 1 built a strong foundation in visual sensitivity, composition, and visual storytelling —
                      skills that carry over into web UI design and forensics reporting.
                    </p>
                  </div>
                )}

                {tab.id === 'web' && (
                  <div className="skills-list-card">
                    <div className="about-chart-title">Tech Stack</div>
                    <div className="tool-tags" style={{ marginTop: '1rem' }}>
                      {toolsByDomain['web'].map((tool) => (
                        <span className="tool-tag" key={tool.label}>
                          <i className={tool.icon.startsWith('fa-brands') ? tool.icon : `fa-solid ${tool.icon}`}></i>{' '}
                          {tool.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills