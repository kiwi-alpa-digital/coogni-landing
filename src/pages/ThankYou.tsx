import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import logoCoogni from '@/assets/logo-coogni.png'
import { BrainCircuit, TrendingUp, Clock, BarChart3, Star, Users, Gift, X } from 'lucide-react'
import { BadgePercent, ShieldCheck, Check } from 'lucide-react'

const INTEREST_OPTIONS = [
  { id: 'patientManagement', icon: Users, es: 'Gestión de pacientes', en: 'Patient management' },
  { id: 'predictiveAnalytics', icon: BrainCircuit, es: 'Analítica predictiva', en: 'Predictive analytics' },
  { id: 'decisionSupport', icon: TrendingUp, es: 'Soporte en decisiones clínicas', en: 'Clinical decision support' },
  { id: 'patientExercises', icon: BarChart3, es: 'Ejercicios cognitivos', en: 'Cognitive exercises' },
  { id: 'teamCollaboration', icon: Users, es: 'Colaboración en equipo', en: 'Team collaboration' },
  { id: 'reporting', icon: BarChart3, es: 'Reporting y dashboards', en: 'Reporting & dashboards' },
]

const INTEREST_ICONS = {
  patientManagement: <Users className="h-5 w-5 shrink-0" />,
  predictiveAnalytics: <BrainCircuit className="h-5 w-5 shrink-0" />,
  decisionSupport: <TrendingUp className="h-5 w-5 shrink-0" />,
  patientExercises: <BarChart3 className="h-5 w-5 shrink-0" />,
  teamCollaboration: <Users className="h-5 w-5 shrink-0" />,
  reporting: <BarChart3 className="h-5 w-5 shrink-0" />,
}

export default function ThankYou() {
  const { t, locale, setLocale } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const name = location.state?.name || ''
  const firstName = name.split(' ')[0] || (locale === 'es' ? 'doctor' : 'doctor')
  const es = locale === 'es'

  const [interests, setInterests] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggleInterest = (id: string) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
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
        <div className="flex h-14 items-center gap-8 rounded-full border border-border/50 bg-background/90 px-5 shadow-sm shadow-black/5 backdrop-blur-md lg:gap-12 lg:px-6">
          <a href="/" className="flex items-center gap-2 shrink-0 pt-4">
            <img src={logoCoogni} alt="Coogni" className="h-7" />
          </a>
          <button
            onClick={() => setLocale(es ? 'en' : 'es')}
            className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {locale}
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-32">
        <div className="w-full max-w-xl">

          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5">
              <Gift className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-xs font-semibold text-amber-400">{t(translations.waitlist.discountBadge)}</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-3 text-center text-2xl font-bold text-foreground sm:text-3xl">
            {es
              ? <>¿Quieres un <span className="italic text-primary">5% extra</span> de descuento?</>
              : <>Want a <span className="italic text-primary">5% extra</span> discount?</>
            }
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-center text-base text-muted-foreground">
            {es
              ? 'Completa esta breve encuesta y te envíaos un código de descuento adicional del 5%.'
              : 'Fill out this short survey and we\'ll send you an additional 5% discount code.'
            }
          </p>

          {/* Survey form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-lg">
              <p className="mb-4 text-sm font-medium text-foreground">
                {es ? '¿Qué funcionalidades te interesan más?' : 'What features interest you most?'}
              </p>

              <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {INTEREST_OPTIONS.map((opt) => {
                  const Icon = INTEREST_ICONS[opt.id as keyof typeof INTEREST_ICONS]
                  const selected = interests.includes(opt.id)
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleInterest(opt.id)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                        selected
                          ? 'border-primary/40 bg-primary/10 text-primary'
                          : 'border-border bg-background text-muted-foreground hover:border-border/80 hover:text-foreground'
                      }`}
                    >
                      {Icon}
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

              <p className="mt-3 text-center text-xs text-muted-foreground">
                {es
                  ? 'Sin spam. Solo te envíaos tu código.'
                  : 'No spam. We only send your code.'
                }
              </p>
            </form>
          ) : (
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-foreground">
                {es ? '¡Listo! Revisa tu email' : 'Done! Check your email'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {es
                  ? 'Te envíaos tu código del 5% extra a tu email.'
                  : 'We\'re sending your extra 5% code to your email.'
                }
              </p>
            </div>
          )}

          {/* Privacy note */}
          <div className="mt-6 flex items-center justify-center gap-1.5 text-center">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
            <p className="text-xs text-muted-foreground/60">
              {es
                ? 'Tus datos están seguros. Nunca compartimos información con terceros.'
                : 'Your data is safe. We never share information with third parties.'
              }
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
