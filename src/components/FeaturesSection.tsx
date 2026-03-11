import * as React from "react";
import { Brain, ArrowRight, Users, ShieldCheck, Activity, Dumbbell, FileText, LayoutDashboard, Building2, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

// ---- Exercise Categories Visual ----
function ExerciseCategoriesVisual() {
  const { t } = useI18n();
  const cats = translations.features.exercises.categories;
  const catList = [
    { key: cats.memory, icon: "🧠", progress: 85, color: "from-primary to-accent" },
    { key: cats.attention, icon: "🎯", progress: 72, color: "from-amber-400 to-orange-500" },
    { key: cats.language, icon: "💬", progress: 68, color: "from-sky-400 to-primary" },
    { key: cats.executive, icon: "⚡", progress: 55, color: "from-violet-400 to-purple-600" },
    { key: cats.orientation, icon: "🧭", progress: 90, color: "from-emerald-400 to-teal-600" },
    { key: cats.calculation, icon: "🔢", progress: 62, color: "from-rose-400 to-pink-600" },
  ];

  return (
    <div className="space-y-2.5">
      {catList.map((cat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.06 }}
          className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2 transition-colors hover:bg-muted"
        >
          <span className="text-base">{cat.icon}</span>
          <span className="text-xs font-medium text-foreground flex-1">{t(cat.key)}</span>
          <div className="h-1.5 w-20 rounded-full bg-border overflow-hidden">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${cat.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.06 }}
            />
          </div>
          <span className="text-[10px] text-muted-foreground font-medium w-8 text-right">{cat.progress}%</span>
        </motion.div>
      ))}
    </div>
  );
}

// ---- AI Features Visual ----
function AIFeaturesVisual() {
  const { t } = useI18n();
  const feats = translations.features.analytics.features;
  const items = [
    { label: t(feats.detection), icon: Activity, delay: 0 },
    { label: t(feats.prediction), icon: Brain, delay: 0.1 },
    { label: t(feats.clustering), icon: Users, delay: 0.2 },
    { label: t(feats.recommendations), icon: Sparkles, delay: 0.3 },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 mt-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: item.delay }}
            className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-primary/5"
          >
            <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="text-[11px] font-medium text-foreground">{item.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

// ---- Alert Messages ----
function AlertsFeed() {
  const { t } = useI18n();
  const alertItems = translations.features.alerts.items;
  const colors = [
    "from-red-400 to-orange-500",
    "from-primary to-accent",
    "from-sky-400 to-primary",
    "from-amber-400 to-red-500",
    "from-emerald-400 to-teal-600",
  ];

  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-card to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-card to-transparent pointer-events-none" />
      <div className="space-y-2.5 overflow-hidden px-1 py-2">
        {alertItems.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted/50"
          >
            <div className={`mt-0.5 h-7 w-7 shrink-0 rounded-full bg-gradient-to-br ${colors[i]} opacity-80`} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-foreground">{t(msg.title)}</span>
                <span className="shrink-0 text-[10px] text-muted-foreground">{t(msg.time)}</span>
              </div>
              <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">{t(msg.content)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ---- Bold text parser ----
function BoldText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="font-semibold text-foreground">{part}</strong> : part
      )}
    </>
  );
}

// ---- Feature Card ----
function FeatureCard({
  icon, title, bullets, index,
}: {
  icon: React.ReactNode; title: string; bullets: string[]; index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
    >
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">{icon}</div>
          <span className="text-sm font-bold text-foreground">{title}</span>
        </div>
        <ul className="space-y-2.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span><BoldText text={b} /></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex justify-end">
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </motion.div>
  );
}

// ---- Main Section ----
export default function FeaturesSection() {
  const { t } = useI18n();
  const f = translations.features;

  return (
    <section id="features" className="overflow-hidden bg-background py-16 md:py-32">
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {t({ es: 'Funcionalidades', en: 'Features' })}
          </p>
          <h2 className="text-4xl text-foreground lg:text-5xl">
            <span className="font-bold italic">{t(f.title)}</span>{' '}
            <span className="font-light">{t(f.titleRest)}</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {/* Row 1: Ejercicios GRATIS (destacado) + Analytics IA */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Ejercicios Cognitivos GRATIS — tarjeta estrella */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-primary/30 bg-card p-6 transition-shadow duration-300 hover:shadow-lg"
              style={{ boxShadow: "0 0 40px -10px hsl(var(--primary) / 0.15)" }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Dumbbell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {t(f.exercises.title)}{" "}
                    <span className="text-primary">{t(f.exercises.titleHighlight)}</span>
                    {" "}
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground align-middle">
                      {t(f.exercises.badge)}
                    </span>
                  </h3>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t(f.exercises.desc)}</p>

              <ExerciseCategoriesVisual />

              {/* Mini stats */}
              <div className="mt-4 flex items-center gap-4 border-t border-border pt-3">
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  <span className="font-medium">{t(f.exercises.routineLabel)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <Activity className="h-3.5 w-3.5 text-accent" />
                  <span className="font-medium">{t(f.exercises.statsLabel)}</span>
                </div>
              </div>
            </motion.div>

            {/* Analytics IA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-md"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {t(f.analytics.title)}{" "}
                  <span className="text-muted-foreground font-normal text-base">{t(f.analytics.titleSuffix)}</span>
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(f.analytics.desc)}</p>

              <AIFeaturesVisual />

              <div className="flex-1 mt-3">
                <AlertsFeed />
              </div>
            </motion.div>
          </div>

          {/* Row 2: Cuatro tarjetas */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<TrendingUp className="h-5 w-5 text-primary" />}
              title={t(f.evolutionChart.title)}
              bullets={f.evolutionChart.bullets.map(b => t(b))}
              index={0}
            />
            <FeatureCard
              icon={<FileText className="h-5 w-5 text-primary" />}
              title={t(f.patientRecord.title)}
              bullets={f.patientRecord.bullets.map(b => t(b))}
              index={1}
            />
            <FeatureCard
              icon={<LayoutDashboard className="h-5 w-5 text-primary" />}
              title={t(f.dashboard.title)}
              bullets={f.dashboard.bullets.map(b => t(b))}
              index={2}
            />
            <FeatureCard
              icon={<Building2 className="h-5 w-5 text-primary" />}
              title={t(f.organizations.title)}
              bullets={f.organizations.bullets.map(b => t(b))}
              index={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
