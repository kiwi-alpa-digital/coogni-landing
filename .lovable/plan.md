

## Plan: Actualizar textos de la landing con las funcionalidades reales de Coogni

Tras analizar el proyecto **coogni-clinic-hub**, estas son las funcionalidades reales que ofrece la plataforma y que deben reflejarse en la landing:

### Funcionalidades reales detectadas en la app:
1. **Gestión de pacientes** — ficha completa (info personal, calidad de vida, antecedentes, historia clínica, exploración, diagnóstico y plan, pruebas complementarias)
2. **Análisis cognitivo con IA** — detección temprana, predicción de trayectorias, clustering de pacientes, recomendaciones clínicas automáticas
3. **Alertas clínicas** — sistema de alertas multinivel (crítica, urgente, atención, info) con seguimiento
4. **Ejercicios cognitivos** — catálogo por categorías (memoria, atención, lenguaje...) con dificultad y duración, portal para pacientes con rutinas y estadísticas
5. **Organizaciones multidisciplinares** — gestión de centros/clínicas, invitaciones, roles, pacientes compartidos entre profesionales
6. **Dashboard clínico** — métricas en tiempo real (pacientes activos, alertas, recomendaciones pendientes, actividad de ejercicios)
7. **Portal del paciente** — acceso propio del paciente para ejercicios, rutinas diarias y estadísticas de progreso

### Cambios a realizar

**Archivo principal: `src/i18n/translations.ts`** — Actualizar los textos en todas las secciones:

1. **Hero**: Ajustar subtitle para mencionar las funcionalidades clave (gestión de pacientes, análisis cognitivo con IA, ejercicios, colaboración multidisciplinar)

2. **Problemas y Soluciones**: Actualizar los 4 problemas/soluciones visibles para alinearse con lo que realmente resuelve la app:
   - Datos fragmentados → Ficha clínica centralizada con todas las secciones
   - Gestión reactiva → Análisis cognitivo con IA predictiva, alertas automáticas
   - Silos profesionales → Organizaciones con roles y pacientes compartidos
   - Evaluación subjetiva → Ejercicios cognitivos con métricas objetivas y estadísticas

3. **Features (Bento Grid)**: Actualizar textos de las tarjetas para reflejar funcionalidades reales:
   - Analytics → Análisis cognitivo: detección, predicción, clustering, recomendaciones
   - Chart → Portal del paciente con ejercicios y rutinas cognitivas
   - Roles → Organizaciones multidisciplinares con pacientes compartidos
   - Messaging → Dashboard con alertas clínicas multinivel en tiempo real
   - Alertas → Actualizar contenido de las notificaciones de ejemplo

4. **Features Grid (Plataforma)**: Actualizar los 4 pilares:
   - Monitorización → Dashboard clínico con métricas en tiempo real
   - IA Predictiva → Detección temprana + predicción de trayectorias + clustering
   - Seguridad → Roles granulares, organizaciones, RGPD
   - Soporte a la decisión → Recomendaciones clínicas automáticas basadas en análisis IA

5. **Benefits**: Actualizar descripción general y pilares:
   - Centralización → Ficha clínica completa en un único punto
   - Predicción → Análisis cognitivo avanzado con IA
   - Colaboración → Organizaciones y pacientes compartidos

6. **Waitlist**: Actualizar opciones de especialidad para incluir roles reales del sistema

### Archivos a modificar
- `src/i18n/translations.ts` — Todos los textos (es + en)

No se modifican componentes ni estructura, solo el contenido textual del archivo de traducciones.

