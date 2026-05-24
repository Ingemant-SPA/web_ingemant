import { motion } from 'framer-motion'
import { services } from '../../data/site-content'

function ServicesGrid() {
  return (
    <section className="container section-space">
      <div className="section-heading">
        <p className="eyebrow">Servicios</p>
        <h2>Capacidades clave</h2>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ServicesGrid
