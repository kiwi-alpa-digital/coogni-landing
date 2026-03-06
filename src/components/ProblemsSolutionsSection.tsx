import { ArrowDown, X, Check, FileWarning, Brain, Clock, ShieldAlert, Users, BarChart3 } from "lucide-react";
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
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 -z-10 [background:radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(var(--primary)/0.04),transparent)]" />
      <div className="absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-destructive/3 blur-3xl" />
      <div className="absolute right-0 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-accent/4 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
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
            <h2 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
              {t(ps.title)}
            </h2>
          </AnimatedGroup>
          <AnimatedGroup preset="blur-slide">
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t(ps.subtitle)}
            </p>
          </AnimatedGroup>
        </div>

        {/* Cards grid */}
        <AnimatedGroup
          preset="blur-slide"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-[var(--card-shadow-hover)] hover:-translate-y-1"
              >
                {/* Top accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-destructive/40 via-accent/40 to-primary/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="p-6 pt-5">
                  {/* Icon + category */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/20 group-hover:scale-110">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  </div>

                  {/* Problem block */}
                  <div className="rounded-xl bg-destructive/[0.04] border border-destructive/10 p-4 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/15">
                        <X className="h-3 w-3 text-destructive" strokeWidth={2.5} />
                      </div>
                      <p className="text-[13px] leading-relaxed text-muted-foreground">
                        {item.problem}
                      </p>
                    </div>
                  </div>

                  {/* Arrow connector */}
                  <div className="flex justify-center py-1">
                    <ArrowDown className="h-4 w-4 text-accent/60" />
                  </div>

                  {/* Solution block */}
                  <div className="rounded-xl bg-accent/[0.04] border border-accent/10 p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                      </div>
                      <p className="text-[13px] font-medium leading-relaxed text-foreground">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default ProblemsSolutionsSection;
