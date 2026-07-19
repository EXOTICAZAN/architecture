'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { Contact } from './Contact'
import { cn } from '@/lib/utils'

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { setInView(true); obs.unobserve(e.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref: ref as React.RefObject<HTMLDivElement>, inView }
}

export function RevealDiv({ children, className, delay = 0, dir = 'up' }: {
  children: ReactNode; className?: string; delay?: number; dir?: 'up' | 'left' | 'right' | 'scale'
}) {
  const { ref, inView } = useReveal()
  const base = dir === 'up' ? 'fade-up' : dir === 'left' ? 'fade-left' : dir === 'right' ? 'fade-right' : 'scale-in'
  return (
    <div ref={ref} className={cn(base, inView && 'in-view', className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function ServiceHero({ title, subtitle, tag, accent, bgImage }: {
  title: ReactNode; subtitle: string; tag: string; accent: string; bgImage: string
}) {
  const [visible, setVisible] = useState(false)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.35)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-svh overflow-hidden text-ink-foreground">
      <div className="absolute inset-0 z-0 scale-110" style={{ transform: `translateY(${parallax}px) scale(1.1)` }}>
        <img src={bgImage} alt={tag} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-ink/20" />
      </div>

      <div className="relative z-10 mx-auto flex h-svh max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
        <div className={`glass-dark rounded-3xl p-6 sm:p-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em]" style={{ color: accent }}>
            {tag}
          </p>
          <h1 className="max-w-3xl text-balance text-[2.4rem] font-medium leading-[1] tracking-tight sm:text-6xl lg:text-[5rem]">
            {title}
          </h1>
          <p className={`mt-6 max-w-xl text-base leading-relaxed text-ink-muted transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            {subtitle}
          </p>
          <div className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <a href="#contact" className="btn-magnetic inline-flex items-center gap-1.5 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand/30 active:scale-95">
              Start Your Project <ArrowUpRight className="size-4" />
            </a>
            <a href="#overview" className="btn-magnetic inline-flex items-center gap-1.5 rounded-full border border-ink-border px-6 py-3 text-sm font-medium text-ink-foreground transition-all hover:bg-ink-foreground hover:text-ink active:scale-95">
              Explore Service <ChevronDown className="size-4" />
            </a>
          </div>
        </div>
        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
          <span className="text-[10px] uppercase tracking-widest text-ink-muted/60">Scroll</span>
          <ChevronDown className="size-4 text-ink-muted/60 animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}

export function ServicePageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        {children}
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
