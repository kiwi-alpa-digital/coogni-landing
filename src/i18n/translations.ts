export type Locale = 'es' | 'en'

export const translations = {
  // ---- Navbar ----
  nav: {
    problem: { es: 'Problema', en: 'Problem' },
    features: { es: 'Funcionalidades', en: 'Features' },
    platform: { es: 'Plataforma', en: 'Platform' },
    joinNow: { es: 'Únete ahora', en: 'Join now' },
  },

  // ---- Hero ----
  hero: {
    titleAccent: {
      es: 'El deterioro',
      en: "Cognitive decline in your patient's",
    },
    titleMid: {
      es: 'de tu paciente lleva',
      en: 'brain has been',
    },
    titleAccent2: {
      es: '18 meses avanzando.',
      en: 'advancing for 18 months.',
    },
    titleRest: {
      es: 'Tú aún no lo sabes.',
      en: "You don't know it yet.",
    },
    subtitle: {
      es: 'Coogni analiza las trayectorias cognitivas de tus pacientes, detecta deterioro 3× antes que cualquier prueba clínica, y te envía alertas automáticas cuando un paciente empieza a empeorar — no cuando ya es tarde.',
      en: 'Coogni analyzes your patients\' cognitive trajectories, detects decline 3× earlier than any clinical test, and sends you automatic alerts when a patient starts declining — not when it\'s too late.',
    },
    trustedBy: { es: 'Confían en nosotros', en: 'Trusted by' },
    formTitle: { es: 'Solicita tu demo gratuita', en: 'Request your free demo' },
    formSubtitle: { es: 'y consigue un 20% de descuento en el lanzamiento', en: 'and get 20% off at launch' },
    socialProof: { es: '+200 profesionales en lista de espera', en: '+200 professionals on the waitlist' },
    rating: { es: '4.9/5 en satisfacción clínica', en: '4.9/5 clinical satisfaction' },
    formCta: { es: 'Únete a la lista de espera y consigue un 20% de descuento', en: 'Join the waitlist and get 20% off' },
    submitButton: { es: 'Reservar mi plaza →', en: 'Reserve my spot →' },
    submitting: { es: 'Enviando...', en: 'Sending...' },
    submitNote: { es: 'Únete gratis hoy. Sin tarjeta · Sin compromiso', en: 'Join free today. No card · No commitment' },
  },

  // ---- Problems & Solutions ----
  problemsSolutions: {
    badge: { es: 'El problema', en: 'The problem' },
    titleAccent: { es: 'Cada día que pasa', en: 'Every day that passes' },
    titleRest: { es: 'sin datos, es un día que el deterioro avanza sin que lo veas.', en: 'without data, cognitive decline advances without you seeing it.' },
    subtitle: {
      es: 'Mientras trabajas con herramientas de los años 90, tus pacientes con Alzheimer, Parkinson o deterioro cognitivo leve siguen perdiendo neuronas cada hora. No puedes permitirte esperar a que el deterioro sea visible en una resonancia.',
      en: "While you work with tools from the 90s, your patients with Alzheimer's, Parkinson's or mild cognitive impairment lose neurons every hour. You cannot afford to wait until decline shows on an MRI.",
    },
    items: {
      fragmented: {
        title: { es: 'Datos en papel y Excel', en: 'Data on paper and Excel' },
        problem: { es: 'Pierdes 30 minutos diarios buscando información del paciente. Historia fragmentada, decisiones con datos incompletos.', en: 'You lose 30 minutes daily searching for patient information. Fragmented history, decisions with incomplete data.' },
        solution: { es: 'Una ficha clínica digital completa, centralizada y accesible desde cualquier lugar en segundos.', en: 'A complete digital clinical record, centralized and accessible from anywhere in seconds.' },
      },
      reactive: {
        title: { es: 'Siempre llegas tarde', en: 'You always arrive too late' },
        problem: { es: 'Detectas el deterioro cuando ya es irreversible. Las opciones de intervención se han reducido drásticamente.', en: 'You detect decline when it is already irreversible. Intervention options have been drastically reduced.' },
        solution: { es: 'IA predictiva que detecta patrones de deterioro 3× antes. Alertas automáticas cuando el paciente aún está estable.', en: 'Predictive AI that detects decline patterns 3× earlier. Automatic alerts while the patient is still stable.' },
      },
      insecure: {
        title: { es: 'Pacientes sin hacer nada entre consultas', en: 'Patients doing nothing between appointments' },
        problem: { es: 'Tus pacientes pierden plasticidad neuronal cada día sin estimulación. El tratamiento farmacológico solo no es suficiente.', en: "Your patients lose neural plasticity every day without stimulation. Drug treatment alone isn't enough." },
        solution: { es: 'Ejercicios cognitivos gratuitos con rutinas diarias personalizadas. Más intervención, más resultados, sin coste adicional.', en: 'Free cognitive exercises with personalized daily routines. More intervention, better results, no extra cost.' },
      },
      silos: {
        title: { es: 'El neurólogo no habla con el terapeuta', en: 'The neurologist does not talk to the therapist' },
        problem: { es: 'Cada profesional tiene su versión del paciente. La coordinación es casi imposible. El paciente es el que paga los silencios.', en: 'Each professional has their own version of the patient. Coordination is nearly impossible. The patient pays the price.' },
        solution: { es: 'Organizaciones multidisciplinares con pacientes compartidos, historial unificado y comunicación en tiempo real.', en: 'Multidisciplinary organizations with shared patients, unified history, and real-time communication.' },
      },
    },
  },

  // ---- Features Section (Bento Grid) ----
  features: {
    title: {
      es: 'Todo lo que necesitas', en: 'Everything you need',
    },
    titleRest: {
      es: 'para transformar tu práctica clínica.', en: 'to transform your clinical practice.',
    },
    exercises: {
      badge: { es: '🎉 GRATIS para todos los pacientes', en: '🎉 FREE for all patients' },
      title: { es: 'Ejercicios Cognitivos Gratis para', en: 'Free Cognitive Exercises for' },
      titleHighlight: { es: 'TODOS', en: 'EVERYONE' },
      desc: {
        es: 'Tus pacientes acceden sin coste a un catálogo completo de ejercicios de estimulación cognitiva organizados por categoría. Rutinas diarias personalizadas que trabajan entre consultas.',
        en: 'Your patients get free access to a complete catalog of cognitive stimulation exercises organized by category. Personalized daily routines that work between appointments.',
      },
      categories: {
        memory: { es: 'Memoria', en: 'Memory' },
        attention: { es: 'Atención', en: 'Attention' },
        language: { es: 'Lenguaje', en: 'Language' },
        executive: { es: 'Funciones ejecutivas', en: 'Executive functions' },
        orientation: { es: 'Orientación', en: 'Orientation' },
        calculation: { es: 'Cálculo', en: 'Calculation' },
      },
      routineLabel: { es: 'Rutina diaria completada', en: 'Daily routine completed' },
      progressLabel: { es: 'Progreso semanal', en: 'Weekly progress' },
      statsLabel: { es: 'Estadísticas de evolución', en: 'Progress statistics' },
    },
    analytics: {
      badge: { es: 'Core — Análisis Cognitivo con IA', en: 'Core — AI Cognitive Analysis' },
      title: { es: 'IA que anticipa el deterioro', en: 'AI that anticipates decline' },
      titleSuffix: { es: 'antes de que sea visible', en: 'before it becomes visible' },
      desc: {
        es: 'Coogni analiza trayectorias cognitivas, agrupa pacientes por patrones similares y genera recomendaciones clínicas automáticas con alertas en tiempo real.',
        en: 'Coogni analyzes cognitive trajectories, groups patients by similar patterns, and generates automatic clinical recommendations with real-time alerts.',
      },
      features: {
        detection: { es: 'Detección temprana', en: 'Early detection' },
        prediction: { es: 'Predicción de trayectorias', en: 'Trajectory prediction' },
        clustering: { es: 'Clustering de pacientes', en: 'Patient clustering' },
        recommendations: { es: 'Recomendaciones automáticas', en: 'Auto recommendations' },
      },
    },
    alerts: {
      items: [
        {
          title: { es: 'Alerta Cognitiva', en: 'Cognitive Alert' },
          time: { es: 'hace 1m', en: '1m ago' },
          content: { es: 'IA detecta patrón de deterioro acelerado en paciente #2847. Recomendación de ajuste terapéutico generada.', en: 'AI detects accelerated decline pattern in patient #2847. Therapeutic adjustment recommendation generated.' },
        },
        {
          title: { es: 'Ejercicio Completado', en: 'Exercise Completed' },
          time: { es: 'hace 3m', en: '3m ago' },
          content: { es: 'Paciente María G. completó rutina diaria de memoria con puntuación 85%. Tendencia positiva.', en: 'Patient María G. completed daily memory routine with 85% score. Positive trend.' },
        },
        {
          title: { es: 'Clustering IA', en: 'AI Clustering' },
          time: { es: 'hace 6m', en: '6m ago' },
          content: { es: 'Nuevo grupo de riesgo identificado: 8 pacientes con trayectoria similar requieren seguimiento.', en: 'New risk group identified: 8 patients with similar trajectory require follow-up.' },
        },
        {
          title: { es: 'Alerta Dashboard', en: 'Dashboard Alert' },
          time: { es: 'hace 10m', en: '10m ago' },
          content: { es: '3 recomendaciones clínicas pendientes. 2 alertas críticas sin atender en 24h.', en: '3 clinical recommendations pending. 2 critical alerts unattended in 24h.' },
        },
        {
          title: { es: 'Ficha Actualizada', en: 'Record Updated' },
          time: { es: 'hace 15m', en: '15m ago' },
          content: { es: 'Historia clínica del paciente #1523 actualizada con nuevos resultados de exploración.', en: 'Clinical history for patient #1523 updated with new examination results.' },
        },
      ],
    },
    evolutionChart: {
      title: { es: 'Trayectoria Cognitiva', en: 'Cognitive Trajectory' },
      bullets: [
        { es: 'Visualiza la **evolución del paciente** a lo largo del tiempo con datos reales y predicciones de IA', en: 'Visualize **patient evolution** over time with real data and AI predictions' },
        { es: 'Detecta **patrones de deterioro** o mejora antes de que sean clínicamente evidentes', en: 'Detect **deterioration or improvement** patterns before they become clinically evident' },
        { es: 'Compara **períodos y tratamientos** para identificar qué intervenciones funcionan mejor', en: 'Compare **periods and treatments** to identify which interventions work best' },
      ],
    },
    patientRecord: {
      title: { es: 'Información del Paciente', en: 'Patient Information' },
      bullets: [
        { es: 'Toda la **información clínica** centralizada', en: 'All **clinical information** centralized' },
        { es: '**Historial** de ejercicios y resultados', en: 'Exercise **history** and results' },
        { es: '**Plan terapéutico** y seguimiento', en: '**Treatment plan** and follow-up' },
      ],
    },
    dashboard: {
      title: { es: 'Dashboard Clínico', en: 'Clinical Dashboard' },
      bullets: [
        { es: '**Alertas multinivel** en tiempo real', en: 'Real-time **multi-level alerts**' },
        { es: '**Detección temprana** de deterioro', en: '**Early detection** of deterioration' },
        { es: '**Recomendaciones** clínicas automáticas', en: 'Automatic clinical **recommendations**' },
      ],
    },
    organizations: {
      title: { es: 'Organizaciones', en: 'Organizations' },
      bullets: [
        { es: 'Equipos **multidisciplinares** con roles', en: '**Multidisciplinary** teams with roles' },
        { es: 'Pacientes **compartidos** entre profesionales', en: 'Patients **shared** between professionals' },
        { es: 'Gestión de **centros clínicos**', en: '**Clinical center** management' },
      ],
    },
  },

  // ---- Features Grid ----
  featuresGrid: {
    titleAccent: { es: 'Diseñado', en: 'Built' },
    titleRest: { es: 'para equipos clínicos multidisciplinares', en: 'for multidisciplinary clinical teams' },
    subtitle: {
      es: 'Desde la ficha clínica hasta el portal del paciente, cada herramienta está pensada para el flujo de trabajo real de profesionales en neurociencia clínica.',
      en: 'From the clinical record to the patient portal, every tool is designed for the real workflow of clinical neuroscience professionals.',
    },
    monitoring: {
      title: { es: 'Dashboard clínico', en: 'Clinical dashboard' },
      desc: { es: 'Métricas en tiempo real de pacientes activos, alertas multinivel, recomendaciones pendientes y actividad de ejercicios cognitivos en un solo panel.', en: 'Real-time metrics on active patients, multi-level alerts, pending recommendations, and cognitive exercise activity in a single panel.' },
    },
    ai: {
      title: { es: 'IA Predictiva', en: 'Predictive AI' },
      desc: { es: 'Detección temprana de deterioro, predicción de trayectorias cognitivas, clustering de pacientes por patrones similares y recomendaciones clínicas automáticas.', en: 'Early detection of decline, cognitive trajectory prediction, patient clustering by similar patterns, and automatic clinical recommendations.' },
    },
    security: {
      title: { es: 'Organizaciones y roles', en: 'Organizations & roles' },
      desc: { es: 'Gestión de centros clínicos con roles granulares, invitaciones de equipo, pacientes compartidos entre profesionales y cumplimiento RGPD.', en: 'Clinical center management with granular roles, team invitations, patients shared between professionals, and GDPR compliance.' },
    },
    decision: {
      title: { es: 'Ejercicios cognitivos', en: 'Cognitive exercises' },
      desc: { es: 'Catálogo de ejercicios por categoría (memoria, atención, lenguaje) con portal del paciente, rutinas diarias personalizadas y estadísticas de progreso.', en: 'Exercise catalog by category (memory, attention, language) with patient portal, personalized daily routines, and progress statistics.' },
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
      es: 'Enfermedades como el Alzheimer o el Parkinson no esperan. Coogni centraliza la ficha clínica completa, analiza trayectorias con IA, gestiona ejercicios de estimulación cognitiva y conecta a todo el equipo multidisciplinar. Menos tiempo administrativo, más tiempo para tus pacientes.',
      en: "Diseases like Alzheimer's or Parkinson's don't wait. Coogni centralizes the complete clinical record, analyzes trajectories with AI, manages cognitive stimulation exercises, and connects the entire multidisciplinary team. Less administrative time, more time for your patients.",
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
      p1Desc: { es: 'Ficha clínica digital completa con historia clínica, antecedentes, exploración, diagnóstico, plan terapéutico y pruebas complementarias.', en: 'Complete digital clinical record with medical history, background, examination, diagnosis, treatment plan, and complementary tests.' },
      p2Title: { es: 'Predicción', en: 'Prediction' },
      p2Desc: { es: 'Análisis cognitivo avanzado con IA: detección temprana, predicción de trayectorias, clustering de pacientes y recomendaciones automáticas.', en: 'Advanced cognitive analysis with AI: early detection, trajectory prediction, patient clustering, and automatic recommendations.' },
      p3Title: { es: 'Colaboración', en: 'Collaboration' },
      p3Desc: { es: 'Organizaciones multidisciplinares con roles, pacientes compartidos, portal del paciente con ejercicios y dashboard unificado.', en: 'Multidisciplinary organizations with roles, shared patients, patient portal with exercises, and unified dashboard.' },
    },
  },

  // ---- Waitlist ----
  waitlist: {
    badge: { es: 'Beta Privada', en: 'Private Beta' },
    titlePre: { es: 'Solicita tu', en: 'Request your' },
    titleAccent: { es: 'demo gratuita', en: 'free demo' },
    titleMid: { es: 'y consigue un', en: 'and get' },
    titleAccent2: { es: '20% de descuento', en: '20% off' },
    desc: {
      es: 'Reserva tu plaza en nuestra beta privada. Accede antes que nadie a la gestión de pacientes con IA predictiva, ejercicios cognitivos y colaboración multidisciplinar.',
      en: 'Reserve your spot in our private beta. Get early access to patient management with predictive AI, cognitive exercises, and multidisciplinary collaboration.',
    },
    nameLabel: { es: 'Nombre completo', en: 'Full name' },
    namePlaceholder: { es: 'Dr. María García', en: 'Dr. Jane Smith' },
    emailLabel: { es: 'Email Profesional', en: 'Professional Email' },
    emailPlaceholder: { es: 'maria.garcia@hospital.com', en: 'jane.smith@hospital.com' },
    specialtyLabel: { es: 'Especialidad / Rol', en: 'Specialty / Role' },
    specialtyPlaceholder: { es: 'Selecciona tu especialidad', en: 'Select your specialty' },
    specialtyOptions: {
      neurologo: { es: 'Neurólogo/a', en: 'Neurologist' },
      psicologo: { es: 'Neuropsicólogo/a', en: 'Neuropsychologist' },
      terapeuta: { es: 'Terapeuta Ocupacional', en: 'Occupational Therapist' },
      director: { es: 'Director/a Médico', en: 'Medical Director' },
      otro: { es: 'Otro', en: 'Other' },
    },
    clinicLabel: { es: 'Nombre del Centro / Clínica', en: 'Center / Clinic Name' },
    clinicPlaceholder: { es: 'Hospital Universitario...', en: 'University Hospital...' },
    submit: { es: 'Solicitar demo gratuita + 20% dto.', en: 'Request free demo + 20% off' },
    submitting: { es: 'Enviando...', en: 'Submitting...' },
    privacy: {
      es: 'Tus datos están protegidos. Cero spam, solo te avisaremos cuando estemos listos para ti.',
      en: 'Your data is protected. Zero spam, we\'ll only notify you when we\'re ready for you.',
    },
    successTitle: { es: '¡Te has unido a la lista de espera!', en: "You've joined the waitlist!" },
    successDesc: { es: 'Te avisaremos cuando estemos listos.', en: "We'll notify you when we're ready." },
    discountBadge: { es: '20% de descuento asegurado', en: '20% discount locked in' },
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
    clinicNameLabel: { es: 'Clínica / Centro (opcional)', en: 'Clinic / Center (optional)' },
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
      patientManagement: { es: 'Gestión de fichas clínicas', en: 'Clinical record management' },
      predictiveAnalytics: { es: 'Análisis cognitivo con IA', en: 'AI cognitive analysis' },
      decisionSupport: { es: 'Alertas y recomendaciones automáticas', en: 'Alerts and automatic recommendations' },
      patientExercises: { es: 'Ejercicios cognitivos y portal del paciente', en: 'Cognitive exercises and patient portal' },
      teamCollaboration: { es: 'Organizaciones multidisciplinares', en: 'Multidisciplinary organizations' },
      reporting: { es: 'Dashboard y métricas en tiempo real', en: 'Dashboard and real-time metrics' },
    },
    otherLabel: { es: '¿Qué más te gustaría ver? (opcional)', en: 'What else would you like to see? (optional)' },
    otherPlaceholder: {
      es: 'Ej: Me interesaría detectar patrones de deterioro cognitivo temprano, o predecir la evolución del paciente a 6-12 meses...',
      en: 'E.g.: I\'d be interested in detecting early cognitive decline patterns, or predicting patient progression over 6-12 months...',
    },
    submitExtra: { es: 'Desbloquear 5% extra', en: 'Unlock extra 5%' },
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
    problem: { es: 'Problema', en: 'Problem' },
    functionalitiesLink: { es: 'Funcionalidades', en: 'Features' },
    platformLink: { es: 'Plataforma', en: 'Platform' },
    freeTrial: { es: 'Prueba Gratis', en: 'Free Trial' },
    contactTitle: { es: 'Contacto', en: 'Contact' },
    followUs: { es: 'Síguenos', en: 'Follow Us' },
    copyright: { es: '© 2025 Coogni. Todos los derechos reservados.', en: '© 2025 Coogni. All rights reserved.' },
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

  // ---- Pricing ----
  pricing: {
    badge: { es: 'Precios', en: 'Pricing' },
    titleAccent: { es: 'Sin sorpresas. Paga solo por lo que necesitas.', en: 'No surprises. Pay only for what you need.' },
    subtitle: {
      es: 'Ejercicios cognitivos gratuitos para pacientes. Fichas clínicas, dashboard con IA y alertas predictivas para profesionales de la neurología y neuro-rehabilitación.',
      en: 'Free cognitive exercises for patients. Clinical records, AI-powered dashboard and predictive alerts for neurology and neuro-rehabilitation professionals.',
    },
    monthly: { es: '/mes', en: '/mo' },
    custom: { es: 'A medida', en: 'Custom' },
    recommended: { es: 'Más popular', en: 'Most popular' },
    cta: { es: 'Reservar demo gratuita', en: 'Reserve free demo' },
    ctaFree: { es: 'Empezar gratis', en: 'Start free' },
    ctaEnterprise: { es: 'Hablar con ventas', en: 'Talk to sales' },
    riskReversal: { es: 'Garantía: Si en 60 días no has detectado al menos 1 caso que te hubiera pasado desapercibido, te devolvemos el dinero.', en: 'Guarantee: If in 60 days you have not detected at least 1 case that would have gone unnoticed, we refund your money.' },
    plans: {
      free: {
        name: { es: 'Gratis', en: 'Free' },
        price: { es: '0€', en: '€0' },
        desc: { es: 'Ejercitación cognitiva gratis para tus pacientes. Ideal para cuidadores y familias.', en: 'Free cognitive exercises for your patients. Ideal for caregivers and families.' },
        features: [
          { es: 'Ejercicios cognitivos ilimitados', en: 'Unlimited cognitive exercises' },
          { es: 'Rutinas diarias personalizadas', en: 'Personalized daily routines' },
          { es: 'Estadísticas de progreso', en: 'Progress statistics' },
          { es: 'Portal del paciente', en: 'Patient portal' },
          { es: 'Seguimiento familiar', en: 'Family tracking' },
        ],
      },
      pro: {
        name: { es: 'Profesional', en: 'Professional' },
        price: { es: '29€', en: '€29' },
        desc: { es: 'Para neurólogos, neuropsicólogos y terapeutas en consulta privada.', en: 'For neurologists, neuropsychologists and therapists in private practice.' },
        features: [
          { es: 'Todo lo del plan Gratis', en: 'Everything in Free plan' },
          { es: 'Fichas clínicas digitales', en: 'Digital clinical records' },
          { es: 'Dashboard clínico en tiempo real', en: 'Real-time clinical dashboard' },
          { es: 'Gráfico evolutivo del paciente', en: 'Patient evolution chart' },
          { es: 'Hasta 100 pacientes', en: 'Up to 100 patients' },
          { es: 'Soporte por email', en: 'Email support' },
        ],
        bonus: { es: '+ 1 mes gratis si te apuntas en beta', en: '+ 1 month free if you join beta' },
      },
      clinic: {
        name: { es: 'Clínica', en: 'Clinic' },
        price: { es: '149€', en: '€149' },
        desc: { es: 'Para clínicas de neurología, rehabilitación y centros con equipos multidisciplinares.', en: 'For neurology clinics, rehabilitation centers and teams with multiple professionals.' },
        features: [
          { es: 'Todo lo de Profesional', en: 'Everything in Professional' },
          { es: 'IA predictiva y detección temprana', en: 'Predictive AI & early detection' },
          { es: 'Clustering de pacientes', en: 'Patient clustering' },
          { es: 'Recomendaciones clínicas automáticas', en: 'Automatic clinical recommendations' },
          { es: 'Equipos multidisciplinares', en: 'Multidisciplinary teams' },
          { es: 'Pacientes ilimitados', en: 'Unlimited patients' },
          { es: 'Soporte prioritario', en: 'Priority support' },
        ],
        bonus: { es: '+ 3 meses gratis + configuración inicial incluida', en: '+ 3 months free + initial setup included' },
      },
      enterprise: {
        name: { es: 'Enterprise', en: 'Enterprise' },
        price: { es: '', en: '' },
        desc: { es: 'Para hospitales y grandes centros', en: 'For hospitals and large centers' },
        features: [
          { es: 'Todo lo de Clínica', en: 'Everything in Clinic' },
          { es: 'Profesionales ilimitados', en: 'Unlimited professionals' },
          { es: 'Integraciones HL7/FHIR', en: 'HL7/FHIR integrations' },
          { es: 'Soporte dedicado 24/7', en: 'Dedicated 24/7 support' },
          { es: 'SLA con garantía de disponibilidad', en: 'SLA with availability guarantee' },
          { es: 'Onboarding y formación incluida', en: 'Onboarding & training included' },
        ],
        bonus: { es: 'Contacta para una propuesta personalizada', en: 'Contact for a personalized proposal' },
      },
    },
  },
} as const
