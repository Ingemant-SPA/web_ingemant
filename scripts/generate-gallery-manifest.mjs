import { readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const ROOT = process.cwd()
const galleryDir = join(ROOT, 'public', 'gallery')
const outputFile = join(ROOT, 'src', 'data', 'gallery-manifest.json')
const allowedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp'])

const isImage = (filename) => {
  const lower = filename.toLowerCase()
  return [...allowedExtensions].some((ext) => lower.endsWith(ext))
}

const toLabel = (filename) =>
  filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

async function buildManifest() {
  let files = []

  try {
    files = await readdir(galleryDir)
  } catch {
    files = []
  }

  const images = files
    .filter(isImage)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((filename, index) => ({
      id: `gallery-${index + 1}`,
      src: `/gallery/${filename}`,
      alt: `Proyecto ${index + 1}: ${toLabel(filename)}`,
      category: 'General',
    }))

  await writeFile(outputFile, `${JSON.stringify(images, null, 2)}\n`, 'utf-8')
  console.log(`Gallery manifest updated with ${images.length} image(s).`)
}

buildManifest()
