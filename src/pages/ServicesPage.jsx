import ServicesGrid from '../components/sections/ServicesGrid'

function ServicesPage() {
  return (
    <main>
      <section className="container page-header section-space">
        <p className="eyebrow">Servicios</p>
        <h1>Soluciones para continuidad operacional</h1>
        <p>
          Portafolio modular de servicios industriales. El contenido final puede ajustarse cuando el equipo entregue textos oficiales.
        </p>
      </section>
      <ServicesGrid />
    </main>
  )
}

export default ServicesPage
