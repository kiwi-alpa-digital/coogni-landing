import { motion } from 'framer-motion'

export function CognitiveChart() {
  const pathLength = 1200

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className="hidden lg:flex flex-col items-center justify-center w-full max-w-md xl:max-w-lg"
    >
      {/* Chart card */}
      <div className="relative w-full rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-center">
          Deterioro cognitivo — Paciente tipo
        </p>

        {/* SVG Chart */}
        <svg viewBox="0 0 400 200" className="w-full h-auto" aria-hidden="true">
          {/* Grid lines */}
          {[0.25, 0.5, 0.75].map((y) => (
            <line
              key={y}
              x1="40" y1={y * 180 + 10}
              x2="390" y2={y * 180 + 10}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border"
            />
          ))}

          {/* Decline curve — animated */}
          <motion.path
            d="M 40,20 C 80,22 120,30 160,45 C 200,60 220,80 240,95 C 265,115 280,140 310,160 C 340,175 370,185 390,190"
            fill="none"
            stroke="url(#declineGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
            style={{ pathLength }}
          />

          {/* Coogni intervention line — appears after curve */}
          <motion.line
            x1="245" y1="5"
            x2="245" y2="195"
            stroke="#0d9488"
            strokeWidth="2"
            strokeDasharray="4 3"
            initial={{ opacity: 0, y1: 0, y2: 0 }}
            animate={{ opacity: 1, y1: 5, y2: 195 }}
            transition={{ delay: 2.2, duration: 0.4 }}
          />

          {/* Coogni point — pulses when line appears */}
          <motion.circle
            cx="245" cy="100"
            r="6"
            fill="#0d9488"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.5 }}
          />
          <motion.circle
            cx="245" cy="100"
            r="6"
            fill="none"
            stroke="#0d9488"
            strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
            transition={{ delay: 2.5, duration: 1.5, repeat: 2 }}
          />

          {/* "18 meses" label */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
            <line x1="195" y1="155" x2="195" y2="170" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/50" strokeDasharray="2 2" />
            <text x="195" y="183" textAnchor="middle" fontSize="9" fill="#94a3b8" fontWeight="500">18 meses</text>
          </motion.g>

          {/* "AHORA" label */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
            <text x="245" y="88" textAnchor="middle" fontSize="9" fill="#0d9488" fontWeight="700">AHORA</text>
          </motion.g>

          {/* "Antes de Coogni" label */}
          <motion.text
            x="120" y="145"
            textAnchor="middle"
            fontSize="8.5"
            fill="#64748b"
            fontWeight="400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            Antes de Coogni
          </motion.text>

          {/* Gradient definition */}
          <defs>
            <linearGradient id="declineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 rounded-full bg-gradient-to-r from-teal-500/50 via-amber-500/80 to-red-500" />
            <span>Deterioro cognitivo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-px border-t-2 border-dashed border-primary" />
            <span className="text-primary font-medium">Coogni detecta</span>
          </div>
        </div>
      </div>

      {/* Floating stat */}
      <motion.div
        className="mt-3 rounded-xl border border-border bg-card/80 backdrop-blur-sm px-4 py-2.5 shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.4 }}
      >
        <p className="text-xs text-muted-foreground text-center">
          <span className="text-lg font-bold text-primary">18 meses</span>{' '}
          <span>de deterioro no detectado</span>
        </p>
      </motion.div>
    </motion.div>
  )
}
