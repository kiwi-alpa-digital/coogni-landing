# Coogni — Tareas Pendientes

> Última actualización: 2026-03-22

---

## 🚨 Bloqueantes para lanzar campañas de ads

### 1. Meta Pixel ID
- **Archivo:** `index.html` (línea con `fbq('init', 'PIXEL_ID')`)
- **Acción:** Crear pixel en Meta Business Manager →替换 `PIXEL_ID` por el ID real
- **Link:** https://business.facebook.com → Events Manager → New Pixel
- **Coste:** 0€

### 2. Testimonios reales de profesionales (3 min)
- **Por qué:** Usar testimonios ficticios en ads viola políticas de Meta
- **Acción:** Pedir a 2-3 profesionales que graben un video corto o escriban un quote con nombre + institución
- **Formato necesario:**
  - Nombre completo + especialidad
  - Institución (hospital/clínica)
  - Quote de 2-3 líneas sobre su experiencia
  - Opcional: video de 30 segundos
- **Deadline:** Antes de lanzar ads

### 3. Email service conectado
- **Opciones:** Loops (gratis hasta 1K contactos), Mailchimp (gratis hasta 500), Resend (gratis)
- **Acción:** Darme las credenciales/API key para conectar la Thank You page
- **Lo que falta:**
  - Conectar Thank You page al email service
  - Configurar secuencia de 5 emails (contenido ya escrito en `public/email-sequence.md`)

---

## 🔴 Alta prioridad

### 4. Lead magnet PDF
- **Contenido:** Ya escrito en `public/lead-magnet-content.md`
- **Acción:** Generar PDF real y subirlo a la web
- **Linkear** desde la landing y Thank You page

### 5. OG image real
- **Archivo:** `/public/og-image.png` — generado con PIL (básico)
- **Mejorar:** Usar herramienta como Canva o Figma para una imagen más profesional
- **Specs:** 1200×630px

### 6. Dominio coogni.com → Vercel
- **Acción:** Apuntar DNS de coogni.com a Vercel
- **Por qué:** SEO necesita dominio propio para indexing

### 7. Validación médica del lead magnet
- **Acción:** Un profesional con credentials (neurólogo/psicólogo) debe revisar el contenido antes de publicar
- **Contenido:** `public/lead-magnet-content.md` — 7 señales de deterioro cognitivo

---

## 🟡 Media prioridad

### 8. Thank You page con offer stack real
- **Contenido:** Ya escrito en `public/thank-you-content.md`
- **Acción:** Implementar la página con lead magnet + visión + offer stack

### 9. Blog post SEO #2
- **Keyword:** "Ejercicios cognitivos para pacientes con Alzheimer: evidencia y práctica"
- **Formato:** Similar al #1

### 10. Backstory publicado en landing
- **Archivo:** `public/about-coogni.md`
- **Acción:** Crear página `/about` con este contenido

---

## 📊 Cuenta actual de Coogni

- **Landing:** https://oriented-providers-navigate-grab.trycloudflare.com (local, necesita dominio)
- **Repo:** `kiwi-alpa-digital/coogni-landing`
- **Email sequence:** `public/email-sequence.md` (5 emails, escritos)
- **Lead magnet:** `public/lead-magnet-content.md` (12 páginas, escrito)
- **FAQ Schema:** Implementado en `index.html`
- **Blog:** `/blog` y `/blog/deteccion-deterioro-cognitivo`
- **OG image:** `/public/og-image.png`
- **Meta Pixel:** Placeholder en `index.html` (pendiente PIXEL_ID)

---

## 🎯 Orden recomendado para ejecutar

1. Meta Pixel ID (5 min) → permite remarketing desde día 1
2. Testimonios reales (10 min) → necesarios para ads
3. Dominio → 2 min configuración DNS
4. Email service → 15 min setup
5. Validación médica lead magnet → 30 min
6. Publicar lead magnet PDF → 10 min
