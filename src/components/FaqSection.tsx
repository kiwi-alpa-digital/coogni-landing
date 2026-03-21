import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Badge } from '@/components/ui/badge'

const faqs = [
  {
    q: {
      es: '¿Funciona Coogni para pacientes con Alzheimer, Parkinson y otras enfermedades neurodegenerativas?',
      en: 'Does Coogni work for patients with Alzheimer\'s, Parkinson\'s and other neurodegenerative diseases?',
    },
    a: {
      es: 'Sí. Coogni está diseñado específicamente para el seguimiento longitudinal de pacientes con cualquier enfermedad neurodegenerativa: Alzheimer, Parkinson, deterioro cognitivo leve (MCI), ELA, demencia frontotemporal y otras. Cada enfermedad tiene patrones de deterioro distintos y Coogni los adapta a los tuyo.',
      en: 'Yes. Coogni is specifically designed for longitudinal tracking of patients with any neurodegenerative disease: Alzheimer\'s, Parkinson\'s, mild cognitive impairment (MCI), ALS, frontotemporal dementia, and others. Each disease has distinct deterioration patterns and Coogni adapts to yours.',
    },
  },
  {
    q: {
      es: '¿Cuánto tiempo tarda Coogni en detectar un patrón de deterioro cognitivo?',
      en: 'How long does Coogni take to detect a cognitive decline pattern?',
    },
    a: {
      es: 'Depende de la frecuencia de uso de los ejercicios cognitivos por parte del paciente. Con una rutina diaria de 15-20 minutos, Coogni puede identificar desviaciones significativas de la trayectoria basal en 3-6 semanas. Cuantos más datos, más precisa es la detección.',
      en: 'It depends on how frequently the patient uses the cognitive exercises. With a daily routine of 15-20 minutes, Coogni can identify significant deviations from the baseline trajectory in 3-6 weeks. More data means more accurate detection.',
    },
  },
  {
    q: {
      es: '¿Puedo integrar Coogni con mi sistema de historia clínica electrónica (HCE)?',
      en: 'Can I integrate Coogni with my electronic health record (EHR) system?',
    },
    a: {
      es: 'En el plan Clínica y Enterprise, sí. Ofrecemos integración via HL7/FHIR para los principales sistemas de HCE utilizados en España (Silicon, Selene, Mambrino, etc.). En el plan Profesional, puedes exportar informes en PDF para adjuntar manualmente a la historia.',
      en: 'In the Clinic and Enterprise plans, yes. We offer HL7/FHIR integration for the main EHR systems used in Spain (Silicon, Selene, Mambrino, etc.). In the Professional plan, you can export PDF reports to attach to records manually.',
    },
  },
  {
    q: {
      es: '¿Los pacientes necesitan equipos o tecnología especial para hacer los ejercicios?',
      en: 'Do patients need special equipment or technology to do the exercises?',
    },
    a: {
      es: 'No. Los ejercicios cognitivos de Coogni funcionan en cualquier navegador web desde móvil, tablet u ordenador. No requiere app descargada ni hardware especial. Solo necesitan conexión a internet. El portal del paciente está diseñado para personas mayores con interfaces accesibles.',
      en: 'No. Coogni\'s cognitive exercises work in any web browser on mobile, tablet, or computer. No app download or special hardware required. Patients only need an internet connection. The patient portal is designed for elderly people with accessible interfaces.',
    },
  },
  {
    q: {
      es: '¿Qué pasa con mis datos clínicos si cancelo mi suscripción?',
      en: 'What happens to my clinical data if I cancel my subscription?',
    },
    a: {
      es: 'Tus datos son tuyos. Siempre. Si cancelas, tienes 90 días para exportar toda la información en formatos estándar (PDF, CSV). Después, los datos se eliminan de nuestros servidores según la normativa RGPD. Puedes solicitar la exportación en cualquier momento desde tu cuenta.',
      en: 'Your data is yours. Always. If you cancel, you have 90 days to export all your information in standard formats (PDF, CSV). After that, data is deleted from our servers according to GDPR regulations. You can request an export at any time from your account.',
    },
  },
  {
    q: {
      es: '¿Cómo garantiza Coogni la seguridad y privacidad de los datos clínicos?',
      en: 'How does Coogni guarantee the security and privacy of clinical data?',
    },
    a: {
      es: 'Todos los datos están encriptados en tránsito (TLS 1.3) y en reposo (AES-256). Nuestros servidores están en la UE (Frankfurt) y cumplimos con el RGPD, la Ley de Protección de Datos española y la certificación ISO 27001. Nunca vendemos ni compartimos datos con terceros.',
      en: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Our servers are in the EU (Frankfurt) and we comply with GDPR, Spanish Data Protection Law, and ISO 27001 certification. We never sell or share data with third parties.',
    },
  },
  {
    q: {
      es: '¿Cuál es el tiempo de implementación y formación del equipo?',
      en: 'What is the implementation and team training timeline?',
    },
    a: {
      es: 'Puedes empezar a usar Coogni en 15 minutos. La plataforma es intuitiva y no requiere formación técnica. Para equipos de más de 5 profesionales, ofrecemos sesión de onboarding gratuita de 1 hora. En el plan Enterprise, la implementación completa con integraciones tarda 2-4 semanas.',
      en: 'You can start using Coogni in 15 minutes. The platform is intuitive and requires no technical training. For teams of more than 5 professionals, we offer a free 1-hour onboarding session. In the Enterprise plan, full implementation with integrations takes 2-4 weeks.',
    },
  },
  {
    q: {
      es: '¿Qué pasa si la IA detecta un falso positivo?',
      en: 'What happens if the AI detects a false positive?',
    },
    a: {
      es: 'Coogni nunca toma decisiones clínicas — solo proporciona señales y recomendaciones. La alerta indica "patrón atípico detectado" para que tú, como profesional, evalúes el contexto completo y decidas. El objetivo es darte más información, nunca sustituir tu criterio clínico.',
      en: 'Coogni never makes clinical decisions — it only provides signals and recommendations. The alert indicates "atypical pattern detected" so you, as a professional, evaluate the full context and decide. The goal is to give you more information, never to replace your clinical judgment.',
    },
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-foreground"
      >
        <span className="pr-8 text-sm font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FaqSection = () => {
  const { t, locale } = useI18n()
  const faqLocale = locale as 'es' | 'en'

  return (
    <section id="faq" className="relative w-full overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--primary)/0.04),transparent)]" />

      <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-20">
        <AnimatedGroup preset="blur-slide" className="mx-auto mb-12 max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 gap-1.5 border-primary/30 text-primary">
            <Check className="h-3 w-3" />
            {locale === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            {locale === 'es'
              ? <>Resolvemos tus<span className="italic text-primary"> dudas</span></>
              : <>We answer your<span className="italic text-primary"> questions</span></>
            }
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {locale === 'es'
              ? 'Las preguntas que nos hacen los profesionales antes de unirse a la beta privada.'
              : 'Questions professionals ask before joining the private beta.'
            }
          </p>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)]">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q[faqLocale]}
                a={faq.a[faqLocale]}
              />
            ))}
          </div>
        </AnimatedGroup>

        {/* Still have questions CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {locale === 'es'
              ? '¿Aún tienes preguntas?'
              : 'Still have questions?'
            }{' '}
            <a href="mailto:hello@coogni.com" className="text-primary hover:underline">
              {locale === 'es' ? 'Escríbenos' : 'Send us an email'}
            </a>
            {' '}{locale === 'es' ? 'y te respondemos en menos de 24h.' : 'and we\'ll reply within 24h.'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
