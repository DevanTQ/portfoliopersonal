const eduItems = [
  {
    icon: 'fa-compass-drafting',
    period: '2023 – 2026',
    degree: 'SMK — Desain Komunikasi Visual',
    school: 'SMKS Sasmita Jaya 1 Pamulang — Tangerang Selatan',
    desc: 'Mendalami Desain Komunikasi Visual selama 3 tahun. Membangun kepekaan visual, kemampuan desain grafis, dan pemahaman komunikasi berbasis visual.',
    tags: ['Passed'],
  },
  {
    icon: 'fa-atom',
    period: '2026 – Sekarang',
    degree: 'S1 Fisika — Mahasiswa Aktif',
    school: 'UIN Syarif Hidayatullah Jakarta — Fakultas Sains dan Teknologi',
    desc: 'Diterima melalui jalur SNBP 2026. Menekuni fisika sebagai fondasi ilmiah sambil terus mengembangkan kemampuan teknologi dan komputasi.',
    tags: ['SNBP 2026', 'Aktif'],
  },
  {
    icon: 'fa-laptop-code',
    period: '2023 – Sekarang',
    degree: 'Self-Learning — Tech & Cybersecurity',
    school: 'Online / Mandiri — TryHackMe, freeCodeCamp, Cisco',
    desc: 'Belajar mandiri secara konsisten di bidang web development, keamanan digital, Python, dan forensics. Didukung platform online dan praktik langsung melalui CTF.',
    tags: [],
  },
]

const Education = () => {
  return (
    <section id="education" className="full">
      <div className="edu-inner">
        <div className="section-label reveal">Education</div>
        <h2 className="section-title reveal">Latar Belakang Pendidikan</h2>
        <p className="section-desc reveal" style={{ marginBottom: '3rem' }}>
          Perjalanan akademik yang membentuk cara saya berpikir — dari seni visual hingga ilmu eksakta.
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
