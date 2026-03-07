import { Brain, Lock, Activity, Sparkles } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'

export default function FeaturesGrid() {
  const { t } = useI18n()
  const fg = translations.featuresGrid

  return (
    <section id="platform" className="overflow-hidden py-16 md:py-32">
      <div className="mx-auto space-y-8 px-6 md:space-y-12 md:px-12 lg:px-20">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {t({ es: 'Plataforma', en: 'Platform' })}
          </p>
          <h2 className="text-4xl lg:text-5xl">
            <span className="font-bold italic">{t(fg.titleAccent)}</span>{' '}
            <span className="font-light">{t(fg.titleRest)}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t(fg.subtitle)}</p>
        </div>

        <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
          <div className="[perspective:800px]">
            <div className="[transform:skewY(-2deg)_skewX(-2deg)_rotateX(6deg)]">
              <div className="aspect-[88/36] relative">
                <div className="absolute -inset-[4.25rem] z-[1] [background-image:radial-gradient(at_75%_25%,transparent,hsl(var(--background))_75%)]"></div>
                <img src="https://tailark.com/_next/image?url=%2Fmail-upper.png&w=3840&q=75" className="absolute inset-0 z-10" alt="Neuro Predict Pro dashboard" width={2797} height={1137} />
                <img src="https://tailark.com/_next/image?url=%2Fmail-back-light.png&w=3840&q=75" className="absolute inset-0" alt="Neuro Predict Pro background" width={2797} height={1137} />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Activity className="size-4" />
              <h3 className="text-sm font-medium">{t(fg.monitoring.title)}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t(fg.monitoring.desc)}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Brain className="size-4" />
              <h3 className="text-sm font-medium">{t(fg.ai.title)}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t(fg.ai.desc)}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">{t(fg.security.title)}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t(fg.security.desc)}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">{t(fg.decision.title)}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t(fg.decision.desc)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
