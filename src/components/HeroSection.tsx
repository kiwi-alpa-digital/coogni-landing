import React, { useState } from 'react'
import { ChevronRight, Menu, X, Globe, Sparkles } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { TextEffect } from '@/components/ui/text-effect'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import WaitlistModal from '@/components/WaitlistModal'
import { ShaderBackground } from '@/components/ui/shaders-hero-section'
import logoCoogni from '@/assets/logo-coogni.png'

export function HeroSection() {
  const { t } = useI18n()
  const [modalOpen, setModalOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <ShaderBackground>
        <HeroHeader />

        <div className="flex min-h-screen items-end px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            {/* Left: content */}
            <div className="max-w-xl flex-1">
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

              {/* Social proof strip */}
              <AnimatedGroup preset="blur-slide" delay={0.7} className="mt-8">
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['MG','JG','AR','CL'].map((i) => (
                        <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary border border-primary/20">{i}</div>
                      ))}
                    </div>
                    <span className="text-xs">{t({ es: '+200 profesionales en lista de espera', en: '+200 professionals on waitlist' })}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-400">★★★★★</span>
                    <span className="text-xs">{t({ es: '4.9/5 en satisfacción clínica', en: '4.9/5 clinical satisfaction' })}</span>
                  </div>
                </div>
              </AnimatedGroup>

              <AnimatedGroup preset="blur-slide" className="mt-10">
                <div className="max-w-xl">
                  {/* Urgency badge */}
                  <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 backdrop-blur-sm shadow-[0_0_20px_hsl(45_100%_50%/0.1)]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20">
                      <Sparkles className="h-3 w-3 text-amber-400" />
                    </div>
                    <span className="text-sm font-semibold text-amber-400">
                      {t({ es: '🎫 Beta privada — Plazas limitadas. 20% dto. lanzamiento.', en: '🎫 Private beta — Limited spots. 20% off at launch.' })}
                    </span>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setModalOpen(true)
                    }}
                    className="flex flex-col gap-2 sm:flex-row"
                  >
                    <input
                      type="text"
                      required
                      placeholder={t(translations.waitlist.namePlaceholder)}
                      className="flex-1 rounded-full border border-border bg-background/80 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                    />
                    <input
                      type="email"
                      required
                      placeholder={t(translations.waitlist.emailPlaceholder)}
                      className="flex-1 rounded-full border border-border bg-background/80 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                    />
                    <button
                      type="submit"
                      className="whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-cyan-400 px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                    >
                      {t({ es: 'Reservar mi plaza →', en: 'Reserve my spot →' })}
                    </button>
                  </form>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {t({ es: '⏱ Beta privada · Plazas limitadas · 20% dto. lanzamiento · Cancela cuando quieras', en: '⏱ Private beta · Limited spots · 20% off launch · Cancel anytime' })}
                  </p>
                </div>
              </AnimatedGroup>
            </div>

            {/* Right: video */}
            <div className="flex-1 lg:max-w-md xl:max-w-lg">
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-background/60 shadow-xl backdrop-blur-sm">
                <div className="relative aspect-video w-full bg-muted/30">
                  <video
                    className="h-full w-full object-cover"
                    poster=""
                    muted
                    playsInline
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  </video>
                  <div
                    className="absolute inset-0 flex cursor-pointer items-center justify-center"
                    onClick={() => setVideoOpen(true)}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 ml-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ShaderBackground>

      {/* Video fullscreen modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="w-full max-w-5xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <video
                className="h-full w-full object-contain"
                autoPlay
                controls
                playsInline
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      <WaitlistModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}

/* ─── Header ─── */
const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const { t, locale, setLocale } = useI18n()

  const menuItems = [
    { name: t(translations.nav.problem), href: '#problem' },
    { name: t(translations.nav.features), href: '#features' },
    { name: t(translations.nav.platform), href: '#platform' },
  ]

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="w-full px-2">
          <div
            className={cn(
              'mx-auto mt-2 max-w-7xl rounded-2xl border px-6 py-3 transition-all duration-300 lg:px-8',
              isScrolled
                ? 'border-border bg-background/80 shadow-lg backdrop-blur-xl'
                : 'border-transparent bg-transparent'
            )}
            style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
          >
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a href="/" aria-label="home" className="flex shrink-0 items-center">
                  <img src={logoCoogni} alt="Coogni" className="h-7 translate-y-[2px]" />
                </a>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 text-foreground lg:hidden"
                >
                  <Menu className={cn('h-6 w-6 transition-all duration-300', menuState && 'rotate-180 scale-0 opacity-0')} />
                  <X className={cn('absolute inset-0 m-auto h-6 w-6 transition-all duration-300', !menuState && '-rotate-180 scale-0 opacity-0')} />
                </button>
              </div>

              {/* Mobile menu */}
              <div
                className={cn(
                  'fixed inset-x-0 top-0 z-10 mb-6 origin-top overflow-hidden rounded-b-2xl border-b border-border bg-background/95 p-6 pt-24 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden',
                  menuState ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-0 opacity-0'
                )}
              >
                <div className="space-y-6">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <a href={item.href} className="block text-lg text-muted-foreground hover:text-foreground" onClick={() => setMenuState(false)}>
                        <span>{item.name}</span>
                      </a>
                    </div>
                  ))}
                  <button
                    onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
                    className="flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground"
                  >
                    <Globe className="h-4 w-4" />
                    {locale === 'es' ? 'English' : 'Español'}
                  </button>
                </div>
              </div>

              {/* Desktop nav */}
              <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex lg:items-center">
                <ul className="flex items-center gap-8 text-sm">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-muted-foreground transition-colors duration-300 hover:text-foreground">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop right */}
              <div className="hidden lg:flex lg:items-center lg:gap-2">
                <button
                  onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
                  className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Toggle language"
                >
                  <Globe className="h-4 w-4" />
                  <span className="uppercase font-medium">{locale === 'es' ? 'EN' : 'ES'}</span>
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm transition-all hover:bg-primary/20"
                >
                  <span>{t(translations.nav.joinNow)}</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <WaitlistModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}

export default HeroSection
