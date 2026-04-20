import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n/context'
import logoCoogni from '@/assets/logo-coogni.png'
import FooterSection from '@/components/FooterSection'

export default function PrivacyPolicy() {
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
            {es ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            {es ? 'Última actualización: abril de 2026' : 'Last updated: April 2026'}
          </p>

          <div className="prose-legal space-y-10 text-sm text-foreground leading-relaxed">

            {/* 1 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '1. Responsable del tratamiento' : '1. Data Controller'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'El responsable del tratamiento de los datos personales recogidos a través de este sitio web y de la plataforma Coogni es Coogni, con dirección de contacto: hello@coogni.com.'
                  : 'The data controller for personal data collected through this website and the Coogni platform is Coogni, contact address: hello@coogni.com.'}
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '2. Datos que recopilamos' : '2. Data We Collect'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Recopilamos los siguientes datos personales:'
                  : 'We collect the following personal data:'}
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-2">
                <li>{es ? 'Nombre y apellidos' : 'Full name'}</li>
                <li>{es ? 'Dirección de correo electrónico' : 'Email address'}</li>
                <li>
                  {es
                    ? 'Información profesional (especialidad, tipo de centro, número de pacientes)'
                    : 'Professional information (specialty, facility type, number of patients)'}
                </li>
                <li>
                  {es
                    ? 'Datos de uso de la plataforma (navegación, funcionalidades utilizadas)'
                    : 'Platform usage data (navigation, features used)'}
                </li>
                <li>
                  {es
                    ? 'Dirección IP y datos técnicos del dispositivo'
                    : 'IP address and device technical data'}
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '3. Finalidad del tratamiento' : '3. Purpose of Processing'}
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-2">
                <li>
                  {es
                    ? 'Gestión del programa beta y lista de espera'
                    : 'Management of the beta programme and waiting list'}
                </li>
                <li>
                  {es
                    ? 'Prestación y mejora del servicio'
                    : 'Provision and improvement of the service'}
                </li>
                <li>
                  {es
                    ? 'Comunicaciones sobre novedades y actualizaciones de la plataforma'
                    : 'Communications about platform news and updates'}
                </li>
                <li>
                  {es
                    ? 'Cumplimiento de obligaciones legales'
                    : 'Compliance with legal obligations'}
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '4. Base jurídica' : '4. Legal Basis'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'El tratamiento de sus datos se basa en: (a) la ejecución de una relación contractual o precontractual cuando se registra en la plataforma; (b) su consentimiento expreso para el envío de comunicaciones comerciales; (c) el interés legítimo de Coogni para mejorar el servicio y garantizar su seguridad; y (d) el cumplimiento de obligaciones legales aplicables.'
                  : 'The processing of your data is based on: (a) the performance of a contractual or pre-contractual relationship when you register on the platform; (b) your explicit consent for commercial communications; (c) Coogni\'s legitimate interest in improving the service and ensuring its security; and (d) compliance with applicable legal obligations.'}
              </p>
            </div>

            {/* 5 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '5. Conservación de datos' : '5. Data Retention'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Los datos se conservarán durante el tiempo necesario para la prestación del servicio y, una vez finalizada la relación, durante los plazos legalmente establecidos (máximo 5 años para datos de facturación y actividad). Los datos de la lista de espera se eliminarán transcurridos 24 meses desde su registro si no se ha activado una cuenta.'
                  : 'Data will be retained for as long as necessary to provide the service and, once the relationship ends, for the legally established periods (maximum 5 years for billing and activity data). Waiting list data will be deleted 24 months after registration if no account has been activated.'}
              </p>
            </div>

            {/* 6 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '6. Sus derechos' : '6. Your Rights'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'En virtud del RGPD y la LOPD-GDD, usted tiene derecho a:'
                  : 'Under the GDPR and Spanish data protection law, you have the right to:'}
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground pl-2">
                <li>{es ? 'Acceder a sus datos personales' : 'Access your personal data'}</li>
                <li>{es ? 'Rectificar datos inexactos' : 'Rectify inaccurate data'}</li>
                <li>{es ? 'Solicitar la supresión de sus datos' : 'Request erasure of your data'}</li>
                <li>{es ? 'Oponerse al tratamiento' : 'Object to processing'}</li>
                <li>{es ? 'Solicitar la limitación del tratamiento' : 'Request restriction of processing'}</li>
                <li>{es ? 'Portabilidad de sus datos' : 'Data portability'}</li>
              </ul>
              <p className="text-muted-foreground">
                {es
                  ? 'Para ejercer sus derechos, contacte con nosotros en hello@coogni.com. También puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).'
                  : 'To exercise your rights, contact us at hello@coogni.com. You may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).'}
              </p>
            </div>

            {/* 7 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '7. Seguridad de los datos' : '7. Data Security'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Coogni aplica medidas técnicas y organizativas adecuadas para proteger sus datos personales frente a accesos no autorizados, pérdida o destrucción. Los datos clínicos se almacenan cifrados en servidores ubicados en la Unión Europea.'
                  : 'Coogni applies appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or destruction. Clinical data is stored encrypted on servers located in the European Union.'}
              </p>
            </div>

            {/* 8 */}
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">
                {es ? '8. Contacto' : '8. Contact'}
              </h2>
              <p className="text-muted-foreground">
                {es
                  ? 'Si tiene cualquier pregunta sobre esta política, puede contactar con nosotros en:'
                  : 'If you have any questions about this policy, you can contact us at:'}
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
