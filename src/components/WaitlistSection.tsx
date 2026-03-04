import { useState } from "react";
import { Button } from "@/components/ui/button";
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

    // Simulate submission
    setTimeout(() => {
      toast.success("¡Te has unido a la lista de espera!", {
        description: "Te avisaremos cuando estemos listos.",
      });
      setFormData({ name: "", email: "", specialty: "", clinic: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const inputClasses =
    "w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <section id="waitlist" className="bg-waitlist-bg py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Lidera el futuro del manejo neurodegenerativo.
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Estamos finalizando el desarrollo de nuestra beta privada. Únete a la
            lista de espera para asegurar tu plaza y ser de los primeros en
            transformar tu práctica clínica.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-border bg-card p-8 md:p-10"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Dr. María García"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email Profesional
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="maria.garcia@hospital.com"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="specialty" className="mb-1.5 block text-sm font-medium text-foreground">
              Especialidad / Rol
            </label>
            <select
              id="specialty"
              name="specialty"
              required
              value={formData.specialty}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="" disabled>
                Selecciona tu especialidad
              </option>
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
              id="clinic"
              name="clinic"
              type="text"
              required
              value={formData.clinic}
              onChange={handleChange}
              placeholder="Hospital Universitario..."
              className={inputClasses}
            />
          </div>

          <Button
            type="submit"
            variant="cta"
            size="lg"
            className="w-full py-6 text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Unirme a la lista de espera"}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Tus datos están protegidos. Cero spam, solo te avisaremos cuando
            estemos listos para ti.
          </p>
        </form>
      </div>
    </section>
  );
};

export default WaitlistSection;
