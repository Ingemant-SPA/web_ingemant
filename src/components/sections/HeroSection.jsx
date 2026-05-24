import { motion } from 'framer-motion'
import { company, metrics } from '../../data/site-content'

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

function HeroSection() {
  return (
    <section className="hero-wrap">
      <div className="container hero-grid">
        <motion.div initial="hidden" animate="show" custom={0} variants={rise}>
          <p className="eyebrow">Web Corporativa</p>
          <h1>{company.name}</h1>
          <p className="hero-copy">{company.tagline}</p>
          <p className="hero-copy hero-copy--subtle">
            Soluciones en mantenimiento industrial, aire comprimido, oxigenacion y automatizacion para operaciones con alta exigencia.
          </p>
        </motion.div>

        <motion.div className="hero-surface" initial="hidden" animate="show" custom={0.15} variants={rise}>
          <span className="wave" aria-hidden="true" />
          <h2>Linea visual Ingemant</h2>
          <p>Diseño corporativo en escala azul con modo claro/oscuro y lenguaje tecnico confiable.</p>
        </motion.div>
      </div>

      <div className="container metric-grid">
        {metrics.map((metric, index) => (
          <motion.article
            key={metric.label}
            className="metric-card"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 + index * 0.12 }}
          >
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
