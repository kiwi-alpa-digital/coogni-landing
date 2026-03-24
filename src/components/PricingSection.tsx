import { useState } from 'react'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Gift, Zap, Lock } from 'lucide-react'

// Precios reales (lanzamiento) y beta (lista de espera, -20%)
const PRICES: Record<string, { full: string; beta: string; fullNum: number; betaNum: number }> = {
  free:   { full: '0€',   beta: '0€',   fullNum: 0,   betaNum: 0   },
  pro:    { full: '29€',  beta: '23€',  fullNum: 29,  betaNum: 23  },
  clinic: { full: '149€', beta: '119€', fullNum: 149, betaNum: 119 },
}

const PricingSection = () => {
  const { t, locale } = useI18n()
  const p = translations.pricing
  const es = locale === 'es'

  const [showBeta, setShowBeta] = useState(true)

  const plans = [
    { key: 'free'   as const, highlighted: false },
    { key: 'pro'    as const, highlighted: false },
    { key: 'clinic' as const, highlighted: true  },
  ]

  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.06),transparent)]" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">

        {/* Header */}
        <AnimatedGroup preset="blur-slide" className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {t(p.badge)}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            {t(p.titleAccent)}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {t(p.subtitle)}
          </p>
        </AnimatedGroup>

        {/* Toggle lista de espera / precio real */}
        <div className="mx-auto mt-8 flex items-center justify-center">
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            <button
              onClick={() => setShowBeta(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                showBeta
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Gift className="h-3.5 w-3.5" />
              {es ? 'Lista de espera · -20%' : 'Waitlist · -20%'}
            </button>
            <button
              onClick={() => setShowBeta(false)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                !showBeta
                  ? 'bg-muted text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {es ? 'Precio de lanzamiento' : 'Launch price'}
            </button>
          </div>
        </div>

        {/* Banner lista de espera */}
        {showBeta && (
          <div className="mx-auto mt-5 max-w-2xl">
            <div className="flex items-center gap-3 rounded-xl border border-amber-500/25 bg-amber-500/8 px-4 py-3">
              <Zap className="h-4 w-4 shrink-0 text-amber-500" />
              <p className="text-sm text-amber-700 dark:text-amber-400">
                {es
                  ? 'Precio beta bloqueado permanentemente para los primeros 50 profesionales. El precio de lanzamiento se aplica a partir del acceso general.'
                  : 'Beta price permanently locked for the first 50 professionals. Launch price applies from general access.'}
              </p>
              <Lock className="h-4 w-4 shrink-0 text-amber-500 ml-auto" />
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(({ key, highlighted }) => {
            const plan = p.plans[key]
            const prices = PRICES[key]
            const hasBonus = 'bonus' in plan && plan.bonus
            const isFree = key === 'free'

            return (
              <Card
                key={key}
                className={`relative flex flex-col transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] ${
                  highlighted
                    ? 'border-2 border-primary shadow-[var(--card-shadow-hover)] scale-[1.02]'
                    : 'border shadow-[var(--card-shadow)]'
                }`}
              >
                {highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      {t(p.recommended)}
                    </span>
                  </div>
                )}

                <CardHeader className="px-5 pt-5 pb-4">
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {t(plan.desc)}
                  </CardDescription>
                  <CardTitle className="pt-1 text-xl font-bold text-foreground">
                    {t(plan.name)}
                  </CardTitle>

                  {/* Precio */}
                  <div className="mt-3">
                    {isFree ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground">0€</span>
                        <span className="text-sm text-muted-foreground">
                          {es ? 'siempre gratis' : 'always free'}
                        </span>
                      </div>
                    ) : showBeta ? (
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-foreground">
                            {prices.beta}
                          </span>
                          <span className="text-sm text-muted-foreground">{t(p.monthly)}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground line-through">
                            {prices.full}{t(p.monthly)}
                          </span>
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                            -20%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {es ? 'beta' : 'beta'}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-foreground">
                            {prices.full}
                          </span>
                          <span className="text-sm text-muted-foreground">{t(p.monthly)}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {es ? 'Precio de lanzamiento' : 'Launch price'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Badge bonus */}
                  {hasBonus && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      <Gift className="h-3 w-3" />
                      <span>{t((plan as any).bonus)}</span>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="flex flex-1 flex-col px-5 pb-6">
                  <ul className="mb-6 flex-1 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {t(feature)}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={highlighted ? 'default' : 'outline'}
                    className={`w-full ${highlighted ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}
                  >
                    <a href="#waitlist">
                      {isFree
                        ? (es ? 'Empezar gratis' : 'Start free')
                        : showBeta
                          ? (es ? 'Reservar plaza con -20% →' : 'Reserve spot with -20% →')
                          : t(p.cta)
                      }
                    </a>
                  </Button>

                  {showBeta && !isFree && (
                    <p className="mt-2 text-center text-xs text-muted-foreground">
                      {es
                        ? 'Precio bloqueado de por vida · Sin permanencia'
                        : 'Price locked for life · No commitment'}
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Comparativa de ahorro anual en modo beta */}
        {showBeta && (
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border bg-card px-6 py-5 shadow-[var(--card-shadow)]">
            <p className="text-center text-sm font-medium text-foreground mb-4">
              {es ? 'Lo que ahorras al año uniéndote ahora' : 'What you save per year by joining now'}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { plan: es ? 'Plan Profesional' : 'Professional', saving: '72€', period: es ? 'al año' : 'per year' },
                { plan: es ? 'Plan Clínica'     : 'Clinic plan',  saving: '360€', period: es ? 'al año' : 'per year' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-muted px-4 py-3 text-center">
                  <p className="text-xs text-muted-foreground">{item.plan}</p>
                  <p className="text-2xl font-bold text-primary mt-1">{item.saving}</p>
                  <p className="text-xs text-muted-foreground">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default PricingSection
