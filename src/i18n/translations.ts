export type Locale = 'es' | 'en'

export const translations = {
  // ---- Navbar ----
  nav: {
    features: { es: 'Funcionalidades', en: 'Features' },
    platform: { es: 'Plataforma', en: 'Platform' },
    beta: { es: 'Beta Privada', en: 'Private Beta' },
    about: { es: 'Nosotros', en: 'About' },
    joinNow: { es: 'Solicita tu demo', en: 'Request your demo' },
  },

  // ---- Hero ----
  hero: {
    titleAccent: {
      es: 'Predice',
      en: 'Predict',
    },
    titleRest: {
      es: 'el deterioro cognitivo antes de que sea visible',
      en: 'cognitive decline before it becomes visible',
    },
    subtitle: {
      es: 'Plataforma clínica con IA predictiva para el manejo de enfermedades neurodegenerativas. Centraliza datos, anticipa trayectorias y facilita decisiones basadas en evidencia.',
      en: 'Clinical platform with predictive AI for managing neurodegenerative diseases. Centralize data, anticipate trajectories, and enable evidence-based decisions.',
    },
    trustedBy: { es: 'Confían en nosotros', en: 'Trusted by' },
    formTitle: { es: 'Solicita tu demo gratuita', en: 'Request your free demo' },
    formSubtitle: { es: 'y consigue un 20% de descuento en el lanzamiento', en: 'and get 20% off at launch' },
  },

  // ---- Problems & Solutions ----
  problemsSolutions: {
    badge: { es: 'El problema', en: 'The problem' },
    titleAccent: { es: 'Tu clínica', en: 'Your clinic' },
    titleRest: { es: 'merece mejor que hojas de cálculo y suposiciones.', en: 'deserves better than spreadsheets and guesswork.' },
    subtitle: {
      es: 'Los equipos clínicos pierden tiempo, precisión y coordinación con herramientas que no fueron diseñadas para el manejo neurodegenerativo.',
      en: 'Clinical teams lose time, accuracy, and coordination with tools not designed for neurodegenerative care.',
    },
    items: {
      fragmented: {
        title: { es: 'Datos fragmentados', en: 'Fragmented data' },
        problem: { es: 'Datos dispersos entre sistemas que no se comunican', en: 'Data scattered across systems that don\'t talk to each other' },
        solution: { es: 'Toda la información del paciente centralizada en un único punto de verdad', en: 'All patient data centralized in a single source of truth' },
      },
      reactive: {
        title: { es: 'Gestión reactiva', en: 'Reactive management' },
        problem: { es: 'Decisiones reactivas cuando el deterioro ya es visible', en: 'Reactive decisions when decline is already visible' },
        solution: { es: 'IA predictiva que detecta puntos de inflexión antes de que sean observables', en: 'Predictive AI that detects inflection points before they\'re observable' },
      },
      insecure: {
        title: { es: 'Comunicación insegura', en: 'Insecure communication' },
        problem: { es: 'Comunicación clínica por canales no seguros (WhatsApp, email personal)', en: 'Clinical communication via insecure channels (WhatsApp, personal email)' },
        solution: { es: 'Mensajería encriptada E2E con cumplimiento RGPD/HIPAA integrado', en: 'E2E encrypted messaging with built-in GDPR/HIPAA compliance' },
      },
      silos: {
        title: { es: 'Silos profesionales', en: 'Professional silos' },
        problem: { es: 'Cada profesional trabaja aislado sin visión del equipo completo', en: 'Each professional works in isolation without full team visibility' },
        solution: { es: 'Roles multidisciplinares con flujos de trabajo compartidos en tiempo real', en: 'Multidisciplinary roles with shared real-time workflows' },
      },
      subjective: {
        title: { es: 'Evaluación subjetiva', en: 'Subjective assessment' },
        problem: { es: 'Evaluaciones subjetivas sin datos longitudinales comparables', en: 'Subjective assessments without comparable longitudinal data' },
        solution: { es: 'Trayectorias cognitivas objetivas con escalas MMSE y MoCA automatizadas', en: 'Objective cognitive trajectories with automated MMSE and MoCA scales' },
      },
      noData: {
        title: { es: 'Sin respaldo de datos', en: 'No data backing' },
        problem: { es: 'Sin métricas para justificar decisiones clínicas ante familiares o comités', en: 'No metrics to justify clinical decisions to families or committees' },
        solution: { es: 'Informes basados en evidencia que respaldan cada decisión con datos reales', en: 'Evidence-based reports that back every decision with real data' },
      },
    },
  },

  // ---- Features Section (Bento Grid) ----
  features: {
    title: {
      es: 'Herramientas diseñadas', en: 'Tools designed',
    },
    titleRest: {
      es: 'para la precisión clínica y la colaboración.', en: 'for clinical precision and collaboration.',
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
    titleAccent: { es: 'Diseñado', en: 'Built' },
    titleRest: { es: 'para equipos clínicos multidisciplinares', en: 'for multidisciplinary clinical teams' },
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
    titleAccent: {
      es: 'Por qué evolucionar', en: 'Why evolve',
    },
    titleRest: {
      es: 'hacia el cuidado basado en datos.', en: 'towards data-driven care.',
    },
    desc: {
      es: 'Enfermedades como el Alzheimer o el Parkinson no esperan. Nuestra plataforma elimina la incertidumbre clínica centralizando la información clave. Ahorra tiempo de consulta, reduce el estrés de tu equipo médico y toma decisiones clínicas justificadas y respaldadas por inteligencia de datos.',
      en: "Diseases like Alzheimer's or Parkinson's don't wait. Our platform eliminates clinical uncertainty by centralizing key information. Save consultation time, reduce your medical team's stress, and make clinical decisions justified and backed by data intelligence.",
    },
    stats: {
      stat1Value: { es: '40%', en: '40%' },
      stat1Label: { es: 'Reducción en tiempo de consulta', en: 'Reduction in consultation time' },
      stat2Value: { es: '3×', en: '3×' },
      stat2Label: { es: 'Detección más temprana de deterioro', en: 'Earlier detection of decline' },
      stat3Value: { es: '92%', en: '92%' },
      stat3Label: { es: 'Satisfacción del equipo clínico', en: 'Clinical team satisfaction' },
    },
    pillars: {
      p1Title: { es: 'Centralización', en: 'Centralization' },
      p1Desc: { es: 'Un único punto de verdad para todos los datos del paciente, eliminando silos de información.', en: 'A single source of truth for all patient data, eliminating information silos.' },
      p2Title: { es: 'Predicción', en: 'Prediction' },
      p2Desc: { es: 'Modelos de IA que anticipan cambios antes de que sean clínicamente observables.', en: 'AI models that anticipate changes before they are clinically observable.' },
      p3Title: { es: 'Colaboración', en: 'Collaboration' },
      p3Desc: { es: 'Flujos de trabajo compartidos que conectan a todo el equipo multidisciplinar.', en: 'Shared workflows that connect the entire multidisciplinary team.' },
    },
  },

  // ---- Waitlist ----
  waitlist: {
    badge: { es: 'Beta Privada', en: 'Private Beta' },
    titleAccent: { es: 'Solicita tu demo', en: 'Request your demo' },
    titleRest: { es: 'gratuita y consigue un 20% de descuento', en: 'for free and get 20% off' },
    desc: {
      es: 'Reserva tu plaza en nuestra beta privada. Accede antes que nadie y asegura un 20% de descuento exclusivo en el lanzamiento.',
      en: 'Reserve your spot in our private beta. Get early access and lock in an exclusive 20% discount at launch.',
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
    submit: { es: 'Solicitar demo gratuita — 20% dto.', en: 'Request free demo — 20% off' },
    submitting: { es: 'Enviando...', en: 'Submitting...' },
    privacy: {
      es: 'Tus datos están protegidos. Cero spam, solo te avisaremos cuando estemos listos para ti.',
      en: 'Your data is protected. Zero spam, we\'ll only notify you when we\'re ready for you.',
    },
    successTitle: { es: '¡Te has unido a la lista de espera!', en: "You've joined the waitlist!" },
    successDesc: { es: 'Te avisaremos cuando estemos listos.', en: "We'll notify you when we're ready." },
    discountBadge: { es: '🎁 20% de descuento asegurado', en: '🎁 20% discount locked in' },
  },

  // ---- Thank you page ----
  thankYou: {
    title: { es: '¡Gracias por unirte!', en: 'Thanks for joining!' },
    subtitle: { es: 'Ya tienes un 20% de descuento asegurado.', en: 'You already have a 20% discount locked in.' },
    extraBanner: { es: '¿Quieres un 5% extra?', en: 'Want an extra 5%?' },
    extraBannerDesc: { es: 'Responde unas preguntas rápidas y desbloquea un 25% de descuento total.', en: 'Answer a few quick questions and unlock a 25% total discount.' },
    profileTypeLabel: { es: '¿Cuál es tu perfil profesional?', en: 'What is your professional profile?' },
    profileOptions: {
      independent: { es: 'Profesional independiente', en: 'Independent professional' },
      clinic: { es: 'Clínica / Centro médico', en: 'Clinic / Medical center' },
    },
    clinicNameLabel: { es: 'Nombre del centro (opcional)', en: 'Center name (optional)' },
    clinicNamePlaceholder: { es: 'Hospital Universitario...', en: 'University Hospital...' },
    patientsLabel: { es: '¿Cuántos pacientes gestionas aproximadamente?', en: 'Approximately how many patients do you manage?' },
    patientsOptions: {
      small: { es: '1-20', en: '1-20' },
      medium: { es: '21-100', en: '21-100' },
      large: { es: '101-500', en: '101-500' },
      xlarge: { es: '+500', en: '500+' },
    },
    interestsLabel: { es: '¿Qué funcionalidades te interesan más?', en: 'Which features interest you most?' },
    interests: {
      patientManagement: { es: 'Gestión segura de pacientes', en: 'Secure patient management' },
      predictiveAnalytics: { es: 'Analítica predictiva', en: 'Predictive analytics' },
      decisionSupport: { es: 'Herramientas de Soporte a la Decisión', en: 'Decision Support Tools' },
      patientExercises: { es: 'Ejercitación para pacientes', en: 'Patient exercises' },
      teamCollaboration: { es: 'Colaboración multidisciplinar', en: 'Multidisciplinary collaboration' },
      reporting: { es: 'Informes y reportes', en: 'Reports and reporting' },
    },
    otherLabel: { es: '¿Qué más te gustaría ver? (opcional)', en: 'What else would you like to see? (optional)' },
    otherPlaceholder: {
      es: 'Ej: Me gustaría que pudiera recordarle tomar sus medicinas, o monitorizar aspectos básicos de su día a día...',
      en: 'E.g.: I\'d like it to remind patients to take their medicines, or monitor basic daily aspects...',
    },
    submitExtra: { es: 'Desbloquear 5% extra 🎁', en: 'Unlock extra 5% 🎁' },
    skipExtra: { es: 'No gracias, continuar con 20%', en: 'No thanks, continue with 20%' },
    submittingExtra: { es: 'Guardando...', en: 'Saving...' },
    finalTitle: { es: '¡Listo! Tu descuento del 25% está asegurado.', en: 'Done! Your 25% discount is locked in.' },
    finalDesc: { es: 'Tus respuestas nos ayudan a crear un mejor servicio para ti y tus pacientes.', en: 'Your answers help us build a better service for you and your patients.' },
    backHome: { es: 'Volver al inicio', en: 'Back to home' },
    charCount: { es: '/500', en: '/500' },
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
