import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import logoCoogni from '@/assets/logo-coogni.png'
import { BrainCircuit, TrendingUp, Clock, BarChart3, Star, Users, Gift, ShieldCheck, Download, Check } from 'lucide-react'

const TESTS = [
  { es: 'Valoración neuropsicológica completa', en: 'Complete neuropsychological assessment', score: '15 min' },
  { es: 'MMSE (Mini-Mental State Examination)', en: 'MMSE (Mini-Mental State Examination)', score: '10 min' },
  { es: 'MoCA (Montreal Cognitive Assessment)', en: 'MoCA (Montreal Cognitive Assessment)', score: '15 min' },
  { es: 'Trail Making Test A/B', en: 'Trail Making Test A/B', score: '10 min' },
  { es: 'Test del Reloj (Clock Drawing Test)', en: 'Clock Drawing Test', score: '5 min' },
  { es: 'Fotografía de la retina', en: 'Retinal photography', score: '5 min' },
]

const INTEREST_OPTIONS = [
  { id: 'patientManagement', icon: Users, es: 'Gestión de pacientes', en: 'Patient management' },
  { id: 'predictiveAnalytics', icon: BrainCircuit, es: 'Analítica predictiva', en: 'Predictive analytics' },
  { id: 'decisionSupport', icon: TrendingUp, es: 'Soporte en decisiones clínicas', en: 'Clinical decision support' },
  { id: 'patientExercises', icon: BarChart3, es: 'Ejercicios cognitivos', en: 'Cognitive exercises' },
  { id: 'teamCollaboration', icon: Users, es: 'Colaboración en equipo', en: 'Team collaboration' },
  { id: 'reporting', icon: BarChart3, es: 'Reporting y dashboards', en: 'Reporting & dashboards' },
]

const INTEREST_ICONS: Record<string, React.ReactNode> = {
  patientManagement: <Users className="h-4 w-4 shrink-0" />,
  predictiveAnalytics: <BrainCircuit className="h-4 w-4 shrink-0" />,
  decisionSupport: <TrendingUp className="h-4 w-4 shrink-0" />,
  patientExercises: <BarChart3 className="h-4 w-4 shrink-0" />,
  teamCollaboration: <Users className="h-4 w-4 shrink-0" />,
  reporting: <BarChart3 className="h-4 w-4 shrink-0" />,
}

export default function ThankYou() {
  const { t, locale } = useI18n()
  const location = useLocation()
  const name = location.state?.name as string || ''
  const firstName = name.split(' ')[0] || ''
  const es = locale === 'es'

  const [interests, setInterests] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggleInterest = (id: string) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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

        {/* ── 5% OFF SURVEY ── FIRST ── */}
        {!submitted ? (
          <div className="mb-12 w-full max-w-xl">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
                <Gift className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-amber-400">{es ? '5% extra de descuento' : 'Extra 5% discount'}</span>
              </span>
            </div>

            <h2 className="mb-3 text-center text-2xl font-bold text-foreground sm:text-3xl">
              {es ? <>¿Quieres un <span className="italic text-primary">5% extra</span> de descuento?</> : <>Want a <span className="italic text-primary">5% extra</span> discount?</>}
            </h2>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              {es ? 'Completa esta breve encuesta y te envíaos un código adicional del 5%.' : 'Fill out this short survey and we\'ll send you an additional 5% discount code.'}
            </p>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-lg">
              <p className="mb-4 text-sm font-medium text-foreground">
                {es ? '¿Qué funcionalidades te interesan más?' : 'What features interest you most?'}
              </p>

              <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {INTEREST_OPTIONS.map((opt) => {
                  const selected = interests.includes(opt.id)
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleInterest(opt.id)}
                      className={`flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-left text-sm transition-all ${selected
                          ? 'border-primary/40 bg-primary/10 text-primary'
                          : 'border-border bg-background text-muted-foreground hover:border-border/80 hover:text-foreground'
                        }`}
                    >
                      {INTEREST_ICONS[opt.id]}
                      <span>{es ? opt.es : opt.en}</span>
                      {selected && <Check className="ml-auto h-4 w-4 shrink-0" />}
                    </button>
                  )
                })}
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                {es ? 'Enviar y obtener mi 5% →' : 'Send and get my 5% →'}
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                <p className="text-xs text-muted-foreground/60">
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
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-4 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-base font-semibold text-foreground">
                  {es ? 'Guía práctica: Cómo Coogni transforma tu consulta' : 'Practical guide: How Coogni transforms your practice'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {es
                    ? 'Recurso gratuito con casos de uso, flujos de trabajo y resultados reales.'
                    : 'Free resource with use cases, workflows, and real results.'}
                </p>
              </div>
            </div>
            <a
              href="https://coogni.com/guia-coogni-profesionales.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20"
            >
              <Download className="h-4 w-4" />
              {es ? 'Descargar guía PDF →' : 'Download PDF guide →'}
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {es
                ? 'PDF · Detección precoz · Estimulación cognitiva · Apoyo a la decisión clínica'
                : 'PDF · Early detection · Cognitive stimulation · Clinical decision support'}
            </p>
          </div>
        </div>

        {/* ── GUARANTEE ── THIRD ── */}
        <div className="mb-8 w-full max-w-xl rounded-2xl border border-border bg-card p-6 text-center shadow-lg">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            {es ? 'Garantía de resultados' : 'Results guarantee'}
          </h3>
          <p className="text-sm text-muted-foreground">
            {es
              ? 'Si en 60 días no has detectado al menos 1 caso que te hubiera pasado desapercibido, te devolvemos el dinero.'
              : 'If in 60 days you have not detected at least 1 case that would have gone unnoticed, we refund your money.'}
          </p>
        </div>

        {/* ── PRIVATE BETA ── */}
        <div className="w-full max-w-xl rounded-2xl border border-border bg-card p-6 text-center shadow-lg">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              {es ? 'Beta privada — plazas limitadas' : 'Private beta — limited spots'}
            </span>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            {es
              ? 'Lanzamiento en primavera. Los primeros 200 profesionales tienen 20% de descuento permanente.'
              : 'Launching this spring. First 200 professionals get a permanent 20% discount.'}
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-foreground/80 bg-transparent px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-foreground/5"
          >
            {es ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </div>

      </div>
    </main>
  )
}
