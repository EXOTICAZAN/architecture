'use client'

import { Building2, Home, MapPin, Sofa } from 'lucide-react'

const SERVICES = [
  { icon: Building2, label: 'Architecture', href: '/architecture', color: 'text-brand' },
  { icon: Home, label: 'Construction', href: '/construction', color: 'text-amber-500' },
  { icon: Sofa, label: 'Interior Design', href: '/interior-design', color: 'text-emerald-500' },
]

const STUDIO = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

const CONNECT = [
  { label: '+92 307 7444222', href: 'tel:+923077444222' },
  { label: '+92 347 7444222', href: 'tel:+923477444222' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'WhatsApp', href: 'https://wa.me/923477444222' },
  { label: 'Get directions', href: 'https://maps.google.com/?q=JI+Architects+Faisalabad' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink pb-10 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 border-t border-ink-border py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/logo.png" alt="JI Architects" className="h-14 w-auto object-contain brightness-0 invert" />
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-ink-muted">
              Architecture, construction, and interior design from a single trusted studio in Faisalabad. We shape spaces that elevate everyday life.
            </p>
            <p className="mt-6 flex items-start gap-2 text-sm text-ink-muted">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              Canal Expressway, Park Town, Faisalabad, Pakistan · F6F3+RG
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">Services</h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="flex items-center gap-2 text-sm text-ink-foreground/85 transition-colors hover:text-brand">
                    <s.icon className={`size-3.5 ${s.color}`} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">Studio</h4>
            <ul className="mt-5 space-y-3">
              {STUDIO.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink-foreground/85 transition-colors hover:text-brand hover-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">Connect</h4>
            <ul className="mt-5 space-y-3">
              {CONNECT.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink-foreground/85 transition-colors hover:text-brand hover-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-border pt-8 text-sm text-ink-muted sm:flex-row">
          <p>© 2026 JI Architects — Jamshaid Iftikhar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Open today · Closes 5:30 PM</p>
            <a href="/admin" className="text-ink-muted/40 hover:text-brand transition-colors text-xs">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
