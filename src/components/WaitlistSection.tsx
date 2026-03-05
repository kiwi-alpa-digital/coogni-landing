import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import { toast } from "sonner";

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialty: "",
    clinic: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("¡Te has unido a la lista de espera!", {
        description: "Te avisaremos cuando estemos listos.",
      });
      setFormData({ name: "", email: "", specialty: "", clinic: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const inputClasses =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <section id="waitlist" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 rounded-2xl bg-muted p-8 md:p-14 lg:flex-row lg:gap-16">
          {/* Left: CTA text */}
          <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
            <div>
              <Badge variant="outline" className="gap-2">
                Beta Privada
              </Badge>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
                Lidera el futuro del manejo neurodegenerativo.
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground">
                Estamos finalizando el desarrollo de nuestra beta privada. Únete
                a la lista de espera para asegurar tu plaza y ser de los primeros
                en transformar tu práctica clínica.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-md flex-shrink-0">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-border bg-card p-6 md:p-8"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Nombre completo
                </label>
                <input
                  id="name" name="name" type="text" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Dr. María García"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email Profesional
                </label>
                <input
                  id="email" name="email" type="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="maria.garcia@hospital.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="specialty" className="mb-1.5 block text-sm font-medium text-foreground">
                  Especialidad / Rol
                </label>
                <select
                  id="specialty" name="specialty" required
                  value={formData.specialty} onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="" disabled>Selecciona tu especialidad</option>
                  <option value="neurologo">Neurólogo</option>
                  <option value="psicologo">Psicólogo / Terapeuta</option>
                  <option value="director">Director Médico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="clinic" className="mb-1.5 block text-sm font-medium text-foreground">
                  Nombre del Centro / Clínica
                </label>
                <input
                  id="clinic" name="clinic" type="text" required
                  value={formData.clinic} onChange={handleChange}
                  placeholder="Hospital Universitario..."
                  className={inputClasses}
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full gap-2 py-6 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Unirme a la lista de espera"}
                <MoveRight className="h-4 w-4" />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Tus datos están protegidos. Cero spam, solo te avisaremos cuando
                estemos listos para ti.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
