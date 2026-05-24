# Web Corporativa Ingemant SPA

Sitio corporativo moderno para Ingemant SPA, construido con React + Vite y alineado al roadmap tecnico del proyecto.

## Estado actual

- Base frontend implementada
- Paginas corporativas habilitadas (Inicio, Servicios, Proyectos, Nosotros, Contacto)
- Sistema de tema claro/oscuro activo
- Galeria autogenerada desde carpeta del repositorio
- Listo para integrar textos y activos finales

## Stack

- React
- Vite
- TailwindCSS
- React Router
- Axios
- Framer Motion

## Instalacion y uso

```bash
npm install
npm run dev
```

Build de produccion:

```bash
npm run build
npm run preview
```

## Galeria automatica

La galeria se alimenta de imagenes dentro de:

- `public/gallery`

Extensiones soportadas:

- `.jpg`
- `.jpeg`
- `.png`
- `.webp`

Antes de `dev` y `build`, el script `gallery:sync` genera automaticamente el manifiesto en `src/data/gallery-manifest.json`.

## Sistema visual

- Linea visual azul corporativa inspirada en la referencia compartida
- Modo claro/oscuro con switch manual
- Estilo responsivo para desktop y mobile

Paleta base:

- `#0B2E78`
- `#1F4FAF`
- `#2F6FD6`
- `#6FA6FF`
- `#071631`
- `#F4F8FF`

## Estructura principal

```text
public/
	gallery/
scripts/
	generate-gallery-manifest.mjs
src/
	components/
		gallery/
		layout/
		sections/
		ui/
	context/
	data/
	pages/
	router/
	App.jsx
	index.css
	main.jsx
```

## Documentacion complementaria

- [roadmap.md](roadmap.md)
- [spec.yaml](spec.yaml)

## Equipo

- Daniel Mardones, Supervisor de mantenimiento y desarrollador
- Ingemant SPA, Ingenieria y mantenimiento industrial

## Gestion de perfiles del equipo

La pagina publica de Equipo usa una sola fuente de datos:

- `src/data/site-content.js`
- Export: `teamProfiles`

Cada persona del equipo se define como un objeto dentro del arreglo `teamProfiles`. En ese mismo objeto se cruza:

- Foto: campo `photo`
- Resena profesional: campo `bio`
- Habilidades: campo `skills`
- Certificaciones: campo `certifications`
- Portafolio tecnico: campo `portfolio`

Ejemplo de estructura:

```js
{
	id: 'nombre-apellido',
	name: 'Nombre Apellido',
	title: 'Cargo',
	area: 'Direccion | Supervision | Planificacion | Tecnicos',
	photo: '/team/nombre-apellido.jpg',
	yearsExperience: 8,
	location: 'Puerto Montt',
	bio: 'Resena profesional publica del integrante.',
	skills: ['Habilidad 1', 'Habilidad 2'],
	certifications: ['Certificacion 1', 'Certificacion 2'],
	portfolio: ['Proyecto o logro 1', 'Proyecto o logro 2'],
}
```

### Donde guardar las fotos

- Carpeta: `public/team/`
- Ruta referenciada en `photo`: `/team/archivo.jpg`

Ejemplo:

- Archivo fisico: `public/team/camila-oyarzun.jpg`
- Campo en perfil: `photo: '/team/camila-oyarzun.jpg'`

### Flujo recomendado para agregar un perfil

1. Subir la foto en `public/team/` con nombre en minusculas y guiones.
2. Crear el objeto de la persona en `teamProfiles` dentro de `src/data/site-content.js`.
3. Asegurar que `photo` apunte al archivo correcto y que `bio` tenga la resena profesional.
4. Completar `skills`, `certifications` y `portfolio`.
5. Ejecutar `npm run build` para validar.

Nota: si falta la foto, la web mostrara automaticamente un avatar con iniciales.