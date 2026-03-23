import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { Badge } from '@/components/ui/badge'

const faqs = [
  {
    q: {
      es: '¿Funciona Coogni para pacientes con Alzheimer, Parkinson y otras enfermedades neurodegenerativas?',
      en: "Does Coogni work for patients with Alzheimer's, Parkinson's and other neurodegenerative diseases?",
    },
    a: {
      es: 'Sí. Coogni está diseñado específicamente para el seguimiento longitudinal de pacientes con cualquier enfermedad neurodegenerativa: Alzheimer, Parkinson, deterioro cognitivo leve (MCI), ELA, demencia frontotemporal y otras.',
      en: "Yes. Coogni is specifically designed for longitudinal tracking of patients with any neurodegenerative disease.",
    },
  },
  {
    q: {
      es: '¿Cuánto tiempo tarda Coogni en detectar un patrón de deterioro cognitivo?',
      en: 'How long does Coogni take to detect a cognitive decline pattern?',
    },
    a: {
      es: 'Con una rutina diaria de 15-20 minutos de ejercicios cognitivos, Coogni puede identificar desviaciones significativas de la trayectoria basal en 3-6 semanas.',
      en: 'With a daily routine of 15-20 minutes of cognitive exercises, Coogni can identify significant deviations from the baseline trajectory in 3-6 weeks.',
    },
  },
  {
    q: {
      es: '¿Puedo integrar Coogni con mi sistema de historia clínica electrónica (HCE)?',
      en: 'Can I integrate Coogni with my electronic health record (EHR) system?',
    },
    a: {
      es: 'En el plan Clínica y Enterprise sí. Ofrecemos integración via HL7/FHIR para los principales sistemas de HCE utilizados en España (Silicon, Selene, Mambrino).',
      en: 'In the Clinic and Enterprise plans, yes. We offer HL7/FHIR integration for the main EHR systems used in Spain.',
    },
  },
  {
    q: {
      es: '¿Los pacientes necesitan equipos o tecnología especial para hacer los ejercicios?',
      en: 'Do patients need special equipment or technology to do the exercises?',
    },
    a: {
      es: 'No. Los ejercicios funcionan en cualquier navegador web desde móvil, tablet u ordenador. No requiere app descargada ni hardware especial.',
      en: 'No. The exercises work in any web browser on mobile, tablet, or computer. No app download or special hardware required.',
    },
  },
  {
    q: {
      es: '¿Qué pasa con mis datos clínicos si cancelo mi suscripción?',
      en: 'What happens to my clinical data if I cancel my subscription?',
    },
    a: {
      es: 'Tus datos son tuyos. Si cancelas, tienes 90 días para exportar toda la información en formatos estándar (PDF, CSV). Después se eliminan según el RGPD.',
      en: 'Your data is yours. If you cancel, you have 90 days to export all your information in standard formats. Then data is deleted per GDPR.',
    },
  },
  {
    q: {
      es: '¿Cómo garantiza Coogni la seguridad y privacidad de los datos clínicos?',
      en: 'How does Coogni guarantee the security and privacy of clinical data?',
    },
    a: {
      es: 'Todos los datos están encriptados en tránsito (TLS 1.3) y en reposo (AES-256). Cumplimos con el RGPD, la Ley de Protección de Datos española y la certificación ISO 27001.',
      en: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We comply with GDPR, Spanish Data Protection Law, and ISO 27001 certification.',
    },
  },
  {
    q: {
      es: '¿Cuál es el tiempo de implementación y formación del equipo?',
      en: 'What is the implementation and team training timeline?',
    },
    a: {
      es: 'Puedes empezar a usar Coogni en 15 minutos. Para equipos de más de 5 profesionales ofrecemos sesión de onboarding gratuita de 1 hora.',
      en: 'You can start using Coogni in 15 minutes. For teams of more than 5 professionals we offer a free 1-hour onboarding session.',
    },
  },
  {
    q: {
      es: '¿Qué pasa si la IA detecta un falso positivo?',
      en: 'What happens if the AI detects a false positive?',
    },
    a: {
      es: 'Coogni nunca toma decisiones clínicas — solo proporciona señales y recomendaciones. La alerta indica "patrón atípico detectado" para que tú evalúes el contexto completo y decidas.',
      en: "Coogni never makes clinical decisions — it only provides signals and recommendations. The alert indicates 'atypical pattern detected' so you evaluate the full context and decide.",
    },
  },
]

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-2xl border border-border bg-card mb-4 last:mb-0">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-medium text-foreground leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-0.5 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <div className="border-t border-border pt-4">
            <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
          </div>
        </div>
      )}
    </div>
  )
}

const FaqSection = () => {
  const { locale } = useI18n()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqLocale = locale as 'es' | 'en'

  const handleToggle = (i: number) => {
    setOpenIndex(prev => prev === i ? null : i)
  }

  const col1 = faqs.slice(0, 4).map((faq, i) => ({ ...faq, globalIndex: i }))
  const col2 = faqs.slice(4).map((faq, i) => ({ ...faq, globalIndex: i + 4 }))

  return (
    <section id="faq" className="relative w-full py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--primary)/0.04),transparent)]" />

      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <Badge variant="outline" className="mb-4 gap-1.5 border-primary/30 text-primary">
            <Check size={12} />
            {locale === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            {locale === 'es'
              ? <>Resolvemos tus <span className="italic text-primary">dudas</span></>
              : <>We answer your <span className="italic text-primary">questions</span></>
            }
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {locale === 'es'
              ? 'Las preguntas que nos hacen los profesionales antes de unirse a la beta privada.'
              : 'Questions professionals ask before joining the private beta.'
            }
          </p>
        </div>

        {/* FAQ — two independent columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div>
            {col1.map((faq, i) => (
              <FaqItem key={i} q={(faq as any).q[faqLocale]} a={(faq as any).a[faqLocale]} open={openIndex === (faq as any).globalIndex} onToggle={() => handleToggle((faq as any).globalIndex)} />
            ))}
          </div>
          {/* Column 2 */}
          <div>
            {col2.map((faq, i) => (
              <FaqItem key={i} q={(faq as any).q[faqLocale]} a={(faq as any).a[faqLocale]} open={openIndex === (faq as any).globalIndex} onToggle={() => handleToggle((faq as any).globalIndex)} />
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            {locale === 'es' ? '¿Aún tienes preguntas?' : 'Still have questions?'}{' '}
            <a href="mailto:hello@coogni.com" className="text-primary hover:underline">
              {locale === 'es' ? 'Escríbenos' : 'Send us an email'}
            </a>
            {' '}{locale === 'es' ? 'y te respondemos en menos de 24h.' : "and we'll reply within 24h."}
          </p>
        </div>

      </div>
    </section>
  )
}

export default FaqSection
