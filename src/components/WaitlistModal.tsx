import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MoveRight, BadgePercent, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";


interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

import logoCoogni from '@/assets/logo-coogni.png';

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const { t } = useI18n();
  const w = translations.waitlist;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || 'Error en el servidor')
      }

      toast.success(t(w.successTitle), { description: t(w.successDesc) });
      setFormData({ name: "", email: "" });
      onOpenChange(false);
      navigate("/gracias-lista-espera", { state: { name: formData.name } });
    } catch (err) {
      console.error('[Coogni] Subscribe error:', err);
      toast.error('Error. Inténtalo de nuevo.');
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-border/50">
        <div className="px-6 pt-8 pb-4">
          <DialogHeader className="items-center text-center">
            <img src={logoCoogni} alt="Coogni" className="h-8 mb-3" />
            <div className="mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <BadgePercent className="h-3.5 w-3.5" />
                {t(w.discountBadge)}
              </span>
            </div>
            <DialogTitle className="text-xl text-foreground">
              <span className="font-light">{t(w.titlePre)}</span>{' '}
              <span className="font-bold italic">{t(w.titleAccent)}</span>{' '}
              <span className="font-light">{t(w.titleMid)}</span>{' '}
              <span className="font-bold italic">{t(w.titleAccent2)}</span>
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              {t(w.desc)}
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-6">
          <div>
            <label htmlFor="modal-name" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.nameLabel)}</label>
            <input id="modal-name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder={t(w.namePlaceholder)} className={inputClasses} />
          </div>
          <div>
            <label htmlFor="modal-email" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.emailLabel)}</label>
            <input id="modal-email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={t(w.emailPlaceholder)} className={inputClasses} />
          </div>
          <Button type="submit" variant="cta" size="lg" className="w-full gap-2 py-6 text-base rounded-xl" disabled={isSubmitting}>
            {isSubmitting ? t(w.submitting) : t(w.submit)}
            <MoveRight className="h-4 w-4" />
          </Button>
          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            {t(w.privacy)}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;