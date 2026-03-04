import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24 md:pt-36">
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/20 to-transparent to-70%" />
            </motion.div>

            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <h1 className="mt-8 max-w-2xl text-balance text-5xl font-semibold md:text-6xl lg:mt-16 xl:text-[5.25rem] xl:leading-[1.15]">
                    Build 10x Faster with NS
                  </h1>
                  <p className="mt-8 max-w-lg text-pretty text-lg text-muted-foreground">
                    Highly customizable components for building modern websites and applications you mean it.
                  </p>
                  <div className="mt-12 flex items-center gap-2">
                    <Button size="lg" className="pr-4" asChild>
                      <a href="#waitlist">
                        <span>Start Building</span>
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="lg" asChild>
                      <a href="#waitlist">
                        <span>Request a demo</span>
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="relative mx-auto mt-8 max-w-6xl overflow-hidden px-2 sm:mt-12 md:mt-20"
            >
              <div
                aria-hidden
                className="bg-gradient-to-b from-transparent via-background to-background absolute inset-0 z-10"
              />
              <div className="relative rounded-2xl border border-border bg-background shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                <img
                  src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                  className="rounded-2xl"
                  alt="app illustration"
                  width={2797}
                  height={1800}
                />
              </div>
            </motion.div>
          </div>

          <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
              <div className="shrink-0">
                <p className="text-center text-sm font-medium text-muted-foreground sm:text-left">
                  Powering the best teams
                </p>
              </div>

              <div className="relative w-full overflow-hidden">
                <InfiniteSlider gap={24} duration={30}>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-1.svg" alt="Logo" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-2.svg" alt="Logo" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-3.svg" alt="Logo" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-4.svg" alt="Logo" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-5.svg" alt="Logo" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-6.svg" alt="Logo" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-1.svg" alt="Logo" height="20" width="auto" />
                  </div>
                  <div className="flex items-center">
                    <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-2.svg" alt="Logo" height="20" width="auto" />
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
  { name: 'Features', href: '#features' },
  { name: 'Solution', href: '#benefits' },
  { name: 'Pricing', href: '#waitlist' },
  { name: 'About', href: '#' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={scrolled ? 'scrolled' : 'top'}
        className="fixed z-50 w-full px-2"
      >
        <div
          className={cn(
            'mx-auto mt-2 max-w-5xl rounded-2xl border px-6 py-3 transition-all duration-300 lg:px-8',
            scrolled
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
                <a href="#">Login</a>
              </Button>
              <Button size="sm" asChild>
                <a href="#waitlist">Sign Up</a>
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
