import { useState, useEffect } from 'react'

const tabs = [
  { id: 'physics', icon: 'fa-atom',          label: 'Fisika & Sains' },
  { id: 'cyber',   icon: 'fa-shield-halved', label: 'Cyber & Forensics' },
  { id: 'design',  icon: 'fa-palette',       label: 'Desain & Kreatif' },
  { id: 'web',     icon: 'fa-globe',         label: 'Web & Tools' },
]

const toolsByDomain: Record<string, { icon: string; label: string }[]> = {
  physics: [
    { icon: 'fa-atom',            label: 'Mekanika Klasik' },
    { icon: 'fa-wave-square',     label: 'Fisika Gelombang' },
    { icon: 'fa-calculator',      label: 'Kalkulus & Matematika Fisika' },
    { icon: 'fa-chart-line',      label: 'Analisis Data Eksperimen' },
    { icon: 'fa-flask',           label: 'Fisika Laboratorium' },
    { icon: 'fa-brands fa-python', label: 'Python untuk Sains' },
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
    { icon: 'fa-palette',      label: 'Desain Grafis' },
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
  physics: { id: 'radarChart',    label: 'Proficiency Radar — Sains & Komputasi' },
  cyber:   { id: 'platformChart', label: 'Proficiency — Cyber & Forensics' },
  design:  { id: 'donutChart',    label: 'Skill Distribution — Desain' },
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

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (typeof (window as any).initChart === 'function') {
          (window as any).initChart(activeTab)
        }

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
  }, [activeTab])

  return (
    <section id="skills" className="full">
      <div className="skills-inner">
        <div className="section-label reveal">Skills & Tools</div>
        <h2 className="section-title reveal">Keahlian & Domain</h2>
        <p className="section-desc reveal">
          Empat domain yang saya tekuni — sains, keamanan digital, desain, dan teknologi.
          Bukan spesialisasi sempit, tapi kombinasi yang saling melengkapi.
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
                <div className="skills-chart-card">
                  <div className="about-chart-title" style={{ marginBottom: '1.5rem' }}>
                    {chartByDomain[tab.id].label}
                  </div>
                  <canvas id={chartByDomain[tab.id].id} style={{ maxHeight: '280px' }}></canvas>
                </div>

                {tab.id === 'physics' && (
                  <div className="skills-list-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <div className="about-chart-title">Bidang yang Dipelajari</div>
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
                      <div className="about-chart-title">Pendekatan Ilmiah</div>
                      <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                        Sebagai mahasiswa Fisika UIN Jakarta, saya mendekati setiap masalah dengan metode ilmiah — hipotesis,
                        observasi, analisis. Pola pikir ini yang menghubungkan fisika dengan cybersecurity.
                      </p>
                    </div>
                  </div>
                )}

                {tab.id === 'cyber' && (
                  <div className="skills-list-card">
                    <div className="about-chart-title">Tools & Teknik</div>
                    <div className="tool-tags" style={{ marginTop: '1rem' }}>
                      {toolsByDomain['cyber'].map((tool) => (
                        <span className="tool-tag" key={tool.label}>
                          <i className={tool.icon.startsWith('fa-brands') ? tool.icon : `fa-solid ${tool.icon}`}></i>{' '}
                          {tool.label}
                        </span>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '1.25rem' }}>
                      Aktif mengikuti CTF (Capture The Flag) internasional maupun nasional dan berbagai tantangan keamanan
                      siber — mencakup web exploitation, binary, digital forensics, dan OSINT. Pencapaian Terakhir Meraih
                      peringkat 59/697 pada Ramadan CTF 2026.
                    </p>
                  </div>
                )}

                {tab.id === 'design' && (
                  <div className="skills-list-card">
                    <div className="about-chart-title">Tools Desain & Editing</div>
                    <div className="tool-tags" style={{ marginTop: '1rem' }}>
                      {toolsByDomain['design'].map((tool) => (
                        <span className="tool-tag" key={tool.label}>
                          <i className={tool.icon.startsWith('fa-brands') ? tool.icon : `fa-solid ${tool.icon}`}></i>{' '}
                          {tool.label}
                        </span>
                      ))}
                    </div>
                    <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '1.25rem' }}>
                      Latar belakang <strong style={{ color: 'var(--text-secondary)' }}>Desain Komunikasi Visual</strong> di
                      SMKS Sasmita Jaya 1 selama 3 tahun membangun kepekaan visual, komposisi, dan kemampuan bercerita lewat
                      gambar — fondasi yang memperkuat desain UI web sampai forensics report.
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