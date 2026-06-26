const stats = [
  { num: '2',   label: 'International CTFs Competed' },
  { num: '92%', label: 'GTmetrix Grade A Achieved' },
  { num: '7',   label: 'Certifications Earned' },
  { num: '4+',  label: 'Projects Built' },
]

const highlights = [
  {
    icon: 'fa-gavel',        badge: 'Featured Project',   bgNum: '01',
    title: 'WitnessChain: AI Legal Evidence Platform',
    desc: 'Developed a full-stack platform for documenting human rights violation evidence in Indonesia. Tech stack: Next.js 14, Supabase, Gemini 2.5 Flash, and Google Cloud Run. Key features include SHA-256 hashing, Legal Radar AI, a timeline visualizer, and legal aid referral integration.',
    year: '2026', org: 'JuaraVibeCoding (Google for Developers)',
  },
  {
    icon: 'fa-flag',         badge: 'CTF Achievement',    bgNum: '02',
    title: 'Kernel Pwn: Heap Leak via Uninitialized Read',
    desc: 'Successfully tackled an advanced kernel exploitation challenge in an international CTF. Applied techniques including heap spraying, uninitialized read exploitation, and privilege escalation on the Linux kernel.',
    year: '2026', org: 'VulnByDefault (International CTF)',
  },
  {
    icon: 'fa-chart-line',   badge: 'Web Performance',    bgNum: '03',
    title: 'Optimized Website from Grade D to A',
    desc: 'Boosted site performance (GTmetrix) from 55% to 92% by optimizing assets, implementing WebP imagery, utilizing self-hosted fonts, and configuring Google Search Console and Bing Webmaster Tools.',
    year: '2026', org: 'Freelance Web Project',
  },
  {
    icon: 'fa-robot',        badge: 'Personal Project',   bgNum: '04',
    title: 'AI Desktop Overlay',
    desc: 'Created an always-on-top Python desktop application integrated with Groq AI. Features include real-time AI chat, screenshot analysis, a calculator, and a note-taking module, all developed independently.',
    year: '2025', org: 'Personal Project (Python + Groq AI)',
  },
  {
    icon: 'fa-graduation-cap', badge: 'Academic Milestone', bgNum: '05',
    title: 'Bachelor of Physics at UIN Jakarta',
    desc: 'Accepted into the Bachelor of Physics program at the Faculty of Science and Technology, UIN Syarif Hidayatullah Jakarta. This marks a transition from visual communication design to the exact sciences.',
    year: '2026', org: 'UIN Syarif Hidayatullah Jakarta',
  },
  {
    icon: 'fa-shield-halved', badge: 'Security Research',  bgNum: '06',
    title: 'NoSQL Injection & Prototype Pollution',
    desc: 'Resolved complex web exploitation challenges, specifically bypassing NoSQL authentication and performing prototype pollution attacks on Node.js applications during a global CTF competition.',
    year: '2026', org: 'VulnByDefault (Web Exploitation)',
  },
  {
    icon: 'fa-network-wired', badge: 'Forensics',         bgNum: '07',
    title: 'Malware Analysis via PCAP Forensics',
    desc: 'Conducted reverse analysis on a malware delivery chain using PCAP files. Utilized Wireshark and protocol analysis to identify the C2 server, payload delivery path, and persistence methods.',
    year: '2026', org: 'VulnByDefault (Digital Forensics)',
  },
]

const Highlights = () => {
  return (
    <section id="testimonials" className="full">
      <div className="testi-inner">
        <div className="section-label reveal">Highlights</div>
        <h2 className="section-title reveal">Achievements & Milestones</h2>
        <p className="section-desc reveal">
          Key moments from my journey, spanning competitions, projects, and learning breakthroughs.
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