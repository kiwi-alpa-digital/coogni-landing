const BenefitsSection = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          Por qué evolucionar hacia el cuidado basado en datos.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          Enfermedades como el Alzheimer o el Parkinson no esperan. Nuestra
          plataforma elimina la incertidumbre clínica centralizando la información
          clave. Ahorra tiempo de consulta, reduce el estrés de tu equipo médico y
          toma decisiones clínicas justificadas y respaldadas por inteligencia de
          datos.
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
