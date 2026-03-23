import React, { useState } from 'react'
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

          <a
            href="#waitlist"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:block"
          >
            {t(translations.nav.joinNow)}
          </a>

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
            <a
              href="#waitlist"
              onClick={() => setMenuState(false)}
              className="mt-2 flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              {t(translations.nav.joinNow)}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ─── Hero Content ─── */
export function HeroSection() {
  const { t } = useI18n()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <HeroHeader />

      {/* Hero — below fixed header */}
      <div className="relative min-h-screen flex items-end px-6 pb-20 pt-24 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(215,60%,50%/0.08),transparent)]" />

        <div className="flex w-full flex-col lg:flex-row gap-8 items-start lg:items-end">

          {/* Left: text */}
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              <span className="font-bold italic">{t(translations.hero.titleAccent)}</span>{' '}
              <span className="font-light">{t(translations.hero.titleMid)}</span>{' '}
              <span className="font-bold italic">{t(translations.hero.titleAccent2)}</span>{' '}
              <span className="font-light">{t(translations.hero.titleRest)}</span>
            </h1>

            <TextEffect
              per="line"
              as="p"
              preset="fade"
              delay={0.5}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t(translations.hero.subtitle)}
            </TextEffect>

            <AnimatedGroup preset="blur-slide" delay={0.7} className="mt-8">
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
          </div>

          {/* Right: form */}
          <div className="w-full lg:flex-1 lg:flex lg:justify-center">
            <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5">
                <Sparkles className="h-3 w-3 text-amber-400" />
                <span className="text-xs font-semibold text-amber-400">
                  Beta privada — 20% dto. lanzamiento
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setModalOpen(true)
                }}
                className="flex flex-col gap-2.5"
              >
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-border bg-background/80 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                />
                <input
                  type="email"
                  required
                  placeholder="Tu email profesional"
                  className="w-full rounded-xl border border-border bg-background/80 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-cyan-400 px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 mt-1"
                >
                  Reservar mi plaza →
                </button>
              </form>
              <p className="mt-2.5 text-xs text-muted-foreground text-center">
                Sin compromiso · Cancela cuando quieras
              </p>
            </div>
          </div>

        </div>
      </div>

      <WaitlistModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
