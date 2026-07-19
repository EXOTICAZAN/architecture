'use client'

import { useState, useMemo } from 'react'
import { MapPin, Phone, Clock, Mail, AlertCircle } from 'lucide-react'
import { SuccessPopup } from './SuccessPopup'
import { trpc } from '@/lib/trpc'
import { toast } from 'sonner'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [dateError, setDateError] = useState('')

  const submitMutation = trpc.booking.submit.useMutation({
    onSuccess: () => {
      setShowSuccess(true)
      setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' })
      setDateError('')
    },
    onError: (err) => {
      toast.error('Could not submit booking. Please try again.', {
        description: err.message,
      })
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === 'date') {
      if (value) {
        const date = new Date(value + 'T00:00:00')
        const dayOfWeek = date.getDay()
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          setDateError('Weekends are not available. Please select a weekday.')
          return
        }
      }
      setDateError('')
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.date) {
      const date = new Date(formData.date + 'T00:00:00')
      const dayOfWeek = date.getDay()
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        setDateError('Weekends are not available. Please select a weekday.')
        return
      }
    }

    submitMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      message: formData.message || undefined,
    })
  }

  const today = new Date()
  const minDate = today.toISOString().split('T')[0]
  const maxDate = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0]

  const dateInputProps = useMemo(() => ({ min: minDate, max: maxDate }), [minDate, maxDate])

  return (
    <section id="contact" className="relative bg-background py-24 sm:py-32">
      <SuccessPopup isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-brand">
            Get in Touch
          </p>
          <h2 className="text-balance text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl">
            Visit Our Studio
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side — Map and Contact Info */}
          <div className="space-y-8">
            <div className="overflow-hidden rounded-xl border border-border bg-card h-96">
              <iframe
                title="JI Architects Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.8977093832557!2d74.3164123!3d31.5204061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904826b0d95a3%3A0x4f1e7a8a1d9e2f5c!2sCanal%20Expressway%2C%20Park%20Town%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714000000000"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-4">
              <div className="group flex gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-brand hover:bg-secondary hover:shadow-lg">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Our Location</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Canal Expressway, Park Town<br />Faisalabad, Pakistan<br />F6F3+RG
                  </p>
                </div>
              </div>

              <a href="tel:+923477444222" className="group flex gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-brand hover:bg-secondary hover:shadow-lg">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Phone</h3>
                  <p className="mt-1 text-sm text-brand font-medium group-hover:underline">+92 347 7444222</p>
                  <p className="mt-0.5 text-sm text-brand font-medium group-hover:underline">+92 307 7444222</p>
                </div>
              </a>

              <div className="group flex gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-brand hover:bg-secondary hover:shadow-lg">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                  <Clock className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Hours</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Monday – Friday: 9:00 AM – 5:30 PM<br />
                    Saturday: 10:00 AM – 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <a href="mailto:hello@jiarchitects.com" className="group flex gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-brand hover:bg-secondary hover:shadow-lg">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-brand font-medium group-hover:underline">hello@jiarchitects.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right side — Booking Form */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-6 text-2xl font-medium text-foreground">Book an Appointment</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name</label>
                <input
                  type="text" id="name" name="name" value={formData.name}
                  onChange={handleChange} required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email" id="email" name="email" value={formData.email}
                  onChange={handleChange} required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone</label>
                <input
                  type="tel" id="phone" name="phone" value={formData.phone}
                  onChange={handleChange} required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="+92 300 0000000"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground">Preferred Date</label>
                  <input
                    type="date" id="date" name="date" value={formData.date}
                    onChange={handleChange} required {...dateInputProps}
                    className={`mt-2 w-full rounded-lg border px-4 py-2 text-foreground transition-all focus:outline-none focus:ring-2 ${
                      dateError
                        ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-border bg-background focus:border-brand focus:ring-brand/20'
                    }`}
                  />
                  {dateError ? (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                      <AlertCircle className="size-3" />{dateError}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-muted-foreground">Weekdays only (Mon–Fri)</p>
                  )}
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-foreground">Preferred Time</label>
                  <input
                    type="time" id="time" name="time" value={formData.time}
                    onChange={handleChange} required
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">Project Details</label>
                <textarea
                  id="message" name="message" value={formData.message}
                  onChange={handleChange} rows={4}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitMutation.isPending ? 'Sending…' : 'Request Appointment'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
