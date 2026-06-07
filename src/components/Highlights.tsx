const stats = [
  { num: '2',   label: 'International CTFs Competed' },
  { num: '92%', label: 'GTmetrix Grade A Achieved' },
  { num: '7',   label: 'Certifications Earned' },
  { num: '4+',  label: 'Projects Built' },
]

const highlights = [
  {
    icon: 'fa-gavel',        badge: 'Featured Project',   bgNum: '01',
    title: 'WitnessChain — AI Legal Evidence Platform',
    desc: 'Built a full-stack AI-powered platform for documenting human rights violation evidence in Indonesia. Stack: Next.js 14, Supabase, Gemini 2.5 Flash, Google Cloud Run. Features include SHA-256 hashing, Legal Radar AI, Timeline Visualizer, and Google Maps legal aid referral.',
    year: '2026', org: 'JuaraVibeCoding · Google for Developers Indonesia',
  },
  {
    icon: 'fa-flag',         badge: 'CTF Achievement',    bgNum: '02',
    title: 'Solved Kernel Pwn — Heap Leak via Uninitialized Read',
    desc: 'Completed an advanced kernel pwn challenge in an international CTF competition. Techniques used include heap spray, uninitialized read exploitation, and privilege escalation on the Linux kernel.',
    year: '2026', org: 'VulnByDefault · International CTF',
  },
  {
    icon: 'fa-chart-line',   badge: 'Web Performance',    bgNum: '03',
    title: 'GTmetrix 55% → 92% Grade A in a Single Sprint',
    desc: 'Optimized website performance from Grade D (55%) to Grade A (92%) by implementing WebP images, self-hosted fonts, lazy loading, and integrating Google Search Console with Bing Webmaster Tools.',
    year: '2026', org: 'Freelance Web Project',
  },
  {
    icon: 'fa-robot',        badge: 'Personal Project',   bgNum: '04',
    title: 'Built a Functional AI Desktop Overlay',
    desc: 'Designed and built a Python always-on-top desktop app that runs over fullscreen games, integrated with Groq AI. Full features: AI chat, screenshot, calculator, and notes — built independently from scratch.',
    year: '2025', org: 'Personal · Python + Groq AI',
  },
  {
    icon: 'fa-graduation-cap', badge: 'Academic Achievement', bgNum: '05',
    title: 'Admitted to Physics Program at UIN Jakarta',
    desc: 'Successfully accepted into the Bachelor of Physics program at the Faculty of Science and Technology, UIN Syarif Hidayatullah Jakarta — proving that a transition from Visual Communication Design to exact sciences is possible.',
    year: '2026', org: 'UIN Syarif Hidayatullah Jakarta',
  },
  {
    icon: 'fa-shield-halved', badge: 'Security Research', bgNum: '06',
    title: 'NoSQL Injection Bypass & Prototype Pollution',
    desc: 'Solved complex web exploitation challenges including NoSQL injection bypass on authentication and prototype pollution attacks on a Node.js application in an international CTF competition.',
    year: '2026', org: 'VulnByDefault · Web Exploitation',
  },
  {
    icon: 'fa-network-wired', badge: 'Forensics',         bgNum: '07',
    title: 'Malware Delivery Analysis via PCAP Network Forensics',
    desc: 'Performed reverse analysis on a malware delivery chain from a PCAP file — identifying the C2 server, payload delivery mechanism, and persistence technique using Wireshark and advanced protocol analysis.',
    year: '2026', org: 'VulnByDefault · Digital Forensics',
  },
]

const Highlights = () => {
  return (
    <section id="testimonials" className="full">
      <div className="testi-inner">
        <div className="section-label reveal">Highlights</div>
        <h2 className="section-title reveal">Achievements & Highlights</h2>
        <p className="section-desc reveal">
          Real moments and milestones that mark my journey — from competitions, projects, to learning breakthroughs.
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