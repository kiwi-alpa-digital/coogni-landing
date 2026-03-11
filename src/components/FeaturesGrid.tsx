import { Brain, Lock, Activity, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function FeaturesGrid() {
  const { t } = useI18n()
  const fg = translations.featuresGrid

  const items = [
    { icon: Activity, title: t(fg.monitoring.title), desc: t(fg.monitoring.desc) },
    { icon: Brain, title: t(fg.ai.title), desc: t(fg.ai.desc) },
    { icon: Lock, title: t(fg.security.title), desc: t(fg.security.desc) },
    { icon: Sparkles, title: t(fg.decision.title), desc: t(fg.decision.desc) },
  ];

  return (
    <section id="platform" className="overflow-hidden py-16 md:py-32">
      <div className="mx-auto space-y-8 px-6 md:space-y-12 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {t({ es: 'Plataforma', en: 'Platform' })}
          </p>
          <h2 className="text-4xl lg:text-5xl">
            <span className="font-bold italic">{t(fg.titleAccent)}</span>{' '}
            <span className="font-light">{t(fg.titleRest)}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t(fg.subtitle)}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3"
        >
          <div className="[perspective:800px]">
            <div className="[transform:skewY(-2deg)_skewX(-2deg)_rotateX(6deg)]">
              <div className="aspect-[88/36] relative">
                <div className="absolute -inset-[4.25rem] z-[1] [background-image:radial-gradient(at_75%_25%,transparent,hsl(var(--background))_75%)]"></div>
                <img src="https://tailark.com/_next/image?url=%2Fmail-upper.png&w=3840&q=75" className="absolute inset-0 z-10" alt="Coogni dashboard" width={2797} height={1137} />
                <img src="https://tailark.com/_next/image?url=%2Fmail-back-light.png&w=3840&q=75" className="absolute inset-0" alt="Coogni background" width={2797} height={1137} />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Icon className="size-4" />
                  <h3 className="text-sm font-medium">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
