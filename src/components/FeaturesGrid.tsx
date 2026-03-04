import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export default function FeaturesGrid() {
  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Built for Scaling teams</h2>
          <p className="text-muted-foreground">
            Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {/* Large featured card spanning 2 cols */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:col-span-2 sm:row-span-2">
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
                <img
                  src="/dashboard-mockup.png"
                  alt="Feature preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Feature Preview</h3>
                <p className="text-sm text-muted-foreground">
                  A visual overview of the platform capabilities and interface design.
                </p>
              </div>
            </div>
          </div>

          {/* Small feature cards */}
          <div className="space-y-2 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <h3 className="font-medium">Faaast</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              It supports an entire helping developers and innovate.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              <h3 className="font-medium">Powerful</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              It supports an entire helping developers and businesses.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <h3 className="font-medium">Security</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              It supports an helping developers businesses innovate.
            </p>
          </div>

          <div className="space-y-2 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <h3 className="font-medium">AI Powered</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              It supports an helping developers businesses innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
