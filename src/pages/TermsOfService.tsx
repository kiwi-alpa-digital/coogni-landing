import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n/context'
import logoCoogni from '@/assets/logo-coogni.png'
import FooterSection from '@/components/FooterSection'

export default function TermsOfService() {
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
            {es ? 'Términos y Condiciones' : 'Terms of Service'}
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            {es ? 'Última actualización: abril de 2026' : 'Last updated: April 2026'}
          </p>

          <div className="space-y-10 text-sm text-foreground leading-relaxed">

            {/* 1 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '1. Objeto y aceptación' : '1. Purpose and Acceptance'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Los presentes Términos y Condiciones regulan el acceso y uso de la plataforma Coogni, una herramienta de neurociencia clínica con inteligencia artificial orientada a profesionales sanitarios. El acceso o uso de la plataforma implica la aceptación plena de estos términos.'
                  : 'These Terms of Service govern access to and use of the Coogni platform, a clinical neuroscience tool with artificial intelligence aimed at healthcare professionals. Accessing or using the platform implies full acceptance of these terms.'}
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '2. Descripción del servicio' : '2. Service Description'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Coogni es una plataforma SaaS que ofrece herramientas de detección temprana del deterioro cognitivo, gestión de fichas clínicas, ejercicios cognitivos para pacientes y funcionalidades de colaboración para equipos multidisciplinares. El servicio se encuentra actualmente en fase beta.'
                  : 'Coogni is a SaaS platform offering tools for early detection of cognitive decline, clinical record management, cognitive exercises for patients, and collaboration features for multidisciplinary teams. The service is currently in beta.'}
              </p>
            </div>

            {/* 3 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '3. Uso profesional exclusivo' : '3. Professional Use Only'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Coogni está diseñado exclusivamente para profesionales sanitarios habilitados (neurólogos, neuropsicólogos, terapeutas ocupacionales y personal clínico afín). El usuario declara tener la capacitación profesional necesaria para interpretar la información proporcionada por la plataforma. Coogni no es un dispositivo médico y no sustituye el criterio clínico profesional.'
                  : 'Coogni is designed exclusively for qualified healthcare professionals (neurologists, neuropsychologists, occupational therapists and related clinical staff). The user declares having the professional qualification required to interpret the information provided by the platform. Coogni is not a medical device and does not replace professional clinical judgement.'}
              </p>
            </div>

            {/* 4 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '4. Obligaciones del usuario' : '4. User Obligations'}
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-2">
                <li>
                  {es
                    ? 'Facilitar información veraz durante el registro'
                    : 'Provide accurate information during registration'}
                </li>
                <li>
                  {es
                    ? 'Mantener la confidencialidad de sus credenciales de acceso'
                    : 'Maintain the confidentiality of access credentials'}
                </li>
                <li>
                  {es
                    ? 'Tratar los datos de pacientes conforme a la normativa aplicable (RGPD, LOPD-GDD, normativa sanitaria)'
                    : 'Handle patient data in accordance with applicable regulations (GDPR, Spanish data protection and health law)'}
                </li>
                <li>
                  {es
                    ? 'No compartir el acceso con terceros no autorizados'
                    : 'Not share access with unauthorised third parties'}
                </li>
                <li>
                  {es
                    ? 'No utilizar la plataforma con fines distintos a los establecidos'
                    : 'Not use the platform for purposes other than those established'}
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '5. Propiedad intelectual' : '5. Intellectual Property'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Todos los derechos de propiedad intelectual sobre la plataforma, su diseño, código, algoritmos y contenidos pertenecen a Coogni. El usuario recibe una licencia de uso limitada, no exclusiva e intransferible para acceder al servicio según estos términos. Queda prohibida la reproducción, distribución o ingeniería inversa de cualquier elemento de la plataforma sin autorización expresa.'
                  : 'All intellectual property rights over the platform, its design, code, algorithms and content belong to Coogni. The user receives a limited, non-exclusive and non-transferable licence to access the service under these terms. Reproduction, distribution or reverse engineering of any element of the platform without express authorisation is prohibited.'}
              </p>
            </div>

            {/* 6 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '6. Fase beta y disponibilidad' : '6. Beta Phase and Availability'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Durante la fase beta, Coogni puede presentar interrupciones, cambios de funcionalidades o limitaciones de servicio sin previo aviso. Coogni se reserva el derecho de modificar, suspender o cancelar el acceso beta en cualquier momento. Se notificarán los cambios relevantes por correo electrónico.'
                  : 'During the beta phase, Coogni may experience interruptions, feature changes or service limitations without prior notice. Coogni reserves the right to modify, suspend or cancel beta access at any time. Relevant changes will be notified by email.'}
              </p>
            </div>

            {/* 7 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '7. Limitación de responsabilidad' : '7. Limitation of Liability'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Coogni no será responsable de daños derivados del uso incorrecto de la plataforma, de decisiones clínicas adoptadas en base a la información proporcionada, de interrupciones del servicio durante la fase beta, ni de pérdidas de datos causadas por causas ajenas a Coogni. La responsabilidad máxima de Coogni se limita al importe abonado por el usuario en los últimos 12 meses.'
                  : 'Coogni shall not be liable for damages arising from incorrect use of the platform, clinical decisions based on information provided, service interruptions during the beta phase, or data losses caused by circumstances beyond Coogni\'s control. Coogni\'s maximum liability is limited to the amount paid by the user in the last 12 months.'}
              </p>
            </div>

            {/* 8 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '8. Modificaciones' : '8. Modifications'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Coogni se reserva el derecho de actualizar estos términos en cualquier momento. Los cambios se notificarán con al menos 15 días de antelación por correo electrónico. El uso continuado de la plataforma tras la entrada en vigor de los nuevos términos implica su aceptación.'
                  : 'Coogni reserves the right to update these terms at any time. Changes will be notified at least 15 days in advance by email. Continued use of the platform after the new terms come into effect implies acceptance.'}
              </p>
            </div>

            {/* 9 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '9. Ley aplicable y jurisdicción' : '9. Governing Law and Jurisdiction'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de España, renunciando a cualquier otro fuero que pudiera corresponderles.'
                  : 'These terms are governed by Spanish law. For any dispute, the parties submit to the courts and tribunals of Spain, waiving any other jurisdiction that may apply.'}
              </p>
            </div>

            {/* 10 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '10. Contacto' : '10. Contact'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Para cualquier consulta relacionada con estos términos:'
                  : 'For any enquiry related to these terms:'}
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
