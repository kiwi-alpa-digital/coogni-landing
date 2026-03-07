import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import { AnimatedGroup } from '@/components/ui/animated-group'

const BenefitsSection = () => {
  const { t } = useI18n()
  const b = translations.benefits

  const stats = [
    { value: t(b.stats.stat1Value), label: t(b.stats.stat1Label) },
    { value: t(b.stats.stat2Value), label: t(b.stats.stat2Label) },
    { value: t(b.stats.stat3Value), label: t(b.stats.stat3Label) },
  ]

  return (
    <section id="benefits" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.06),transparent)]" />

      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {t({ es: 'El porqué', en: 'The why' })}
          </p>
          <h2 className="text-4xl text-foreground lg:text-5xl">
            <span className="font-bold italic">{t(b.titleAccent)}</span>{' '}
            <span className="font-light">{t(b.titleRest)}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t(b.desc)}
          </p>
        </div>

        <AnimatedGroup
          preset="blur-slide"
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--card-shadow)] transition-shadow duration-300 hover:shadow-[var(--card-shadow-hover)]"
            >
              <span className="block text-4xl font-bold text-primary lg:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}

export default BenefitsSection
