import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useI18n } from '@/i18n/context'
import logoCoogni from '@/assets/logo-coogni.png'
import { Gift, ShieldCheck, Download, Check, User, Mail, ArrowRight, BrainCircuit } from 'lucide-react'

export default function ThankYou() {
  const { locale } = useI18n()
  const location = useLocation()
  const name = location.state?.name as string || ''
  const firstName = name.split(' ')[0] || (locale === 'es' ? 'doctor/a' : 'doctor')
  const es = locale === 'es'

  const [formData, setFormData] = useState({ name: name || '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch {}
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-background to-card" />
      <div className="fixed inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_20%,hsl(215,60%,50%/0.06),transparent)]" />

      {/* Header */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="flex h-14 items-center rounded-full border border-border/50 bg-background/90 px-5 shadow-sm shadow-black/5 backdrop-blur-md">
          <a href="/" className="flex items-center gap-2 shrink-0 pt-4">
            <img src={logoCoogni} alt="Coogni" className="h-7" />
          </a>
        </div>
      </header>

      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-32">

        {/* ── 5% OFF FORM ── FIRST ── */}
        {!submitted ? (
          <div className="mb-12 w-full max-w-xl">
            {/* Badge */}
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5">
                <Gift className="h-3.5 w-3.5 text-foreground/60" />
                <span className="text-xs font-medium text-foreground/60">{es ? '5% extra de descuento' : 'Extra 5% discount'}</span>
              </span>
            </div>

            <h2 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
              {es ? 'Envíaos el 5% extra' : 'Get your extra 5%'}
            </h2>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              {es ? 'Rellena la siguiente pregunta y recibe tu código personal.' : 'Fill out below and receive your personal code.'}
            </p>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-lg">
              <div className="mb-3 text-sm font-medium text-foreground">
                {es ? '¿Qué funcionalidades te interesan más?' : 'What features interest you most?'}
              </div>

              {/* Name input */}
              <div className="mb-3">
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                  <input
                    type="text"
                    required
                    placeholder={es ? 'Tu nombre' : 'Your name'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="flex h-11 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none focus:ring-[3px] focus:ring-ring/20"
                  />
                </div>
              </div>

              {/* Email input */}
              <div className="mb-4">
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                  <input
                    type="email"
                    required
                    placeholder={es ? 'Tu email' : 'Your email'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="flex h-11 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none focus:ring-[3px] focus:ring-ring/20"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-sm font-bold text-primary-foreground shadow-sm shadow-black/5 transition-all hover:shadow-lg hover:shadow-primary/30 disabled:opacity-60"
              >
                {isSubmitting ? (es ? 'Enviando...' : 'Sending...') : (es ? 'Envíaos →' : 'Send →')}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </button>

              {/* Privacy */}
              <div className="mt-3 flex items-center justify-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
                <p className="text-xs text-muted-foreground/50">
                  {es ? 'Sin spam. Solo te envíaos tu código.' : 'No spam. We only send your code.'}
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="mb-12 w-full max-w-xl">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-foreground">
                {es ? '¡Listo! Revisa tu email' : 'Done! Check your email'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {es ? 'Te envíaos tu código del 5% extra a tu email.' : 'We\'re sending your extra 5% code to your email.'}
              </p>
            </div>
          </div>
        )}

        {/* ── PDF GUIDE ── SECOND ── */}
        <div className="mb-12 w-full max-w-xl">
          <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
            {/* Preview header */}
            <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent px-6 py-5 border-b border-border/50">
              <div className="flex items-start gap-5">
                {/* Book cover preview */}
                <div className="shrink-0 w-24 h-32 rounded-lg bg-gradient-to-br from-primary/30 to-cyan-400/20 border border-primary/20 flex flex-col items-center justify-center p-2 shadow-md">
                  <BrainCircuit className="h-8 w-8 text-primary mb-1" />
                  <p className="text-[8px] font-bold text-primary text-center leading-tight">Coogni</p>
                  <p className="text-[7px] text-muted-foreground text-center leading-tight mt-0.5">Guía para{'\n'}Profesionales</p>
                </div>
                {/* Title + bullets */}
                <div className="flex-1">
                  <h3 className="mb-2 text-base font-semibold text-foreground leading-snug">
                    {es ? 'Cómo Coogni transforma tu consulta' : 'How Coogni transforms your practice'}
                  </h3>
                  <p className="mb-2 text-xs text-muted-foreground">
                    {es ? 'Qué encontrarás en la guía:' : 'What you\'ll find inside:'}
                  </p>
                  <ul className="space-y-1">
                    {[
                      es ? 'Casos de uso reales en consultas neurológicas' : 'Real use cases in neurology practices',
                      es ? 'Flujos de trabajo para detección precoz' : 'Workflows for early detection',
                      es ? 'Cómo integrar Coogni en tu día a día' : 'How to integrate Coogni into your daily routine',
                      es ? 'Estimulación cognitiva basada en datos' : 'Data-driven cognitive stimulation',
                      es ? 'Toma de decisiones con apoyo de IA' : 'AI-assisted clinical decisions',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Download button */}
            <div className="px-6 py-4">
              <a
                href="https://coogni.com/guia-coogni-profesionales.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                {es ? 'Descargar guía PDF →' : 'Download PDF guide →'}
              </a>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                {es ? 'PDF gratuito · Detección · Estimulación · Decisión clínica' : 'Free PDF · Detection · Stimulation · Clinical decisions'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
