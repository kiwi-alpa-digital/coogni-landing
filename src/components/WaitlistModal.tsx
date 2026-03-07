import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MoveRight, BadgePercent, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/i18n/context";
import { translations } from "@/i18n/translations";
import { cn } from "@/lib/utils";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Logo = ({ className }: { className?: string }) => (
  <svg className={cn("text-primary", className)} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 120 120" fill="none">
    <rect width="120" height="120" rx="24" fill="currentColor" />
    <g clipPath="url(#clip-modal)">
      <path d="M33.75 78.75L60 52.5L86.25 78.75" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33.75 52.5L60 26.25L86.25 52.5" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </g>
    <defs>
      <clipPath id="clip-modal">
        <rect width="67.5" height="67.5" fill="white" transform="translate(26.25 18.75)" />
      </clipPath>
    </defs>
  </svg>
);

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
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
      setFormData({ name: "", email: "" });
      setIsSubmitting(false);
      onOpenChange(false);
      navigate("/gracias-lista-espera", { state: { name: formData.name } });
    }, 1000);
  };

  const inputClasses =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-border/50">
        <div className="px-6 pt-8 pb-4">
          <DialogHeader className="items-center text-center">
            <Logo className="mb-3" />
            <div className="mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <BadgePercent className="h-3.5 w-3.5" />
                {t(w.discountBadge)}
              </span>
            </div>
            <DialogTitle className="text-xl text-foreground">
              <span className="font-bold italic">{t(w.titleAccent)}</span>{' '}
              <span className="font-light">{t(w.titleRest)}</span>
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