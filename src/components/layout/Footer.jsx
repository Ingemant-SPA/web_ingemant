import { company } from '../../data/site-content'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>{company.name}</h3>
          <p>{company.tagline}</p>
        </section>

        <section>
          <h3>Contacto</h3>
          <p>{company.email}</p>
          <p>{company.phone}</p>
          <p>{company.location}</p>
        </section>

        <section>
          <h3>Estado del sitio</h3>
          <p>Version inicial con placeholders editables.</p>
          <p>Galeria conectada a public/gallery.</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
