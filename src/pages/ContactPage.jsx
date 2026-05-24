import { company } from '../data/site-content'

function ContactPage() {
  return (
    <main>
      <section className="container page-header section-space">
        <p className="eyebrow">Contacto</p>
        <h1>Canal directo con el equipo tecnico</h1>
        <p>Formulario activo para enviar solicitudes directamente al equipo tecnico.</p>
      </section>

      <section className="container section-space">
        <div className="contact-grid">
          <article className="contact-card">
            <h2>Datos de referencia</h2>
            <p>Email: {company.email}</p>
            <p>Telefono: {company.phone}</p>
            <p>Ubicacion: {company.location}</p>
          </article>

          <form
            className="contact-card"
            action="https://formsubmit.co/dmardones@ingemantspa.com"
            method="POST"
          >
            <h2>Mensaje inicial</h2>
            <input type="hidden" name="_subject" value="Nuevo contacto desde web Ingemant" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
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
                placeholder="Describe brevemente tu necesidad tecnica"
                required
              />
            </label>
            <button type="submit">Enviar solicitud</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
