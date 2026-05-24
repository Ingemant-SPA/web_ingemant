import { company } from '../data/site-content'

function ContactPage() {
  return (
    <main>
      <section className="container page-header section-space">
        <p className="eyebrow">Contacto</p>
        <h1>Canal directo con el equipo tecnico</h1>
        <p>
          Formulario de contacto preparado para integracion futura con EmailJS o API propia.
        </p>
      </section>

      <section className="container section-space">
        <div className="contact-grid">
          <article className="contact-card">
            <h2>Datos de referencia</h2>
            <p>Email: {company.email}</p>
            <p>Telefono: {company.phone}</p>
            <p>Ubicacion: {company.location}</p>
          </article>

          <form className="contact-card" onSubmit={(event) => event.preventDefault()}>
            <h2>Mensaje inicial</h2>
            <label>
              Nombre
              <input type="text" name="name" placeholder="Tu nombre" />
            </label>
            <label>
              Correo
              <input type="email" name="email" placeholder="tu@empresa.cl" />
            </label>
            <label>
              Requerimiento
              <textarea rows="5" name="message" placeholder="Describe brevemente tu necesidad tecnica" />
            </label>
            <button type="submit">Enviar (demo)</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
