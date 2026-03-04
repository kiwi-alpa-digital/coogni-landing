import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll } from 'framer-motion'
import heroBg from '@/assets/hero-bg.jpg'

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
              ? 'border border-white/10 bg-gray-950/60 shadow-lg backdrop-blur-xl'
              : 'bg-transparent'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo className="text-white" />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className={cn('h-6 w-6 text-white transition-all duration-300', menuState && 'rotate-180 scale-0 opacity-0')} />
                <X className={cn('absolute inset-0 m-auto h-6 w-6 text-white transition-all duration-300', !menuState && '-rotate-180 scale-0 opacity-0')} />
              </button>

              <div
                className={cn(
                  'fixed inset-x-0 top-0 z-10 mb-6 origin-top overflow-hidden rounded-b-2xl border-b border-white/10 bg-gray-950 p-6 pt-24 shadow-2xl transition-all duration-300 lg:hidden',
                  menuState ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-0 opacity-0'
                )}
              >
                <div className="space-y-6">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <a href={item.href} className="block text-lg text-white hover:text-white/70" onClick={() => setMenuState(false)}>
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
                      <a href={item.href} className="block text-white/70 transition-colors duration-300 hover:text-white">
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href="#">Login</a>
                </Button>
                <Button size="sm" className="bg-white text-gray-950 hover:bg-white/90" asChild>
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
          {/* Hero with full-bleed background image */}
          <div className="relative">
            <div className="absolute inset-0 z-0">
              <img
                src={heroBg}
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32 md:pb-32 md:pt-44 lg:px-8">
              <div className="max-w-xl">
                <h1 className="text-balance text-4xl font-bold text-white md:text-5xl xl:text-6xl">
                  Build 10x Faster with NS
                </h1>
                <p className="mt-8 max-w-md text-pretty text-lg text-white/70">
                  Highly customizable components for building modern websites and applications you mean it.
                </p>
                <div className="mt-12 flex items-center gap-2">
                  <Button size="lg" className="bg-white text-gray-950 hover:bg-white/90 pr-4" asChild>
                    <a href="#waitlist">
                      <span>Start Building</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white" asChild>
                    <a href="#waitlist">
                      <span>Request a demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Logo slider */}
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Powering the best teams
              </p>
              <div className="relative mt-8">
                <InfiniteSlider gap={24} duration={30}>
                  {[1,2,3,4,5,6,1,2].map((n, i) => (
                    <div key={i} className="flex items-center">
                      <img className="mx-auto h-5 w-fit dark:invert" src={`https://html.design/demo/flavor/assets/images/brand/brand-${n}.svg`} alt="Logo" height="20" width="auto" />
                    </div>
                  ))}
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

export default HeroSection
