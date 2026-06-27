import { useEffect } from 'react'

const principles = [
  {
    icon: 'fa-atom',
    title: 'Scientific Thinking',
    desc: 'Every problem is approached with scientific logic — hypothesis, experimentation, and evaluation of results.',
  },
  {
    icon: 'fa-arrows-spin',
    title: 'Iterative Learning',
    desc: 'Learning from mistakes, iterating fast, and continuously improving is how I grow.',
  },
  {
    icon: 'fa-code',
    title: 'Build to Learn',
    desc: 'I learn best by building real things and solving actual problems from start to finish.',
  },
  {
    icon: 'fa-magnifying-glass',
    title: 'Curiosity-Driven',
    desc: 'Curiosity is the biggest engine behind every project and milestone I have achieved.',
  },
]

const Metrics = () => {
  useEffect(() => {
    const initMetricsCharts = (retries = 10) => {
      if (typeof (window as any).Chart === 'undefined') {
        if (retries > 0) setTimeout(() => initMetricsCharts(retries - 1), 150)
        return
      }

      const barEl = document.getElementById('barChartMetrics') as HTMLCanvasElement | null
      if (barEl) {
        const existing = (window as any).Chart?.getChart?.(barEl)
        if (existing) existing.destroy()
        new (window as any).Chart(barEl, {
          type: 'bar',
          data: {
            labels: ['2023', '2024', '2025', '2026'],
            datasets: [{
              label: 'Projects',
              data: [1, 1.3, 3.6, 4.3],
              backgroundColor: 'rgba(201,169,110,0.18)',
              borderColor: 'rgba(201,169,110,0.85)',
              borderWidth: 1.5,
              borderRadius: 6,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.5)' } },
              y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.5)', stepSize: 1 }, min: 0 },
            },
          },
        })
      }

      const lineEl = document.getElementById('lineChartMetrics') as HTMLCanvasElement | null
      if (lineEl) {
        const existing2 = (window as any).Chart?.getChart?.(lineEl)
        if (existing2) existing2.destroy()
        new (window as any).Chart(lineEl, {
          type: 'line',
          data: {
            labels: ['2023', '2024', '2025', '2026'],
            datasets: [
              {
                label: 'Cybersecurity',
                data: [15, 40, 62, 72],
                borderColor: 'rgba(201,169,110,0.9)',
                backgroundColor: 'rgba(201,169,110,0.07)',
                fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3,
              },
              {
                label: 'Web Dev',
                data: [25, 48, 65, 78],
                borderColor: 'rgba(232,232,232,0.7)',
                backgroundColor: 'rgba(232,232,232,0.04)',
                fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3,
              },
              {
                label: 'Design',
                data: [60, 68, 75, 80],
                borderColor: 'rgba(160,130,80,0.9)',
                backgroundColor: 'rgba(160,130,80,0.05)',
                fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
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

    requestAnimationFrame(() => { requestAnimationFrame(() => initMetricsCharts()) })
  }, [])

  return (
    <section id="metrics" className="full">
      <div className="metrics-inner">
        <div className="section-label reveal" style={{ textAlign: 'center' }}>Growth & Insights</div>
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>Journey & Growth</h2>
        <p className="section-desc reveal" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          A visualization of skill growth, project volume, and expertise composition over time.
        </p>

        <div className="growth-charts-grid reveal">
          <div className="about-chart-card" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="about-chart-title">Project Volume (2023 – 2026)</div>
            <div className="metrics-chart-canvas-wrap">
              <canvas id="barChartMetrics"></canvas>
            </div>
          </div>
          <div className="about-chart-card" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="about-chart-title">Skill Growth Over Time</div>
            <div className="metrics-chart-canvas-wrap">
              <canvas id="lineChartMetrics"></canvas>
            </div>
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