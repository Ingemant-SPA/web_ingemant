import { aboutHighlights } from '../data/site-content'

function AboutPage() {
  return (
    <main>
      <section className="container page-header section-space">
        <p className="eyebrow">Nosotros</p>
        <h1>Ingenieria operativa para industrias exigentes</h1>
        <p>
          Ingemant SPA integra ingenieria y mantenimiento industrial para operaciones donde la confiabilidad del aire comprimido y los sistemas de oxigenacion es clave para la continuidad operacional.
        </p>
      </section>

      <section className="container section-space">
        <div className="about-grid">
          {aboutHighlights.map((item) => (
            <article className="about-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutPage
