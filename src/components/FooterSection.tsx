import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

function FooterSection() {
  return (
    <footer className="relative border-t border-border bg-card text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Mantente informado</h3>
            <p className="text-sm text-muted-foreground">
              Suscríbete para recibir novedades sobre nuestra plataforma y avances en neurociencia clínica.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="flex-1"
              />
              <Button variant="cta" size="icon" aria-label="Suscribirse">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Enlaces</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Inicio</a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Sobre Nosotros</a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Funcionalidades</a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Investigación</a>
              <a href="#waitlist" className="text-muted-foreground transition-colors hover:text-primary">Contacto</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Parque Científico de Madrid</p>
              <p>28049 Madrid, España</p>
              <p>Tel: +34 91 000 0000</p>
              <p>info@neuroCDSS.com</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Síguenos</h3>
            <TooltipProvider>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" aria-label="Facebook">
                      <Facebook className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Facebook</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" aria-label="Twitter">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Twitter</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" aria-label="Instagram">
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Instagram</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>LinkedIn</p></TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 NeuroCDSS. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Política de Privacidad</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Términos de Servicio</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
