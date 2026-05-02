import { useState } from 'react'

const Hero = () => {
  const [showToast, setShowToast] = useState(false)

  const handleCVDownload = () => {
    setShowToast(true)
    window.open('https://drive.google.com/uc?export=download&id=ID_FILE_KAMU')
  }

  return (
    <>
      {showToast && (
        <div className="cv-toast" id="cvToast">
          <i className="fa-solid fa-circle-info cv-toast-icon"></i>
          <div>
            <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Mengunduh CV...</strong>
          </div>
        </div>
      )}

      <section id="hero" className="full">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-inner">

          <div className="hero-content">
            <h1 className="hero-name reveal" style={{ transitionDelay: '0.1s' }}>
              Devandra<br /><span>El Syadam.</span>
            </h1>
            <p className="hero-role reveal" style={{ transitionDelay: '0.15s' }}>
              Physics Student & Technology Enthusiast
            </p>
            <p className="hero-desc reveal" style={{ transitionDelay: '0.2s' }}>
              Mahasiswa Fisika UIN Jakarta yang melihat teknologi lewat lensa sains. Fokus pada eksplorasi Cybersecurity
              dan Vulnerability Research, menggabungkan ketelitian logika dengan rasa penasaran untuk mengulik lebih dalam
              suatu sistem.
            </p>
            <div className="hero-actions reveal" style={{ transitionDelay: '0.25s' }}>
              <a href="#works" className="btn-primary">
                <i className="fa-solid fa-table-cells"></i> Lihat Karya
              </a>
              <a href="#contact" className="btn-secondary">
                <i className="fa-regular fa-envelope"></i> Hubungi Saya
              </a>
              <button className="btn-cv" onClick={handleCVDownload}>
                <i className="fa-solid fa-download"></i>
                <span>Download CV</span>
              </button>
            </div>
          </div>

          <div className="hero-visual reveal-right">
            <div className="hero-photo-wrap">
              <div className="hero-glow"></div>
              <div className="stamp-cards-group" id="stampCardsGroup">

                <div className="sc-card sc-left">
                  <div className="sc-body sc-body--gold">
                    <div className="sc-perf sc-perf--h sc-perf--top"></div>
                    <div className="sc-perf sc-perf--h sc-perf--bot"></div>
                    <div className="sc-perf sc-perf--v sc-perf--lft"></div>
                    <div className="sc-perf sc-perf--v sc-perf--rgt"></div>
                    <div className="sc-year">2026</div>
                    <div className="sc-photo">
                      <img src="/assets/images/devandra_photo_random.jpg" alt="Devandra El Syadam - Fisika & Sains" />
                    </div>
                    <div className="sc-footer">
                      <div className="sc-ornament">✦ ✦ ✦</div>
                      <div className="sc-name">Fisika & Sains</div>
                      <div className="sc-title">UIN Jakarta · 2026</div>
                    </div>
                    <div className="sc-num">20</div>
                  </div>
                </div>

                <div className="sc-card sc-center" id="scMainCard">
                  <div className="sc-body sc-body--dark">
                    <div className="sc-perf sc-perf--h sc-perf--top"></div>
                    <div className="sc-perf sc-perf--h sc-perf--bot"></div>
                    <div className="sc-perf sc-perf--v sc-perf--lft"></div>
                    <div className="sc-perf sc-perf--v sc-perf--rgt"></div>
                    <div className="sc-year sc-year--accent">2026</div>
                    <div className="sc-photo sc-photo--main">
                      <img src="/assets/images/devandra_photo_formal.jpg" alt="Devandra El Syadam" />
                    </div>
                    <div className="sc-footer">
                      <div className="sc-ornament sc-ornament--accent">★ ★ ★</div>
                      <div className="sc-name sc-name--light">Devandra El Syadam</div>
                      <div className="sc-title sc-title--accent">Physics · Cybersecurity</div>
                    </div>
                    <div className="sc-num sc-num--accent">05.</div>
                  </div>
                </div>

                <div className="sc-card sc-right">
                  <div className="sc-body sc-body--red">
                    <div className="sc-perf sc-perf--h sc-perf--top"></div>
                    <div className="sc-perf sc-perf--h sc-perf--bot"></div>
                    <div className="sc-perf sc-perf--v sc-perf--lft"></div>
                    <div className="sc-perf sc-perf--v sc-perf--rgt"></div>
                    <div className="sc-year">2026</div>
                    <div className="sc-photo">
                      <img src="/assets/images/devandra_photo_smk.jpeg" alt="Devandra El Syadam - Cybersecurity" />
                    </div>
                    <div className="sc-footer">
                      <div className="sc-ornament">✦ ✦ ✦</div>
                      <div className="sc-name">Digital Forensics</div>
                      <div className="sc-title">Me?</div>
                    </div>
                    <div className="sc-num">2008</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero
