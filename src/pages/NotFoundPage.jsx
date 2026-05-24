import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="container section-space not-found">
      <p className="eyebrow">404</p>
      <h1>Pagina no encontrada</h1>
      <p>La ruta solicitada no existe o fue movida.</p>
      <Link to="/" className="primary-link">
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFoundPage
