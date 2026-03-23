import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, ChevronRight } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { TextEffect } from '@/components/ui/text-effect'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import WaitlistModal from '@/components/WaitlistModal'
import logoCoogni from '@/assets/logo-coogni.png'

/* ─── Fixed Header ─── */
function HeroHeader() {
  const [menuState, setMenuState] = useState(false)
  const { t, locale, setLocale } = useI18n()

  const menuItems = [
    { name: t(translations.nav.problem), href: '#problem' },
    { name: t(translations.nav.features), href: '#features' },
    { name: 'FAQ', href: '#faq' },
    { name: t(translations.nav.platform), href: '#pricing' },
  ]

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md shadow-sm"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6 md:px-12 lg:px-20">
        <a href="/" className="flex items-center gap-2">
          <img src={logoCoogni} alt="Coogni" className="h-7" />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
            className="rounded-lg px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground border border-border"
          >
            {locale}
          </button>

          <button
            onClick={() => window.dispatchEvent(new Event('openWaitlistModal'))}
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:block"
          >
            {t(translations.nav.joinNow)}
          </button>

          <button
            onClick={() => setMenuState(!menuState)}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <ChevronRight className={`h-5 w-5 transition-transform ${menuState ? 'rotate-90' : ''}`} />
          </button>
        </div>
      </div>

      {menuState && (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-background/95 px-6 pb-6 pt-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuState(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => { setMenuState(false); window.dispatchEvent(new Event('openWaitlistModal')) }}
              className="mt-2 flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              {t(translations.nav.joinNow)}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ─── Hero Content ─── */
export function HeroSection() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Listen for openWaitlistModal events from other components (PricingSection, StickyCta)
  useEffect(() => {
    const handler = () => setModalOpen(true)
    window.addEventListener('openWaitlistModal', handler)
    return () => window.removeEventListener('openWaitlistModal', handler)
  }, [])

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch {}
    setFormData({ name: '', email: '' })
    navigate('/gracias-lista-espera')
  }

  return (
    <>
      <HeroHeader />

      {/* Hero — below fixed header */}
      <div className="relative flex justify-start px-6 py-40 lg:px-20 lg:py-36">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(215,60%,50%/0.08),transparent)]" />

        <AnimatedGroup preset="fade" className="w-full max-w-4xl">

          {/* Headline */}
          <h1 className="text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            <span className="font-bold italic">{t(translations.hero.titleAccent)}</span>{' '}
            <span className="font-light">{t(translations.hero.titleMid)}</span>{' '}
            <span className="font-bold italic">{t(translations.hero.titleAccent2)}</span>{' '}
            <span className="font-light">{t(translations.hero.titleRest)}</span>
          </h1>

          {/* Subtitle */}
          <TextEffect
            per="line"
            as="p"
            preset="fade"
            delay={0.3}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t(translations.hero.subtitle)}
          </TextEffect>

          {/* Social proof */}
          <AnimatedGroup preset="blur-slide" delay={0.5} className="mt-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['MG','JG','AR','CL'].map((i) => (
                    <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary border border-primary/20">{i}</div>
                  ))}
                </div>
                <span className="text-xs">+200 profesionales en lista de espera</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400">★★★★★</span>
                <span className="text-xs">4.9/5 en satisfacción clínica</span>
              </div>
            </div>
          </AnimatedGroup>

          {/* Form CTA */}
          <p className="mt-10 text-sm font-medium text-foreground">
            Únete a la lista de espera y consigue un <span className="text-primary font-bold">20% de descuento</span>
          </p>

          {/* Inline form */}
          <form
            onSubmit={handleHeroSubmit}
            className="mt-3 flex flex-col sm:flex-row gap-3 max-w-2xl"
          >
            <input
              type="text"
              required
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-1 h-11 rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-[3px] focus:ring-ring/20"
            />
            <input
              type="email"
              required
              placeholder="Tu email profesional"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 h-11 rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-[3px] focus:ring-ring/20"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-11 shrink-0 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow-sm shadow-black/5 transition-all hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none px-6"
            >
              {isSubmitting ? 'Enviando...' : 'Reservar mi plaza →'}
            </button>
          </form>

          <p className="mt-3 text-xs text-muted-foreground/70">
            Únete gratis hoy. Sin tarjeta · Sin compromiso
          </p>

        </AnimatedGroup>
      </div>

      <WaitlistModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
