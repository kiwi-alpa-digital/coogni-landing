import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import { AnimatedGroup } from '@/components/ui/animated-group'

const BenefitsSection = () => {
  const { t } = useI18n()
  const b = translations.benefits

  return (
    <section id="benefits" className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.06),transparent)]" />

      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedGroup preset="blur-slide" className="mx-auto max-w-3xl text-center">
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
        </AnimatedGroup>
      </div>
    </section>
  )
}

export default BenefitsSection
