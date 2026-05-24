import GalleryGrid from '../components/gallery/GalleryGrid'

function ProjectsPage() {
  return (
    <main>
      <section className="container page-header section-space">
        <p className="eyebrow">Proyectos</p>
        <h1>Registro visual de ejecucion en terreno</h1>
        <p>
          Muestra de ejecuciones y actividades tecnicas en mantenimiento industrial, aire comprimido, oxigenacion y automatizacion.
        </p>
      </section>
      <GalleryGrid />
    </main>
  )
}

export default ProjectsPage
