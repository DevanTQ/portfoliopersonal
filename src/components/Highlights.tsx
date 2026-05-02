const stats = [
  { num: '1',   label: 'CTF Internasional Diikuti' },
  { num: '92%', label: 'GTmetrix Grade A Dicapai' },
  { num: '4',   label: 'Sertifikasi Diraih' },
  { num: '3+',  label: 'Proyek Dibangun' },
]

const highlights = [
  {
    icon: 'fa-flag',         badge: 'CTF Achievement',    bgNum: '01',
    title: 'Solved Kernel Pwn — Heap Leak via Uninitialized Read',
    desc: 'Berhasil menyelesaikan challenge kernel pwn tingkat lanjut dalam kompetisi CTF internasional. Teknik yang digunakan mencakup heap spray, uninitialized read exploitation, dan privilege escalation pada Linux kernel.',
    year: '2026', org: 'VulnByDefault · CTF Internasional',
  },
  {
    icon: 'fa-chart-line',   badge: 'Web Performance',    bgNum: '02',
    title: 'GTmetrix 55% → 92% Grade A dalam Satu Sprint',
    desc: 'Berhasil mengoptimasi performa website dari Grade D (55%) ke Grade A (92%) melalui implementasi WebP, self-hosted fonts, lazy loading, dan integrasi Google Search Console serta Bing Webmaster Tools.',
    year: '2026', org: 'Freelance Web Project',
  },
  {
    icon: 'fa-robot',        badge: 'Personal Project',   bgNum: '03',
    title: 'Membangun AI Desktop Overlay Fungsional',
    desc: 'Merancang dan membangun aplikasi desktop Python always-on-top yang berjalan di atas game fullscreen, terintegrasi dengan Groq AI. Fitur lengkap: AI chat, screenshot, kalkulator, dan notes — dibangun secara mandiri dari nol.',
    year: '2025', org: 'Personal · Python + Groq AI',
  },
  {
    icon: 'fa-graduation-cap', badge: 'Academic Achievement', bgNum: '04',
    title: 'Diterima S1 Fisika UIN Jakarta via SNBP 2026',
    desc: 'Berhasil lolos seleksi SNBP 2026 dan diterima di program studi S1 Fisika, Fakultas Sains dan Teknologi, UIN Syarif Hidayatullah Jakarta — membuktikan transisi dari DKV menuju bidang eksakta yang saya minati.',
    year: '2026', org: 'UIN Syarif Hidayatullah Jakarta · SNBP',
  },
  {
    icon: 'fa-shield-halved', badge: 'Security Research', bgNum: '05',
    title: 'NoSQL Injection Bypass & Prototype Pollution',
    desc: 'Menyelesaikan challenge web exploitation kompleks mencakup NoSQL injection bypass pada autentikasi dan prototype pollution attack pada aplikasi Node.js dalam kompetisi CTF tingkat internasional.',
    year: '2026', org: 'VulnByDefault · Web Exploitation',
  },
  {
    icon: 'fa-network-wired', badge: 'Forensics',         bgNum: '06',
    title: 'Analisis Malware Delivery via PCAP Network Forensics',
    desc: 'Berhasil melakukan reverse analysis terhadap malware delivery chain dari file PCAP — mengidentifikasi C2 server, payload delivery mechanism, dan persistence technique menggunakan Wireshark dan analisis protokol lanjutan.',
    year: '2026', org: 'VulnByDefault · Digital Forensics',
  },
]

const Highlights = () => {
  return (
    <section id="testimonials" className="full">
      <div className="testi-inner">
        <div className="section-label reveal">Highlights</div>
        <h2 className="section-title reveal">Pencapaian & Highlight</h2>
        <p className="section-desc reveal">
          Momen dan pencapaian nyata yang menandai perjalanan saya — dari kompetisi, proyek, hingga milestone belajar.
        </p>

        <div className="highlights-stats reveal" style={{ marginTop: '3rem' }}>
          {stats.map((s) => (
            <div className="hl-stat" key={s.label}>
              <div className="hl-stat-num">{s.num}</div>
              <div className="hl-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="highlights-grid" style={{ marginTop: '2rem' }}>
          {highlights.map((h) => (
            <div className="hl-card reveal" key={h.bgNum}>
              <div className="hl-top">
                <div className="hl-icon"><i className={`fa-solid ${h.icon}`}></i></div>
                <div>
                  <div className="hl-badge">{h.badge}</div>
                  <div className="hl-title">{h.title}</div>
                </div>
              </div>
              <div className="hl-desc">{h.desc}</div>
              <div className="hl-meta">
                <span className="hl-year">{h.year}</span>
                <span className="hl-org">{h.org}</span>
              </div>
              <div className="hl-bg-num">{h.bgNum}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
