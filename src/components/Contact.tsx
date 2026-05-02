import { useState } from 'react'

type FormData = {
  nama: string
  email: string
  subjek: string
  pesan: string
}

const contactItems = [
  { icon: 'fa-regular fa-envelope',  label: 'Email',         val: 'devandraelsyadam1@gmail.com' },
  { icon: 'fa-solid fa-location-dot', label: 'Lokasi',       val: 'Tangerang Selatan, Banten, Indonesia' },
  { icon: 'fa-solid fa-clock',        label: 'Response Time', val: 'Dalam 24 jam kerja' },
]

const socials = [
  { href: 'https://linkedin.com/in/devandraelsyadam', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://github.com/DevanTQ',               icon: 'fa-brands fa-github',      label: 'GitHub' },
  { href: 'https://instagram.com/devan.4hex',         icon: 'fa-brands fa-instagram',   label: 'Instagram' },
  { href: 'https://devandraelsyadam.netlify.app',     icon: 'fa-solid fa-globe',         label: 'Portfolio' },
]

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: '', email: '', subjek: '', pesan: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const body = new URLSearchParams({
      'form-name': 'contact',
      ...formData,
    }).toString()

    try {
      const res = await fetch(window.location.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (res.ok) {
        setFormData({ nama: '', email: '', subjek: '', pesan: '' })
        alert('Pesan terkirim!')
      } else {
        alert('Gagal mengirim pesan. Coba lagi.')
      }
    } catch {
      alert('Terjadi kesalahan. Coba lagi.')
    }
  }

  return (
    <section id="contact" className="full">
      <div className="contact-inner">

        <div className="contact-info reveal-left">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Mari Berkolaborasi</h2>
          <p className="section-desc" style={{ marginBottom: 0 }}>
            Punya proyek menarik, pertanyaan, atau sekadar ingin berbincang tentang teknologi dan sains?
            Saya selalu terbuka untuk diskusi.
          </p>

          <div className="contact-items">
            {contactItems.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-icon"><i className={item.icon}></i></div>
                <div className="contact-detail">
                  <div className="contact-detail-label">{item.label}</div>
                  <div className="contact-detail-val">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-socials">
            {socials.map((s) => (
              <a href={s.href} className="social-btn" target="_blank" rel="noreferrer" key={s.label}>
                <i className={s.icon}></i> {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal-right">
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  name="nama"
                  className="form-input"
                  placeholder="Nama Anda"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="email@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subjek</label>
              <input
                type="text"
                name="subjek"
                className="form-input"
                placeholder="Topik diskusi..."
                value={formData.subjek}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Pesan</label>
              <textarea
                name="pesan"
                className="form-textarea"
                placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                value={formData.pesan}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              <i className="fa-solid fa-paper-plane"></i> Kirim Pesan
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact