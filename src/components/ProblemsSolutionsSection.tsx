import { X, Check, FileWarning, Brain, Clock, ShieldAlert, Users, BarChart3, ArrowRight } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";

const ProblemsSolutionsSection = () => {
  const { t } = useI18n();
  const ps = translations.problemsSolutions;

  const items = [
    { icon: FileWarning, title: t(ps.items.fragmented.title), problem: t(ps.items.fragmented.problem), solution: t(ps.items.fragmented.solution) },
    { icon: Clock, title: t(ps.items.reactive.title), problem: t(ps.items.reactive.problem), solution: t(ps.items.reactive.solution) },
    { icon: ShieldAlert, title: t(ps.items.insecure.title), problem: t(ps.items.insecure.problem), solution: t(ps.items.insecure.solution) },
    { icon: Users, title: t(ps.items.silos.title), problem: t(ps.items.silos.problem), solution: t(ps.items.silos.solution) },
    { icon: Brain, title: t(ps.items.subjective.title), problem: t(ps.items.subjective.problem), solution: t(ps.items.subjective.solution) },
    { icon: BarChart3, title: t(ps.items.noData.title), problem: t(ps.items.noData.problem), solution: t(ps.items.noData.solution) },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(var(--primary)/0.04),transparent)]" />

      <div className="mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <AnimatedGroup preset="blur-slide">
            <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-xs font-medium text-destructive mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
              </span>
              {t(ps.badge)}
            </span>
          </AnimatedGroup>
          <AnimatedGroup preset="blur-slide">
            <h2 className="text-4xl tracking-tight text-foreground lg:text-5xl">
              <span className="font-bold italic">{t(ps.titleAccent)}</span>{' '}
              <span className="font-light">{t(ps.titleRest)}</span>
            </h2>
          </AnimatedGroup>
          <AnimatedGroup preset="blur-slide">
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t(ps.subtitle)}
            </p>
          </AnimatedGroup>
        </div>

        {/* Comparison table */}
        <AnimatedGroup preset="blur-slide" className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border bg-card overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
            {/* Column headers */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-border bg-muted/50">
              <div className="flex items-center gap-2 px-6 py-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/15">
                  <X className="h-3 w-3 text-destructive" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-destructive">
                  {t({ es: 'Sin NeuroCDSS', en: 'Without NeuroCDSS' })}
                </span>
              </div>
              <div className="w-px" />
              <div className="flex items-center gap-2 px-6 py-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15">
                  <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t({ es: 'Con NeuroCDSS', en: 'With NeuroCDSS' })}
                </span>
              </div>
            </div>

            {/* Rows */}
            {items.map((item, i) => {
              const Icon = item.icon;
              const isLast = i === items.length - 1;
              return (
                <div
                  key={i}
                  className={`group grid grid-cols-[1fr_auto_1fr] items-stretch transition-colors duration-200 hover:bg-muted/30 ${
                    !isLast ? "border-b border-border/60" : ""
                  }`}
                >
                  {/* Pain point */}
                  <div className="flex items-start gap-3 px-6 py-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.problem}</p>
                    </div>
                  </div>

                  {/* Arrow divider */}
                  <div className="flex items-center justify-center w-10 border-x border-border/40">
                    <ArrowRight className="h-4 w-4 text-accent/60" />
                  </div>

                  {/* Gain */}
                  <div className="flex items-center px-6 py-4">
                    <p className="text-sm font-medium text-foreground leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default ProblemsSolutionsSection;
