import { Brain, Lock, Activity, Sparkles } from 'lucide-react'

export default function FeaturesGrid() {
  return (
    <section className="overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-semibold lg:text-5xl">Diseñado para equipos clínicos multidisciplinares</h2>
          <p className="mt-6 text-lg text-muted-foreground">Adapta los flujos de trabajo a las necesidades de cada profesional, desde neurólogos hasta terapeutas ocupacionales, con una plataforma que escala con tu equipo.</p>
        </div>

        <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
          <div className="[perspective:800px]">
            <div className="[transform:skewY(-2deg)_skewX(-2deg)_rotateX(6deg)]">
              <div className="aspect-[88/36] relative">
                <div className="absolute -inset-[4.25rem] z-[1] [background-image:radial-gradient(at_75%_25%,transparent,hsl(var(--background))_75%)]"></div>
                <img src="https://tailark.com/_next/image?url=%2Fmail-upper.png&w=3840&q=75" className="absolute inset-0 z-10" alt="Neuro Predict Pro dashboard" width={2797} height={1137} />
                <img src="https://tailark.com/_next/image?url=%2Fmail-back-light.png&w=3840&q=75" className="absolute inset-0" alt="Neuro Predict Pro background" width={2797} height={1137} />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Activity className="size-4" />
              <h3 className="text-sm font-medium">Monitorización continua</h3>
            </div>
            <p className="text-sm text-muted-foreground">Seguimiento en tiempo real de escalas cognitivas y funcionales con alertas automáticas ante cambios significativos.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Brain className="size-4" />
              <h3 className="text-sm font-medium">IA Predictiva</h3>
            </div>
            <p className="text-sm text-muted-foreground">Modelos entrenados con datos clínicos reales que anticipan puntos de inflexión en la evolución del paciente.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Seguridad clínica</h3>
            </div>
            <p className="text-sm text-muted-foreground">Cumplimiento RGPD e HIPAA con encriptación E2E, roles granulares y auditoría completa de accesos.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Soporte a la decisión</h3>
            </div>
            <p className="text-sm text-muted-foreground">Recomendaciones clínicas basadas en evidencia y patrones detectados por inteligencia artificial.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
