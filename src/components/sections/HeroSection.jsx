import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { company, metrics } from '../../data/site-content'
import galleryItems from '../../data/gallery-manifest.json'

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

function HeroSection() {
  const bannerItems = galleryItems.slice(0, 8)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (bannerItems.length < 2) return undefined

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerItems.length)
    }, 3600)

    return () => clearInterval(timer)
  }, [bannerItems.length])

  const selectedBanner = bannerItems[activeSlide]

  return (
    <section className="hero-wrap">
      <div className="container hero-grid">
        <motion.div initial="hidden" animate="show" custom={0} variants={rise}>
          <p className="eyebrow">Web Corporativa</p>
          <h1>{company.name}</h1>
          <p className="hero-copy">{company.tagline}</p>
          <p className="hero-copy hero-copy--subtle">
            Cobertura tecnica para distintas industrias, con foco principal en sistemas de aire comprimido asociados a procesos de oxigenacion y continuidad operacional.
          </p>
          <div className="hero-cta-row">
            <Link className="hero-cta" to="/contacto">
              Solicitar diagnostico
            </Link>
            <Link className="hero-cta hero-cta--ghost" to="/proyectos">
              Ver proyectos
            </Link>
          </div>
        </motion.div>

        <motion.div className="hero-surface" initial="hidden" animate="show" custom={0.15} variants={rise}>
          {selectedBanner ? (
            <>
              <div className="hero-banner-frame" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedBanner.id}
                    src={selectedBanner.src}
                    alt={selectedBanner.alt}
                    className="hero-banner-image"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  />
                </AnimatePresence>
              </div>

              <div className="hero-thumbs" role="tablist" aria-label="Mini galeria destacada">
                {bannerItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`hero-thumb ${index === activeSlide ? 'hero-thumb--active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Mostrar ${item.alt}`}
                    aria-selected={index === activeSlide}
                  >
                    <img src={item.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>

              <h2>Banner de proyectos recientes</h2>
              <p>
                Visualizacion de actividades e intervenciones en terreno para respaldar experiencia tecnica y capacidad de ejecucion.
              </p>
            </>
          ) : (
            <>
              <span className="wave" aria-hidden="true" />
              <h2>Linea visual Ingemant</h2>
              <p>Comunicacion corporativa orientada a ingenieria aplicada, seguridad y confiabilidad operacional.</p>
            </>
          )}
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
