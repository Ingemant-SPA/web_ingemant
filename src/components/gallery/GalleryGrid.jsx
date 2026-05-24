import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import galleryItems from '../../data/gallery-manifest.json'

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [visibleCount, setVisibleCount] = useState(12)

  const categories = useMemo(
    () => ['Todos', ...new Set(galleryItems.map((item) => item.category || 'General'))],
    [],
  )

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Todos') return galleryItems
    return galleryItems.filter((item) => (item.category || 'General') === activeCategory)
  }, [activeCategory])

  const visibleItems = filteredItems.slice(0, visibleCount)
  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null

  const closeLightbox = () => setSelectedIndex(null)
  const goPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev
      return (prev - 1 + filteredItems.length) % filteredItems.length
    })
  }
  const goNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev
      return (prev + 1) % filteredItems.length
    })
  }

  if (!galleryItems.length) {
    return (
      <section className="container section-space">
        <div className="gallery-empty">
          <h2>Galeria tecnica en actualizacion</h2>
          <p>
            Esta seccion se actualiza con registros visuales de ejecuciones e intervenciones en terreno.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="container section-space">
      <div className="section-heading">
        <p className="eyebrow">Proyectos</p>
        <h2>Galeria tecnica interactiva</h2>
        <p className="section-caption">Explora intervenciones y evidencias de trabajo con filtros y vista ampliada.</p>
      </div>

      <div className="gallery-toolbar">
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`gallery-filter ${category === activeCategory ? 'gallery-filter--active' : ''}`}
              onClick={() => {
                setActiveCategory(category)
                setVisibleCount(12)
                setSelectedIndex(null)
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <span className="gallery-count">{filteredItems.length} imagenes</span>
      </div>

      <div className="gallery-grid">
        {visibleItems.map((item, index) => (
          <motion.figure
            className="gallery-item"
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: index * 0.02 }}
          >
            <button className="gallery-zoom" type="button" onClick={() => setSelectedIndex(index)}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-overlay">Ampliar</span>
            </button>
            <figcaption>{item.alt}</figcaption>
          </motion.figure>
        ))}
      </div>

      {visibleItems.length < filteredItems.length && (
        <div className="gallery-load-more">
          <button type="button" className="hero-cta" onClick={() => setVisibleCount((prev) => prev + 9)}>
            Cargar mas imagenes
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-panel"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="lightbox-close" type="button" onClick={closeLightbox}>
                Cerrar
              </button>
              <img src={selectedItem.src} alt={selectedItem.alt} className="lightbox-image" />
              <div className="lightbox-info">
                <p>{selectedItem.alt}</p>
                <div className="lightbox-actions">
                  <button type="button" onClick={goPrev}>
                    Anterior
                  </button>
                  <button type="button" onClick={goNext}>
                    Siguiente
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GalleryGrid
