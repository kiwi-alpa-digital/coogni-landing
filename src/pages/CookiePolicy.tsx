import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n/context'
import logoCoogni from '@/assets/logo-coogni.png'
import FooterSection from '@/components/FooterSection'

export default function CookiePolicy() {
  const { locale } = useI18n()
  const es = locale === 'es'

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
          <Link to="/">
            <img src={logoCoogni} alt="Coogni" className="h-7" />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {es ? '← Volver al inicio' : '← Back to home'}
          </Link>
        </div>
      </header>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 md:py-20"
      >
        <div className="mx-auto max-w-3xl px-6 md:px-12">

          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            {es ? 'Legal' : 'Legal'}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            {es ? 'Política de Cookies' : 'Cookie Policy'}
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            {es ? 'Última actualización: abril de 2026' : 'Last updated: April 2026'}
          </p>

          <div className="space-y-10 text-sm text-foreground leading-relaxed">

            {/* 1 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '1. ¿Qué son las cookies?' : '1. What are cookies?'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio recuerde sus preferencias y mejoren su experiencia de navegación. Algunas cookies son necesarias para el funcionamiento del sitio; otras son opcionales y requieren su consentimiento.'
                  : 'Cookies are small text files stored on your device when you visit a website. They allow the site to remember your preferences and improve your browsing experience. Some cookies are necessary for the site to function; others are optional and require your consent.'}
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '2. Cookies que utilizamos' : '2. Cookies We Use'}
              </h2>

              {/* Table */}
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        {es ? 'Nombre' : 'Name'}
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        {es ? 'Tipo' : 'Type'}
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        {es ? 'Finalidad' : 'Purpose'}
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        {es ? 'Duración' : 'Duration'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-foreground font-mono">coogni_session</td>
                      <td className="px-4 py-3 text-muted-foreground">{es ? 'Técnica' : 'Technical'}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {es ? 'Mantiene la sesión del usuario autenticado' : 'Maintains authenticated user session'}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{es ? 'Sesión' : 'Session'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-mono">coogni_locale</td>
                      <td className="px-4 py-3 text-muted-foreground">{es ? 'Preferencias' : 'Preferences'}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {es ? 'Recuerda el idioma seleccionado' : 'Remembers selected language'}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">1 {es ? 'año' : 'year'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-foreground font-mono">_ga, _gid</td>
                      <td className="px-4 py-3 text-muted-foreground">{es ? 'Analítica' : 'Analytics'}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {es
                          ? 'Google Analytics: análisis anónimo del tráfico web'
                          : 'Google Analytics: anonymous web traffic analysis'}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">2 {es ? 'años' : 'years'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '3. Cookies técnicas (necesarias)' : '3. Technical Cookies (Necessary)'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Las cookies técnicas son imprescindibles para el funcionamiento del sitio web y de la plataforma. No requieren su consentimiento y no pueden desactivarse sin afectar al funcionamiento del servicio. Se usan exclusivamente para:'
                  : 'Technical cookies are essential for the website and platform to function. They do not require your consent and cannot be disabled without affecting the service. They are used exclusively for:'}
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-2">
                <li>{es ? 'Mantener su sesión iniciada' : 'Maintaining your logged-in session'}</li>
                <li>{es ? 'Recordar preferencias de idioma' : 'Remembering language preferences'}</li>
                <li>{es ? 'Garantizar la seguridad de la sesión' : 'Ensuring session security'}</li>
              </ul>
            </div>

            {/* 4 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '4. Cookies analíticas (opcionales)' : '4. Analytics Cookies (Optional)'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Utilizamos Google Analytics para entender cómo los usuarios interactúan con el sitio web de forma agregada y anónima. Esta información nos ayuda a mejorar la plataforma. Puede rechazar estas cookies sin que ello afecte al funcionamiento del servicio.'
                  : 'We use Google Analytics to understand how users interact with the website in an aggregated and anonymous way. This information helps us improve the platform. You can reject these cookies without affecting the service.'}
              </p>
              <p className="text-muted-foreground">
                {es
                  ? 'Los datos recopilados por Google Analytics se procesan en servidores de Google. Puede consultar la política de privacidad de Google en policies.google.com.'
                  : 'Data collected by Google Analytics is processed on Google servers. You can consult Google\'s privacy policy at policies.google.com.'}
              </p>
            </div>

            {/* 5 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '5. Cookies de publicidad' : '5. Advertising Cookies'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Coogni no utiliza cookies de publicidad ni de seguimiento con fines comerciales de terceros.'
                  : 'Coogni does not use advertising or third-party tracking cookies for commercial purposes.'}
              </p>
            </div>

            {/* 6 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '6. Cómo gestionar las cookies' : '6. How to Manage Cookies'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Puede configurar su navegador para bloquear o eliminar cookies. Tenga en cuenta que desactivar las cookies técnicas puede afectar al funcionamiento de la plataforma. A continuación encontrará instrucciones para los principales navegadores:'
                  : 'You can configure your browser to block or delete cookies. Note that disabling technical cookies may affect platform functionality. Below you will find instructions for the main browsers:'}
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-2">
                <li>
                  <span className="text-foreground font-medium">Chrome: </span>
                  {es
                    ? 'Configuración → Privacidad y seguridad → Cookies'
                    : 'Settings → Privacy and security → Cookies'}
                </li>
                <li>
                  <span className="text-foreground font-medium">Firefox: </span>
                  {es
                    ? 'Opciones → Privacidad y seguridad → Cookies'
                    : 'Options → Privacy & Security → Cookies'}
                </li>
                <li>
                  <span className="text-foreground font-medium">Safari: </span>
                  {es
                    ? 'Preferencias → Privacidad → Cookies'
                    : 'Preferences → Privacy → Cookies'}
                </li>
                <li>
                  <span className="text-foreground font-medium">Edge: </span>
                  {es
                    ? 'Configuración → Privacidad → Cookies'
                    : 'Settings → Privacy → Cookies'}
                </li>
              </ul>
            </div>

            {/* 7 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '7. Actualizaciones de esta política' : '7. Updates to This Policy'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Podemos actualizar esta política cuando cambie el uso de cookies en la plataforma. La fecha de última actualización siempre aparecerá en la parte superior de esta página.'
                  : 'We may update this policy when cookie use on the platform changes. The last updated date will always appear at the top of this page.'}
              </p>
            </div>

            {/* 8 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '8. Contacto' : '8. Contact'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Para cualquier consulta sobre el uso de cookies:'
                  : 'For any enquiry about cookie use:'}
              </p>
              <p className="text-foreground font-medium">hello@coogni.com</p>
            </div>

          </div>
        </div>
      </motion.section>

      <FooterSection />
    </main>
  )
}
