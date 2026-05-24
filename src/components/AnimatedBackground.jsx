import { useEffect, useRef } from 'react'

const DPR_CAP = 2
const BASE_BUBBLE_DENSITY = 1 / 26000
const MIN_BUBBLES = 36
const MAX_BUBBLES = 120

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

function createBubble(width, height, randomY = true) {
  const radius = randomBetween(1.8, 9.5)
  const speed = randomBetween(0.35, 1.55)

  return {
    x: Math.random() * width,
    y: randomY ? Math.random() * height : height + radius + Math.random() * 80,
    radius,
    speed,
    alpha: randomBetween(0.16, 0.45),
    driftAmplitude: randomBetween(3, 18),
    driftFrequency: randomBetween(0.35, 1.25),
    driftPhase: randomBetween(0, Math.PI * 2),
  }
}

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return undefined

    let width = 0
    let height = 0
    let dpr = 1
    let rafId = 0
    let bubbles = []
    let count = MIN_BUBBLES

    const setCanvasSize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const targetCount = clamp(
        Math.round((width * height) * BASE_BUBBLE_DENSITY),
        MIN_BUBBLES,
        MAX_BUBBLES,
      )

      if (targetCount > bubbles.length) {
        for (let i = bubbles.length; i < targetCount; i += 1) {
          bubbles.push(createBubble(width, height))
        }
      } else if (targetCount < bubbles.length) {
        bubbles.length = targetCount
      }

      count = targetCount
    }

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, '#7cc6ff')
      gradient.addColorStop(0.46, '#2e84cf')
      gradient.addColorStop(1, '#063a75')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const lightCone = ctx.createRadialGradient(
        width * 0.7,
        height * 0.08,
        20,
        width * 0.5,
        height * 0.35,
        Math.max(width, height),
      )
      lightCone.addColorStop(0, 'rgba(206, 237, 255, 0.22)')
      lightCone.addColorStop(0.4, 'rgba(116, 194, 255, 0.08)')
      lightCone.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = lightCone
      ctx.fillRect(0, 0, width, height)
    }

    const drawBubble = (bubble, timeSeconds) => {
      const drift =
        Math.sin(timeSeconds * bubble.driftFrequency + bubble.driftPhase) *
        bubble.driftAmplitude
      const x = bubble.x + drift
      const y = bubble.y

      const fill = ctx.createRadialGradient(
        x - bubble.radius * 0.25,
        y - bubble.radius * 0.25,
        bubble.radius * 0.2,
        x,
        y,
        bubble.radius,
      )

      fill.addColorStop(0, `rgba(255, 255, 255, ${bubble.alpha})`)
      fill.addColorStop(1, 'rgba(255, 255, 255, 0.04)')

      ctx.beginPath()
      ctx.arc(x, y, bubble.radius, 0, Math.PI * 2)
      ctx.fillStyle = fill
      ctx.fill()
    }

    const resetBubble = (bubble) => {
      bubble.x = Math.random() * width
      bubble.y = height + bubble.radius + Math.random() * 120
      bubble.radius = randomBetween(1.8, 9.5)
      bubble.speed = randomBetween(0.35, 1.55)
      bubble.alpha = randomBetween(0.16, 0.45)
      bubble.driftAmplitude = randomBetween(3, 18)
      bubble.driftFrequency = randomBetween(0.35, 1.25)
      bubble.driftPhase = randomBetween(0, Math.PI * 2)
    }

    const animate = (timeMs) => {
      const timeSeconds = timeMs * 0.001

      drawBackground()

      for (let i = 0; i < count; i += 1) {
        const bubble = bubbles[i]
        bubble.y -= bubble.speed

        if (bubble.y < -bubble.radius - 10) {
          resetBubble(bubble)
        }

        drawBubble(bubble, timeSeconds)
      }

      rafId = window.requestAnimationFrame(animate)
    }

    setCanvasSize()

    if (bubbles.length === 0) {
      for (let i = 0; i < MIN_BUBBLES; i += 1) {
        bubbles.push(createBubble(width, height))
      }
      count = bubbles.length
    }

    rafId = window.requestAnimationFrame(animate)
    window.addEventListener('resize', setCanvasSize, { passive: true })

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
