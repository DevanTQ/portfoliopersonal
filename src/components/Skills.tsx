import { useState, useEffect } from 'react'

const tabs = [
  { id: 'physics', icon: 'fa-atom',        label: 'Physics & Science' },
  { id: 'cyber',   icon: 'fa-shield-halved', label: 'Cyber & Forensics' },
  { id: 'design',  icon: 'fa-palette',       label: 'Design & Creative' },
  { id: 'web',     icon: 'fa-globe',         label: 'Web & Tools' },
]

const toolsByDomain: Record<string, { icon: string; label: string }[]> = {
  physics: [
    { icon: 'fa-atom',             label: 'Classical Mechanics' },
    { icon: 'fa-wave-square',      label: 'Wave Physics' },
    { icon: 'fa-calculator',       label: 'Calculus & Math Physics' },
    { icon: 'fa-chart-line',       label: 'Experimental Analysis' },
    { icon: 'fa-flask',            label: 'Physics Laboratory' },
    { icon: 'fa-brands fa-python', label: 'Python for Science' },
    { icon: 'fa-diagram-project',  label: 'Scientific Method' },
    { icon: 'fa-subscript',        label: 'LaTeX' },
  ],
  cyber: [
    { icon: 'fa-network-wired',    label: 'Wireshark' },
    { icon: 'fa-magnifying-glass', label: 'Autopsy' },
    { icon: 'fa-hard-drive',       label: 'FTK Imager' },
    { icon: 'fa-layer-group',      label: 'Volatility' },
    { icon: 'fa-database',         label: 'Sleuth Kit' },
    { icon: 'fa-bug',              label: 'Malware Analysis' },
    { icon: 'fa-globe',            label: 'OSINT' },
    { icon: 'fa-terminal',         label: 'Bash Scripting' },
    { icon: 'fa-brands fa-linux',  label: 'Linux' },
    { icon: 'fa-user-secret',      label: 'Web Exploitation' },
    { icon: 'fa-file-shield',      label: 'Log Analysis' },
    { icon: 'fa-clock-rotate-left', label: 'Timeline Analysis' },
  ],
  design: [
    { icon: 'fa-pen-ruler',     label: 'Adobe Illustrator' },
    { icon: 'fa-image',         label: 'Adobe Photoshop' },
    { icon: 'fa-film',          label: 'Adobe Premiere Pro' },
    { icon: 'fa-star',          label: 'Canva' },
    { icon: 'fa-layer-group',   label: 'Figma' },
    { icon: 'fa-palette',       label: 'Graphic Design' },
    { icon: 'fa-scissors',      label: 'Video Editing' },
    { icon: 'fa-eye',           label: 'UI/UX Principles' },
    { icon: 'fa-font',          label: 'Typography' },
    { icon: 'fa-swatchbook',    label: 'Branding & Identity' },
  ],
  web: [
    { icon: 'fa-brands fa-html5',     label: 'HTML5' },
    { icon: 'fa-brands fa-css3-alt',  label: 'CSS3' },
    { icon: 'fa-brands fa-js',        label: 'JavaScript' },
    { icon: 'fa-brands fa-python',    label: 'Python' },
    { icon: 'fa-brands fa-git-alt',   label: 'Git' },
    { icon: 'fa-brands fa-github',    label: 'GitHub' },
    { icon: 'fa-chart-line',          label: 'SEO & Core Web Vitals' },
    { icon: 'fa-brands fa-google',    label: 'Search Console' },
    { icon: 'fa-gauge-high',          label: 'GTmetrix' },
    { icon: 'fa-qrcode',              label: 'Automation' },
    { icon: 'fa-robot',               label: 'AI Integration' },
    { icon: 'fa-server',              label: 'Netlify / Hosting' },
  ],
}

const chartByDomain: Record<string, { id: string; label: string }> = {
  physics: { id: 'radarChart',    label: 'Proficiency Radar: Science & Computing' },
  cyber:   { id: 'platformChart', label: 'Proficiency: Cyber & Forensics' },
  design:  { id: 'donutChart',    label: 'Skill Distribution: Design' },
  web:     { id: 'lineChart',     label: 'Skill Growth: Web & Programming' },
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
        <h2 className="section-title reveal">Technical Domains</h2>
        <p className="section-desc reveal">
          Exploring the overlap between physics, digital security, design, and web development. 
          These domains work together to create a versatile analytical skillset.
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

                <div className="skills-list-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <div className="about-chart-title">Core Competencies</div>
                    <div className="tool-tags" style={{ marginTop: '1rem' }}>
                      {toolsByDomain[tab.id].map((tool) => (
                        <span className="tool-tag" key={tool.label}>
                          <i className={tool.icon.startsWith('fa-brands') ? tool.icon : `fa-solid ${tool.icon}`}></i>{' '}
                          {tool.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {tab.id === 'physics' && (
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                      My coursework as a <strong>Physics student at UIN Jakarta</strong> relies on the scientific method of hypothesis, observation, and analysis. This analytical mindset directly shapes my approach to cybersecurity.
                    </p>
                  )}
                  {tab.id === 'cyber' && (
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                      I actively compete in international and national <strong>CTF competitions</strong> with a focus on web exploitation, binary pwn, and digital forensics. Most recently, I secured a top-tier ranking in the 2026 Ramadan CTF.
                    </p>
                  )}
                  {tab.id === 'design' && (
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                      My background in <strong>Visual Communication Design</strong> allows me to combine creative storytelling with UI/UX principles, which helps make technical projects clearer and more accessible.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills