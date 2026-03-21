# FAQ Content — Coogni Landing Page

## SPANISH VERSION

---

**Q1: ¿Funciona Coogni para pacientes con Alzheimer, Parkinson y otras enfermedades neurodegenerativas?**

Sí. Coogni está diseñado para el seguimiento cognitivo de pacientes con enfermedades neurodegenerativas, incluyendo enfermedad de Alzheimer, Parkinson, demencia vascular, deterioro cognitivo leve y otras patologías. La plataforma es agnóstica del diagnóstico específico: lo que monitoriza es la **trayectoria cognitiva** del paciente a través de ejercicios validados que evalúan memoria de trabajo, velocidad de procesamiento, función ejecutiva, lenguaje y otras funciones cognitivas. La IA de Coogni analiza estas trayectorias y detecta patrones de deterioro independientemente de la etiología, emitiendo alertas cuando se identifica una aceleración fuera de los rangos esperados para el perfil del paciente. Si su paciente tiene una enfermedad neurodegenerativa diagnosticada o sospecha de deterioro cognitivo, Coogni puede integrarse en su protocolo de seguimiento.

---

**Q2: ¿Cuánto tiempo tarda Coogni en detectar un patrón de deterioro cognitivo?**

Coogni necesita un mínimo de **4-6 semanas de datos** de actividad cognitiva para establecer un baseline individualizado y comenzar a detectar patrones significativos. Cuanto mayor sea el periodo de seguimiento, más precisa será la detección porque la IA puede distinguir entre variabilidad normal y señales de deterioro real. En la práctica clínica, esto significa que tras el primer mes de uso, el equipo puede empezar a recibir alertas sobre pacientes que muestran una trayectoria descendente. Para detección óptima, recomendamos un seguimiento de **3-6 meses**, que permite a los algoritmos de Coogni modelar la curva de deterioro con suficiente precisión para identificar cambios sutiles que las pruebas puntuales no detectarían. No se trata de detección instantánea, sino de **seguimiento longitudinal automatizado** que marca la diferencia frente a evaluaciones cada 6 o 12 meses.

---

**Q3: ¿Puedo integrar Coogni con mi sistema de historia clínica actual (HCE)?**

Sí. Coogni ofrece integración con los principales sistemas de historia clínica electrónica a través de **API REST** y estándares de interoperabilidad como **HL7 FHIR**. Esto permite que los datos cognitivos generados por la plataforma — puntuaciones, trayectorias, alertas — se incorporen automáticamente al expediente del paciente dentro de su HCE habitual. La integración es configurable según las necesidades del centro: pueden recibir alertas en el flujo de trabajo del clínico, exportar informes automáticos o consultarse directamente desde el dashboard de Coogni. Si su HCE no es estándar, nuestro equipo técnico puede evaluar soluciones de integración personalizadas. El objetivo es que los datos de Coogni formen parte natural del expediente clínico, no que supongan una plataforma paralela más.

---

**Q4: ¿Los pacientes necesitan equipos o tecnología especial para hacer los ejercicios?**

No. Los ejercicios cognitivos de Coogni están diseñados para ser accesibles con dispositivos convencionales: **ordenador, tableta o smartphone**. El paciente no necesita ningún hardware especial, sensores, ni equipos médicos. Los ejercicios se presentan en una interfaz web adaptativa que funciona en cualquier navegador moderno, y la app móvil de Coogni (iOS y Android) permite acceder a las sesiones desde cualquier lugar. La única premisa técnica es disponer de conexión a internet y un dispositivo con pantalla. Para pacientes con limitaciones visuales o motoras, la plataforma incluye opciones de accesibilidad como ajuste de tamaño de texto, control por voz y tareas simplificadas. El objetivo es minimizar la barrera tecnológica para que el seguimiento cognitivo no se frene por limitaciones de equipamiento.

---

**Q5: ¿Qué pasa con mis datos si cancelo mi suscripción?**

Cuando cancelas tu suscripción, Coogni mantiene tus datos durante un **periodo de gracia de 90 días** durante el cual puedes solicitar una exportación completa en formatos estándar (CSV, PDF). Tras este periodo, los datos se eliminan de nuestros servidores activos conforme a nuestra política de retención de datos clínicos, salvo que exista una obligación legal de conservarlos. Los datos no se venden, no se comparten con terceros y se eliminan de forma segura siguiendo protocolos de borrado certificado. Si eres un profesional clínico que trabaja con datos de pacientes, esto significa que debes asegurarte de haber exportado y almacenado localmente cualquier informe clínico que necesites antes de la fecha de baja. El proceso es claro, transparente y no hay letra pequeña: te lo detallamos en el contrato de servicio antes de que te registres.

---

**Q6: ¿Cómo garantiza Coogni la seguridad y privacidad de los datos clínicos?**

Coogni cumple con el **Reglamento General de Protección de Datos (RGPD)** y la normativa de dispositivos médicos aplicable en la Unión Europea. Todos los datos clínicos se almacenan cifrados en reposo (AES-256) y en tránsito (TLS 1.3), en servidores dentro de la UE. El acceso está restringido por rol y autenticado con MFA para todos los profesionales clínicos. Somos **CE/MDR compliant** como herramienta de soporte clínico (no como dispositivo médico autónomo), lo que implica auditorías periódicas de seguridad y cumplimiento. Nuestros servidores están certificados ISO 27001 y SOC 2 Tipo II. Los datos de pacientes nunca se utilizan para entrenar modelos sin consentimiento explícito, y en ningún caso se comparten con aseguradoras, empleadores o terceros con fines comerciales. La seguridad no es una capa añadida: es la arquitectura sobre la que se construye toda la plataforma.

---

**Q7: ¿Cuál es el tiempo de implementación y formación del equipo?**

La implementación típica de Coogni en un centro clínico dura entre **1 y 2 semanas**. El primer día incluye la configuración de la cuenta, la integración con tu HCE (si aplica) y la creación de perfiles de pacientes. Los días 2-3 son sesiones de formación con tu equipo — tanto clínicos como administrativos — para garantizar que todos saben cómo prescribir ejercicios, interpretar el dashboard y actuar sobre las alertas. Ofrecemos formación presencial y online, ambas grabadas para referencia futura. Durante las primeras 4 semanas de uso, un **account manager dedicado** acompaña al equipo para resolver dudas y ajustar la configuración según las necesidades del flujo clínico. El objetivo es que tu equipo esté operativo y confiado con la plataforma antes de las 2 semanas, sin necesidad de días de implementación adicionales ni consultorías externas.

---

**Q8: ¿Qué pasa si la IA detecta un falso positivo?**

Es importante entender cómo Coogni comunica sus alertas. La plataforma nunca emite un diagnóstico: emite **señales** y **patrones** basados en datos objetivos de la actividad cognitiva del paciente. Un "falso positivo" en este contexto significa que la IA detecta un patrón que parecía deterioro pero que tiene otra causa (fatiga, efecto de medicación, infección, factors emocionales). Cuando recibes una alerta de Coogni, la plataforma te proporciona el contexto necesario — datos de tendencia, comparativa con el baseline del paciente, posibles confounders — para que **tú como clínico evalúes** si la alerta requiere acción. No hay intervención automática sobre el paciente sin tu criterio. En la práctica, esto significa que las alertas son exactamente eso: invitaciones a mirar más de cerca. El valor está en no perder señales verdaderas, sabiendo que el filtrado clínico sigue siendo tuyo.

---

## ENGLISH VERSION

---

**Q1: Does Coogni work for patients with Alzheimer's, Parkinson's, and other neurodegenerative diseases?**

Yes. Coogni is designed for cognitive monitoring of patients with neurodegenerative diseases, including Alzheimer's disease, Parkinson's, vascular dementia, mild cognitive impairment, and other conditions. The platform is diagnosis-agnostic: what it tracks is the patient's **cognitive trajectory** through validated exercises that assess working memory, processing speed, executive function, language, and other cognitive domains. Coogni's AI analyzes these trajectories and detects decline patterns regardless of etiology, generating alerts when a patient shows an acceleration outside expected ranges for their profile. If your patient has a diagnosed neurodegenerative disease or suspected cognitive impairment, Coogni can be integrated into your monitoring protocol.

---

**Q2: How long does Coogni take to detect a cognitive decline pattern?**

Coogni requires a minimum of **4-6 weeks of activity data** to establish an individualized baseline and begin detecting meaningful patterns. The longer the monitoring period, the more accurate the detection, as the AI can distinguish between normal variability and genuine decline signals. In clinical practice, this means that after the first month of use, your team can start receiving alerts about patients showing a downward trajectory. For optimal detection, we recommend a **3-6 month follow-up period**, which allows Coogni's algorithms to model the decline curve with sufficient precision to identify subtle changes that single-point assessments would miss. This is not instant detection — it is **automated longitudinal monitoring** that makes the difference compared to assessments every 6 or 12 months.

---

**Q3: Can I integrate Coogni with my current electronic health record (EHR) system?**

Yes. Coogni offers integration with major electronic health record systems through **REST API** and interoperability standards like **HL7 FHIR**. This allows cognitive data generated by the platform — scores, trajectories, alerts — to be automatically incorporated into the patient's record within your existing EHR. Integration is configurable based on your facility's needs: you can receive alerts in the clinician's workflow, export automated reports, or access them directly from the Coogni dashboard. If your EHR is non-standard, our technical team can evaluate personalized integration solutions. The goal is for Coogni data to become a natural part of the clinical record, not an additional standalone platform.

---

**Q4: Do patients need special equipment or technology to complete the exercises?**

No. Coogni's cognitive exercises are designed to be accessible on conventional devices: **computer, tablet, or smartphone**. Patients do not need any special hardware, sensors, or medical equipment. Exercises are presented in a responsive web interface that works in any modern browser, and the Coogni mobile app (iOS and Android) allows access to sessions from anywhere. The only technical requirement is an internet connection and a device with a screen. For patients with visual or motor limitations, the platform includes accessibility options such as adjustable text size, voice control, and simplified tasks. The goal is to minimize the technological barrier so that cognitive monitoring is not hindered by equipment limitations.

---

**Q5: What happens to my data if I cancel my subscription?**

When you cancel your subscription, Coogni retains your data for a **90-day grace period** during which you can request a complete export in standard formats (CSV, PDF). After this period, data is deleted from our active servers in accordance with our clinical data retention policy, unless there is a legal obligation to retain it. Data is never sold, never shared with third parties, and is securely deleted following certified erasure protocols. If you are a clinical professional working with patient data, this means you should ensure you have exported and stored locally any clinical reports you need before your cancellation date. The process is clear and transparent: we detail it in the service contract before you register.

---

**Q6: How does Coogni ensure the security and privacy of clinical data?**

Coogni complies with the **General Data Protection Regulation (GDPR)** and applicable medical device regulations in the European Union. All clinical data is stored encrypted at rest (AES-256) and in transit (TLS 1.3), on servers within the EU. Access is role-based and authenticated with MFA for all clinical professionals. We are **CE/MDR compliant** as a clinical support tool (not as a standalone medical device), which involves periodic security and compliance audits. Our servers are ISO 27001 and SOC 2 Type II certified. Patient data is never used to train models without explicit consent, and is never shared with insurers, employers, or third parties for commercial purposes. Security is not an added layer: it is the architecture on which the entire platform is built.

---

**Q7: What is the implementation and team training timeline?**

A typical Coogni implementation at a clinical facility takes between **1 and 2 weeks**. Day one includes account setup, integration with your EHR (if applicable), and creation of patient profiles. Days 2-3 are training sessions with your team — both clinical and administrative — to ensure everyone knows how to prescribe exercises, interpret the dashboard, and act on alerts. We offer both in-person and online training, both recorded for future reference. During the first 4 weeks of use, a **dedicated account manager** accompanies the team to resolve questions and adjust configuration according to your clinical workflow needs. The goal is for your team to be operational and confident with the platform before the end of 2 weeks, with no additional implementation days or external consultancy required.

---

**Q8: What happens if the AI detects a false positive?**

It is important to understand how Coogni communicates its alerts. The platform never issues a diagnosis: it surfaces **signals** and **patterns** based on objective cognitive activity data. A "false positive" in this context means the AI detects a pattern that appeared to be decline but has another cause (fatigue, medication effect, infection, emotional factors). When you receive a Coogni alert, the platform provides the necessary context — trend data, comparison with the patient's baseline, possible confounders — so that **you as the clinician evaluate** whether the alert requires action. There is no automatic intervention on the patient without your judgment. In practice, this means alerts are precisely that: invitations to take a closer look. The value lies in not missing genuine signals, knowing that clinical filtering remains your responsibility.
