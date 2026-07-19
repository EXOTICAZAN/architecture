'use client'

import { Reveal } from '@/components/Reveal'

const QUOTES = [
  {
    quote:
      'Great place — they give you different ideas, completely out of the box. The team listened to what we wanted and delivered beyond it. Thumbs up!',
    name: 'Wajeeha Iftikhar',
    role: 'Homeowner · Faisalabad',
  },
  {
    quote:
      'JI Architects turned a difficult corner plot into a home full of light and calm. Every decision felt considered, and the site work was handled with real care.',
    name: 'Bilal Ahmad',
    role: 'Client · Canal View Residence',
  },
  {
    quote:
      'The attention to proportion and material is remarkable. Our office feels open and quiet at the same time — exactly the atmosphere we hoped the architecture would create.',
    name: 'Sana Riaz',
    role: 'Director · Ghanta Ghar Offices',
  },
]

const RECOGNITION = [
  { label: '4.6★ Google Rating', year: '2025' },
  { label: '43 Verified Client Reviews', year: '2025' },
  { label: 'PCATP Registered Practice', year: '2024' },
  { label: 'FDA Approved Designs', year: '2023' },
  { label: '15 Years in Practice', year: '2022' },
]

export function Testimonials() {
  return (
    <section id="clients" className="relative bg-background pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">
            Client Voices
          </p>
          <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
            Trusted to shape
            <br />
            the way people <span className="font-serif italic text-brand">live</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-7">
                <blockquote className="text-pretty text-lg leading-relaxed text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-medium">{q.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{q.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">
            Recognition
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {RECOGNITION.map((r) => (
              <li key={r.label} className="flex items-center justify-between py-5">
                <span className="text-lg font-medium tracking-tight sm:text-xl">{r.label}</span>
                <span className="text-sm text-muted-foreground">{r.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
