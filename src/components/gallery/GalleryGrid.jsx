import galleryItems from '../../data/gallery-manifest.json'

function GalleryGrid() {
  if (!galleryItems.length) {
    return (
      <section className="container section-space">
        <div className="gallery-empty">
          <h2>Galeria en preparacion</h2>
          <p>
            Agrega imagenes en <strong>public/gallery</strong> y se publicaran automaticamente en esta seccion.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="container section-space">
      <div className="section-heading">
        <p className="eyebrow">Proyectos</p>
        <h2>Galeria tecnica</h2>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <figure className="gallery-item" key={item.id}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>{item.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default GalleryGrid
