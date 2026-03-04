import React from 'react';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight, Brain, ShieldCheck, Activity, Stethoscope } from 'lucide-react';
import { useScroll, motion } from 'framer-motion';
import dashboardMockup from '@/assets/dashboard-mockup.png';

const menuItems = [
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Beneficios', href: '#benefits' },
  { name: 'Waitlist', href: '#waitlist' },
];

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

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
              ? 'border border-border bg-card/80 shadow-lg backdrop-blur-md'
              : 'bg-transparent'
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2">
                <Brain className="h-7 w-7 text-primary" />
                <span className="text-lg font-bold text-foreground">NeuroCDSS</span>
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Cerrar menú' : 'Abrir menú'}
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

              {/* Mobile menu */}
              <div
                className={cn(
                  'fixed inset-x-0 top-0 z-10 mb-6 origin-top overflow-hidden rounded-b-2xl border-b border-border bg-card p-6 pt-24 shadow-2xl transition-all duration-300 lg:hidden',
                  menuState
                    ? 'visible scale-y-100 opacity-100'
                    : 'invisible scale-y-0 opacity-0'
                )}
              >
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="block text-lg font-medium text-foreground hover:text-primary"
                        onClick={() => setMenuState(false)}
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <div className="flex gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="cta"
                  size="sm"
                  onClick={() =>
                    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Solicitar Acceso
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Trust logos as simple text badges
const trustLogos = [
  { name: 'Hospital Universitario', icon: Stethoscope },
  { name: 'Centro de Neurociencia', icon: Brain },
  { name: 'Clínica Neurodegenerativa', icon: Activity },
  { name: 'Instituto de Investigación', icon: ShieldCheck },
  { name: 'Red de Hospitales', icon: Stethoscope },
  { name: 'Centro de Alzheimer', icon: Brain },
  { name: 'Unidad de Parkinson', icon: Activity },
  { name: 'Laboratorio Clínico', icon: ShieldCheck },
];

const HeroSection = () => {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24 md:pt-32">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl"
                >
                  Deja de evaluar el deterioro a ciegas.{' '}
                  <span className="text-primary">Anticípate con datos clínicos.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                  className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground"
                >
                  El Sistema de Soporte a la Decisión Clínica (CDSS) definitivo para
                  enfermedades neurodegenerativas. Pasa de la simple estimulación a la
                  predicción y gestión integral del paciente.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                  className="mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                  <Button
                    variant="cta"
                    size="lg"
                    className="px-6 py-5 text-base"
                    onClick={() =>
                      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Solicitar Acceso Anticipado
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 py-5 text-base"
                    onClick={() =>
                      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Ver funcionalidades
                  </Button>
                </motion.div>
              </div>

              {/* Dashboard mockup */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="relative mx-auto mt-12 max-w-4xl"
              >
                <div
                  className="overflow-hidden rounded-2xl border border-border bg-card p-2"
                  style={{ boxShadow: 'var(--hero-shadow)' }}
                >
                  <img
                    src={dashboardMockup}
                    alt="Dashboard de analítica médica para seguimiento de enfermedades neurodegenerativas"
                    className="w-full rounded-xl"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>

            {/* Trust logos slider */}
            <div className="mx-auto mt-16 max-w-6xl px-6 pb-16 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Diseñado para equipos clínicos de referencia
                </p>

                <div className="relative mt-6">
                  <InfiniteSlider gap={32} duration={30} className="py-2">
                    {trustLogos.map((logo, i) => (
                      <div
                        key={i}
                        className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2"
                      >
                        <logo.icon className="h-4 w-4 text-primary/60" />
                        <span className="whitespace-nowrap text-sm text-muted-foreground">
                          {logo.name}
                        </span>
                      </div>
                    ))}
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
  );
};

export default HeroSection;
