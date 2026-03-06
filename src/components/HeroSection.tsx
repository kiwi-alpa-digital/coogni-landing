import React, { useState } from 'react'
import { ChevronRight, Menu, X, Globe, Sparkles } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { TextEffect } from '@/components/ui/text-effect'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import WaitlistModal from '@/components/WaitlistModal'
import { ShaderBackground } from '@/components/ui/shaders-hero-section'

export function HeroSection() {
  const { t } = useI18n()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ShaderBackground>
        <HeroHeader />

        <div className="flex min-h-screen flex-col justify-end px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            {/* Heading */}
            <h1 className="text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              <span className="font-bold italic">{t(translations.hero.titleAccent)}</span>{' '}
              <span className="font-light">{t(translations.hero.titleRest)}</span>
            </h1>

            {/* Description */}
            <TextEffect
              per="line"
              as="p"
              preset="fade"
              delay={0.5}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t(translations.hero.subtitle)}
            </TextEffect>

            {/* Inline waitlist form */}
            <AnimatedGroup preset="blur-slide" className="mt-10">
              <div className="max-w-lg">
                {/* Discount badge */}
                <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 backdrop-blur-sm shadow-[0_0_20px_hsl(210_100%_35%/0.15)]">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                    <Sparkles className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {t({ es: '20% de descuento exclusivo al unirte ahora', en: '20% exclusive discount when you join now' })}
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
                    className="whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    {t({ es: 'Unirme', en: 'Join' })}
                  </button>
                </form>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </ShaderBackground>

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
    { name: t(translations.nav.features), href: '#features' },
    { name: t(translations.nav.platform), href: '#platform' },
    { name: t(translations.nav.about), href: '#benefits' },
    { name: t(translations.nav.beta), href: '#waitlist' },
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
                <a href="/" aria-label="home" className="flex shrink-0 items-center space-x-2">
                  <Logo />
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
                      <a href={item.href} className="block text-lg text-white/80 hover:text-white" onClick={() => setMenuState(false)}>
                        <span>{item.name}</span>
                      </a>
                    </div>
                  ))}
                  <button
                    onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
                    className="flex items-center gap-2 text-lg text-white/60 hover:text-white"
                  >
                    <Globe className="h-4 w-4" />
                    {locale === 'es' ? 'English' : 'Español'}
                  </button>
                </div>
              </div>

              {/* Desktop nav */}
              <div className="hidden lg:flex lg:items-center">
                <ul className="flex items-center gap-8 text-sm">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-white/60 transition-colors duration-300 hover:text-white">
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
                  className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
                  aria-label="Toggle language"
                >
                  <Globe className="h-4 w-4" />
                  <span className="uppercase font-medium">{locale === 'es' ? 'EN' : 'ES'}</span>
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
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

const Logo = ({ className }: { className?: string }) => (
  <svg className={cn("text-white", className)} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 120 120" fill="none">
    <rect width="120" height="120" rx="24" fill="currentColor" />
    <g clipPath="url(#clip)">
      <path d="M33.75 78.75L60 52.5L86.25 78.75" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33.75 52.5L60 26.25L86.25 52.5" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </g>
    <defs>
      <clipPath id="clip">
        <rect width="67.5" height="67.5" fill="white" transform="translate(26.25 18.75)" />
      </clipPath>
    </defs>
  </svg>
)

export default HeroSection
