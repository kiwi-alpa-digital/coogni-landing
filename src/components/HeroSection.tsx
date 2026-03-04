import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'Solution', href: '#benefits' },
  { name: 'Pricing', href: '#waitlist' },
  { name: 'About', href: '#' },
]

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
            'mx-auto mt-2 max-w-6xl rounded-2xl px-6 py-3 transition-all duration-300 lg:px-8',
            scrolled
              ? 'border border-border bg-card/50 shadow-lg backdrop-blur-xl'
              : 'bg-transparent'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo className="text-primary" />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={cn(
                    'h-6 w-6 text-foreground transition-all duration-300',
                    menuState && 'rotate-180 scale-0 opacity-0'
                  )}
                />
                <X
                  className={cn(
                    'absolute inset-0 m-auto h-6 w-6 text-foreground transition-all duration-300',
                    !menuState && '-rotate-180 scale-0 opacity-0'
                  )}
                />
              </button>

              <div
                className={cn(
                  'fixed inset-x-0 top-0 z-10 mb-6 origin-top overflow-hidden rounded-b-2xl border-b border-border bg-card p-6 pt-24 shadow-2xl transition-all duration-300 lg:hidden',
                  menuState
                    ? 'visible scale-y-100 opacity-100'
                    : 'invisible scale-y-0 opacity-0'
                )}
              >
                <div className="space-y-6">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="block text-lg text-foreground hover:text-primary"
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-between">
              <div className="mx-auto">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="block text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="#">Login</a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a href="#waitlist">Sign Up</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24 md:pt-36">
            <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
                  <div className="md:w-1/2">
                    <h1 className="mt-8 max-w-lg text-balance text-4xl font-bold md:text-5xl lg:mt-16 xl:text-6xl">
                      Build 10x Faster with NS
                    </h1>
                    <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
                      Highly customizable components for building modern websites and applications you mean it.
                    </p>

                    <div className="mt-12 flex items-center gap-2">
                      <Button variant="default" size="lg" className="pr-4.5" asChild>
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
                  </div>

                  <div className="relative md:w-1/2">
                    <div className="overflow-hidden rounded-2xl border border-border bg-card/50 shadow-lg backdrop-blur-sm">
                      <img
                        src="/dashboard-mockup.png"
                        alt="App screenshot"
                        className="w-full"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-20 max-w-6xl px-6 pb-16 lg:px-8">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Powering the best teams
                </p>

                <div className="relative mt-8">
                  <InfiniteSlider gap={24} duration={30}>
                    <div className="flex items-center">
                      <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-1.svg" alt="Nvidia Logo" height="20" width="auto" />
                    </div>

                    <div className="flex items-center">
                      <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-2.svg" alt="Column Logo" height="20" width="auto" />
                    </div>
                    <div className="flex items-center">
                      <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-3.svg" alt="GitHub Logo" height="20" width="auto" />
                    </div>
                    <div className="flex items-center">
                      <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-4.svg" alt="Nike Logo" height="20" width="auto" />
                    </div>
                    <div className="flex items-center">
                      <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-5.svg" alt="Lemonsqueezy Logo" height="20" width="auto" />
                    </div>
                    <div className="flex items-center">
                      <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-6.svg" alt="Larevel Logo" height="20" width="auto" />
                    </div>
                    <div className="flex items-center">
                      <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-1.svg" alt="Loom Logo" height="20" width="auto" />
                    </div>

                    <div className="flex items-center">
                      <img className="mx-auto h-5 w-fit dark:invert" src="https://html.design/demo/flavor/assets/images/brand/brand-2.svg" alt="Figma Logo" height="20" width="auto" />
                    </div>
                  </InfiniteSlider>

                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HeroSection
