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
  const { t } = useI18n();
  const ty = translations.thankYou;
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
    <div className="flex min-h-screen items-start justify-center bg-background px-4 py-6">
      <div className="w-full max-w-5xl space-y-4">
        {/* Header with logo */}
        <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4" style={{ boxShadow: "var(--card-shadow)" }}>
          <img src={logoCoogni} alt="Coogni" className="h-8" />
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-foreground">
              {userName ? `${t(ty.title).replace("!", `, ${userName}!`)}` : t(ty.title)}
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">{t(ty.subtitle)}</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2">
            <Gift className="h-4 w-4 text-accent shrink-0" />
            <div>
              <span className="text-sm font-semibold text-foreground">{t(ty.extraBanner)}</span>
              <p className="text-xs text-muted-foreground">{t(ty.extraBannerDesc)}</p>
            </div>
          </div>
        </div>

        {/* Mobile banner */}
        <div className="sm:hidden rounded-xl border border-accent/30 bg-accent/5 p-4">
          <div className="flex items-center gap-2 mb-1">
            <Gift className="h-4 w-4 text-accent" />
            <span className="font-semibold text-sm text-foreground">{t(ty.extraBanner)}</span>
          </div>
          <p className="text-xs text-muted-foreground">{t(ty.extraBannerDesc)}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5" style={{ boxShadow: "var(--card-shadow)" }}>
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

          {/* Free text — full width */}
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

        <p className="text-center text-xs text-muted-foreground">
          {t({ es: 'Tus respuestas nos ayudan a crear un mejor servicio para ti y tus pacientes.', en: 'Your answers help us build a better service for you and your patients.' })}
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
