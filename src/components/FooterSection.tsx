import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useI18n } from "@/i18n/context"
import { translations } from "@/i18n/translations"

function FooterSection() {
  const { t } = useI18n()
  const f = translations.footer

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-border bg-card text-foreground"
    >
      <div className="mx-auto px-6 py-12 md:px-12 md:py-16 lg:px-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t(f.newsletter)}</h3>
            <p className="text-sm text-muted-foreground">{t(f.newsletterDesc)}</p>
            <div className="flex gap-2">
              <Input type="email" placeholder={t(f.emailPlaceholder)} className="flex-1" />
              <Button variant="cta" size="icon" aria-label={t(f.newsletter)}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t(f.links)}</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#problem" className="text-muted-foreground transition-colors hover:text-primary">{t(f.problem)}</a>
              <a href="#features" className="text-muted-foreground transition-colors hover:text-primary">{t(f.functionalitiesLink)}</a>
              <a href="#platform" className="text-muted-foreground transition-colors hover:text-primary">{t(f.platformLink)}</a>
              <a href="#waitlist" className="text-muted-foreground transition-colors hover:text-primary">{t(f.freeTrial)}</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t(f.contactTitle)}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Parque Científico de Madrid</p>
              <p>28049 Madrid, España</p>
              <p>Tel: +34 91 000 0000</p>
              <p>info@coogni.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t(f.followUs)}</h3>
            <TooltipProvider>
              <div className="flex gap-2">
                <Tooltip><TooltipTrigger asChild><Button variant="outline" size="icon" className="rounded-full" aria-label="Facebook"><Facebook className="h-4 w-4" /></Button></TooltipTrigger><TooltipContent><p>Facebook</p></TooltipContent></Tooltip>
                <Tooltip><TooltipTrigger asChild><Button variant="outline" size="icon" className="rounded-full" aria-label="Twitter"><Twitter className="h-4 w-4" /></Button></TooltipTrigger><TooltipContent><p>Twitter</p></TooltipContent></Tooltip>
                <Tooltip><TooltipTrigger asChild><Button variant="outline" size="icon" className="rounded-full" aria-label="Instagram"><Instagram className="h-4 w-4" /></Button></TooltipTrigger><TooltipContent><p>Instagram</p></TooltipContent></Tooltip>
                <Tooltip><TooltipTrigger asChild><Button variant="outline" size="icon" className="rounded-full" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></Button></TooltipTrigger><TooltipContent><p>LinkedIn</p></TooltipContent></Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">{t(f.copyright)}</p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">{t(f.privacy)}</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">{t(f.terms)}</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">{t(f.cookies)}</a>
          </nav>
        </div>
      </div>
    </motion.footer>
  )
}

export default FooterSection
