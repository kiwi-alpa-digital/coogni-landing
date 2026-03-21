import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: { es: 'Por primera vez puedo ver la trayectoria cognitiva de mis pacientes en una sola pantalla. La alerta predictiva me salvó de perder 6 meses de intervención en un paciente.', en: 'For the first time I can see my patients\' cognitive trajectory on one screen. The predictive alert saved me from losing 6 months of intervention in one patient.' },
    name: { es: 'Dra. Marta Soler', en: 'Dr. Marta Soler' },
    role: { es: 'Neuróloga, Hospital Clínico', en: 'Neurologist, Hospital Clínico' },
    avatar: 'MS',
  },
  {
    quote: { es: 'Los pacientes hacen los ejercicios en casa y yo veo sus resultados antes de la consulta. Esto cambia completamente la dinámica de la visita.', en: 'Patients do the exercises at home and I see their results before the consultation. This completely changes the visit dynamic.' },
    name: { es: 'Dr. Pablo Ruiz', en: 'Dr. Pablo Ruiz' },
    role: { es: 'Neuropsicólogo, Centro MEMORY', en: 'Neuropsychologist, Centro MEMORY' },
    avatar: 'PR',
  },
  {
    quote: { es: 'La gestión multidisciplinaria era un caos. Ahora cada profesional sabe exactamente qué han hecho los demás y el paciente no tiene que repetir su historia 4 veces.', en: 'Multidisciplinary management was chaos. Now every professional knows exactly what others have done and the patient doesn\'t have to repeat their story 4 times.' },
    name: { es: 'Laura Gascón', en: 'Laura Gascón' },
    role: { es: 'Terapeuta Ocupacional, Residencia Geriátrica Vitalia', en: 'Occupational Therapist, Residencia Geriátrica Vitalia' },
    avatar: 'LG',
  },
]

const BenefitsSection = () => {
  const { t, locale } = useI18n()
  const b = translations.benefits

  return (
    <section id="benefits" className="relative overflow-hidden py-8 md:py-10">
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

        {/* Testimonials */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((t_, i) => (
            <div key={i} className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)]">
              <Quote className="absolute top-4 right-4 h-5 w-5 text-primary/20" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                "{t(t_.quote)}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {t_.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(t_.name)}</p>
                  <p className="text-xs text-muted-foreground">{t(t_.role)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500" />{t({ es: 'RGPD Compliant', en: 'GDPR Compliant' })}
          </span>
          <span>·</span>
          <span>{t({ es: 'Datos clínicos encriptados AES-256', en: 'Clinical data AES-256 encrypted' })}</span>
          <span>·</span>
          <span>{t({ es: 'Hosting en la UE', en: 'EU-hosted infrastructure' })}</span>
          <span>·</span>
          <span>{t({ es: 'Certificación ISO 27001', en: 'ISO 27001 Certified' })}</span>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
