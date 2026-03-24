import { Link } from 'react-router-dom'
import logoCoogni from '@/assets/logo-coogni.png'
import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'

export default function NotFound() {
  const { locale } = useI18n()
  const es = locale === 'es'

  return (
    <main className="relative min-h-screen bg-background flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-background to-card" />
      <div className="fixed inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_30%,hsl(215,60%,50%/0.06),transparent)]" />

      {/* Logo */}
      <div className="mb-10">
        <img src={logoCoogni} alt="Coogni" className="h-8" />
      </div>

      {/* 404 */}
      <h1 className="text-8xl font-bold text-foreground/10 select-none leading-none mb-4">
        404
      </h1>

      <h2 className="mb-3 text-2xl font-bold text-foreground text-center">
        {es ? 'Página no encontrada' : 'Page not found'}
      </h2>
      <p className="mb-8 text-sm text-muted-foreground text-center max-w-xs">
        {es
          ? 'La página que buscas no existe o ha sido movida.'
          : 'The page you are looking for does not exist or has been moved.'}
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
      >
        {es ? 'Volver al inicio' : 'Back to home'}
      </Link>
    </main>
  )
}
