'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Building2, ChevronDown, Home, Menu, Sofa } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const SERVICES_MENU = [
  {
    icon: Building2,
    label: 'Architecture',
    desc: 'Residential & commercial design',
    href: '/architecture',
    color: 'text-brand',
  },
  {
    icon: Home,
    label: 'Construction',
    desc: 'Build management & quality',
    href: '/construction',
    color: 'text-amber-600',
  },
  {
    icon: Sofa,
    label: 'Interior Design',
    desc: 'Spaces that reflect your life',
    href: '/interior-design',
    color: 'text-emerald-600',
  },
]

const NAV = [
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Process', href: '/#process' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [shrunk, setShrunk] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      setShrunk(window.scrollY > 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent',
      )}
    >
      <div className={cn(
        'mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 transition-all duration-300',
        shrunk ? 'py-2' : 'py-4',
      )}>
        {/* Logo */}
        <a href="/" className="flex items-center transition-opacity hover:opacity-85">
          <img
            src="/logo.png"
            alt="JI Architects"
            className={cn(
              'w-auto object-contain transition-all duration-300',
              shrunk ? 'h-9' : 'h-12',
              scrolled ? 'brightness-100' : 'brightness-0 invert',
            )}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" ref={menuRef}>
          {/* Services mega menu */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors hover-underline',
                scrolled ? 'text-foreground hover:text-brand' : 'text-ink-foreground/75 hover:text-ink-foreground',
              )}
            >
              Services
              <ChevronDown className={cn('size-3.5 transition-transform duration-200', servicesOpen && 'rotate-180')} />
            </button>

            {/* Dropdown */}
            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl">
                <div className="mb-2 px-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Our Services
                </div>
                {SERVICES_MENU.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-secondary group"
                  >
                    <div className={cn('flex size-9 items-center justify-center rounded-lg bg-secondary group-hover:bg-background', s.color)}>
                      <s.icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{s.label}</p>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                    <ArrowUpRight className="size-3.5 ml-auto opacity-0 group-hover:opacity-100 text-brand transition-opacity" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover-underline',
                scrolled ? 'text-foreground hover:text-brand' : 'text-ink-foreground/75 hover:text-ink-foreground',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/#contact"
            className="btn-magnetic inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-md hover:shadow-brand/25 active:scale-95"
          >
            Book a Consultation
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2">
              <Menu className={cn('size-6 transition-colors', scrolled ? 'text-foreground' : 'text-ink-foreground')} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 py-6">
              <img src="/logo.png" alt="JI Architects" className="h-12 w-auto object-contain" />

              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Services</p>
                {SERVICES_MENU.map((s) => (
                  <a key={s.label} href={s.href} className="flex items-center gap-3 rounded-xl py-2.5 transition-colors hover:text-brand">
                    <s.icon className={cn('size-4', s.color)} />
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>

              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Studio</p>
                <nav className="flex flex-col gap-1">
                  {NAV.map((item) => (
                    <a key={item.href} href={item.href} className="rounded-lg py-2 text-sm font-medium text-foreground transition-colors hover:text-brand">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white"
              >
                Book a Consultation <ArrowUpRight className="size-4" />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
