import ServicesGrid from '../components/sections/ServicesGrid'

function ServicesPage() {
  return (
    <main>
      <section className="container page-header section-space">
        <p className="eyebrow">Servicios</p>
        <h1>Soluciones para continuidad operacional</h1>
        <p>
          Portafolio de ingenieria y mantenimiento para aire comprimido, oxigenacion y automatizacion industrial. Integramos diagnostico, ejecucion y mejora continua para operaciones que requieren confiabilidad, seguridad y control tecnico.
        </p>
      </section>
      <ServicesGrid />
    </main>
  )
}

export default ServicesPage
