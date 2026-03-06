import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MoveRight, Gift } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const { t } = useI18n();
  const w = translations.waitlist;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "", email: "", specialty: "", clinic: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success(t(w.successTitle), { description: t(w.successDesc) });
      setFormData({ name: "", email: "", specialty: "", clinic: "" });
      setIsSubmitting(false);
      onOpenChange(false);
      navigate("/gracias-lista-espera", { state: { name: formData.name } });
    }, 1000);
  };

  const inputClasses =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 pt-6 pb-4">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent-foreground">
                <Gift className="h-3.5 w-3.5" />
                {t(w.discountBadge)}
              </span>
            </div>
            <DialogTitle className="text-xl font-semibold text-foreground">
              {t(w.title)}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t(w.desc)}
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-6 pt-2">
          <div>
            <label htmlFor="modal-name" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.nameLabel)}</label>
            <input id="modal-name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder={t(w.namePlaceholder)} className={inputClasses} />
          </div>
          <div>
            <label htmlFor="modal-email" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.emailLabel)}</label>
            <input id="modal-email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={t(w.emailPlaceholder)} className={inputClasses} />
          </div>
          <div>
            <label htmlFor="modal-specialty" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.specialtyLabel)}</label>
            <select id="modal-specialty" name="specialty" required value={formData.specialty} onChange={handleChange} className={inputClasses}>
              <option value="" disabled>{t(w.specialtyPlaceholder)}</option>
              <option value="neurologo">{t(w.specialtyOptions.neurologo)}</option>
              <option value="psicologo">{t(w.specialtyOptions.psicologo)}</option>
              <option value="director">{t(w.specialtyOptions.director)}</option>
              <option value="otro">{t(w.specialtyOptions.otro)}</option>
            </select>
          </div>
          <div>
            <label htmlFor="modal-clinic" className="mb-1.5 block text-sm font-medium text-foreground">{t(w.clinicLabel)}</label>
            <input id="modal-clinic" name="clinic" type="text" required value={formData.clinic} onChange={handleChange} placeholder={t(w.clinicPlaceholder)} className={inputClasses} />
          </div>
          <Button type="submit" variant="cta" size="lg" className="w-full gap-2 py-6 text-base" disabled={isSubmitting}>
            {isSubmitting ? t(w.submitting) : t(w.submit)}
            <MoveRight className="h-4 w-4" />
          </Button>
          <p className="text-center text-xs text-muted-foreground">{t(w.privacy)}</p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
