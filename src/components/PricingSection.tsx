import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Gift } from 'lucide-react'

const PricingSection = () => {
  const { t } = useI18n()
  const p = translations.pricing

  const plans = [
    { key: 'free' as const, cta: p.ctaFree, highlighted: false },
    { key: 'pro' as const, cta: p.cta, highlighted: false },
    { key: 'clinic' as const, cta: p.cta, highlighted: true },
  ]

  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.06),transparent)]" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <AnimatedGroup preset="blur-slide" className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {t(p.badge)}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            {t(p.titleAccent)}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t(p.subtitle)}
          </p>

        </AnimatedGroup>

        <div className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(({ key, cta, highlighted }) => {
            const plan = p.plans[key]
            const hasBonus = 'bonus' in plan && plan.bonus
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
                  <CardTitle className="pt-2 text-xl font-bold text-foreground">
                    {t(plan.name)}
                  </CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-foreground">{t(plan.price)}</span>
                    {key !== 'free' && (
                      <span className="text-sm text-muted-foreground">{t(p.monthly)}</span>
                    )}
                  </div>
                  {hasBonus && (
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-500 border border-amber-500/20">
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
                    variant={highlighted ? 'default' : 'outline'}
                    className={`w-full ${highlighted ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}
                    onClick={() => window.dispatchEvent(new Event('openWaitlistModal'))}
                  >
                    {t(cta)}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
