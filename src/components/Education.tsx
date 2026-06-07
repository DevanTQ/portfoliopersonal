const eduItems = [
  {
    icon: 'fa-compass-drafting',
    period: '2023 – 2026',
    degree: 'Vocational High School — Visual Communication Design',
    school: 'SMKS Sasmita Jaya 1 Pamulang — Tangerang Selatan',
    desc: 'Spent three years studying Visual Communication Design, building a strong foundation in graphic design, visual storytelling, and design-based communication.',
    tags: ['Graduated'],
  },
  {
    icon: 'fa-atom',
    period: '2026 – Present',
    degree: 'Bachelor of Physics — Active Student',
    school: 'UIN Syarif Hidayatullah Jakarta — Faculty of Science and Technology',
    desc: 'Currently pursuing a Physics degree with a focus on building scientific and analytical thinking, while continuously expanding skills in technology and scientific computing.',
    tags: ['2026', 'Active'],
  },
  {
    icon: 'fa-laptop-code',
    period: '2023 – Present',
    degree: 'Self-Learning — Tech & Cybersecurity',
    school: 'Online — TryHackMe, freeCodeCamp, Cisco, Fortinet',
    desc: 'Consistently self-studying web development, digital security, Python, and digital forensics through online platforms and hands-on practice via CTF competitions.',
    tags: [],
  },
]

const Education = () => {
  return (
    <section id="education" className="full">
      <div className="edu-inner">
        <div className="section-label reveal">Education</div>
        <h2 className="section-title reveal">Academic Background</h2>
        <p className="section-desc reveal" style={{ marginBottom: '3rem' }}>
          An academic journey that shapes the way I think — from visual arts to exact sciences.
        </p>

        <div className="edu-grid">
          {eduItems.map((item) => (
            <div className="edu-card reveal" key={item.degree}>
              <div className="edu-bg"><i className={`fa-solid ${item.icon}`}></i></div>
              <div className="edu-period">{item.period}</div>
              <div className="edu-degree">{item.degree}</div>
              <div className="edu-school">{item.school}</div>
              <div className="edu-desc">{item.desc}</div>
              {item.tags.length > 0 && (
                <div style={{ marginTop: '1rem' }}>
                  {item.tags.map((tag) => (
                    <span className="tag" style={{ fontSize: '0.72rem', marginLeft: '0.4rem' }} key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education