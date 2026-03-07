import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoveRight, Gift } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";

const WaitlistSection = () => {
  const { t } = useI18n();
  const w = translations.waitlist;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success(t(w.successTitle), { description: t(w.successDesc) });
      const name = formData.name;
      setFormData({ name: "", email: "", specialty: "", clinic: "" });
      setIsSubmitting(false);
      navigate("/gracias-lista-espera", { state: { name } });
    }, 1000);
  };

  const inputClasses =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <section id="waitlist" className="w-full py-16 md:py-24 lg:py-32">
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-10 rounded-2xl bg-muted p-8 md:p-14 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
            <div>
              <Badge variant="outline" className="gap-2">
                <Gift className="h-3.5 w-3.5" />
                {t(w.discountBadge)}
              </Badge>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="max-w-xl text-4xl tracking-tight text-foreground lg:text-5xl">
                <span className="font-bold italic">{t(w.titleAccent)}</span>{' '}
                <span className="font-light">{t(w.titleRest)}</span>
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground">{t(w.desc)}</p>
            </div>
          </div>

          <div className="w-full max-w-md flex-shrink-0">
            <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6 md:p-8" style={{ boxShadow: "var(--card-shadow)" }}>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.nameLabel)}</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder={t(w.namePlaceholder)} className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.emailLabel)}</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={t(w.emailPlaceholder)} className={inputClasses} />
              </div>
              <div>
                <label htmlFor="specialty" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.specialtyLabel)}</label>
                <select id="specialty" name="specialty" required value={formData.specialty} onChange={handleChange} className={inputClasses}>
                  <option value="" disabled>{t(w.specialtyPlaceholder)}</option>
                  <option value="neurologo">{t(w.specialtyOptions.neurologo)}</option>
                  <option value="psicologo">{t(w.specialtyOptions.psicologo)}</option>
                  <option value="director">{t(w.specialtyOptions.director)}</option>
                  <option value="otro">{t(w.specialtyOptions.otro)}</option>
                </select>
              </div>
              <div>
                <label htmlFor="clinic" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.clinicLabel)}</label>
                <input id="clinic" name="clinic" type="text" required value={formData.clinic} onChange={handleChange} placeholder={t(w.clinicPlaceholder)} className={inputClasses} />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full gap-2 py-6 text-base" disabled={isSubmitting}>
                {isSubmitting ? t(w.submitting) : t(w.submit)}
                <MoveRight className="h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">{t(w.privacy)}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
