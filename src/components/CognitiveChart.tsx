import { motion } from 'framer-motion'

export function CognitiveChart() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className="hidden lg:flex flex-col items-center justify-center w-full max-w-md xl:max-w-lg"
    >
      {/* Chart card */}
      <div className="relative w-full rounded-2xl border border-border bg-card/90 backdrop-blur-sm overflow-hidden">

        {/* Title */}
        <div className="px-5 pt-5 pb-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground text-center">
            Deterioro cognitivo — Paciente tipo
          </p>
        </div>

        {/* Chart area */}
        <div className="px-5 pb-4">
          <div className="relative h-44 w-full">

            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[8px] text-muted-foreground/60">
              <span>100%</span>
              <span>50%</span>
              <span>0%</span>
            </div>

            {/* Chart SVG */}
            <div className="absolute left-6 right-0 top-0 bottom-0">
              {/* Horizontal grid lines */}
              <div className="absolute left-0 right-0 top-0 border-t border-border/40" />
              <div className="absolute left-0 right-0 top-1/2 border-t border-border/40" />
              <div className="absolute left-0 right-0 bottom-0 border-b border-border/40" />

              {/* Decline area — gradient fill */}
              <svg viewBox="0 0 320 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="areaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity="0.15" />
                    <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.25" />
                  </linearGradient>
                </defs>

                {/* Area fill */}
                <motion.path
                  d="M 0,10 C 40,12 80,20 120,32 C 160,45 200,60 240,68 C 270,74 295,80 320,82 L 320,100 L 0,100 Z"
                  fill="url(#areaGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />

                {/* Decline line */}
                <motion.path
                  d="M 0,10 C 40,12 80,20 120,32 C 160,45 200,60 240,68 C 270,74 295,80 320,82"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
                  style={{ pathLength: 1 }}
                />
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="55%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>

                {/* Coogni line */}
                <motion.line
                  x1="240" y1="0" x2="240" y2="100"
                  stroke="#0d9488"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                />

                {/* Now dot */}
                <motion.circle cx="240" cy="68" r="5" fill="#0d9488"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.4, 1] }}
                  transition={{ delay: 2.1, duration: 0.4 }}
                />
              </svg>

              {/* "18 meses" label */}
              <motion.div
                className="absolute top-0 bottom-0 w-px bg-amber-400/40"
                style={{ left: '0%', width: '1px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-[9px] font-bold text-amber-400">18 meses</span>
                </div>
              </motion.div>

              {/* Before Coogni label */}
              <motion.div
                className="absolute"
                style={{ left: '15%', top: '15%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <span className="text-[8px] text-muted-foreground/70 whitespace-nowrap">Antes de Coogni</span>
              </motion.div>

              {/* AHORA label */}
              <motion.div
                className="absolute"
                style={{ left: 'calc(240/320*100%)', top: '52%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <span className="text-[8px] font-bold text-primary whitespace-nowrap -translate-x-1/2">AHORA</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 pb-4 px-5 text-[9px] text-muted-foreground border-t border-border/50 pt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-0.5 rounded-full bg-gradient-to-r from-primary via-amber-400 to-red-500" />
            <span>Deterioro cognitivo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-px border-t-2 border-dashed border-primary" />
            <span className="text-primary font-medium">Coogni detecta</span>
          </div>
        </div>
      </div>

      {/* Stat */}
      <motion.div
        className="mt-3 rounded-xl border border-border bg-card/90 backdrop-blur-sm px-4 py-2.5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.4 }}
      >
        <p className="text-xs text-muted-foreground text-center">
          <span className="font-bold text-amber-400">18 meses</span>
          {' '}de deterioro no detectado
        </p>
      </motion.div>
    </motion.div>
  )
}
