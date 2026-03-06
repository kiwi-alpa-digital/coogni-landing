import React, { useState } from 'react'
import { ChevronRight, Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { TextEffect } from '@/components/ui/text-effect'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'
import WaitlistModal from '@/components/WaitlistModal'
import { ShaderBackground, PulsingCircle } from '@/components/ui/shaders-hero-section'

export function HeroSection() {
  const { t } = useI18n()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <ShaderBackground>
        <HeroHeader />

        {/* Hero content — full height, content at bottom */}
        <div className="flex min-h-screen flex-col justify-end px-6 pb-16 pt-32 md:px-12 lg:px-20">
          <div className="flex items-end justify-between gap-12">
            {/* Left — Text + form */}
            <div className="max-w-2xl">
              {/* Badge */}
              <AnimatedGroup preset="blur-slide">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                  <span className="text-sm text-white/90">✨</span>
                  <span className="text-sm font-medium text-white/90">
                    {t({ es: 'Nueva plataforma de IA clínica', en: 'New Clinical AI Platform' })}
                  </span>
                </div>
              </AnimatedGroup>

              {/* Heading */}
              <TextEffect
                preset="fade"
                per="word"
                as="h1"
                className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl xl:text-7xl"
                delay={0.3}
              >
                {t(translations.hero.title)}
              </TextEffect>

              {/* Description */}
              <TextEffect
                per="line"
                as="p"
                preset="fade"
                delay={0.5}
                className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
              >
                {t(translations.hero.subtitle)}
              </TextEffect>

              {/* CTA Buttons */}
              <AnimatedGroup preset="blur-slide" className="mt-8">
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="rounded-full border border-white/30 bg-transparent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
                  >
                    {t({ es: 'Ver más', en: 'Learn more' })}
                  </button>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="rounded-full bg-white px-8 py-3 text-sm font-medium text-neutral-900 transition-all hover:bg-white/90"
                  >
                    {t(translations.nav.joinNow)}
                  </button>
                </div>
              </AnimatedGroup>
            </div>

            {/* Right — Pulsing circle */}
            <div className="hidden lg:block">
              <PulsingCircle />
            </div>
          </div>

          {/* Trusted by logos */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
              <div className="shrink-0">
                <p className="text-center text-sm font-medium text-white/50 sm:text-left">
                  {t(translations.hero.trustedBy)}
                </p>
              </div>
              <div className="relative w-full overflow-hidden">
                <InfiniteSlider gap={24} duration={30}>
                  {['nvidia', 'google', 'microsoft', 'amazon', 'meta', 'apple', 'samsung', 'intel'].map((name) => (
                    <div key={name} className="flex items-center">
                      <img
                        className="mx-auto h-5 w-fit invert opacity-50"
                        src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/${name}.svg`}
                        alt={name}
                        height="20"
                        width="auto"
                      />
                    </div>
                  ))}
                </InfiniteSlider>
                <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" />
                <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" />
              </div>
            </div>
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
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="w-full px-2">
          <div
            className={cn(
              'mx-auto mt-2 max-w-7xl rounded-2xl border px-6 py-3 transition-all duration-300 lg:px-8',
              isScrolled
                ? 'border-white/10 bg-black/30 shadow-lg backdrop-blur-xl'
                : 'border-transparent bg-transparent'
            )}
          >
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a href="/" aria-label="home" className="flex shrink-0 items-center space-x-2">
                  <Logo />
                </a>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 text-white lg:hidden"
                >
                  <Menu className={cn('h-6 w-6 transition-all duration-300', menuState && 'rotate-180 scale-0 opacity-0')} />
                  <X className={cn('absolute inset-0 m-auto h-6 w-6 transition-all duration-300', !menuState && '-rotate-180 scale-0 opacity-0')} />
                </button>
              </div>

              {/* Mobile menu */}
              <div
                className={cn(
                  'fixed inset-x-0 top-0 z-10 mb-6 origin-top overflow-hidden rounded-b-2xl border-b border-white/10 bg-neutral-900/95 p-6 pt-24 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden',
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
