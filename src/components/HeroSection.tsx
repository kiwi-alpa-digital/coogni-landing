import React from 'react'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { TextEffect } from '@/components/ui/text-effect'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24 md:pt-36">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_-20%,transparent_45%,hsl(var(--primary)/0.15)_125%)]"></div>
            <div className="absolute inset-x-0 top-56 -z-10 h-48 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-background"></div>

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup preset="blur-slide">
                  <a
                    href="#waitlist"
                    className="hover:bg-muted bg-muted/50 group mx-auto flex w-fit items-center gap-4 rounded-full border border-border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300"
                  >
                    <span className="text-foreground text-sm">Beta privada — Plazas limitadas</span>
                    <span className="bg-primary text-primary-foreground block rounded-full px-2 py-1 text-xs">
                      Solicitar acceso
                      <ArrowRight className="ml-1 inline h-3 w-3" />
                    </span>
                  </a>
                </AnimatedGroup>

                <TextEffect
                  preset="fade"
                  per="word"
                  as="h1"
                  className="mt-8 text-balance text-5xl font-semibold md:text-6xl xl:text-[4.5rem] xl:leading-[1.2]"
                  delay={0.5}
                >
                  Predice el deterioro cognitivo antes de que sea visible
                </TextEffect>

                <TextEffect
                  per="line"
                  as="p"
                  preset="fade"
                  delay={0.7}
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground"
                >
                  Plataforma clínica con IA predictiva para el manejo de enfermedades neurodegenerativas. Centraliza datos, anticipa trayectorias y facilita decisiones basadas en evidencia.
                </TextEffect>

                <AnimatedGroup
                  preset="blur-slide"
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div>
                    <Button size="lg" className="rounded-xl px-5" asChild>
                      <a href="#waitlist">
                        <span className="text-nowrap">Unirme a la lista</span>
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <Button size="lg" variant="ghost" className="rounded-xl px-5" asChild>
                    <a href="#waitlist">
                      <span className="text-nowrap">Solicitar una demo</span>
                    </a>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 1,
                    },
                  },
                },
                item: transitionVariants.item,
              }}
              className="relative mx-auto mt-8 max-w-6xl px-2 sm:mt-12 md:mt-20"
            >
              <div className="rounded-2xl border border-border bg-background shadow-lg ring-1 ring-border/50">
                <img
                  src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                  className="rounded-2xl"
                  alt="app illustration"
                  width={2797}
                  height={1800}
                />
              </div>
            </AnimatedGroup>
          </div>

          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
              <div className="shrink-0">
                <p className="text-center text-sm font-medium text-muted-foreground sm:text-left">
                  Confían en nosotros
                </p>
              </div>

              <div className="relative w-full overflow-hidden">
                <InfiniteSlider gap={24} duration={30}>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/nvidia.svg" alt="Nvidia" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg" alt="Google" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg" alt="Microsoft" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg" alt="Amazon" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg" alt="Meta" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg" alt="Apple" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/samsung.svg" alt="Samsung" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/intel.svg" alt="Intel" height="20" width="auto" />
                  </div>
                </InfiniteSlider>
                <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" />
                <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const menuItems = [
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Plataforma', href: '#benefits' },
  { name: 'Beta Privada', href: '#waitlist' },
  { name: 'Nosotros', href: '#' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav
        data-state={isScrolled ? 'scrolled' : 'top'}
        className="fixed z-50 w-full px-2"
      >
        <div
          className={cn(
            'mx-auto mt-2 max-w-7xl rounded-2xl border px-6 py-3 transition-all duration-300 lg:px-8',
            isScrolled
              ? 'border-border bg-background/70 shadow-lg backdrop-blur-xl'
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
              <Button variant="ghost" size="sm" asChild>
                <a href="#">Iniciar sesión</a>
              </Button>
              <Button size="sm" asChild>
                <a href="#waitlist">Registrarse</a>
              </Button>
              <Button size="sm" asChild>
                <a href="#waitlist">
                  <span>Solicitar acceso</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
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
}

export default HeroSection
