'use client'

/**
 * Requires: npm install @tsparticles/react @tsparticles/slim
 */

import { type FC, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import styles from './ParticleCanvas.module.css'

interface ParticleCanvasProps {
  id?: string
}

export const ParticleCanvas: FC<ParticleCanvasProps> = ({
  id = 'hero-particles',
}) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    <Particles
      id={id}
      className={styles.ParticleCanvas}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 55,
            density: { enable: true },
          },
          color: { value: ['#E0D8CE', '#FFFFFF'] },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.15, max: 0.65 },
            animation: {
              enable: true,
              speed: 0.4,
              minimumValue: 0.1,
            },
          },
          size: {
            value: { min: 1, max: 2.5 },
          },
          move: {
            enable: true,
            speed: { min: 0.2, max: 0.7 },
            direction: 'none',
            random: true,
            outModes: { default: 'out' },
          },
          links: { enable: false },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 70, duration: 0.4 },
          },
        },
        emitters: [
          {
            direction: 'none',
            life: { count: 1, duration: 0.6, delay: 0 },
            rate: { delay: 0.04, quantity: 5 },
            size: { width: 100, height: 100 },
            position: { x: 50, y: 50 },
            particles: {
              move: {
                enable: true,
                speed: { min: 4, max: 9 },
                direction: 'none',
                outModes: { default: 'destroy' },
              },
              opacity: { value: 0.8 },
              size: { value: { min: 2, max: 4 } },
            },
          },
        ],
        detectRetina: true,
      }}
    />
  )
}
