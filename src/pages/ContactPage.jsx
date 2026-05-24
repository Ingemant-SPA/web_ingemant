import { useState } from 'react'
import { company } from '../data/site-content'

const TARGET_EMAIL = 'dmardones@ingemantspa.com'

function ContactPage() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Enviando solicitud...' })

    const formData = new FormData(event.currentTarget)
    formData.append('_subject', 'Nuevo contacto desde web Ingemant')
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('FormSubmit no disponible')
      }

      setStatus({
        type: 'success',
        message: 'Solicitud enviada correctamente. Nuestro equipo tecnico revisara tu requerimiento.',
      })
      event.currentTarget.reset()
      return
    } catch {
      const name = String(formData.get('name') || '')
      const email = String(formData.get('email') || '')
      const message = String(formData.get('message') || '')
      const subject = encodeURIComponent('Nuevo contacto desde web Ingemant')
      const body = encodeURIComponent(
        `Nombre: ${name}\nCorreo: ${email}\n\nRequerimiento:\n${message}`,
      )

      window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`
      setStatus({
        type: 'warning',
        message:
          'No se pudo enviar de forma automatica. Se abrio tu cliente de correo como respaldo.',
      })
    }
  }

  return (
    <main>
      <section className="container page-header section-space">
        <p className="eyebrow">Contacto</p>
        <h1>Canal directo con ingenieria y mantenimiento</h1>
        <p>Comparte tu requerimiento y coordinaremos una respuesta tecnica acorde a tu operacion.</p>
      </section>

      <section className="container section-space">
        <div className="contact-grid">
          <article className="contact-card">
            <h2>Datos de referencia</h2>
            <p>Email: {company.email}</p>
            <p>Telefono: {company.phone}</p>
            <p>Ubicacion: {company.location}</p>
          </article>

          <form className="contact-card" onSubmit={handleSubmit}>
            <h2>Mensaje inicial</h2>
            <label>
              Nombre
              <input type="text" name="name" placeholder="Tu nombre" required />
            </label>
            <label>
              Correo
              <input type="email" name="email" placeholder="tu@empresa.cl" required />
            </label>
            <label>
              Requerimiento
              <textarea
                rows="5"
                name="message"
                placeholder="Describe tu necesidad tecnica, alcance y contexto operacional"
                required
              />
            </label>
            <button type="submit" disabled={status.type === 'loading'}>
              {status.type === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
            </button>
            {status.type !== 'idle' && <p>{status.message}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
