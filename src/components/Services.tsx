const serviceItems = [
  { icon: 'fa-atom',             title: 'Physics & Science',    num: '01', desc: 'Physics student at UIN Jakarta. Building a scientific foundation through mechanics, wave physics, mathematical physics, and Python-based scientific computing.' },
  { icon: 'fa-magnifying-glass', title: 'Digital Forensics',    num: '02', desc: 'Digital artifact analysis, PCAP investigation, and evidence extraction from digital systems using Wireshark, Volatility, Autopsy, and FTK Imager.' },
  { icon: 'fa-shield-halved',    title: 'Security & CTF',       num: '03', desc: 'Web exploitation, binary pwn, and OSINT through international CTF competitions — including a rank of 59/702 in Ramadan CTF 2026.' },
  { icon: 'fa-palette',          title: 'Design & Editing',     num: '04', desc: 'Graphic design, video editing, and UI/UX with a three-year Visual Communication Design background — from visual identity and posters to aesthetic and functional web interfaces.' },
  { icon: 'fa-gavel',            title: 'WitnessChain',         num: '05', desc: 'AI-powered legal evidence platform built with Next.js 14, Supabase, and Gemini 2.5 Flash on Google Cloud Run. Features SHA-256 hashing, Legal Radar AI, Timeline Visualizer, and Google Maps legal aid referral. Submitted to JuaraVibeCoding 2026 by Google.' },
  { icon: 'fa-brands fa-python', title: 'Python & Automation',  num: '06', desc: 'Scripting, automating repetitive tasks, and building tools — from web scrapers and QR generators to an AI-powered desktop application integrated with Groq.' },
]

const Services = () => {
  return (
    <section id="services" className="full">
      <div className="srv-inner">
        <div className="section-label reveal">Focus Area</div>
        <h2 className="section-title reveal">Areas I Focus On</h2>
        <p className="section-desc reveal">
          Exploration and development areas I focus on — where science, technology, and creativity meet.
        </p>

        <div className="srv-grid">
          {serviceItems.map((item) => (
            <div className="srv-card reveal" key={item.num}>
              <div className="srv-icon"><i className={item.icon.startsWith('fa-brands') ? item.icon : `fa-solid ${item.icon}`}></i></div>
              <div className="srv-title">{item.title}</div>
              <div className="srv-desc">{item.desc}</div>
              <div className="srv-num">{item.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services