import * as React from "react"
import { Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useI18n } from "@/i18n/context"
import logoCoogni from '@/assets/logo-coogni.png'

function FooterSection() {
  const { locale } = useI18n()
  const es = locale === 'es'

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12 lg:px-20">

        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Col 1: About */}
          <div className="space-y-4">
            <img src={logoCoogni} alt="Coogni" className="h-8" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {es
                ? 'Plataforma de neurociencia clínica con IA predictiva para la detección temprana del deterioro cognitivo. Fichas clínicas, ejercicios cognitivos y equipos multidisciplinares.'
                : 'Clinical neuroscience platform with predictive AI for early detection of cognitive decline. Clinical records, cognitive exercises and multidisciplinary teams.'}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-muted-foreground">Síguenos:</span>
              <a href="https://linkedin.com/company/coogni" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Col 2: Producto */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              {es ? 'Producto' : 'Product'}
            </h3>
            <nav className="flex flex-col space-y-2.5 text-sm">
              <a href="#features" className="text-muted-foreground transition-colors hover:text-primary">
                {es ? 'Funcionalidades' : 'Features'}
              </a>
              <a href="#faq" className="text-muted-foreground transition-colors hover:text-primary">
                FAQ
              </a>
              <a href="#waitlist" className="text-muted-foreground transition-colors hover:text-primary">
                {es ? 'Unirse a la beta' : 'Join beta'}
              </a>
            </nav>
          </div>

          {/* Col 3: Para quién */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              {es ? 'Para quién' : "Who it's for"}
            </h3>
            <nav className="flex flex-col space-y-2.5 text-sm">
              <span className="text-muted-foreground">
                {es ? 'Neurólogos' : 'Neurologists'}
              </span>
              <span className="text-muted-foreground">
                {es ? 'Neuropsicólogos' : 'Neuropsychologists'}
              </span>
              <span className="text-muted-foreground">
                {es ? 'Terapeutas ocupacionales' : 'Occupational therapists'}
              </span>
              <span className="text-muted-foreground">
                {es ? 'Centros de rehabilitación' : 'Rehabilitation centers'}
              </span>
              <span className="text-muted-foreground">
                {es ? 'Cuidadores y familias' : 'Caregivers and families'}
              </span>
            </nav>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Coogni. {es ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
          <nav className="flex gap-5 text-sm">
            <Link to="/privacidad" className="text-muted-foreground transition-colors hover:text-primary">
              {es ? 'Privacidad' : 'Privacy'}
            </Link>
            <Link to="/terminos" className="text-muted-foreground transition-colors hover:text-primary">
              {es ? 'Términos' : 'Terms'}
            </Link>
            <Link to="/cookies" className="text-muted-foreground transition-colors hover:text-primary">
              Cookies
            </Link>
            <a href="mailto:hello@coogni.com" className="text-muted-foreground transition-colors hover:text-primary">
              hello@coogni.com
            </a>
          </nav>
        </div>

        {/* Made with love */}
        <div className="mt-6 flex justify-center">
          <p className="text-xs text-muted-foreground/60">
            {es ? 'Hecho con' : 'Made with'} ❤️ {es ? 'en España' : 'in Spain'} · {es ? 'alojamiento de datos en la UE' : 'EU data hosting'}
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default FooterSection
