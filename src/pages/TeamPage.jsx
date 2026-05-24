import { useMemo, useState } from 'react'
import { teamProfiles } from '../data/site-content'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function TeamPage() {
  const [activeArea, setActiveArea] = useState('Todos')
  const [query, setQuery] = useState('')
  const [imageErrors, setImageErrors] = useState({})

  const areas = useMemo(() => {
    const allAreas = Array.from(new Set(teamProfiles.map((profile) => profile.area)))
    return ['Todos', ...allAreas]
  }, [])

  const totalSkills = useMemo(() => {
    const allSkills = teamProfiles.flatMap((profile) => profile.skills)
    return new Set(allSkills).size
  }, [])

  const filteredProfiles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return teamProfiles.filter((profile) => {
      const areaMatch = activeArea === 'Todos' || profile.area === activeArea

      if (!normalizedQuery) {
        return areaMatch
      }

      const searchBlob = [
        profile.name,
        profile.title,
        profile.area,
        profile.bio,
        ...profile.skills,
        ...profile.certifications,
        ...profile.portfolio,
      ]
        .join(' ')
        .toLowerCase()

      return areaMatch && searchBlob.includes(normalizedQuery)
    })
  }, [activeArea, query])

  const handleImageError = (id) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }))
  }

  return (
    <main>
      <section className="container page-header section-space">
        <p className="eyebrow">Equipo Tecnico</p>
        <h1>Equipo tecnico de Ingemant</h1>
        <p>
          Presentamos un equipo multidisciplinario orientado a ingenieria, mantenimiento y ejecucion en terreno para operaciones industriales de alta exigencia.
        </p>

        <div className="team-summary-row">
          <article className="team-summary-card">
            <strong>{teamProfiles.length}</strong>
            <span>Profesionales activos</span>
          </article>
          <article className="team-summary-card">
            <strong>{areas.length - 1}</strong>
            <span>Areas operativas</span>
          </article>
          <article className="team-summary-card">
            <strong>{totalSkills}</strong>
            <span>Habilidades tecnicas</span>
          </article>
        </div>
      </section>

      <section className="container section-space team-space-top">
        <div className="team-toolbar">
          <div className="team-filters" role="tablist" aria-label="Filtrar por area">
            {areas.map((area) => (
              <button
                key={area}
                type="button"
                className={`team-filter ${area === activeArea ? 'team-filter--active' : ''}`}
                onClick={() => setActiveArea(area)}
              >
                {area}
              </button>
            ))}
          </div>

          <label className="team-search">
            <span>Buscar talento</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Habilidad tecnica, certificacion o nombre"
            />
          </label>
        </div>

        <div className="team-social-grid">
          {filteredProfiles.map((profile) => (
            <article className="team-profile-card" key={profile.id}>
              <div className="team-profile-head">
                <figure className="team-avatar" aria-hidden="true">
                  {!imageErrors[profile.id] ? (
                    <img
                      src={profile.photo}
                      alt={`Foto de ${profile.name}`}
                      loading="lazy"
                      onError={() => handleImageError(profile.id)}
                    />
                  ) : null}
                  <span className="team-avatar-fallback">{getInitials(profile.name)}</span>
                </figure>

                <div>
                  <h2>{profile.name}</h2>
                  <p className="team-profile-title">{profile.title}</p>
                  <p className="team-profile-meta">
                    {profile.area} · {profile.yearsExperience} anos · {profile.location}
                  </p>
                </div>
              </div>

              <p className="team-profile-bio">{profile.bio}</p>

              <section>
                <h3>Habilidades tecnicas</h3>
                <ul className="team-chip-list">
                  {profile.skills.map((skill) => (
                    <li key={`${profile.id}-${skill}`}>{skill}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>Certificaciones</h3>
                <ul className="team-list">
                  {profile.certifications.map((certification) => (
                    <li key={`${profile.id}-${certification}`}>{certification}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>Portafolio tecnico</h3>
                <ul className="team-list">
                  {profile.portfolio.map((item) => (
                    <li key={`${profile.id}-${item}`}>{item}</li>
                  ))}
                </ul>
              </section>
            </article>
          ))}
        </div>

        {filteredProfiles.length === 0 ? (
          <div className="team-empty">
            <p>No hay perfiles que coincidan con esta busqueda.</p>
          </div>
        ) : null}
      </section>
    </main>
  )
}

export default TeamPage