const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold text-foreground lg:text-5xl">
            Por qué evolucionar hacia el cuidado basado en datos.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Enfermedades como el Alzheimer o el Parkinson no esperan. Nuestra
            plataforma elimina la incertidumbre clínica centralizando la información
            clave. Ahorra tiempo de consulta, reduce el estrés de tu equipo médico y
            toma decisiones clínicas justificadas y respaldadas por inteligencia de
            datos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
