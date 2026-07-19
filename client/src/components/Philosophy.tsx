'use client'

import { Reveal } from '@/components/Reveal'

const PRINCIPLES = [
  {
    n: '01',
    title: 'Minimal, not empty',
    body: 'Every element has purpose and space to breathe. We remove the unnecessary to reveal what truly matters.',
  },
  {
    n: '02',
    title: 'Architecture-led design',
    body: 'Layouts inspired by structure, rhythm, and materiality. Buildings that speak through proportion and light.',
  },
  {
    n: '03',
    title: 'Rooted in context',
    body: 'Designs that respond to the climate, culture, and streets of Faisalabad — architecture that belongs where it stands.',
  },
  {
    n: '04',
    title: 'Timeless aesthetic',
    body: 'Elegant, calm, and enduring visual language. Designs that transcend trends and age with grace.',
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">
              Our Philosophy
            </p>
            <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Design with{' '}
              <span className="font-serif italic text-brand">intention</span>
            </h2>
            <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Architecture is more than structure — it&apos;s how we experience the world. We create
              spaces that nurture the human spirit.
            </p>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-xl border border-border bg-card">
            <img
              src="/manus-storage/philosophy-sketch_af1c5f73.png"
              alt="Architectural concept sketch of a modern home"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 90} className="border-t border-border pt-6">
              <span className="text-sm font-medium text-brand">{p.n}</span>
              <h3 className="mt-4 text-xl font-medium tracking-tight">{p.title}</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
