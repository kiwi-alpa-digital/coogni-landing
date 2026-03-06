import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import { Database, Brain, Users } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'

const BenefitsSection = () => {
  const { t } = useI18n()
  const b = translations.benefits

  const stats = [
    { value: t(b.stats.stat1Value), label: t(b.stats.stat1Label) },
    { value: t(b.stats.stat2Value), label: t(b.stats.stat2Label) },
    { value: t(b.stats.stat3Value), label: t(b.stats.stat3Label) },
  ]

  const pillars = [
    { icon: Database, title: t(b.pillars.p1Title), desc: t(b.pillars.p1Desc) },
    { icon: Brain, title: t(b.pillars.p2Title), desc: t(b.pillars.p2Desc) },
    { icon: Users, title: t(b.pillars.p3Title), desc: t(b.pillars.p3Desc) },
  ]

  return (
    <section id="benefits" className="relative overflow-hidden py-24 md:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.06),transparent)]" />

      <div className="mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {t({ es: 'El porqué', en: 'The why' })}
          </p>
          <h2 className="text-4xl font-semibold text-foreground lg:text-5xl">
            {t(b.title)}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t(b.desc)}
          </p>
        </div>

        {/* Stats row */}
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

        {/* Divider */}
        <div className="mx-auto my-16 h-px w-24 bg-border md:my-20" />

        {/* Pillars */}
        <AnimatedGroup
          preset="blur-slide"
          className="grid gap-8 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--card-shadow-hover)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {pillar.desc}
              </p>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}

export default BenefitsSection
