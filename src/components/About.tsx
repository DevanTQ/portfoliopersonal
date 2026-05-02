const About = () => {
  const skillBars = [
    { label: 'Cybersecurity Fundamentals', pct: 78 },
    { label: 'Digital Forensics',          pct: 76 },
    { label: 'Networking',                 pct: 80 },
    { label: 'Linux & System',             pct: 82 },
    { label: 'Visual Design (DKV)',        pct: 83 },
  ]

  const highlights = [
    { icon: 'fa-atom',             title: 'Ilmiah & Analitis',  desc: 'Pendekatan berbasis logika dan metode ilmiah dalam setiap pemecahan masalah.' },
    { icon: 'fa-seedling',         title: 'Terus Belajar',      desc: 'Belajar mandiri, eksperimen, dan adaptasi adalah bagian dari rutinitas harian saya.' },
    { icon: 'fa-compass-drafting', title: 'Kreatif & Teknis',   desc: 'Latar DKV memberi kepekaan visual yang melengkapi kemampuan teknis saya.' },
    { icon: 'fa-hammer',           title: 'Builder Mindset',    desc: 'Saya senang membangun sesuatu — dari website, tools, hingga ide yang jadi produk nyata.' },
  ]

  return (
    <section id="about" className="full">
      <div className="about-inner">

        <div className="about-text reveal-left">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Curiosity-Driven, Science-Backed</h2>
          <p>
            Perkenalkan Saya <strong>Devandra El Syadam</strong>, mahasiswa Fisika UIN Jakarta yang mengawali perjalanan
            dari dunia desain di SMK Sasmita Jaya 1. Mungkin terlihat jauh, tapi buat saya, Desain, Fisika, dan Teknologi itu satu
            paket: semuanya soal memahami pola dan memecahkan masalah.
          </p>
          <p>
            Saat ini, saya lebih banyak menghabiskan waktu di laboratorium dan di depan layar—menggabungkan
            <strong>logika sains</strong> dengan dunia <strong>cybersecurity</strong>. Bagi saya, setiap baris kode dan
            celah keamanan adalah eksperimen yang butuh ketelitian tinggi.
          </p>
          <p>
            Di luar jam kuliah, saya aktif mengasah <em>problem-solving</em> melalui platform CTF (Capture The Flag) dan
            berbagai tantangan keamanan siber, khususnya pada analisis log, jejak digital, dan investigasi forensik
            untuk memahami serta mengamankan sistem digital.
          </p>

          <div className="about-highlights" style={{ marginTop: '2rem' }}>
            {highlights.map((h) => (
              <div className="highlight-item" key={h.title}>
                <div className="highlight-icon"><i className={`fa-solid ${h.icon}`}></i></div>
                <div className="highlight-title">{h.title}</div>
                <div className="highlight-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual-wrap reveal-right">
          <div className="about-chart-card">
            <div className="about-chart-title">Kompetensi Inti</div>
            {skillBars.map((bar) => (
              <div className="skill-bar-item" key={bar.label}>
                <div className="skill-bar-label">
                  <span>{bar.label}</span>
                  <span>{bar.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" data-width={bar.pct}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
