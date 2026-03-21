import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Gift,
  ArrowLeft,
  User,
  Building2,
  ShieldCheck,
  BrainCircuit,
  Lightbulb,
  Dumbbell,
  Users,
  FileBarChart,
  Sparkles,
  Download,
  TrendingUp,
  AlertTriangle,
  Clock,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";
import { cn } from "@/lib/utils";
import logoCoogni from '@/assets/logo-coogni.png';

const profileIcons: Record<string, React.ReactNode> = {
  independent: <User className="h-4 w-4" />,
  clinic: <Building2 className="h-4 w-4" />,
};

const interestIcons: Record<string, React.ReactNode> = {
  patientManagement: <ShieldCheck className="h-5 w-5 shrink-0" />,
  predictiveAnalytics: <BrainCircuit className="h-5 w-5 shrink-0" />,
  decisionSupport: <Lightbulb className="h-5 w-5 shrink-0" />,
  patientExercises: <Dumbbell className="h-5 w-5 shrink-0" />,
  teamCollaboration: <Users className="h-5 w-5 shrink-0" />,
  reporting: <FileBarChart className="h-5 w-5 shrink-0" />,
};

const ThankYou = () => {
  const { t, locale } = useI18n();
  const ty = translations.thankYou;
  const w = translations.waitlist;
  const navigate = useNavigate();
  const location = useLocation();
  const userName = (location.state as any)?.name || "";

  const [profileType, setProfileType] = useState<string>("");
  const [clinicName, setClinicName] = useState("");
  const [patients, setPatients] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [otherText, setOtherText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [guideDownloaded, setGuideDownloaded] = useState(false);

  const toggleInterest = (key: string) => {
    setInterests((prev) =>
      prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key]
    );
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      toast.success(t(ty.finalTitle));
    }, 1000);
  };

  const inputClasses =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

  const chipClasses = (active: boolean) =>
    `inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition-all duration-200 text-left ${
      active
        ? "border-primary bg-primary/10 text-foreground font-medium"
        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:bg-muted"
    }`;

  const interestOptions = Object.entries(translations.thankYou.interests) as [string, Record<'es' | 'en', string>][];
  const patientOptions = Object.entries(translations.thankYou.patientsOptions) as [string, Record<'es' | 'en', string>][];

  if (isDone) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-lg text-center space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-3xl font-semibold text-foreground">{t(ty.finalTitle)}</h1>
          <p className="text-muted-foreground">{t(ty.finalDesc)}</p>
          <Button variant="outline" className="gap-2" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4" />
            {t(ty.backHome)}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 py-8">
      {/* Header */}
      <div className="w-full max-w-5xl">
        <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4" style={{ boxShadow: "var(--card-shadow)" }}>
          <img src={logoCoogni} alt="Coogni" className="h-8" />
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-foreground">
              {userName
                ? `${t({ es: '¡Bienvenido/a', en: 'Welcome' }).replace('{name}', userName)}, ${userName}!`
                : t({ es: '¡Bienvenido/a a Coogni!', en: 'Welcome to Coogni!' })}
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              {t({ es: 'Revisa tu email — tienes algo esperándote.', en: 'Check your email — something is waiting for you.' })}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2">
            <Gift className="h-4 w-4 text-accent shrink-0" />
            <div>
              <span className="text-sm font-semibold text-foreground">{t(w.discountBadge)}</span>
              <p className="text-xs text-muted-foreground">{t({ es: 'Bloqueado en tu email', en: 'Locked in your email' })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Magnet Hero */}
      <div className="mt-6 w-full max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-card to-background" style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              {/* Left: book mockup */}
              <div className="flex-shrink-0 flex justify-center">
                <div className="relative w-40 h-56 rounded-lg shadow-2xl bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/20 flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-primary mb-1">Coogni · Guía clínica</div>
                  <div className="text-lg font-black text-foreground leading-tight mb-1">7 Señales</div>
                  <div className="text-xs font-semibold text-muted-foreground mb-3">de deterioro cognitivo</div>
                  <div className="w-8 h-0.5 bg-primary/40 rounded-full mb-3" />
                  <div className="text-[9px] text-muted-foreground">Lo que los tests clínicos no detectan</div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-[9px] font-bold px-2 py-0.5 rounded-full rotate-3">GRATIS</div>
                </div>
              </div>

              {/* Right: offer */}
              <div className="flex-1 space-y-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-500">
                    <Gift className="h-3 w-3" />
                    {locale === 'es' ? 'OFERTA EXCLUSIVA — Guía valorada en €47' : 'EXCLUSIVE OFFER — Guide valued at €47'}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  {locale === 'es'
                    ? 'Descarga gratis: "7 Señales de Deterioro Cognitivo que los Tests Clínicos No Detectan"'
                    : 'Free download: "7 Signs of Cognitive Decline That Clinical Tests Don\'t Detect"'}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {locale === 'es'
                    ? 'La guía que todo neurólogo, neuropsicólogo y terapeuta debería tener. 12 páginas con señales clínicas concretas que permiten anticipar el deterioro antes de que sea visible en las pruebas tradicionales.'
                    : 'The guide every neurologist, neuropsychologist, and therapist should have. 12 pages with specific clinical indicators that allow you to anticipate decline before it becomes visible in traditional tests.' }
                </p>
                <ul className="space-y-1.5">
                  {(locale === 'es'
                    ? [
                        '✓ Las 7 señales que la literatura científica reconoce como predictores',
                        '✓ Por qué el MMSE puede ser normal mientras el deterioro avanza',
                        '✓ Cuándo derivar a evaluación neuropsicológica formal',
                        '✓ Qué hacer cuando detectas una señal de alerta',
                      ]
                    : [
                        '✓ The 7 signs that scientific literature recognizes as predictors',
                        '✓ Why MMSE can be normal while decline advances',
                        '✓ When to refer for formal neuropsychological evaluation',
                        '✓ What to do when you detect a warning sign',
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={() => {
                      setGuideDownloaded(true)
                      toast.success(locale === 'es' ? '¡Descarga iniciada!' : 'Download started!')
                    }}
                    className="gap-2 bg-gradient-to-r from-primary to-cyan-400 font-bold hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Download className="h-4 w-4" />
                    {locale === 'es' ? 'Descargar guía gratis →' : 'Download free guide →'}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    {locale === 'es' ? 'PDF · 12 páginas · Envío instantáneo por email' : 'PDF · 12 pages · Instant delivery by email'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision / Dream section */}
      <div className="mt-4 w-full max-w-5xl">
        <div className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            {locale === 'es' ? '🎯 Imagina esto dentro de 6 meses' : '🎯 Imagine this in 6 months'}
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {(locale === 'es'
              ? [
                  { icon: TrendingUp, title: 'Cada mañana', desc: 'Ves la trayectoria cognitiva de tus 40 pacientes más frágiles en tu dashboard antes de la primera consulta.' },
                  { icon: AlertTriangle, title: 'Alerta automática', desc: 'Recibes: "Paciente #2847 — patrón de deterioro acelerado. Recomendación: aumentar estimulación a 5 sesiones/semana."' },
                  { icon: Clock, title: '18 meses antes', desc: 'Detectas deterioro cognitivo en un paciente que con seguimiento tradicional no se habría identificado hasta 18 meses después.' },
                ]
              : [
                  { icon: TrendingUp, title: 'Every morning', desc: "You see the cognitive trajectory of your 40 most fragile patients on your dashboard before the first consultation." },
                  { icon: AlertTriangle, title: 'Automatic alert', desc: 'You receive: "Patient #2847 — accelerated decline pattern detected. Recommendation: increase stimulation to 5 sessions/week."' },
                  { icon: Clock, title: '18 months earlier', desc: "You detect cognitive decline in a patient that with traditional follow-up wouldn't have been identified for another 18 months." },
                ]
            ).map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Social proof strip */}
      <div className="mt-4 w-full max-w-5xl">
        <div className="flex flex-wrap items-center justify-center gap-6 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground" style={{ boxShadow: "var(--card-shadow)" }}>
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <span className="text-amber-400">★★★★★</span>
            <span>4.9/5 {locale === 'es' ? 'satisfacción clínica' : 'clinical satisfaction'}</span>
          </span>
          <span>·</span>
          <span>+200 {locale === 'es' ? 'profesionales en lista de espera' : 'professionals on waitlist'}</span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            RGPD {locale === 'es' ? 'Compatible' : 'Compliant'}
          </span>
        </div>
      </div>

      {/* Survey form — beta extra discount */}
      <div className="mt-6 w-full max-w-5xl">
        <div className="rounded-2xl border border-border bg-card p-5" style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
              <Zap className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">
                {t(ty.extraBanner)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(ty.extraBannerDesc)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left column */}
            <div className="space-y-5">
              {/* Profile type */}
              <div className="space-y-2.5">
                <label className="block text-sm font-medium text-foreground">
                  {t(ty.profileTypeLabel)} <span className="text-destructive">*</span>
                </label>
                <div className="flex flex-col gap-2">
                  {Object.entries(translations.thankYou.profileOptions).map(([key, val]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setProfileType(key)}
                      className={chipClasses(profileType === key)}
                    >
                      {profileIcons[key]}
                      {t(val)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clinic name (conditional) */}
              {profileType === "clinic" && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">{t(ty.clinicNameLabel)}</label>
                  <input
                    type="text"
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    placeholder={t(ty.clinicNamePlaceholder)}
                    className={inputClasses}
                  />
                </div>
              )}

              {/* Number of patients */}
              <div className="space-y-2.5">
                <label className="block text-sm font-medium text-foreground">
                  {t(ty.patientsLabel)} <span className="text-destructive">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {patientOptions.map(([key, val]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setPatients(key)}
                      className={chipClasses(patients === key)}
                    >
                      {t(val)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5">
              {/* Interests (multi-select) */}
              <div className="space-y-2.5">
                <div>
                  <label className="block text-sm font-medium text-foreground">
                    {t(ty.interestsLabel)}
                  </label>
                  <span className="text-xs text-muted-foreground">
                    {t({ es: 'Selección múltiple', en: 'Multiple selection' })}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {interestOptions.map(([key, val]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleInterest(key)}
                      className={chipClasses(interests.includes(key))}
                    >
                      {interestIcons[key]}
                      {t(val)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Free text */}
          <div className="mt-4 space-y-1.5 rounded-xl border border-border bg-muted/30 p-4">
            <label className="block text-sm font-medium text-foreground">{t(ty.otherLabel)}</label>
            <textarea
              value={otherText}
              onChange={(e) => {
                if (e.target.value.length <= 500) setOtherText(e.target.value);
              }}
              placeholder={t(ty.otherPlaceholder)}
              rows={2}
              className={inputClasses + " resize-none"}
            />
            <p className="text-right text-xs text-muted-foreground">{otherText.length}{t(ty.charCount)}</p>
          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              onClick={handleSubmit}
              variant="cta"
              size="lg"
              className="gap-2"
              disabled={isSubmitting || (!profileType && !patients)}
            >
              <Sparkles className="h-4 w-4" />
              {isSubmitting ? t(ty.submittingExtra) : t(ty.submitExtra)}
            </Button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(ty.skipExtra)}
            </button>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-6 w-full max-w-5xl pb-8">
        <p className="text-center text-xs text-muted-foreground">
          {t({ es: 'Tus respuestas nos ayudan a crear un mejor servicio para ti y tus pacientes.', en: 'Your answers help us build a better service for you and your patients.' })}
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
