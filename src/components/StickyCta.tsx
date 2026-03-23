import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { useI18n } from '@/i18n/context'

export function StickyCta() {
  const { locale } = useI18n()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setVisible(scrollPercent > 0.5 && !dismissed)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  if (!visible) return null

  const es = locale === 'es'

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden">
      <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-foreground truncate">
            {es ? 'Beta privada · 20% dto. lanzamiento' : 'Private beta · 20% off launch'}
          </p>
          <p className="text-[10px] text-muted-foreground">
            {es ? '+200 profesionales ya se han unido' : '+200 professionals already joined'}
          </p>
        </div>
        <button
          className="shrink-0 rounded-full bg-gradient-to-r from-primary to-cyan-400 px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-lg"
          onClick={() => { setDismissed(true); window.dispatchEvent(new Event('openWaitlistModal')) }}
        >
          {es ? 'Unirme →' : 'Join →'}
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 p-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
