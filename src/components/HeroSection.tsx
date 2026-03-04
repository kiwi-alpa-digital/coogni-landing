import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Deja de evaluar el deterioro a ciegas.{" "}
              <span className="text-primary">Anticípate con datos clínicos.</span>
            </h1>
            <h2 className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              El Sistema de Soporte a la Decisión Clínica (CDSS) definitivo para
              enfermedades neurodegenerativas. Pasa de la simple estimulación a la
              predicción y gestión integral del paciente.
            </h2>
            <Button
              variant="cta"
              size="lg"
              className="text-base px-8 py-6"
              onClick={() =>
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Solicitar Acceso Anticipado
            </Button>
          </div>
          <div className="relative">
            <div
              className="rounded-2xl border border-border bg-card p-2 shadow-lg"
              style={{ boxShadow: "var(--hero-shadow)" }}
            >
              <img
                src="/dashboard-mockup.png"
                alt="Dashboard de analítica médica para seguimiento de enfermedades neurodegenerativas"
                className="w-full rounded-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
