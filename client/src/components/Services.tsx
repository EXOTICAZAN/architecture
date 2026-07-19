'use client'

import { ArrowUpRight, Building2, Home, Sofa } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const SERVICES = [
  {
    icon: Building2,
    tag: 'Architecture',
    href: '/architecture',
    title: 'Buildings that stand the test of time',
    desc: 'Residential and commercial architecture designed with structural rigour and aesthetic care. From single homes to large-scale developments — we handle every stage from brief to handover.',
    features: ['Residential Design', 'Commercial Projects', 'Master Planning', 'Site Supervision'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    accent: 'text-brand',
    bg: 'bg-brand/10',
    hoverBg: 'hover:border-brand',
  },
  {
    icon: Home,
    tag: 'Construction',
    href: '/construction',
    title: 'Built with precision, delivered on time',
    desc: 'Full construction management from groundbreaking to key handover. We coordinate every contractor, enforce every quality standard, and keep you informed at every milestone.',
    features: ['Project Management', 'Quality Assurance', 'MEP Services', 'Structural Works'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    accent: 'text-amber-600',
    bg: 'bg-amber-100',
    hoverBg: 'hover:border-amber-400',
  },
  {
    icon: Sofa,
    tag: 'Interior Design',
    href: '/interior-design',
    title: 'Interiors that reflect your life',
    desc: 'We design interiors that go beyond decoration — spaces that feel effortlessly right and deeply personal. From space planning to final styling, every detail considered.',
    features: ['Space Planning', 'Material Selection', 'Custom Joinery', 'Lighting Design'],
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-100',
    hoverBg: 'hover:border-emerald-400',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">What We Do</p>
              <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
                Three disciplines,<br />one <span className="font-serif italic text-brand">studio</span>
              </h2>
            </div>
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Architecture, construction, and interior design — each discipline practised at the highest level, perfectly integrated when you need all three.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.tag} delay={i * 100}>
              <div className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ${s.hoverBg} hover:shadow-2xl hover:-translate-y-1`}>
                {/* Image */}
                <div className="img-zoom h-52 overflow-hidden">
                  <img src={s.img} alt={s.tag} className="h-full w-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className={`flex size-11 items-center justify-center rounded-xl ${s.bg} ${s.accent} mb-4 transition-colors group-hover:scale-110`}>
                    <s.icon className="size-5" />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-widest ${s.accent}`}>{s.tag}</span>
                  <h3 className="mt-2 text-xl font-semibold leading-tight tracking-tight">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                  {/* Features */}
                  <ul className="mt-5 space-y-1.5 border-t border-border pt-5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`size-1.5 shrink-0 rounded-full ${s.accent.replace('text-', 'bg-')}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={s.href}
                    className={`btn-magnetic mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${s.accent} transition-all hover:gap-2`}
                  >
                    Explore {s.tag} <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
