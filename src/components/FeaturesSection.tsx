import { Brain, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Analítica Predictiva y Soporte a la Decisión (El motor de tu clínica)",
    text: "No te conformes con saber cómo está el paciente hoy; predice qué ocurrirá mañana. Nuestro motor analiza trayectorias cognitivas y funcionales para detectar puntos de inflexión antes de que sean visibles. Evalúa objetivamente las Actividades de la Vida Diaria (AVD), recibe alertas tempranas y ajusta tratamientos farmacológicos basándote en datos cruzados, no en intuiciones.",
    featured: true,
  },
  {
    icon: Users,
    title: "Gestión de Usuarios y Roles Multidisciplinares",
    text: "Un entorno único, vistas personalizadas. Sistema de control de acceso estricto (RBAC) donde neurólogos, neuropsicólogos, terapeutas y gestores visualizan exactamente la información que necesitan para su rol. Coordinación perfecta sin ruido de datos.",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "Mensajería Asíncrona Segura",
    text: "Colaboración clínica blindada. Un canal interno encriptado de extremo a extremo (cumplimiento RGPD/HIPAA) exclusivo para que el equipo médico debata casos, comparta decisiones y coordine cuidados, eliminando el riesgo legal de usar WhatsApp o emails personales.",
    featured: false,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:mb-16 md:text-3xl lg:text-4xl">
          Herramientas diseñadas para la precisión clínica y la colaboración.
        </h2>

        <div className="space-y-6">
          {/* Featured card */}
          {features
            .filter((f) => f.featured)
            .map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-primary/20 bg-card p-8 transition-shadow duration-300 md:p-10"
                style={{ boxShadow: "var(--card-shadow)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "var(--card-shadow)")
                }
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <f.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
                      {f.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {f.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          {/* Two-column cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {features
              .filter((f) => !f.featured)
              .map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-border bg-card p-8 transition-shadow duration-300"
                  style={{ boxShadow: "var(--card-shadow)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "var(--card-shadow)")
                  }
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground md:text-xl">
                    {f.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
