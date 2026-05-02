import { useEffect } from 'react'

const principles = [
  {
    icon: 'fa-atom',
    title: 'Scientific Thinking',
    desc: 'Setiap masalah didekati dengan logika ilmiah — hipotesis, eksperimen, dan evaluasi hasil.',
  },
  {
    icon: 'fa-arrows-spin',
    title: 'Iterative Learning',
    desc: 'Belajar dari kesalahan, iterasi cepat, dan terus memperbaiki adalah cara saya bertumbuh.',
  },
  {
    icon: 'fa-code',
    title: 'Build to Learn',
    desc: 'Saya belajar dengan cara terbaik: membangun sesuatu yang nyata dan menyelesaikan masalah riil.',
  },
  {
    icon: 'fa-magnifying-glass',
    title: 'Curiosity-Driven',
    desc: 'Rasa ingin tahu adalah mesin terbesar di balik setiap proyek dan pencapaian yang saya raih.',
  },
]

const Metrics = () => {
  useEffect(() => {
    const initMetricsCharts = () => {
      const barEl = document.getElementById('barChartMetrics') as HTMLCanvasElement | null
      if (barEl) {
        const existing = (window as any).Chart?.getChart?.(barEl)
        if (existing) existing.destroy()
        if (typeof (window as any).Chart !== 'undefined') {
          new (window as any).Chart(barEl, {
            type: 'bar',
            data: {
              labels: ['2023', '2024', '2025', '2026'],
              datasets: [{
                label: 'Proyek',
                data: [1, 1.3, 3.6, 4.3],
                backgroundColor: 'rgba(201,169,110,0.18)',
                borderColor: 'rgba(201,169,110,0.85)',
                borderWidth: 1.5,
                borderRadius: 6,
              }],
            },
            options: {
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.5)' } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.5)', stepSize: 1 } },
              },
            },
          })
        }
      }

      const lineEl = document.getElementById('lineChartMetrics') as HTMLCanvasElement | null
      if (lineEl) {
        const existing2 = (window as any).Chart?.getChart?.(lineEl)
        if (existing2) existing2.destroy()
        if (typeof (window as any).Chart !== 'undefined') {
          new (window as any).Chart(lineEl, {
            type: 'line',
            data: {
              labels: ['2023', '2024', '2025', '2026'],
              datasets: [
                {
                  label: 'Cybersecurity',
                  data: [20, 50, 72, 80],
                  borderColor: 'rgba(201,169,110,0.9)',
                  backgroundColor: 'rgba(201,169,110,0.07)',
                  fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3,
                },
                {
                  label: 'Web Dev',
                  data: [30, 55, 70, 85],
                  borderColor: 'rgba(232,232,232,0.7)',
                  backgroundColor: 'rgba(232,232,232,0.04)',
                  fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3,
                },
                {
                  label: 'Desain',
                  data: [60, 68, 75, 80],
                  borderColor: 'rgba(160,130,80,0.9)',
                  backgroundColor: 'rgba(160,130,80,0.05)',
                  fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: { position: 'bottom', labels: { padding: 14, font: { size: 11 }, color: '#6a6a6a' } },
              },
              scales: {
                x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.4)' } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.4)' }, min: 0, max: 100 },
              },
            },
          })
        }
      }
    }

    requestAnimationFrame(() => { requestAnimationFrame(initMetricsCharts) })
  }, [])

  return (
    <section id="metrics" className="full">
      <div className="metrics-inner">
        <div className="section-label reveal" style={{ textAlign: 'center' }}>Growth & Insights</div>
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Perjalanan & Perkembangan</h2>
        <p className="section-desc reveal" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          Visualisasi pertumbuhan skill, volume proyek, dan komposisi keahlian dari waktu ke waktu.
        </p>

        <div className="growth-charts-grid reveal">
          <div className="about-chart-card" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="about-chart-title">Project Volume (2023 – 2026)</div>
            <canvas id="barChartMetrics" style={{ maxHeight: '240px' }}></canvas>
          </div>
          <div className="about-chart-card" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="about-chart-title">Skill Growth Over Time</div>
            <canvas id="lineChartMetrics" style={{ maxHeight: '240px' }}></canvas>
          </div>
        </div>

        <div className="principles-grid reveal" style={{ marginTop: '2rem' }}>
          {principles.map((p) => (
            <div className="principle-card" key={p.title}>
              <div className="principle-icon"><i className={`fa-solid ${p.icon}`}></i></div>
              <div className="principle-title">{p.title}</div>
              <div className="principle-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metrics