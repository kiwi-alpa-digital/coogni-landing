import { motion } from 'framer-motion'

export function CognitiveChart() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className="hidden lg:flex flex-col items-center justify-center w-full"
    >
      {/* Main chart card */}
      <div className="relative w-full rounded-2xl border border-border bg-card/90 backdrop-blur-sm overflow-hidden">

        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-border/50">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground text-center">
            Deterioro cognitivo — Paciente tipo
          </p>
        </div>

        {/* SVG Chart */}
        <div className="px-4 pt-3 pb-2">
          <svg viewBox="0 0 420 220" className="w-full" aria-hidden="true">

            {/* Y-axis label */}
            <text x="8" y="110" textAnchor="middle" fontSize="8" fill="#94a3b8"
              transform="rotate(-90, 8, 110)">Función cognitiva</text>

            {/* X-axis label */}
            <text x="210" y="218" textAnchor="middle" fontSize="8" fill="#94a3b8">Tiempo</text>

            {/* Grid lines */}
            {[0.25, 0.5, 0.75].map((y) => (
              <line key={y} x1="38" y1={y * 170 + 20} x2="410" y2={y * 170 + 20}
                stroke="currentColor" strokeWidth="0.5" className="text-border/60" />
            ))}

            {/* Y-axis ticks */}
            <text x="36" y="24" textAnchor="end" fontSize="7" fill="#94a3b8">100%</text>
            <text x="36" y="69" textAnchor="end" fontSize="7" fill="#94a3b8">75%</text>
            <text x="36" y="114" textAnchor="end" fontSize="7" fill="#94a3b8">50%</text>
            <text x="36" y="159" textAnchor="end" fontSize="7" fill="#94a3b8">25%</text>
            <text x="36" y="194" textAnchor="end" fontSize="7" fill="#94a3b8">0%</text>

            {/* Axis lines */}
            <line x1="38" y1="20" x2="38" y2="190" stroke="#e2e8f0" strokeWidth="1" />
            <line x1="38" y1="190" x2="410" y2="190" stroke="#e2e8f0" strokeWidth="1" />

            {/* 18-months highlight zone */}
            <motion.rect
              x="38" y="20"
              width="165" height="170"
              fill="#f59e0b"
              fillOpacity={0.06}
              rx="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
            />

            {/* Decline curve — animated */}
            <motion.path
              d="M 38,30 C 80,32 120,40 160,55 C 200,70 220,90 240,105 C 260,120 280,145 310,165 C 340,178 370,186 400,190"
              fill="none"
              stroke="url(#declineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
            />

            {/* Coogni intervention line */}
            <motion.line
              x1="240" y1="20"
              x2="240" y2="190"
              stroke="#0d9488"
              strokeWidth="2"
              strokeDasharray="5 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.4 }}
            />

            {/* "AHORA" dot */}
            <motion.circle cx="240" cy="105" r="8" fill="#0d9488"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.5 }}
            />
            <motion.circle cx="240" cy="105" r="8" fill="none" stroke="#0d9488" strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2.5], opacity: [0.7, 0] }}
              transition={{ delay: 2.5, duration: 1.5, repeat: 2 }}
            />

            {/* "Antes de Coogni" label on curve */}
            <motion.text x="110" y="52"
              textAnchor="middle" fontSize="9" fill="#94a3b8" fontWeight="500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}>
              Antes de Coogni
            </motion.text>

            {/* "18 meses" bracket line */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
              <line x1="100" y1="25" x2="100" y2="188" stroke="#f59e0b" strokeWidth="1.2"
                strokeDasharray="3 3" />
              <line x1="240" y1="25" x2="240" y2="188" stroke="#f59e0b" strokeWidth="1.2"
                strokeDasharray="3 3" />
              {/* Bracket top */}
              <line x1="100" y1="25" x2="240" y2="25" stroke="#f59e0b" strokeWidth="1.2" />
              {/* Bracket bottom */}
              <line x1="100" y1="188" x2="240" y2="188" stroke="#f59e0b" strokeWidth="1.2" />
              <text x="170" y="16" textAnchor="middle" fontSize="10" fill="#f59e0b" fontWeight="700">
                18 meses
              </text>
            </motion.g>

            {/* "AHORA" label */}
            <motion.text x="240" y="93"
              textAnchor="middle" fontSize="9" fill="#0d9488" fontWeight="700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}>
              AHORA
            </motion.text>

            {/* Gradient */}
            <defs>
              <linearGradient id="declineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.6" />
                <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 pb-4 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <svg width="24" height="8">
              <defs>
                <linearGradient id="legendGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0d9488" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
              <line x1="0" y1="4" x2="24" y2="4" stroke="url(#legendGrad)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span>Deterioro cognitivo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-px border-t-2 border-dashed border-primary" />
            <span className="text-primary font-medium">Coogni detecta</span>
          </div>
        </div>
      </div>

      {/* Bottom stat */}
      <motion.div
        className="mt-3 rounded-xl border border-border bg-card/90 backdrop-blur-sm px-5 py-3 shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.4 }}
      >
        <p className="text-xs text-muted-foreground text-center">
          <span className="text-base font-bold text-amber-400">18 meses</span>{' '}
          <span>de deterioro no detectado —</span>{' '}
          <span className="text-primary font-medium">Coogni lo detecta antes</span>
        </p>
      </motion.div>
    </motion.div>
  )
}
