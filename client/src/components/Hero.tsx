'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Star } from 'lucide-react'

const TYPEWRITER_WORDS = ['Architecture', 'Construction', 'Interior Design']

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && displayed === '') {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayed(deleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIdx, words, speed, pause])

  return displayed
}

function useParallax() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return offset
}

function useMouseLight() {
  const [pos, setPos] = useState({ x: 50, y: 50 })
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return pos
}

export function Hero() {
  const word = useTypewriter(TYPEWRITER_WORDS)
  const parallax = useParallax()
  const mouse = useMouseLight()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="top" className="relative h-svh overflow-hidden text-ink-foreground">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0 scale-110"
        style={{ transform: `translateY(${parallax}px) scale(1.1)` }}
      >
        <img
          src="/manus-storage/hero-interior_812b098a.png"
          alt="JI Architects — Architectural Interior"
          className="h-full w-full object-cover"
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/50 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/20" />
        {/* Mouse light effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30 transition-all duration-700"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, oklch(0.62 0.132 47 / 25%), transparent 60%)`,
          }}
        />
      </div>

      {/* Floating stat cards */}
      <div className="absolute right-8 top-32 z-20 hidden lg:block">
        <div className={`glass rounded-2xl p-4 transition-all duration-1000 animate-float ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
          <p className="text-2xl font-bold text-ink-foreground">15+</p>
          <p className="text-xs text-ink-muted mt-0.5">Years of Excellence</p>
        </div>
      </div>
      <div className="absolute right-8 top-64 z-20 hidden lg:block">
        <div className={`glass rounded-2xl p-4 transition-all duration-1000 animate-float-slow ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1000ms' }}>
          <p className="text-2xl font-bold text-ink-foreground">200+</p>
          <p className="text-xs text-ink-muted mt-0.5">Projects Delivered</p>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-svh max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
        <div
          className={`glass-dark rounded-3xl p-6 sm:p-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className={`mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            Architecture Firm · Faisalabad
          </p>

          <h1 className={`max-w-4xl text-balance text-[2.4rem] font-medium leading-[1] tracking-tight sm:text-6xl lg:text-[5rem] transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            We design spaces<br />
            that elevate{' '}
            <span className="font-serif italic text-brand">living</span>
          </h1>

          {/* Typewriter */}
          <div className={`mt-4 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <p className="text-lg text-ink-muted sm:text-2xl">
              Specialists in{' '}
              <span className="font-semibold text-ink-foreground typewriter-cursor">{word}</span>
            </p>
          </div>

          <div className={`mt-8 flex flex-col gap-8 border-t border-ink-border pt-8 sm:flex-row sm:items-end sm:justify-between transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <p className="max-w-md text-pretty text-base leading-relaxed text-ink-muted">
              From our studio on Canal Expressway, we shape homes, buildings, and interiors
              that nurture everyday life — with precision and purpose.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm text-ink-muted"><span className="font-semibold text-ink-foreground">4.6</span> · 43 reviews</span>
              </div>

              <div className="flex gap-3">
                <a
                  href="#contact"
                  className="btn-magnetic inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand/30 active:scale-95"
                >
                  Start a Project <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#projects"
                  className="btn-magnetic inline-flex items-center gap-1.5 rounded-full border border-ink-border px-5 py-2.5 text-sm font-medium text-ink-foreground transition-all hover:bg-ink-foreground hover:text-ink hover:scale-105 active:scale-95"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
          <span className="text-[10px] uppercase tracking-widest text-ink-muted/60">Scroll</span>
          <ChevronDown className="size-4 text-ink-muted/60 animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
