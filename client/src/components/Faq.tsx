'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'Where are your projects located?',
    a: 'Our studio is based on Canal Expressway in Park Town, Faisalabad. While most of our work is across Faisalabad and Punjab, we take on select projects nationwide. We believe in creating architecture that responds to its specific context and community.',
  },
  {
    q: 'What is your design process timeline?',
    a: 'Project timelines vary based on scope and complexity. A typical residential project takes 6–12 months from initial concept to construction documentation. We work closely with clients to establish realistic timelines that allow for thoughtful design development.',
  },
  {
    q: 'How do you approach sustainable design?',
    a: 'Sustainability is integral to our practice, not an add-on. We prioritise passive design, climate-responsive orientation, material selection, and longevity — designing to minimise environmental impact while maximising comfort and connection to nature.',
  },
  {
    q: 'What services do you offer?',
    a: 'We provide comprehensive architectural services including master planning, schematic design, design development, construction documentation, and construction administration. We tailor our services to meet the specific needs of each project.',
  },
  {
    q: 'Do you work with existing structures?',
    a: 'Absolutely. We enjoy the challenge of renovation and adaptive reuse. Whether it is a modern addition or a full remodel, we approach existing structures with respect while bringing them into dialogue with contemporary living.',
  },
  {
    q: 'How do we get started?',
    a: 'Begin with an initial consultation where we discuss your vision, site, budget, and timeline. This helps us understand if we are the right fit for your project. From there, we outline a customised scope of work and fee proposal.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.28em] text-brand">
          FAQ
        </p>
        <h2 className="text-center text-balance text-4xl font-medium tracking-tight sm:text-5xl">
          Questions &amp; Answers
        </h2>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium tracking-tight">{item.q}</span>
                  <Plus
                    className={cn(
                      'size-5 shrink-0 text-brand transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]',
                  )}
                >
                  <p className="overflow-hidden text-pretty leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
