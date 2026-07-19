import { ServicePageLayout, ServiceHero, RevealDiv } from '@/components/ServicePageLayout'
import { ArrowUpRight, CheckCircle2, Layers, Palette, Sofa, Sparkles, Sun, Wind } from 'lucide-react'

const SERVICES = [
  { icon: Sofa, title: 'Space Planning', desc: 'Furniture layouts, traffic flow, and zone planning that make every square foot feel intentional. We optimise space for how you actually live.' },
  { icon: Palette, title: 'Material & Finish Selection', desc: 'Curated palettes of flooring, cladding, paint, and fabric. We source locally and internationally to deliver the perfect texture and tone.' },
  { icon: Sun, title: 'Lighting Design', desc: 'Layered ambient, task, and accent lighting that transforms rooms through the day. We design for mood, function, and architectural drama.' },
  { icon: Layers, title: 'Custom Joinery & Furniture', desc: 'Bespoke wardrobes, kitchens, and statement pieces designed for your space and crafted by skilled Faisalabad artisans.' },
  { icon: Wind, title: 'Soft Furnishings', desc: 'Curtains, cushions, rugs, and upholstery selected as part of a cohesive whole — not an afterthought.' },
  { icon: Sparkles, title: 'Art & Styling', desc: 'Final decoration, artwork curation, and accessory styling that gives a space its soul. The last 10% that makes all the difference.' },
]

const ROOMS = [
  { title: 'Living Rooms', desc: 'Welcoming, layered, and deeply personal', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80' },
  { title: 'Master Bedrooms', desc: 'Calm retreats with considered luxury', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80' },
  { title: 'Kitchens', desc: 'Functional beauty for the heart of the home', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80' },
  { title: 'Dining Rooms', desc: 'Spaces that make every meal a moment', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=80' },
  { title: 'Home Offices', desc: 'Productive spaces with personality', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80' },
  { title: 'Bathrooms', desc: 'Spa-like retreats within your home', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80' },
]

const PALETTES = [
  { name: 'Warm Neutrals', colors: ['#F5F0E8', '#D4C4A0', '#8B7355', '#4A3728'], desc: 'Timeless and grounding' },
  { name: 'Cool Minimalist', colors: ['#F0F2F4', '#C5CDD6', '#6B7C8E', '#2C3E50'], desc: 'Crisp and contemporary' },
  { name: 'Earth & Terracotta', colors: ['#FDF0E8', '#E8956D', '#C1440E', '#2D1B0E'], desc: 'Warm and characterful' },
  { name: 'Sage & Stone', colors: ['#F2F4F0', '#B5C4B1', '#6B8E6B', '#2E3B2E'], desc: 'Natural and serene' },
]

const PROCESS = [
  { n: '01', title: 'Discovery', desc: 'In-depth consultation to understand your lifestyle, taste, and how you use each space. We review reference images and define the brief together.' },
  { n: '02', title: 'Concept', desc: 'Mood boards, spatial plans, and material direction presented for your feedback. You see and feel the direction before any purchasing begins.' },
  { n: '03', title: 'Design', desc: 'Full drawings, 3D visuals, schedules, and supplier quotes. Every element specified and costed before site work starts.' },
  { n: '04', title: 'Delivery', desc: 'We manage procurement, installation, and styling. You walk in on handover day to a space that\'s completely ready to live in.' },
]

const PROJECTS = [
  { title: 'Canal View Penthouse', type: 'Residential · Full Interior', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80' },
  { title: 'Kohinoor Corporate HQ', type: 'Commercial · Office Design', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { title: 'Garden Town Family Villa', type: 'Residential · Full Interior', img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80' },
  { title: 'Chenab Club Lounge', type: 'Hospitality · Interior Design', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80' },
  { title: 'Park Town Master Suite', type: 'Residential · Bedroom', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80' },
  { title: 'Expo Centre VIP Lounge', type: 'Commercial · Hospitality', img: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80' },
]

export default function InteriorDesign() {
  return (
    <ServicePageLayout>
      <ServiceHero
        tag="Interior Design · Faisalabad"
        title={<>Interiors that reflect <span className="font-serif italic text-brand">your life</span></>}
        subtitle="We design interiors that go beyond decoration — spaces that feel effortlessly right, deeply personal, and built to last a lifetime."
        accent="oklch(0.62 0.132 47)"
        bgImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85"
      />

      {/* Overview */}
      <section id="overview" className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <RevealDiv dir="left">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">The JI Approach</p>
              <h2 className="text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
                Design that starts with <span className="font-serif italic text-brand">you</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Interior design is deeply personal. We don't impose a style — we listen carefully and create spaces that are an authentic expression of who you are.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From full residential interiors to commercial fit-outs, our team handles every detail — from space planning and material selection to custom furniture and final styling.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#contact" className="btn-magnetic inline-flex items-center gap-1.5 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand/30">
                  Book Consultation <ArrowUpRight className="size-4" />
                </a>
                <a href="#rooms" className="btn-magnetic inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-brand hover:text-brand">
                  See Rooms
                </a>
              </div>
            </RevealDiv>
            <RevealDiv dir="right" delay={150} className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=85" alt="Interior design" className="w-full h-[520px] object-cover" />
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-secondary/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">What We Cover</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Complete interior services</h2>
          </RevealDiv>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <RevealDiv key={s.title} delay={i * 80} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand hover:shadow-xl hover:-translate-y-1">
                <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-brand group-hover:text-white">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Room showcase */}
      <section id="rooms" className="relative bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">Room by Room</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Every space <span className="font-serif italic text-brand">considered</span></h2>
          </RevealDiv>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((r, i) => (
              <RevealDiv key={r.title} delay={i * 80} className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card">
                <div className="img-zoom h-52 overflow-hidden">
                  <img src={r.img} alt={r.title} className="h-full w-full object-cover transition-transform" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground group-hover:text-brand transition-colors">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Colour palettes / mood boards */}
      <section className="relative bg-ink py-24 sm:py-32 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">Mood & Palette</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Colour <span className="font-serif italic text-brand">stories</span> we love</h2>
            <p className="mt-4 max-w-xl mx-auto text-ink-muted">Each project gets its own palette — here are some signatures we return to again and again.</p>
          </RevealDiv>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PALETTES.map((p, i) => (
              <RevealDiv key={p.name} delay={i * 80} className="rounded-2xl border border-ink-border bg-ink-foreground/5 p-5">
                <div className="flex gap-2 mb-4">
                  {p.colors.map((c) => (
                    <div key={c} className="flex-1 h-12 rounded-lg transition-transform hover:scale-110" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <h3 className="font-semibold text-ink-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{p.desc}</p>
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
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">Portfolio</p>
              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Recent interiors</h2>
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
                <div className="mt-4">
                  <h3 className="font-semibold text-foreground group-hover:text-brand transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{p.type}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-secondary/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealDiv className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-brand">How It Works</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">From blank canvas to <span className="font-serif italic text-brand">finished home</span></h2>
          </RevealDiv>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <RevealDiv key={s.n} delay={i * 100} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand hover:shadow-xl hover:-translate-y-1">
                <span className="text-3xl font-bold text-brand">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold group-hover:text-brand transition-colors">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
