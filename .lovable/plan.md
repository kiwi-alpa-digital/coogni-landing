

## Plan: Add Pricing Section to Landing Page

### What to build
A new `PricingSection` component with 4 plan cards (Gratis, Pro, Clínica, Enterprise) placed between BenefitsSection and WaitlistSection. CTA buttons scroll to the waitlist section.

### Files to create/modify

**1. `src/i18n/translations.ts`** — Add `pricing` translation block with all plan names, prices, features, and CTA labels.

**2. `src/components/PricingSection.tsx`** — New component:
- Section header matching existing style (uppercase badge, accent title, subtitle)
- 4 cards in a responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)
- Each card: plan name, price, feature list with check icons, CTA button
- Clínica card highlighted as "recommended" with primary border/accent
- Gratis: 0€, exercises, routines, progress stats
- Pro (~39€/mes): clinical files, dashboard, evolutionary chart, up to 100 patients
- Clínica (~99€/mes): everything in Pro + AI predictive, clustering, auto recommendations, multidisciplinary teams, unlimited patients — highlighted as popular
- Enterprise (custom): unlimited professionals, integrations, dedicated support
- CTA buttons link to `#waitlist` section

**3. `src/pages/Index.tsx`** — Import and add `<PricingSection />` between `<BenefitsSection />` and `<WaitlistSection />`.

### Design approach
- Match existing section patterns: `AnimatedGroup` for header, consistent spacing/typography
- Cards use existing `Card` components with `bg-card border` styling
- Popular plan gets `border-primary` + "Recomendado" badge
- Green checkmarks for feature lists using lucide `Check` icon

