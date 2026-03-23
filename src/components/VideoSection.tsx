import { useState } from 'react'
import { X, Play } from 'lucide-react'
import { useI18n } from '@/i18n/context'

const VideoSection = () => {
  const { locale } = useI18n()
  const [videoOpen, setVideoOpen] = useState(false)
  const es = locale === 'es'

  return (
    <section className="w-full py-8 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            {es ? 'Cómo funciona' : 'How it works'}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {es ? (
              <>Ve <span className="italic text-primary">en 2 minutos</span> cómo Coogni detecta deterioro 3× antes</>
            ) : (
              <>See <span className="italic text-primary">in 2 minutes</span> how Coogni detects decline 3× earlier</>
            )}
          </h2>
        </div>

        {/* Video container */}
        <div
          className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/60 shadow-2xl cursor-pointer group"
          onClick={() => setVideoOpen(true)}
        >
          {/* Thumbnail / poster area */}
          <div className="relative aspect-video w-full bg-gradient-to-br from-primary/10 via-muted/30 to-cyan-400/5">
            {/* Fake dashboard preview */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-3xl px-8 space-y-4 opacity-80">
                {/* Fake UI mockup */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="flex-1 h-3 bg-muted rounded-full ml-2" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-card rounded-lg p-3 border border-border">
                    <div className="text-[9px] text-muted-foreground mb-1">PACIENTES</div>
                    <div className="text-lg font-bold text-foreground">42</div>
                    <div className="h-1 bg-green-500/30 rounded mt-1" style={{width:'70%'}} />
                  </div>
                  <div className="bg-card rounded-lg p-3 border border-border">
                    <div className="text-[9px] text-muted-foreground mb-1">ALERTAS</div>
                    <div className="text-lg font-bold text-amber-400">3</div>
                    <div className="h-1 bg-amber-500/30 rounded mt-1" style={{width:'40%'}} />
                  </div>
                  <div className="bg-card rounded-lg p-3 border border-border">
                    <div className="text-[9px] text-muted-foreground mb-1">SESIENCIALES</div>
                    <div className="text-lg font-bold text-primary">18</div>
                    <div className="h-1 bg-primary/30 rounded mt-1" style={{width:'85%'}} />
                  </div>
                </div>
                {/* Fake chart line */}
                <div className="bg-card rounded-lg p-3 border border-border">
                  <div className="flex items-end gap-1 h-16">
                    {[60,45,70,55,40,80,65,30,75,50,85,60,90,70,45,80,60,95,75,55].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t" style={{height: `${h}%`}} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                <Play className="h-6 w-6 ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 text-xs text-white font-medium">
              2:34
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          {es
            ? 'Demo de la plataforma Coogni — Dashboard clínico con IA predictiva en acción'
            : 'Coogni platform demo — Clinical dashboard with predictive AI in action'}
        </p>
      </div>

      {/* Fullscreen modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-5xl px-4" onClick={e => e.stopPropagation()}>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <video
                className="h-full w-full object-contain"
                autoPlay
                controls
                playsInline
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoSection
