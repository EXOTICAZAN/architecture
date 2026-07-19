'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 120, suffix: '+', label: 'Projects delivered' },
  { value: 4.6, suffix: '', label: 'Average review rating', decimals: 1 },
  { value: 15, suffix: ' yrs', label: 'Studio experience' },
  { value: 92, suffix: '%', label: 'Repeat & referral clients' },
]

function useCountUp(target: number, active: boolean, decimals = 0, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(target * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return value.toFixed(decimals)
}

function Stat({
  value,
  suffix,
  label,
  decimals,
  active,
}: {
  value: number
  suffix: string
  label: string
  decimals?: number
  active: boolean
}) {
  const display = useCountUp(value, active, decimals ?? 0)
  return (
    <div>
      <div className="text-5xl font-medium tracking-tight text-ink-foreground sm:text-6xl">
        <span className="text-brand">{display}</span>
        {suffix}
      </div>
      <p className="mt-3 text-sm text-ink-muted">{label}</p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-ink py-20 text-ink-foreground">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-12 text-xs font-medium uppercase tracking-[0.28em] text-brand">
          By the Numbers
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
