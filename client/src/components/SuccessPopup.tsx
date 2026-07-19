'use client'

import { Check } from 'lucide-react'
import { useEffect } from 'react'

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.3s ease-out',
        }}
      />

      {/* Popup */}
      <div
        className="relative z-10 rounded-2xl bg-white p-8 shadow-2xl sm:p-12"
        style={{
          animation: 'popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Checkmark Circle */}
        <div
          className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-orange-600"
          style={{
            animation: 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both',
          }}
        >
          <Check
            className="size-10 text-white"
            strokeWidth={3}
            style={{
              animation: 'checkmark 0.5s ease-out 0.7s both',
            }}
          />
        </div>

        {/* Text */}
        <h3 className="text-center text-2xl font-semibold text-foreground">
          Appointment Request Sent!
        </h3>
        <p className="mt-3 text-center text-muted-foreground">
          Thank you for your interest. We'll review your details and contact you within 24 hours to confirm your appointment.
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
        >
          Got it
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes checkmark {
          from {
            opacity: 0;
            transform: scale(0) rotate(-45deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  )
}
