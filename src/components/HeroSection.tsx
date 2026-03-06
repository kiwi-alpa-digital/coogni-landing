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

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: {
      opacity: 1, filter: 'blur(0px)', y: 0,
      transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
    },
  },
}

export function HeroSection() {
  const { t } = useI18n()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-28 md:pt-40 pb-16 md:pb-24">
            <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_80%_60%_at_70%_-20%,hsl(var(--primary)/0.08),transparent)]" />
            <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute left-1/4 bottom-0 -z-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left — Text + inline form */}
                <div className="max-w-xl">
                  <TextEffect
                    preset="fade"
                    per="word"
                    as="h1"
                    className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl"
                    delay={0.3}
                  >
                    {t(translations.hero.title)}
                  </TextEffect>

                  <TextEffect
                    per="line"
                    as="p"
                    preset="fade"
                    delay={0.5}
                    className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
                  >
                    {t(translations.hero.subtitle)}
                  </TextEffect>

                  {/* Inline CTA form area */}
                  <AnimatedGroup preset="blur-slide" className="mt-10">
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--card-shadow)]">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-foreground">{t(translations.hero.formTitle)}</h3>
                        <p className="text-sm text-accent font-medium">{t(translations.hero.formSubtitle)}</p>
                      </div>
                      <HeroInlineForm onOpenModal={() => setModalOpen(true)} />
                    </div>
                  </AnimatedGroup>
                </div>

                {/* Right — Dashboard image */}
                <AnimatedGroup
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.8 } },
                    },
                    item: transitionVariants.item,
                  }}
                  className="relative"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />
                    <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 ring-1 ring-border/50">
                      <img
                        src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                        className="rounded-2xl"
                        alt="app illustration"
                        width={2797}
                        height={1800}
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">+23%</p>
                          <p className="text-xs text-muted-foreground">
                            {t({ es: 'Detección temprana', en: 'Early detection' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedGroup>
              </div>
            </div>

            {/* Trusted by logos */}
            <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
                <div className="shrink-0">
                  <p className="text-center text-sm font-medium text-muted-foreground sm:text-left">
                    {t(translations.hero.trustedBy)}
                  </p>
                </div>
                <div className="relative w-full overflow-hidden">
                  <InfiniteSlider gap={24} duration={30}>
                    {['nvidia', 'google', 'microsoft', 'amazon', 'meta', 'apple', 'samsung', 'intel'].map((name) => (
                      <div key={name} className="flex items-center">
                        <img className="mx-auto h-5 w-fit dark:invert" src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/${name}.svg`} alt={name} height="20" width="auto" />
                      </div>
                    ))}
                  </InfiniteSlider>
                  <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" />
                  <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WaitlistModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}

/** Compact inline form: just name + email, then opens modal for full form */
function HeroInlineForm({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useI18n()
  const w = translations.waitlist

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open the full modal — in a real app you'd pass name/email as defaults
    onOpenModal()
  }

  const inputClasses =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t(w.namePlaceholder)}
          className={inputClasses}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t(w.emailPlaceholder)}
          className={inputClasses}
        />
      </div>
      <Button type="submit" variant="cta" size="lg" className="w-full gap-2 py-5 text-base">
        {t(w.submit)}
        <ChevronRight className="h-4 w-4" />
      </Button>
    </form>
  )
}

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
      <header>
        <nav data-state={isScrolled ? 'scrolled' : 'top'} className="fixed z-50 w-full px-2">
          <div
            className={cn(
              'mx-auto mt-2 max-w-7xl rounded-2xl border px-6 py-3 transition-all duration-300 lg:px-8',
              isScrolled ? 'border-border bg-background/70 shadow-lg backdrop-blur-xl' : 'border-transparent bg-transparent'
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
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className={cn('h-6 w-6 transition-all duration-300', menuState && 'rotate-180 scale-0 opacity-0')} />
                  <X className={cn('absolute inset-0 m-auto h-6 w-6 transition-all duration-300', !menuState && '-rotate-180 scale-0 opacity-0')} />
                </button>
              </div>

              <div
                className={cn(
                  'fixed inset-x-0 top-0 z-10 mb-6 origin-top overflow-hidden rounded-b-2xl border-b border-border bg-background p-6 pt-24 shadow-2xl transition-all duration-300 lg:hidden',
                  menuState ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-0 opacity-0'
                )}
              >
                <div className="space-y-6">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <a href={item.href} className="block text-lg hover:text-muted-foreground" onClick={() => setMenuState(false)}>
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

              <div className="hidden lg:flex lg:items-center">
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

              <div className="hidden lg:flex lg:items-center lg:gap-2">
                <button
                  onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
                  className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Toggle language"
                >
                  <Globe className="h-4 w-4" />
                  <span className="uppercase font-medium">{locale === 'es' ? 'EN' : 'ES'}</span>
                </button>
                <Button size="sm" onClick={() => setModalOpen(true)}>
                  <span>{t(translations.nav.joinNow)}</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
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
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 120 120" fill="none">
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
