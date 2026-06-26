const Hero = () => {
  return (
    <>
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
              A Physics student at UIN Jakarta who views technology through a scientific lens. 
              I focus on cybersecurity and vulnerability research, blending analytical precision 
              with a genuine curiosity for how systems operate.
            </p>
            <div className="hero-actions reveal" style={{ transitionDelay: '0.25s' }}>
              <a href="#works" className="btn-primary">
                <i className="fa-solid fa-table-cells"></i> View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <i className="fa-regular fa-envelope"></i> Contact Me
              </a>
              <a href="#blog" className="btn-cv">
                <i className="fa-solid fa-pen-nib"></i>
                <span>Read Blog</span>
              </a>
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
                      <img src="/assets/images/devandra_photo_random.jpg" alt="Devandra El Syadam - Physics & Science" />
                    </div>
                    <div className="sc-footer">
                      <div className="sc-ornament">✦ ✦ ✦</div>
                      <div className="sc-name">Physics & Science</div>
                      <div className="sc-title">UIN Jakarta, 2026</div>
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
                      <div className="sc-title sc-title--accent">Physics & Cybersecurity</div>
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
                      <div className="sc-title">Research</div>
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