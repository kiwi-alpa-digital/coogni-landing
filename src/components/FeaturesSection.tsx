import * as React from "react";
import { Brain, ArrowRight, Users, ShieldCheck, Activity, MapPin } from "lucide-react";
import DottedMap from "dotted-map";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

// ---- Map Component ----
const map = new DottedMap({ height: 55, grid: "diagonal" });
const points = map.getPoints();

const MapVisualization = () => (
  <svg viewBox="0 0 120 55" className="w-full h-full" style={{ background: "transparent" }}>
    {points.map((point, i) => (
      <circle
        key={i}
        cx={point.x}
        cy={point.y}
        r={0.3}
        className="fill-primary/20"
      />
    ))}
    {/* Highlighted regions */}
    <circle cx={25} cy={20} r={1.5} className="fill-primary animate-pulse" />
    <circle cx={50} cy={25} r={1.2} className="fill-accent animate-pulse" />
    <circle cx={75} cy={30} r={1} className="fill-primary/70 animate-pulse" />
  </svg>
);

// ---- Chart Data ----
const chartData = [
  { month: "Ene", mmse: 28, moca: 26 },
  { month: "Feb", mmse: 27, moca: 25 },
  { month: "Mar", mmse: 26, moca: 24 },
  { month: "Abr", mmse: 25, moca: 22 },
  { month: "May", mmse: 23, moca: 20 },
  { month: "Jun", mmse: 22, moca: 18 },
];

const CognitiveChart = () => (
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

// ---- Alert Messages ----
interface AlertMessage {
  title: string;
  time: string;
  content: string;
  color: string;
}

const alerts: AlertMessage[] = [
  {
    title: "Alerta Cognitiva",
    time: "hace 1m",
    content: "Detectada caída significativa en MMSE del paciente #2847.",
    color: "from-red-400 to-orange-500",
  },
  {
    title: "Revisión de Tratamiento",
    time: "hace 3m",
    content: "Ajuste farmacológico recomendado para 3 pacientes.",
    color: "from-primary to-accent",
  },
  {
    title: "Evaluación AVD",
    time: "hace 6m",
    content: "Nueva evaluación completada por Dra. García.",
    color: "from-accent to-emerald-500",
  },
  {
    title: "Punto de Inflexión",
    time: "hace 10m",
    content: "Modelo predictivo señala deterioro acelerado en paciente #1523.",
    color: "from-amber-400 to-red-500",
  },
  {
    title: "Coordinación Equipo",
    time: "hace 12m",
    content: "Nuevo mensaje del equipo multidisciplinar en caso #3291.",
    color: "from-sky-400 to-primary",
  },
  {
    title: "Informe Generado",
    time: "hace 15m",
    content: "Informe mensual de evolución disponible para revisión.",
    color: "from-emerald-400 to-teal-600",
  },
];

const AlertsFeed = () => (
  <div className="relative h-full overflow-hidden">
    <div className="absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-card to-transparent pointer-events-none" />
    <div className="absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-card to-transparent pointer-events-none" />
    <div className="space-y-3 overflow-hidden px-1 py-2">
      {alerts.map((msg, i) => (
        <div key={i} className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted/50">
          <div className={`mt-0.5 h-8 w-8 shrink-0 rounded-full bg-gradient-to-br ${msg.color} opacity-80`} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-foreground">{msg.title}</span>
              <span className="shrink-0 text-[10px] text-muted-foreground">{msg.time}</span>
            </div>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{msg.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ---- Feature Card ----
function FeatureCard({
  icon,
  title,
  subtitle,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            {icon}
          </div>
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
  return (
    <section id="features" className="overflow-hidden bg-background py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 max-w-2xl text-4xl font-semibold text-foreground md:mb-16 lg:text-5xl">
          Herramientas diseñadas para la precisión clínica y la colaboración.
        </h2>

        <div className="space-y-4">
          {/* Fila 1: Distribución de Pacientes + Core Analítica Predictiva */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-300" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Distribución de Pacientes</span>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                Visualiza la distribución geográfica de pacientes.{" "}
                <span className="text-foreground font-medium">Monitoriza tendencias regionales en tiempo real.</span>
              </p>
              <div className="relative flex-1 min-h-[160px]">
                <MapVisualization />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1.5 text-[10px] font-medium text-muted-foreground shadow-sm border border-border backdrop-blur-sm">
                  🌍 342 pacientes activos en seguimiento
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-card p-6 transition-shadow duration-300" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="mb-3">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                  Core — Analítica Predictiva
                </span>
                <h3 className="mt-3 text-lg font-bold leading-tight text-foreground md:text-xl">
                  Analítica Predictiva y Soporte a la Decisión{" "}
                  <span className="text-muted-foreground font-normal text-base">
                    — El motor de tu clínica
                  </span>
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                No te conformes con saber cómo está el paciente hoy; predice qué ocurrirá mañana. Nuestro motor analiza trayectorias cognitivas y funcionales para detectar puntos de inflexión antes de que sean visibles.
              </p>
              <div className="flex-1">
                <AlertsFeed />
              </div>
            </div>
          </div>

          {/* Fila 2: Trayectoria Cognitiva (ancho completo) */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-300" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="mb-2 flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Trayectoria Cognitiva</span>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              Seguimiento en tiempo real de escalas MMSE y MoCA.{" "}
              <span className="text-foreground font-medium">Detecta puntos de inflexión antes de que sean visibles.</span>
            </p>
            <div className="flex-1 min-h-[180px]">
              <CognitiveChart />
            </div>
            <div className="mt-2 flex items-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" /> MMSE
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent" /> MoCA
              </span>
            </div>
          </div>

          {/* Fila 3: Roles Multidisciplinares + Mensajería Segura */}
          <div className="grid gap-4 md:grid-cols-2">
            <FeatureCard
              icon={<Users className="h-5 w-5 text-primary" />}
              title="Roles Multidisciplinares"
              subtitle="Gestión RBAC."
              description="Neurólogos, neuropsicólogos, terapeutas y gestores visualizan exactamente la información que necesitan para su rol. Coordinación perfecta sin ruido de datos."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-5 w-5 text-primary" />}
              title="Mensajería Segura"
              subtitle="Encriptación E2E."
              description="Canal interno con cumplimiento RGPD/HIPAA para debatir casos y coordinar cuidados. Elimina el riesgo de usar WhatsApp o emails personales."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
