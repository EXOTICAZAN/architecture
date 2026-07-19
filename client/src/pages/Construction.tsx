import { ServicePageLayout, ServiceHero, RevealDiv } from '@/components/ServicePageLayout'
import { ArrowUpRight, CheckCircle2, HardHat, Layers, Shield, Timer, Wrench, Zap } from 'lucide-react'

const SERVICES = [
  { icon: HardHat, title: 'Project Management', desc: 'End-to-end site supervision from groundbreaking to handover. We coordinate contractors, suppliers, and inspections so nothing slips through the cracks.' },
  { icon: Shield, title: 'Quality Assurance', desc: 'Rigorous inspection protocols at every stage. We enforce material standards, structural specifications, and finishing tolerances without compromise.' },
  { icon: Timer, title: 'Timeline Management', desc: 'Realistic scheduling with buffer built in. We track progress daily and flag issues early so your project lands on time and on budget.' },
  { icon: Layers, title: 'Material Sourcing', desc: 'Direct relationships with trusted suppliers across Punjab. We procure quality materials at competitive rates and verify every delivery on site.' },
  { icon: Wrench, title: 'Structural Works', desc: 'Foundation to roof — RC frame, brick masonry, steel fabrication. We build to code and beyond, with engineers on site for critical milestones.' },
  { icon: Zap, title: 'MEP Services', desc: 'Coordinated mechanical, electrical, and plumbing integration. Systems that are efficient, code-compliant, and invisible when they should be.' },
]

const STAGES = [
  { n: '01', title: 'Site Preparation', desc: 'Surveys, soil testing, demolition if required, and temporary services. The foundation for everything that follows.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { n: '02', title: 'Foundations & Structure', desc: 'Excavation, reinforced concrete footings, columns, beams and slabs built to structural engineer specifications.', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
  { n: '03', title: 'Envelope & Roofing', desc: 'External walls, waterproofing, windows and roof structure. The building enclosed and weathertight.', img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80' },
  { n: '04', title: 'MEP First Fix', desc: 'Concealed electrical conduit, plumbing runs, HVAC ductwork before walls are plastered and ceilings closed.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { n: '05', title: 'Finishes', desc: 'Plastering, tiling, joinery, paint, and all second-fix MEP. The building takes on its final character.', img: 'https://images.unsplash.com/photo-1617781578923-6264e47c7b6c?w=600&q=80' },
  { n: '06', title: 'Handover', desc: 'Final inspections, snagging, documentation, and owner orientation. We don\'t leave until you are completely satisfied.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80' },
]

const STANDARDS = [
  'Pakistan Engineering Council (PEC) compliant structural design',
  'FDA Faisalabad building regulations adherence',
  'Qualified civil & structural engineers on every project',
  'Third-party material testing for concrete and steel',
  'Daily site diaries and weekly progress reports',
  'Comprehensive defect liability period with warranty',
]

const STATS = [
  { value: '200+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '0', label: 'Structural Failures' },
  { value: '98%', label: 'On-Time Delivery' },
]

export default function Construction() {
  return (
    <ServicePageLayout>
      <ServiceHero
        tag="Construction · Build Management"
        title={<>Built to <span className="font-serif italic text-brand">last</span>, delivered on time</>}
        subtitle="From ground-breaking to key handover, we manage every aspect of construction with precision, transparency, and zero compromise on quality."
        accent="oklch(0.62 0.132 47)"
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85"
      />

      {/* Stats bar */}
      <section className="relative bg-ink py-14 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <RevealDiv key={s.label} delay={i * 80} className="text-center">
                <p className="text-4xl font-bold text-brand">{s.value}</p>
                <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <RevealDiv dir="left">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">Our Approach</p>
              <h2 className="text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
                Construction managed with <span className="font-serif italic text-brand">precision</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Great architecture deserves great construction. JI Architects provides full construction management services — so the building you see in drawings is the building you move into.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We stay on site from day one, managing contractors, enforcing standards, and keeping you informed at every stage. No surprises. No shortcuts.
              </p>
              <a href="#contact" className="btn-magnetic mt-8 inline-flex items-center gap-1.5 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand/30">
                Get a Build Quote <ArrowUpRight className="size-4" />
              </a>
            </RevealDiv>
            <RevealDiv dir="right" delay={150} className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=85" alt="Construction management" className="w-full h-[520px] object-cover" />
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-secondary/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">What's Included</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Full-spectrum construction services</h2>
          </RevealDiv>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <RevealDiv key={s.title} delay={i * 80} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand hover:shadow-xl hover:-translate-y-1">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-colors group-hover:bg-brand group-hover:text-white">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Construction stages */}
      <section className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-16">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">The Build Journey</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Construction <span className="font-serif italic text-brand">stages</span></h2>
          </RevealDiv>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {STAGES.map((s, i) => (
              <RevealDiv key={s.n} delay={i * 80} className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div className="img-zoom h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-brand">{s.n}</span>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="relative bg-ink py-24 sm:py-32 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <RevealDiv dir="left">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">Quality Standards</p>
              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
                We never cut <span className="font-serif italic text-brand">corners</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Every project is built to the highest standards of Pakistani construction practice — and beyond. Our quality framework covers every stage from soil to snag.
              </p>
              <ul className="mt-8 space-y-4">
                {STANDARDS.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-ink-muted">
                    <CheckCircle2 className="size-5 shrink-0 text-brand mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </RevealDiv>
            <RevealDiv dir="right" delay={150} className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=900&q=85" alt="Quality construction" className="w-full h-[520px] object-cover" />
            </RevealDiv>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
