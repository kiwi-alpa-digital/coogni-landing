import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import FooterSection from "@/components/FooterSection";
import { ArrowLeft, Clock, CalendarDays, BookOpen, AlertCircle } from "lucide-react";
import { blogPost1, type BlogSignal } from "./blogData";

interface BlogPostProps {
  post?: typeof blogPost1;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const { slug } = useParams();
  const { locale } = useI18n();
  const es = locale === "es";
  const [readingProgress, setReadingProgress] = useState(0);

  // Select post by slug if not provided
  const activePost = post ?? (slug === blogPost1.slug ? blogPost1 : null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadingProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!activePost) {
    return <Navigate to="/blog" replace />;
  }

  const content = es ? activePost.content : activePost.contentEn;

  return (
    <main className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-secondary">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header */}
      <section className="border-b border-border bg-background pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
          {/* Back link */}
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {es ? "Volver al blog" : "Back to blog"}
          </Link>

          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Tag */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {es ? activePost.tag : activePost.tagEn}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {es ? activePost.titleEs : activePost.titleEn}
              </h1>

              {/* Excerpt */}
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {es ? activePost.excerptEs : activePost.excerptEn}
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-y border-border py-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {activePost.author
                      .split(" ")
                      .map((n) => n[0])
                      .filter((_, i, a) => i === 0 || i === a.length - 1)
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{activePost.author}</p>
                    <p className="text-xs">{activePost.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    {es ? activePost.date : activePost.dateEn}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {activePost.readTime} {es ? "min de lectura" : "min read"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    {es ? "7 señales" : "7 signs"}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg leading-relaxed text-foreground">
              {es
                ? "El MMSE (Mini-Mental State Examination) puede mostrar resultados normales mientras el deterioro cognitivo avanza silenciosamente durante 3-5 años. La literatura científica reconoce que los tests de cribado tienen limitaciones significativas en la detección temprana."
                : "The MMSE (Mini-Mental State Examination) can show normal results while cognitive decline progresses silently for 3-5 years. Scientific literature acknowledges that screening tests have significant limitations in early detection."}
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              {es
                ? "Este artículo presenta 7 señales clínicas que pueden detectarse antes de que el deterioro sea visible en las pruebas tradicionales."
                : "This article presents 7 clinical signs that can be detected before deterioration is visible in traditional tests."}
            </p>
          </motion.div>

          {/* Signals */}
          <div className="mt-10 space-y-8">
            {activePost.signals.map((signal: BlogSignal, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                {/* Signal number + title */}
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {signal.title}
                  </h2>
                </div>

                {/* Signal grid */}
                <div className="ml-12 grid gap-4 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {es ? "Descripción" : "Description"}
                    </p>
                    <p className="mt-1 text-sm text-foreground leading-relaxed">
                      {signal.description}
                    </p>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {es ? "Contexto clínico" : "Clinical context"}
                    </p>
                    <p className="mt-1 text-sm text-foreground leading-relaxed">
                      {signal.clinicalContext}
                    </p>
                  </div>
                  <div className="rounded-xl bg-primary/5 p-4 md:col-span-1">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="h-3.5 w-3.5 text-primary" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {es ? "Qué hacer" : "What to do"}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-foreground leading-relaxed">
                      {signal.action}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {es ? "Conclusión" : "Conclusion"}
            </h3>
            <p className="mt-3 text-foreground leading-relaxed">
              {es
                ? "Ninguna de estas señales, aisladamente, confirma deterioro cognitivo. Pero la presencia de 3 o más, o el empeoramiento progresivo de una sola, justifica una evaluación neuropsicológica completa. Coogni permite monitorizar estas señales de forma sistemática y alertar al profesional cuando se detectan cambios."
                : "None of these signs, in isolation, confirms cognitive decline. But the presence of 3 or more, or the progressive worsening of a single one, justifies a complete neuropsychological evaluation. Coogni allows you to monitor these signs systematically and alert the professional when changes are detected."}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 rounded-2xl border border-border bg-card p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {es
                ? "¿Quieres el protocolo completo?"
                : "Do you want the complete protocol?"}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {es
                ? "Descarga nuestra guía con el protocolo de evaluación de las 7 señales, escalas validadas y plan de monitorización para tus pacientes."
                : "Download our guide with the evaluation protocol for the 7 signs, validated scales and monitoring plan for your patients."}
            </p>
            <Link
              to={activePost.ctaLink}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              {es ? activePost.ctaText : activePost.ctaTextEn}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Related Articles (placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-16 border-t border-border pt-12"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {es ? "Artículos relacionados" : "Related articles"}
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  titleEs: "Evaluación Neuropsicológica Remota: Guía Práctica 2026",
                  titleEn: "Remote Neuropsychological Assessment: Practical Guide 2026",
                  tag: es ? "Próximamente" : "Coming soon",
                },
                {
                  titleEs: "Cómo Coogni Integra IA en la Monitorización Cognitiva",
                  titleEn: "How Coogni Integrates AI in Cognitive Monitoring",
                  tag: es ? "Próximamente" : "Coming soon",
                },
              ].map((related, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-dashed border-border bg-muted/30 p-5"
                >
                  <span className="text-xs font-medium text-muted-foreground">
                    {related.tag}
                  </span>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {es ? related.titleEs : related.titleEn}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default BlogPost;
