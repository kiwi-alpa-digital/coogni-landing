import * as React from "react";
import { Brain, ArrowRight, Users, ShieldCheck, Activity, MapPin } from "lucide-react";
import DottedMap from "dotted-map";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";

// ---- Map Component ----
const map = new DottedMap({ height: 55, grid: "diagonal" });
const points = map.getPoints();

const MapVisualization = () => (
  <svg viewBox="0 0 120 55" className="w-full h-full" style={{ background: "transparent" }}>
    {points.map((point, i) => (
      <circle key={i} cx={point.x} cy={point.y} r={0.3} className="fill-primary/20" />
    ))}
    <circle cx={25} cy={20} r={1.5} className="fill-primary animate-pulse" />
    <circle cx={50} cy={25} r={1.2} className="fill-accent animate-pulse" />
    <circle cx={75} cy={30} r={1} className="fill-primary/70 animate-pulse" />
  </svg>
);

// ---- Chart Component ----
function CognitiveChart() {
  const { locale } = useI18n();
  const months = translations.months;
  const chartData = [
    { month: months.jan[locale], mmse: 28, moca: 26 },
    { month: months.feb[locale], mmse: 27, moca: 25 },
    { month: months.mar[locale], mmse: 26, moca: 24 },
    { month: months.apr[locale], mmse: 25, moca: 22 },
    { month: months.may[locale], mmse: 23, moca: 20 },
    { month: months.jun[locale], mmse: 22, moca: 18 },
  ];

  return (
    <ResponsiveContainer width="100%" height={180}>
      <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorMmse" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(210, 100%, 35%)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(210, 100%, 35%)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorMoca" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(174, 62%, 40%)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(174, 62%, 40%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(215, 12%, 50%)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: "hsl(215, 12%, 50%)" }} axisLine={false} tickLine={false} domain={[15, 30]} />
        <Tooltip
          contentStyle={{
            background: "hsl(0, 0%, 100%)",
            border: "1px solid hsl(210, 20%, 90%)",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
        <Area type="monotone" dataKey="mmse" stroke="hsl(210, 100%, 35%)" fill="url(#colorMmse)" strokeWidth={2} />
        <Area type="monotone" dataKey="moca" stroke="hsl(174, 62%, 40%)" fill="url(#colorMoca)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// ---- Alert Messages ----
function AlertsFeed() {
  const { t } = useI18n();
  const alertItems = translations.features.alerts.items;
  const colors = [
    "from-red-400 to-orange-500",
    "from-primary to-accent",
    "from-accent to-emerald-500",
    "from-amber-400 to-red-500",
    "from-sky-400 to-primary",
    "from-emerald-400 to-teal-600",
  ];

  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-card to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-card to-transparent pointer-events-none" />
      <div className="space-y-3 overflow-hidden px-1 py-2">
        {alertItems.map((msg, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted/50">
            <div className={`mt-0.5 h-8 w-8 shrink-0 rounded-full bg-gradient-to-br ${colors[i]} opacity-80`} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">{t(msg.title)}</span>
                <span className="shrink-0 text-[10px] text-muted-foreground">{t(msg.time)}</span>
              </div>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{t(msg.content)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Feature Card ----
function FeatureCard({
  icon, title, subtitle, description,
}: {
  icon: React.ReactNode; title: string; subtitle: string; description: string;
}) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">{icon}</div>
          <span className="text-sm font-bold text-foreground">{title}</span>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">{subtitle} </span>
          {description}
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </div>
  );
}

// ---- Main Section ----
export default function FeaturesSection() {
  const { t } = useI18n();
  const f = translations.features;

  return (
    <section id="features" className="overflow-hidden bg-background py-16 md:py-32">
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="mb-12 max-w-2xl text-4xl font-semibold text-foreground md:mb-16 lg:text-5xl">
          {t(f.title)}
        </h2>

        <div className="space-y-4">
          {/* Row 1 */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-300" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">{t(f.map.title)}</span>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                {t(f.map.desc)}{" "}
                <span className="text-foreground font-medium">{t(f.map.descBold)}</span>
              </p>
              <div className="relative flex-1 min-h-[160px]">
                <MapVisualization />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1.5 text-[10px] font-medium text-muted-foreground shadow-sm border border-border backdrop-blur-sm">
                  {t(f.map.badge)}
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-card p-6 transition-shadow duration-300" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="mb-3">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                  {t(f.analytics.badge)}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-tight text-foreground md:text-xl">
                  {t(f.analytics.title)}{" "}
                  <span className="text-muted-foreground font-normal text-base">{t(f.analytics.titleSuffix)}</span>
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t(f.analytics.desc)}</p>
              <div className="flex-1">
                <AlertsFeed />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-300" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="mb-2 flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">{t(f.chart.title)}</span>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              {t(f.chart.desc)}{" "}
              <span className="text-foreground font-medium">{t(f.chart.descBold)}</span>
            </p>
            <div className="flex-1 min-h-[180px]">
              <CognitiveChart />
            </div>
            <div className="mt-2 flex items-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> MMSE</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent" /> MoCA</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid gap-4 md:grid-cols-2">
            <FeatureCard
              icon={<Users className="h-5 w-5 text-primary" />}
              title={t(f.roles.title)}
              subtitle={t(f.roles.subtitle)}
              description={t(f.roles.desc)}
            />
            <FeatureCard
              icon={<ShieldCheck className="h-5 w-5 text-primary" />}
              title={t(f.messaging.title)}
              subtitle={t(f.messaging.subtitle)}
              description={t(f.messaging.desc)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
