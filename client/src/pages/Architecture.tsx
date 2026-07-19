import { ServicePageLayout, ServiceHero, RevealDiv } from '@/components/ServicePageLayout'
import { ArrowUpRight, Award, CheckCircle2, Compass, Home, Building2, TreePine, Ruler } from 'lucide-react'

const SERVICES = [
  { icon: Home, title: 'Residential Architecture', desc: 'Bespoke homes crafted around how you live — from compact urban dwellings to expansive family estates. Every space is designed with light, proportion, and everyday comfort in mind.' },
  { icon: Building2, title: 'Commercial Architecture', desc: 'Workplaces and retail environments that express brand identity and drive productivity. We design buildings that work hard and look extraordinary doing it.' },
  { icon: TreePine, title: 'Landscape Integration', desc: 'Architecture that breathes with its surroundings. We design outdoor spaces, courtyards, and site plans that extend the feeling of the interior to the natural world.' },
  { icon: Ruler, title: 'Master Planning', desc: 'Large-scale vision for mixed-use developments, housing societies, and civic projects. Strategic design that balances density, community, and long-term value.' },
]

const PROJECTS = [
  { title: 'Canal View Residence', type: 'Residential · 2024', area: '4,200 sq ft', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { title: 'Ghanta Ghar Offices', type: 'Commercial · 2023', area: '12,000 sq ft', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80' },
  { title: 'Garden Town Villa', type: 'Residential · 2023', area: '5,800 sq ft', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
  { title: 'Kohinoor Plaza', type: 'Commercial · 2022', area: '28,000 sq ft', img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80' },
  { title: 'Park Town Farmhouse', type: 'Residential · 2022', area: '8,400 sq ft', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80' },
  { title: 'Expo Centre Faisalabad', type: 'Commercial · 2021', area: '45,000 sq ft', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80' },
]

const PROCESS = [
  { n: '01', title: 'Discover', desc: 'Site analysis, client interviews, and brief development. We map your goals, constraints, and aspirations before drawing a single line.' },
  { n: '02', title: 'Concept', desc: 'Massing studies, solar analysis, and spatial narratives. Ideas tested in three dimensions until the right approach reveals itself.' },
  { n: '03', title: 'Design Development', desc: 'Full working drawings, material schedules, and regulatory submissions. Every detail resolved on paper before it is built.' },
  { n: '04', title: 'Construction', desc: 'On-site presence from groundbreaking to handover. We safeguard the design intent through every stage of the build.' },
]

const AWARDS = [
  { title: 'PCATP Registered Practice', year: '2024' },
  { title: 'FDA Approved Firm', year: '2023' },
  { title: '4.6★ Google Rating · 43 Reviews', year: '2025' },
  { title: '200+ Completed Projects', year: 'Since 2009' },
  { title: '15 Years of Excellence', year: '2009–2024' },
]

export default function Architecture() {
  return (
    <ServicePageLayout>
      <ServiceHero
        tag="Architecture · Faisalabad"
        title={<>Spaces built with <span className="font-serif italic text-brand">intention</span></>}
        subtitle="From first sketch to final handover, we design architecture that elevates life — residential, commercial, and everything in between."
        accent="oklch(0.62 0.132 47)"
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85"
      />

      {/* Overview */}
      <section id="overview" className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <RevealDiv dir="left">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">What We Do</p>
              <h2 className="text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
                Architecture that tells <span className="font-serif italic text-brand">your</span> story
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                JI Architects has shaped Faisalabad's built environment for over 15 years. Our practice blends structural rigour with aesthetic sensitivity — producing buildings that are both technically excellent and deeply human.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every project begins with listening. We learn how you live, work, and move through space before we draw a single line. The result is architecture that feels inevitable — as if it could not have been designed any other way.
              </p>
              <a href="#contact" className="btn-magnetic mt-8 inline-flex items-center gap-1.5 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand/30">
                Discuss Your Project <ArrowUpRight className="size-4" />
              </a>
            </RevealDiv>

            <RevealDiv dir="right" delay={150} className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85" alt="Architecture" className="w-full h-[520px] object-cover" />
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative bg-secondary/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">Our Capabilities</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Services we offer</h2>
          </RevealDiv>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <RevealDiv key={s.title} delay={i * 80} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-brand hover:shadow-xl hover:-translate-y-1">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">Selected Work</p>
              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Projects we're proud of</h2>
            </div>
            <a href="#contact" className="text-sm font-medium text-brand hover-underline flex items-center gap-1">
              Start your project <ArrowUpRight className="size-3.5" />
            </a>
          </RevealDiv>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <RevealDiv key={p.title} delay={i * 80} className="group cursor-pointer">
                <div className="img-zoom rounded-2xl overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-64 w-full object-cover" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-brand transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{p.type}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">{p.area}</span>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-ink py-24 sm:py-32 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">How We Work</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">From brief to <span className="font-serif italic text-brand">building</span></h2>
          </RevealDiv>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <RevealDiv key={s.n} delay={i * 100} className="group rounded-2xl border border-ink-border bg-ink-foreground/5 p-6 transition-all hover:bg-brand hover:border-brand">
                <span className="text-3xl font-bold text-brand group-hover:text-white/50 transition-colors">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold group-hover:text-white transition-colors">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted group-hover:text-white/80 transition-colors">{s.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">Recognition</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Built on <span className="font-serif italic text-brand">trust</span></h2>
          </RevealDiv>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AWARDS.map((a, i) => (
              <RevealDiv key={a.title} delay={i * 80} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
                <CheckCircle2 className="size-5 shrink-0 text-brand" />
                <div>
                  <p className="font-medium text-foreground">{a.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.year}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
