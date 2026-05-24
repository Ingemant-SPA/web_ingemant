# Fotos del equipo

Esta carpeta se usa para las fotos de perfil que aparecen en la pagina publica de Equipo.

Los datos del perfil se administran en `src/data/site-content.js` dentro de `teamProfiles`.
El cruce foto-resena se hace dentro del mismo objeto del perfil:

- `photo`: ruta de la imagen (ejemplo `/team/constanza-rojas.jpg`)
- `bio`: resena profesional publica asociada a esa foto

## Formato recomendado
- Proporcion: cuadrada (1:1)
- Tamano recomendado: 800x800 px
- Formato: .jpg o .webp
- Peso sugerido: menos de 250 KB

## Nombre de archivo
Usa el mismo nombre definido en el campo `photo` dentro de `src/data/site-content.js`.

Ejemplos:
- `/team/constanza-rojas.jpg`
- `/team/matias-fuentes.jpg`
- `/team/claudio-alvarado.jpg`

## Ejemplo de cruce en perfil

```js
{
	id: 'constanza-rojas',
	name: 'Constanza Rojas',
	photo: '/team/constanza-rojas.jpg',
	bio: 'Resena profesional publica de Constanza Rojas',
}
```

Si una foto no existe aun, el sistema mostrara automaticamente un avatar con iniciales.
