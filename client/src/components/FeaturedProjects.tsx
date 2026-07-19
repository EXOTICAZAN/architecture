'use client'

import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const PROJECTS = [
  {
    title: 'Canal View Residence',
    meta: 'Residential · Faisalabad',
    year: '2024',
    img: '/manus-storage/project-canal-view_eed2a20e.png',
  },
  {
    title: 'Ghanta Ghar Offices',
    meta: 'Commercial · Faisalabad',
    year: '2023',
    img: '/manus-storage/project-glass-offices_4e241bbb.png',
  },
  {
    title: 'Jinnah Colony House',
    meta: 'Residential · Faisalabad',
    year: '2023',
    img: '/manus-storage/project-colony-house_713d0d07.png',
  },
  {
    title: 'Serena Courtyard',
    meta: 'Hospitality · Faisalabad',
    year: '2022',
    img: '/manus-storage/project-courtyard_0fe71b23.png',
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">
              Selected Works
            </p>
            <h2 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">
              Featured Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
          >
            View all projects
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.meta}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{p.year}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
