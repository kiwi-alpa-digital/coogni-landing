export type Locale = 'es' | 'en'

export const translations = {
  // ---- Navbar ----
  nav: {
    features: { es: 'Funcionalidades', en: 'Features' },
    platform: { es: 'Plataforma', en: 'Platform' },
    beta: { es: 'Beta Privada', en: 'Private Beta' },
    about: { es: 'Nosotros', en: 'About' },
    joinNow: { es: 'Únete ahora', en: 'Join now' },
  },

  // ---- Hero ----
  hero: {
    badge: { es: 'Beta privada — Plazas limitadas', en: 'Private beta — Limited spots' },
    badgeCta: { es: 'Solicitar acceso', en: 'Request access' },
    title: {
      es: 'Predice el deterioro cognitivo antes de que sea visible',
      en: 'Predict cognitive decline before it becomes visible',
    },
    subtitle: {
      es: 'Plataforma clínica con IA predictiva para el manejo de enfermedades neurodegenerativas. Centraliza datos, anticipa trayectorias y facilita decisiones basadas en evidencia.',
      en: 'Clinical platform with predictive AI for managing neurodegenerative diseases. Centralize data, anticipate trajectories, and enable evidence-based decisions.',
    },
    cta: { es: 'Unirme a la lista', en: 'Join the waitlist' },
    demo: { es: 'Solicitar una demo', en: 'Request a demo' },
    trustedBy: { es: 'Confían en nosotros', en: 'Trusted by' },
  },

  // ---- Features Section (Bento Grid) ----
  features: {
    title: {
      es: 'Herramientas diseñadas para la precisión clínica y la colaboración.',
      en: 'Tools designed for clinical precision and collaboration.',
    },
    map: {
      title: { es: 'Distribución de Pacientes', en: 'Patient Distribution' },
      desc: { es: 'Visualiza la distribución geográfica de pacientes.', en: 'Visualize the geographic distribution of patients.' },
      descBold: { es: 'Monitoriza tendencias regionales en tiempo real.', en: 'Monitor regional trends in real time.' },
      badge: { es: '🌍 342 pacientes activos en seguimiento', en: '🌍 342 active patients under follow-up' },
    },
    analytics: {
      badge: { es: 'Core — Analítica Predictiva', en: 'Core — Predictive Analytics' },
      title: { es: 'Analítica Predictiva y Soporte a la Decisión', en: 'Predictive Analytics & Decision Support' },
      titleSuffix: { es: '— El motor de tu clínica', en: '— The engine of your clinic' },
      desc: {
        es: 'No te conformes con saber cómo está el paciente hoy; predice qué ocurrirá mañana. Nuestro motor analiza trayectorias cognitivas y funcionales para detectar puntos de inflexión antes de que sean visibles.',
        en: "Don't settle for knowing how the patient is today; predict what will happen tomorrow. Our engine analyzes cognitive and functional trajectories to detect inflection points before they become visible.",
      },
    },
    alerts: {
      items: [
        {
          title: { es: 'Alerta Cognitiva', en: 'Cognitive Alert' },
          time: { es: 'hace 1m', en: '1m ago' },
          content: { es: 'Detectada caída significativa en MMSE del paciente #2847.', en: 'Significant MMSE drop detected for patient #2847.' },
        },
        {
          title: { es: 'Revisión de Tratamiento', en: 'Treatment Review' },
          time: { es: 'hace 3m', en: '3m ago' },
          content: { es: 'Ajuste farmacológico recomendado para 3 pacientes.', en: 'Pharmacological adjustment recommended for 3 patients.' },
        },
        {
          title: { es: 'Evaluación AVD', en: 'ADL Assessment' },
          time: { es: 'hace 6m', en: '6m ago' },
          content: { es: 'Nueva evaluación completada por Dra. García.', en: 'New assessment completed by Dr. García.' },
        },
        {
          title: { es: 'Punto de Inflexión', en: 'Inflection Point' },
          time: { es: 'hace 10m', en: '10m ago' },
          content: { es: 'Modelo predictivo señala deterioro acelerado en paciente #1523.', en: 'Predictive model flags accelerated decline in patient #1523.' },
        },
        {
          title: { es: 'Coordinación Equipo', en: 'Team Coordination' },
          time: { es: 'hace 12m', en: '12m ago' },
          content: { es: 'Nuevo mensaje del equipo multidisciplinar en caso #3291.', en: 'New message from multidisciplinary team on case #3291.' },
        },
        {
          title: { es: 'Informe Generado', en: 'Report Generated' },
          time: { es: 'hace 15m', en: '15m ago' },
          content: { es: 'Informe mensual de evolución disponible para revisión.', en: 'Monthly progress report available for review.' },
        },
      ],
    },
    chart: {
      title: { es: 'Trayectoria Cognitiva', en: 'Cognitive Trajectory' },
      desc: { es: 'Seguimiento en tiempo real de escalas MMSE y MoCA.', en: 'Real-time tracking of MMSE and MoCA scales.' },
      descBold: { es: 'Detecta puntos de inflexión antes de que sean visibles.', en: 'Detect inflection points before they become visible.' },
    },
    roles: {
      title: { es: 'Roles Multidisciplinares', en: 'Multidisciplinary Roles' },
      subtitle: { es: 'Gestión RBAC.', en: 'RBAC Management.' },
      desc: {
        es: 'Neurólogos, neuropsicólogos, terapeutas y gestores visualizan exactamente la información que necesitan para su rol. Coordinación perfecta sin ruido de datos.',
        en: 'Neurologists, neuropsychologists, therapists, and managers see exactly the information they need for their role. Perfect coordination without data noise.',
      },
    },
    messaging: {
      title: { es: 'Mensajería Segura', en: 'Secure Messaging' },
      subtitle: { es: 'Encriptación E2E.', en: 'E2E Encryption.' },
      desc: {
        es: 'Canal interno con cumplimiento RGPD/HIPAA para debatir casos y coordinar cuidados. Elimina el riesgo de usar WhatsApp o emails personales.',
        en: 'Internal channel with GDPR/HIPAA compliance to discuss cases and coordinate care. Eliminate the risk of using WhatsApp or personal emails.',
      },
    },
  },

  // ---- Features Grid ----
  featuresGrid: {
    title: { es: 'Diseñado para equipos clínicos multidisciplinares', en: 'Built for multidisciplinary clinical teams' },
    subtitle: {
      es: 'Adapta los flujos de trabajo a las necesidades de cada profesional, desde neurólogos hasta terapeutas ocupacionales, con una plataforma que escala con tu equipo.',
      en: 'Adapt workflows to each professional\'s needs, from neurologists to occupational therapists, with a platform that scales with your team.',
    },
    monitoring: {
      title: { es: 'Monitorización continua', en: 'Continuous monitoring' },
      desc: { es: 'Seguimiento en tiempo real de escalas cognitivas y funcionales con alertas automáticas ante cambios significativos.', en: 'Real-time tracking of cognitive and functional scales with automatic alerts for significant changes.' },
    },
    ai: {
      title: { es: 'IA Predictiva', en: 'Predictive AI' },
      desc: { es: 'Modelos entrenados con datos clínicos reales que anticipan puntos de inflexión en la evolución del paciente.', en: 'Models trained on real clinical data that anticipate inflection points in patient progression.' },
    },
    security: {
      title: { es: 'Seguridad clínica', en: 'Clinical security' },
      desc: { es: 'Cumplimiento RGPD e HIPAA con encriptación E2E, roles granulares y auditoría completa de accesos.', en: 'GDPR and HIPAA compliance with E2E encryption, granular roles, and complete access auditing.' },
    },
    decision: {
      title: { es: 'Soporte a la decisión', en: 'Decision support' },
      desc: { es: 'Recomendaciones clínicas basadas en evidencia y patrones detectados por inteligencia artificial.', en: 'Clinical recommendations based on evidence and patterns detected by artificial intelligence.' },
    },
  },

  // ---- Benefits ----
  benefits: {
    title: {
      es: 'Por qué evolucionar hacia el cuidado basado en datos.',
      en: 'Why evolve towards data-driven care.',
    },
    desc: {
      es: 'Enfermedades como el Alzheimer o el Parkinson no esperan. Nuestra plataforma elimina la incertidumbre clínica centralizando la información clave. Ahorra tiempo de consulta, reduce el estrés de tu equipo médico y toma decisiones clínicas justificadas y respaldadas por inteligencia de datos.',
      en: "Diseases like Alzheimer's or Parkinson's don't wait. Our platform eliminates clinical uncertainty by centralizing key information. Save consultation time, reduce your medical team's stress, and make clinical decisions justified and backed by data intelligence.",
    },
  },

  // ---- Waitlist ----
  waitlist: {
    badge: { es: 'Beta Privada', en: 'Private Beta' },
    title: { es: 'Lidera el futuro del manejo neurodegenerativo.', en: 'Lead the future of neurodegenerative care.' },
    desc: {
      es: 'Estamos finalizando el desarrollo de nuestra beta privada. Únete a la lista de espera para asegurar tu plaza y ser de los primeros en transformar tu práctica clínica.',
      en: "We're finalizing our private beta. Join the waitlist to secure your spot and be among the first to transform your clinical practice.",
    },
    nameLabel: { es: 'Nombre completo', en: 'Full name' },
    namePlaceholder: { es: 'Dr. María García', en: 'Dr. Jane Smith' },
    emailLabel: { es: 'Email Profesional', en: 'Professional Email' },
    emailPlaceholder: { es: 'maria.garcia@hospital.com', en: 'jane.smith@hospital.com' },
    specialtyLabel: { es: 'Especialidad / Rol', en: 'Specialty / Role' },
    specialtyPlaceholder: { es: 'Selecciona tu especialidad', en: 'Select your specialty' },
    specialtyOptions: {
      neurologo: { es: 'Neurólogo', en: 'Neurologist' },
      psicologo: { es: 'Psicólogo / Terapeuta', en: 'Psychologist / Therapist' },
      director: { es: 'Director Médico', en: 'Medical Director' },
      otro: { es: 'Otro', en: 'Other' },
    },
    clinicLabel: { es: 'Nombre del Centro / Clínica', en: 'Center / Clinic Name' },
    clinicPlaceholder: { es: 'Hospital Universitario...', en: 'University Hospital...' },
    submit: { es: 'Unirme a la lista de espera', en: 'Join the waitlist' },
    submitting: { es: 'Enviando...', en: 'Submitting...' },
    privacy: {
      es: 'Tus datos están protegidos. Cero spam, solo te avisaremos cuando estemos listos para ti.',
      en: 'Your data is protected. Zero spam, we\'ll only notify you when we\'re ready for you.',
    },
    successTitle: { es: '¡Te has unido a la lista de espera!', en: "You've joined the waitlist!" },
    successDesc: { es: 'Te avisaremos cuando estemos listos.', en: "We'll notify you when we're ready." },
  },

  // ---- Footer ----
  footer: {
    newsletter: { es: 'Mantente informado', en: 'Stay informed' },
    newsletterDesc: {
      es: 'Suscríbete para recibir novedades sobre nuestra plataforma y avances en neurociencia clínica.',
      en: 'Subscribe to receive updates about our platform and advances in clinical neuroscience.',
    },
    emailPlaceholder: { es: 'tu@email.com', en: 'you@email.com' },
    links: { es: 'Enlaces', en: 'Links' },
    home: { es: 'Inicio', en: 'Home' },
    aboutUs: { es: 'Sobre Nosotros', en: 'About Us' },
    functionalitiesLink: { es: 'Funcionalidades', en: 'Features' },
    research: { es: 'Investigación', en: 'Research' },
    contact: { es: 'Contacto', en: 'Contact' },
    contactTitle: { es: 'Contacto', en: 'Contact' },
    followUs: { es: 'Síguenos', en: 'Follow Us' },
    copyright: { es: '© 2025 NeuroCDSS. Todos los derechos reservados.', en: '© 2025 NeuroCDSS. All rights reserved.' },
    privacy: { es: 'Política de Privacidad', en: 'Privacy Policy' },
    terms: { es: 'Términos de Servicio', en: 'Terms of Service' },
    cookies: { es: 'Cookies', en: 'Cookies' },
  },

  // ---- Chart months ----
  months: {
    jan: { es: 'Ene', en: 'Jan' },
    feb: { es: 'Feb', en: 'Feb' },
    mar: { es: 'Mar', en: 'Mar' },
    apr: { es: 'Abr', en: 'Apr' },
    may: { es: 'May', en: 'May' },
    jun: { es: 'Jun', en: 'Jun' },
  },
} as const
