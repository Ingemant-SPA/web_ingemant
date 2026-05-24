import GalleryGrid from '../components/gallery/GalleryGrid'

function ProjectsPage() {
  return (
    <main>
      <section className="container page-header section-space">
        <p className="eyebrow">Proyectos</p>
        <h1>Registro visual de ejecucion en terreno</h1>
        <p>
          Esta pagina se alimenta automaticamente con archivos ubicados en la carpeta <strong>public/gallery</strong>.
        </p>
      </section>
      <GalleryGrid />
    </main>
  )
}

export default ProjectsPage
