import { ArrowRight, X, Check, FileWarning, Brain, Clock, ShieldAlert, Users, BarChart3 } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";

const ProblemsSolutionsSection = () => {
  const { t } = useI18n();
  const ps = translations.problemsSolutions;

  const items = [
    {
      icon: FileWarning,
      problem: t(ps.items.fragmented.problem),
      solution: t(ps.items.fragmented.solution),
    },
    {
      icon: Clock,
      problem: t(ps.items.reactive.problem),
      solution: t(ps.items.reactive.solution),
    },
    {
      icon: ShieldAlert,
      problem: t(ps.items.insecure.problem),
      solution: t(ps.items.insecure.solution),
    },
    {
      icon: Users,
      problem: t(ps.items.silos.problem),
      solution: t(ps.items.silos.solution),
    },
    {
      icon: Brain,
      problem: t(ps.items.subjective.problem),
      solution: t(ps.items.subjective.solution),
    },
    {
      icon: BarChart3,
      problem: t(ps.items.noData.problem),
      solution: t(ps.items.noData.solution),
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <AnimatedGroup preset="blur-slide">
            <span className="inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
              {t(ps.badge)}
            </span>
          </AnimatedGroup>
          <AnimatedGroup preset="blur-slide">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t(ps.title)}
            </h2>
          </AnimatedGroup>
          <AnimatedGroup preset="blur-slide">
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(ps.subtitle)}
            </p>
          </AnimatedGroup>
        </div>

        {/* Grid of problem→solution cards */}
        <AnimatedGroup
          preset="blur-slide"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-[var(--card-shadow-hover)]"
              >
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                      <X className="h-3 w-3 text-destructive" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.problem}
                    </p>
                  </div>
                </div>

                {/* Divider with arrow */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <ArrowRight className="h-3.5 w-3.5 text-accent" />
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Solution */}
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {item.solution}
                  </p>
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
