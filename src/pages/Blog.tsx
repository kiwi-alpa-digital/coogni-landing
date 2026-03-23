import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import FooterSection from "@/components/FooterSection";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    slug: "deteccion-deterioro-cognitivo",
    titleEs: "7 Señales de Deterioro Cognitivo que los Tests Clínicos No Detectan",
    titleEn: "7 Signs of Cognitive Decline That Clinical Tests Don't Detect",
    excerptEs:
      "El MMSE puede mostrar resultados normales mientras el deterioro cognitivo avanza silenciosamente. Descubre las 7 señales clínicas que permiten una detección temprana.",
    excerptEn:
      "The MMSE can show normal results while cognitive decline progresses silently. Discover 7 clinical signs that enable early detection.",
    date: "22 de Marzo 2026",
    dateEn: "March 22, 2026",
    readTime: 6,
    author: "Dr. Marta López",
    authorRole: "Neuropsicóloga Clínica — Coogni",
    tag: "Detección Temprana",
    tagEn: "Early Detection",
  },
];

const Blog = () => {
  const { locale } = useI18n();
  const es = locale === "es";

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative border-b border-border bg-background pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {es ? "Artículos clínicos" : "Clinical articles"}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {es ? "Blog" : "Blog"}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {es
                ? "Evidencia científica y prácticas clínicas para la detección temprana del deterioro cognitivo."
                : "Scientific evidence and clinical practices for early detection of cognitive decline."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Tag */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                  {es ? post.tag : post.tagEn}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {es ? post.titleEs : post.titleEn}
                </h2>

                {/* Excerpt */}
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {es ? post.excerptEs : post.excerptEn}
                </p>

                {/* Meta */}
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      ML
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {es ? post.date : post.dateEn}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime} min
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  {es ? "Leer artículo" : "Read article"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Coming soon placeholders */}
          {[
            {
              tag: es ? "Próximamente" : "Coming soon",
              titleEs: "Evaluación Neuropsicológica Remota: Guía Práctica 2026",
              titleEn: "Remote Neuropsychological Assessment: Practical Guide 2026",
              excerptEs: "Nuevas regulaciones y tecnologías para llevar las evaluaciones cognitivas más allá de la consulta.",
              excerptEn: "New regulations and technologies to bring cognitive assessments beyond the clinic.",
            },
            {
              tag: es ? "Próximamente" : "Coming soon",
              titleEs: "Cómo Coogni Integra IA en la Monitorización Cognitiva",
              titleEn: "How Coogni Integrates AI in Cognitive Monitoring",
              excerptEs: "Transparencia sobre los algoritmos que usamos para detectar cambios sutiles en la función cognitiva.",
              excerptEn: "Transparency about the algorithms we use to detect subtle changes in cognitive function.",
            },
          ].map((placeholder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            >
              <div className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-muted/30 p-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {placeholder.tag}
                </div>
                <h2 className="text-xl font-semibold text-muted-foreground">
                  {es ? placeholder.titleEs : placeholder.titleEn}
                </h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {es ? placeholder.excerptEs : placeholder.excerptEn}
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">
                    {es ? "Próximamente" : "Coming soon"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default Blog;
