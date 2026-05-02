const serviceItems = [
  { icon: 'fa-atom',          title: 'Fisika & Sains',      num: '01', desc: 'Mahasiswa S1 Fisika UIN Jakarta. Membangun fondasi ilmiah melalui mekanika, gelombang, matematika fisika, dan komputasi sains berbasis Python.' },
  { icon: 'fa-magnifying-glass', title: 'Digital Forensics', num: '02', desc: 'Analisis artefak digital, investigasi PCAP, dan ekstraksi bukti dari sistem digital menggunakan Wireshark, Volatility, Autopsy, dan FTK Imager.' },
  { icon: 'fa-shield-halved', title: 'Security & CTF',      num: '03', desc: 'Web exploitation, binary pwn, dan OSINT melalui kompetisi CTF internasional bersama tim VulnByDefault — termasuk peringkat 59/697 di Ramadan CTF 2026.' },
  { icon: 'fa-palette',       title: 'Desain & Editing',    num: '04', desc: 'Desain grafis, video editing, dan UI/UX dengan fondasi DKV selama 3 tahun — dari visual identity, poster, hingga antarmuka web yang estetis dan fungsional.' },
  { icon: 'fa-brands fa-python', title: 'Python & Automation', num: '06', desc: 'Scripting, otomasi tugas repetitif, dan membangun tools — dari web scraper, QR generator, hingga AI-powered desktop application terintegrasi Groq.' },
]

const Services = () => {
  return (
    <section id="services" className="full">
      <div className="srv-inner">
        <div className="section-label reveal">Focus Area</div>
        <h2 className="section-title reveal">Bidang yang Saya Tekuni</h2>
        <p className="section-desc reveal">
          Area eksplorasi dan pengembangan yang saya fokuskan — tempat sains, teknologi, dan kreativitas bertemu.
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
