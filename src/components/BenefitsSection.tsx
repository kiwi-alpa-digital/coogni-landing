import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: { es: 'Me parece una propuesta muy interesante, especialmente por el enfoque en la personalización y la integración entre profesionales y pacientes.', en: 'I find this proposal very interesting, especially because of the focus on personalization and the integration between professionals and patients.' },
    name: { es: 'A. Garrido', en: 'A. Garrido' },
    role: { es: 'Neuropsicóloga. Psicóloga General Sanitaria', en: 'Neuropsychologist. General Health Psychologist' },
  },
  {
    quote: { es: 'Creo que Coogni puede ser muy útil para la detección temprana y el seguimiento de pacientes con deterioro cognitivo. Puede ser una herramienta valiosa en el día a día de los profesionales de la salud y, por supuesto, también en el bienestar de los pacientes.', en: 'I believe Coogni can be very useful for early detection and monitoring of patients with cognitive impairment. It can be a valuable tool in the daily practice of healthcare professionals and, of course, also in the well-being of patients.' },
    name: { es: 'J. González', en: 'J. González' },
    role: { es: 'Neuropsicóloga', en: 'Neuropsychologist' },
  },
  {
    quote: { es: 'Combinar neuropsicología e IA es muy innovador, estoy deseando ver cómo funciona y cómo ayudaría tanto a mis pacientes como a mí como profesional.', en: 'Combining neuropsychology and AI is very innovative, I am looking forward to seeing how it works and how it would help both my patients and me as a professional.' },
    name: { es: 'N. Gutiérrez', en: 'N. Gutiérrez' },
    role: { es: 'Neurólogo', en: 'Neurologist' },
  },
  {
    quote: { es: 'Integrar IA y Salud me parece apasionante y personalmente muy motivador. Así que estaré probando vuestro producto encantado.', en: 'Integrating AI and Health seems exciting to me and personally very motivating. So I will be trying your product with pleasure.' },
    name: { es: 'C. Pérez', en: 'C. Pérez' },
    role: { es: 'Terapeuta Ocupacional', en: 'Occupational Therapist' },
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
        <div className="mt-16 flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {t({ es: 'Lo que dicen los profesionales', en: 'What professionals say' })}
            </span>
          </span>
          <p className="text-center text-sm text-muted-foreground/80">
            {t({ es: 'Algunos de los profesionales que hemos entrevistado piensan esto de Coogni', en: 'Some of the professionals we interviewed think this about Coogni' })}
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t_, i) => (
            <div key={i} className="relative flex flex-col rounded-2xl border border-border bg-card p-6 pt-8 shadow-[var(--card-shadow)]">
              <Quote className="absolute top-4 right-4 h-5 w-5 text-primary/20" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t(t_.quote)}"
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">{t(t_.name)}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t(t_.role)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
