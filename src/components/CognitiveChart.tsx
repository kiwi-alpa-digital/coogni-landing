import { motion } from 'framer-motion'

export function CognitiveChart() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      className="hidden lg:flex flex-col w-full max-w-sm xl:max-w-md"
    >
      {/* Chart card */}
      <div className="relative w-full rounded-2xl border border-border bg-card/90 backdrop-blur-sm overflow-hidden">

        {/* Title */}
        <div className="px-5 pt-4 pb-2 border-b border-border/50">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground text-center">
            Impacto de Coogni en la detección
          </p>
        </div>

        {/* Chart */}
        <div className="px-5 py-4">
          <div className="relative h-40 w-full">

            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[7px] text-muted-foreground/50">
              <span>100%</span>
              <span>50%</span>
              <span>0%</span>
            </div>

            {/* Chart area */}
            <div className="absolute left-5 right-0 top-0 bottom-0">

              {/* Horizontal grid */}
              <div className="absolute left-0 right-0 top-0 border-t border-border/30" />
              <div className="absolute left-0 right-0 top-1/2 border-t border-border/30" />
              <div className="absolute left-0 right-0 bottom-0 border-b border-border/30" />

              {/* SVG chart */}
              <svg viewBox="0 0 280 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">

                {/* ===== WITHOUT COOGNI (red) ===== */}
                {/* Area */}
                <motion.path
                  d="M 0,12 C 30,14 60,22 90,36 C 120,52 140,70 155,82 L 155,100 L 0,100 Z"
                  fill="#ef4444"
                  fillOpacity={0.08}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                />
                {/* Line */}
                <motion.path
                  d="M 0,12 C 30,14 60,22 90,36 C 120,52 140,70 155,82"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />

                {/* ===== WITH COOGNI (teal) — same decline, detected 18mo earlier ===== */}
                {/* Area */}
                <motion.path
                  d="M 0,12 C 30,14 60,22 90,36 C 120,52 140,70 155,82 L 155,0 L 0,0 Z"
                  fill="#0d9488"
                  fillOpacity={0.1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                />
                {/* Line */}
                <motion.path
                  d="M 0,12 C 30,14 60,22 90,36 C 120,52 140,70 155,82"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="6 3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />

                {/* Detection markers */}
                {/* Without Coogni — late detection */}
                <motion.circle cx="155" cy="82" r="5" fill="#ef4444"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.4, 1] }}
                  transition={{ delay: 2.2 }}
                />
                {/* With Coogni — early detection */}
                <motion.circle cx="100" cy="48" r="5" fill="#0d9488"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.4, 1] }}
                  transition={{ delay: 2.0 }}
                />

                {/* Early detection line */}
                <motion.line x1="100" y1="0" x2="100" y2="100"
                  stroke="#0d9488" strokeWidth="1.5" strokeDasharray="3 2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.1 }}
                />
              </svg>

              {/* Labels — positioned over the chart */}
              {/* Without Coogni label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                className="absolute left-[52%] top-[15%]"
              >
                <span className="text-[8px] text-red-400 font-medium whitespace-nowrap">Sin Coogni</span>
              </motion.div>

              {/* With Coogni label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                className="absolute left-[33%] top-[30%]"
              >
                <span className="text-[8px] text-primary font-medium whitespace-nowrap">Con Coogni</span>
              </motion.div>

              {/* Late detection label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute right-0 top-[76%]"
              >
                <span className="text-[7px] text-red-400/70 whitespace-nowrap">Tardía</span>
              </motion.div>

              {/* Early detection label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3 }}
                className="absolute left-[33%] top-[40%]"
              >
                <span className="text-[7px] text-primary/70 whitespace-nowrap">Temprana</span>
              </motion.div>

              {/* Time saved bracket */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 }}
                className="absolute right-[18%] top-[10%]"
              >
                <div className="border border-amber-400/50 rounded px-1 py-0.5">
                  <span className="text-[8px] font-bold text-amber-400 whitespace-nowrap">−18 meses</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 pb-4 px-5 border-t border-border/50 pt-3 text-[9px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 rounded-full bg-red-400" />
            <span className="text-red-400/80">Detección tardía</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 rounded-full bg-primary border-dashed border-t" style={{borderTopStyle: 'dashed', borderTopWidth: '1.5px'}} />
            <span className="text-primary">Detección temprana</span>
          </div>
        </div>
      </div>

      {/* Impact stat */}
      <motion.div
        className="mt-3 rounded-xl border border-border bg-card/90 backdrop-blur-sm px-4 py-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.4 }}
      >
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          Coogni detecta el deterioro <span className="text-primary font-semibold">18 meses antes</span> — permitiendo intervenir cuando ainda hay tempo.
        </p>
      </motion.div>
    </motion.div>
  )
}
