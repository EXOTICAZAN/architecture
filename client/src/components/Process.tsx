'use client'

import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Discover',
    body: 'We begin by listening. Through site visits and long conversations we map how you live, move, and dream — turning intent into a clear architectural brief.',
  },
  {
    n: '02',
    title: 'Concept',
    body: 'Ideas take shape as massing studies, light diagrams, and material palettes. We explore volumes in three dimensions until the story of the space emerges.',
  },
  {
    n: '03',
    title: 'Design',
    body: 'Every detail is resolved — proportion, junction, and finish. Documentation is crafted with the same care as the concept, so nothing is left to chance.',
  },
  {
    n: '04',
    title: 'Build',
    body: 'We stay on site from groundbreaking to handover, safeguarding the vision through construction so the finished space feels exactly as imagined.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">
              How We Work
            </p>
            <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
              From first sketch
              <br />
              to <span className="font-serif italic text-brand">final key</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
          >
            Begin your journey with us
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="group rounded-xl bg-secondary p-6 transition-all duration-300 hover:bg-brand hover:shadow-lg">
                <span className="text-sm font-medium text-brand group-hover:text-accent-foreground transition-colors">
                  {s.n}
                </span>
                <h3 className="mt-4 text-2xl font-medium tracking-tight group-hover:text-accent-foreground transition-colors">
                  {s.title}
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground group-hover:text-accent-foreground/80 transition-colors">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
