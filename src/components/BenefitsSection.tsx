import { useI18n } from '@/i18n/context'
import { translations } from '@/i18n/translations'

const BenefitsSection = () => {
  const { t } = useI18n()
  const b = translations.benefits

  return (
    <section id="benefits" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold text-foreground lg:text-5xl">
            {t(b.title)}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t(b.desc)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
