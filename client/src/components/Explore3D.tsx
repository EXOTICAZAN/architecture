'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export function Explore3D() {
  const frameRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: -8, y: 14 })

  const handleMove = (e: React.MouseEvent) => {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: -py * 20, y: px * 34 })
  }

  return (
    <section id="explore" className="relative bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">
            Explore in 3D
          </p>
          <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
            Walk around
            <br />
            the <span className="font-serif italic text-brand">concept</span>
          </h2>
          <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-ink-muted">
            Every JI Architects design begins as a three-dimensional study of light, mass, and
            proportion. Move your cursor to orbit the massing model and see how volumes meet the
            ground.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-ink-foreground px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-accent-foreground"
          >
            Start your project
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div
          ref={frameRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: -8, y: 14 })}
          className="relative aspect-square w-full select-none rounded-2xl border border-ink-border bg-[oklch(0.13_0.008_55)]"
          style={{ perspective: '1100px' }}
        >
          <div
            className="absolute inset-6 transition-transform duration-300 ease-out sm:inset-10"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src="/manus-storage/massing-model_b3a5b300.png"
              alt="3D architectural massing model"
              className="h-full w-full object-contain drop-shadow-2xl"
            />
          </div>
          <span className="absolute bottom-4 left-4 text-[10px] font-medium uppercase tracking-[0.28em] text-ink-muted">
            Drag / hover to orbit
          </span>
        </div>
      </div>
    </section>
  )
}
