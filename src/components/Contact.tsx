import { useState } from 'react'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

const contactItems = [
  { icon: 'fa-regular fa-envelope',   label: 'Email',         val: 'devandraelsyadam1@gmail.com' },
  { icon: 'fa-solid fa-location-dot', label: 'Location',      val: 'Tangerang Selatan, Banten, Indonesia' },
  { icon: 'fa-solid fa-clock',        label: 'Response Time', val: 'Within a business day' },
]

const socials = [
  { href: 'https://linkedin.com/in/devandraelsyadam', icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://github.com/DevanTQ',               icon: 'fa-brands fa-github',      label: 'GitHub' },
  { href: 'https://instagram.com/dvnnaell',           icon: 'fa-brands fa-instagram',   label: 'Instagram' },
  { href: 'https://devandraelsyadam.netlify.app',     icon: 'fa-solid fa-globe',        label: 'Portfolio' },
]

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', subject: '', message: '',
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
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (res.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' })
        alert('Message sent!')
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="full">
      <div className="contact-inner">

        <div className="contact-info reveal-left">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's Collaborate</h2>
          <p className="section-desc" style={{ marginBottom: 0 }}>
            Got a project in mind, a question, or just want to chat about tech and science? Drop me a message.
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
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
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
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder="What's this about..."
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project or question..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact