export interface BlogSignal {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  clinicalContext: string;
  clinicalContextEn: string;
  action: string;
  actionEn: string;
}

export interface BlogPostData {
  id: number;
  slug: string;
  titleEs: string;
  titleEn: string;
  excerptEs: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  signals: BlogSignal[];
  date: string;
  dateEn: string;
  readTime: number;
  author: string;
  authorRole: string;
  tag: string;
  tagEn: string;
  ctaText: string;
  ctaTextEn: string;
  ctaLink: string;
}

export const blogPost1: BlogPostData = {
  id: 1,
  slug: "deteccion-deterioro-cognitivo",
  titleEs: "7 Señales de Deterioro Cognitivo que los Tests Clínicos No Detectan",
  titleEn: "7 Signs of Cognitive Decline That Clinical Tests Don't Detect",
  excerptEs:
    "El MMSE puede mostrar resultados normales mientras el deterioro cognitivo avanza silenciosamente durante 3-5 años. Descubre las 7 señales clínicas que permiten una detección verdaderamente temprana.",
  excerptEn:
    "The MMSE can show normal results while cognitive decline progresses silently for 3-5 years. Discover the 7 clinical signs that enable truly early detection.",
  date: "22 de Marzo 2026",
  dateEn: "March 22, 2026",
  readTime: 6,
  author: "Dr. Marta López",
  authorRole: "Neuropsicóloga Clínica — Coogni",
  tag: "Detección Temprana",
  tagEn: "Early Detection",
  ctaText: "Descarga la guía completa con protocolo de evaluación",
  ctaTextEn: "Download the complete guide with evaluation protocol",
  ctaLink: "#waitlist",
  signals: [
    {
      title: "Variabilidad en tareas de memoria de trabajo",
      titleEn: "Variability in working memory tasks",
      description:
        "Un paciente que antes completaba tareas de span de dígitos inversos sin dificultad ahora necesita más tiempo o falla en tareas de 2-3 pasos simultáneos.",
      descriptionEn:
        "A patient who previously completed reverse digit span tasks without difficulty now needs more time or fails at 2-3 simultaneous step tasks.",
      clinicalContext:
        "La memoria de trabajo es una de las primeras funciones en deteriorarse, pero los tests globales la evaluúan de forma grosera.",
      clinicalContextEn:
        "Working memory is one of the first functions to deteriorate, but global tests evaluate it coarsely.",
      action:
        "Introducir ejercicios de memoria de trabajo en la rutina diaria y monitorizar con evaluaciones repetidas cada 3 meses.",
      actionEn:
        "Introduce working memory exercises into daily routine and monitor with repeated assessments every 3 months.",
    },
    {
      title: "Reducción >20% en velocidad de procesamiento",
      titleEn: ">20% reduction in processing speed",
      description:
        "Pacientes que antes completaban el Trail Making Test A en 30 segundos ahora tardan 45-50 segundos.",
      descriptionEn:
        "Patients who previously completed the Trail Making Test A in 30 seconds now take 45-50 seconds.",
      clinicalContext:
        "La velocidad de procesamiento es un marcador temprano muy sensible, incluso antes de los fallos de memoria.",
      clinicalContextEn:
        "Processing speed is a highly sensitive early marker, even before memory failures.",
      action:
        "Registro sistemático de tiempos en tareas cognitivas básicas.",
      actionEn:
        "Systematic time tracking on basic cognitive tasks.",
    },
    {
      title: "Dificultad en tareas duales",
      titleEn: "Difficulty with dual tasks",
      description:
        "Paciente que antes manejaba conversaciones mientras caminaba ahora se detiene para hablar.",
      descriptionEn:
        "A patient who previously held conversations while walking now stops to talk.",
      clinicalContext:
        "La capacidad de procesar múltiples flujos de información simultáneos es de las primeras en deteriorarse.",
      clinicalContextEn:
        "The ability to process multiple simultaneous information streams is one of the first to deteriorate.",
      action:
        "Evaluar con tareas duales (ej. nombrar colores mientras se lee palabras de Stroop).",
      actionEn:
        "Evaluate with dual tasks (e.g., naming colors while reading Stroop words).",
    },
    {
      title: "Cambios sutiles en fluencia verbal",
      titleEn: "Subtle changes in verbal fluency",
      description:
        "Reducción de más del 20% en fluencia semántica (ej. nombrar animales en 1 minuto) sin otros síntomas evidentes.",
      descriptionEn:
        "Reduction of more than 20% in semantic fluency (e.g., naming animals in 1 minute) without other evident symptoms.",
      clinicalContext:
        "La fluencia verbal es un marcador sensible para deterioro de origen frontotemporal y Alzheimer.",
      clinicalContextEn:
        "Verbal fluency is a sensitive marker for frontotemporal and Alzheimer's origin decline.",
      action:
        "Registro longitudinal de fluencia verbal con test de 1 minuto.",
      actionEn:
        "Longitudinal tracking of verbal fluency with 1-minute test.",
    },
    {
      title: "Desorientación temporal en pacientes previamente autónomos",
      titleEn: "Temporal disorientation in previously autonomous patients",
      description:
        "Paciente que gestionaba sus finanzas correctamente ahora olvida citas o no recuerda qué día es.",
      descriptionEn:
        "A patient who correctly managed their finances now forgets appointments or cannot recall what day it is.",
      clinicalContext:
        "La desorientación temporal es un signo temprano que a menudo se confunde con 'normal aging'.",
      clinicalContextEn:
        "Temporal disorientation is an early sign often confused with 'normal aging'.",
      action:
        "Cuestionario de orientación temporal sistemático en cada revisión.",
      actionEn:
        "Systematic temporal orientation questionnaire at each review.",
    },
    {
      title: "Reducción de actividades instrumentales",
      titleEn: "Reduction of instrumental activities",
      description:
        "Paciente que cocinaba platos complejos ahora prepara solo platos sencillos. Manejo del dinero deteriorado.",
      descriptionEn:
        "A patient who cooked complex dishes now only prepares simple dishes. Money management deteriorated.",
      clinicalContext:
        "La preservación de actividades instrumentales (IADLs) es un indicador funcional temprano.",
      clinicalContextEn:
        "Preservation of instrumental activities (IADLs) is an early functional indicator.",
      action:
        "Escala de Lawton para valorar Actividades Instrumentales de la Vida Diaria.",
      actionEn:
        "Lawton Scale to assess Instrumental Activities of Daily Living.",
    },
    {
      title: "Apatía sin causa médica aparente",
      titleEn: "Apathy without apparent medical cause",
      description:
        "Paciente previamente activo y sociable que ha reducido significativamente su iniciativa sin depresión diagnosticada.",
      descriptionEn:
        "A previously active and sociable patient who has significantly reduced their initiative without diagnosed depression.",
      clinicalContext:
        "La apatía es un síntoma prodrómico del Alzheimer que precede al deterioro de memoria por años.",
      clinicalContextEn:
        "Apathy is a prodromal symptom of Alzheimer's that precedes memory decline by years.",
      action:
        "Escala de Apatía (AES) + derivación a neuropsicólogo.",
      actionEn:
        "Apathy Scale (AES) + referral to neuropsychologist.",
    },
  ],
};
