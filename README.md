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