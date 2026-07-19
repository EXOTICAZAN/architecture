'use client'

import { ArrowUpRight, Phone } from 'lucide-react'

export function Cta() {
  return (
    <section id="contact" className="bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">
          Start a Project
        </p>
        <h2 className="text-balance text-4xl font-medium leading-[1.03] tracking-tight sm:text-6xl">
          Ready to create something{' '}
          <span className="font-serif italic text-brand">extraordinary</span>?
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-ink-muted">
          Let&apos;s discuss how we can bring your vision to life. Every great space begins with a
          conversation.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink-foreground px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-accent-foreground"
          >
            Begin the conversation
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="tel:+923477444222"
            className="inline-flex items-center gap-2 rounded-full border border-ink-border px-6 py-3.5 text-sm font-medium text-ink-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <Phone className="size-4" />
            +92 347 7444222
          </a>
        </div>
      </div>
    </section>
  )
}
