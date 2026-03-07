import { X, Check, FileWarning, Brain, Clock, ShieldAlert, Users, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";
import { useState } from "react";

const ProblemsSolutionsSection = () => {
  const { t } = useI18n();
  const ps = translations.problemsSolutions;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-xs font-medium text-destructive mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
            </span>
            {t(ps.badge)}
          </span>
          <h2 className="text-4xl tracking-tight text-foreground lg:text-5xl">
            <span className="font-bold italic">{t(ps.titleAccent)}</span>{' '}
            <span className="font-light">{t(ps.titleRest)}</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(ps.subtitle)}
          </p>
        </motion.div>

        {/* Split comparison */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
          {/* LEFT — Pain side */}
          <div className="relative bg-[hsl(var(--destructive)/0.03)] p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_20%,hsl(var(--destructive)/0.06),transparent)]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <X className="h-5 w-5 text-destructive" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {t({ es: 'Sin NeuroCDSS', en: 'Without NeuroCDSS' })}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {t({ es: 'Flujo de trabajo actual', en: 'Current workflow' })}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {items.map((item, i) => {
                  const Icon = item.icon;
                  const isHovered = hoveredIndex === i;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`group flex items-start gap-3 rounded-xl border p-4 transition-all duration-300 cursor-default ${
                        isHovered
                          ? "border-destructive/30 bg-destructive/[0.06] scale-[1.02]"
                          : "border-transparent bg-background/50 hover:bg-background/80"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                        isHovered ? "bg-destructive/15 text-destructive" : "bg-muted text-muted-foreground"
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold transition-colors duration-300 ${
                          isHovered ? "text-destructive" : "text-foreground"
                        }`}>{item.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">{item.problem}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — Gain side */}
          <div className="relative bg-[hsl(var(--accent)/0.03)] p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-border">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_80%,hsl(var(--accent)/0.06),transparent)]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {t({ es: 'Con NeuroCDSS', en: 'With NeuroCDSS' })}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {t({ es: 'Tu nuevo estándar', en: 'Your new standard' })}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {items.map((item, i) => {
                  const isHovered = hoveredIndex === i;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`group flex items-center gap-3 rounded-xl border p-4 transition-all duration-300 cursor-default ${
                        isHovered
                          ? "border-accent/30 bg-accent/[0.06] scale-[1.02]"
                          : "border-transparent bg-background/50 hover:bg-background/80"
                      }`}
                    >
                      {/* Animated arrow connector */}
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isHovered
                          ? "bg-accent/15 scale-110"
                          : "bg-muted"
                      }`}>
                        <ArrowRight className={`h-4 w-4 transition-colors duration-300 ${
                          isHovered ? "text-accent" : "text-muted-foreground"
                        }`} />
                      </div>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isHovered ? "text-foreground font-semibold" : "text-muted-foreground font-medium"
                      }`}>{item.solution}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolutionsSection;
