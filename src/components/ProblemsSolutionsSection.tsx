import { X, Check, FileWarning, Brain, Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";
import { useState } from "react";

const ProblemsSolutionsSection = () => {
  const { t } = useI18n();
  const ps = translations.problemsSolutions;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { icon: FileWarning, problem: t(ps.items.fragmented.problem), solution: t(ps.items.fragmented.solution) },
    { icon: Clock, problem: t(ps.items.reactive.problem), solution: t(ps.items.reactive.solution) },
    { icon: Users, problem: t(ps.items.silos.problem), solution: t(ps.items.silos.solution) },
    { icon: Brain, problem: t(ps.items.subjective.problem), solution: t(ps.items.subjective.solution) },
  ];

  return (
    <section id="problem" className="relative w-full py-14 md:py-20 overflow-hidden">
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-destructive">
            {t(ps.badge)}
          </p>
          <h2 className="text-3xl tracking-tight text-foreground lg:text-4xl">
            <span className="font-bold italic">{t(ps.titleAccent)}</span>{' '}
            <span className="font-light">{t(ps.titleRest)}</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
          {/* LEFT — Pain side */}
          <div className="relative bg-[hsl(var(--destructive)/0.03)] p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_20%,hsl(var(--destructive)/0.06),transparent)]" />
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="h-8 w-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <X className="h-4 w-4 text-destructive" strokeWidth={2.5} />
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  {t({ es: 'Sin Coogni', en: 'Without Coogni' })}
                </h3>
              </div>

              <div className="space-y-2">
                {items.map((item, i) => {
                  const Icon = item.icon;
                  const isHovered = hoveredIndex === i;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-all duration-300 cursor-default ${
                        isHovered
                          ? "border-destructive/30 bg-destructive/[0.06]"
                          : "border-transparent bg-background/50"
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 transition-colors duration-300 ${
                        isHovered ? "text-destructive" : "text-muted-foreground"
                      }`} />
                      <p className={`text-sm transition-colors duration-300 ${
                        isHovered ? "text-destructive font-medium" : "text-muted-foreground"
                      }`}>{item.problem}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — Gain side */}
          <div className="relative bg-[hsl(var(--accent)/0.03)] p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-border">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_80%,hsl(var(--accent)/0.06),transparent)]" />
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Check className="h-4 w-4 text-accent" strokeWidth={2.5} />
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  {t({ es: 'Con Coogni', en: 'With Coogni' })}
                </h3>
              </div>

              <div className="space-y-2">
                {items.map((item, i) => {
                  const isHovered = hoveredIndex === i;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 transition-all duration-300 cursor-default ${
                        isHovered
                          ? "border-accent/30 bg-accent/[0.06]"
                          : "border-transparent bg-background/50"
                      }`}
                    >
                      <ArrowRight className={`h-4 w-4 shrink-0 transition-colors duration-300 ${
                        isHovered ? "text-accent" : "text-muted-foreground"
                      }`} />
                      <p className={`text-sm transition-colors duration-300 ${
                        isHovered ? "text-foreground font-medium" : "text-muted-foreground"
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
