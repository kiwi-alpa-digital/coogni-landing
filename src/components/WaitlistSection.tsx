import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoveRight, Gift, Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";

const WaitlistSection = () => {
  const { t, locale } = useI18n();
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
      const { name, email } = formData;
      setFormData({ name: "", email: "" });
      setIsSubmitting(false);
      navigate("/gracias-lista-espera", { state: { name, email } });
    }, 1000);
  };

  const inputClasses =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <section id="waitlist" className="w-full py-16 md:py-24 lg:py-32">
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-10 rounded-2xl bg-muted p-8 md:p-14 lg:flex-row lg:gap-16"
        >
          <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Badge variant="outline" className="gap-2">
                <Gift className="h-3.5 w-3.5" />
                {t(w.discountBadge)}
              </Badge>
            </motion.div>
            <div className="flex flex-col gap-3">
              <h2 className="max-w-xl text-4xl tracking-tight text-foreground lg:text-5xl">
                <span className="font-light">{t(w.titlePre)}</span>{' '}
                <span className="font-bold italic">{t(w.titleAccent)}</span>{' '}
                <span className="font-light">{t(w.titleMid)}</span>{' '}
                <span className="font-bold italic">{t(w.titleAccent2)}</span>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{t(w.desc)}</p>
              <div className="flex flex-col gap-2">
                {[
                  { es: 'Fichas clínicas digitales', en: 'Digital clinical records' },
                  { es: 'Dashboard con IA predictiva', en: 'AI predictive dashboard' },
                  { es: 'Ejercicios cognitivos gratis para pacientes', en: 'Free cognitive exercises for patients' },
                  { es: 'IA que detecta deterioro 3× antes', en: 'AI detects decline 3× earlier' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item[locale as 'es'|'en']}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-xl flex-shrink-0"
          >
            <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6 md:p-8" style={{ boxShadow: "var(--card-shadow)" }}>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.nameLabel)}</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder={t(w.namePlaceholder)} className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.emailLabel)}</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={t(w.emailPlaceholder)} className={inputClasses} />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full gap-2 py-6 text-base" disabled={isSubmitting}>
                {isSubmitting ? t(w.submitting) : t(w.submit)}
                <MoveRight className="h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">{t(w.privacy)}</p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
