import { useEffect, useRef } from 'react'
import { useI18n } from '@/i18n/context'

const MONTHS = ['M0','M3','M6','M9','M12','M15','M18','M21','M24','M27','M30','M33','M36']

const SIN_COOGNI = [100, 99, 98, 96, 93, 90, 86, 82, 77, 72, 67, 62, 57]
const CON_COOGNI = [100, 99, 98, 96, 94, 92, 89, 86, 82, 78, 73, 69, 65]

const DETECCION_CON = 3  // mes 9
const DETECCION_SIN = 6  // mes 18

export default function CoogniImpactChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<any>(null)
  const { locale } = useI18n()
  const es = locale === 'es'

  useEffect(() => {
    let Chart: any
    let script: HTMLScriptElement

    const init = () => {
      Chart = (window as any).Chart
      if (!Chart || !canvasRef.current) return

      if (chartRef.current) {
        chartRef.current.destroy()
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: 'line',
        data: {
          labels: MONTHS,
          datasets: [
            {
              label: es ? 'Sin Coogni' : 'Without Coogni',
              data: SIN_COOGNI,
              borderColor: '#C84B3A',
              backgroundColor: 'rgba(200,75,58,0.05)',
              fill: true,
              borderWidth: 2,
              pointRadius: MONTHS.map((_, i) => i === DETECCION_SIN ? 7 : 0),
              pointBackgroundColor: MONTHS.map((_, i) =>
                i === DETECCION_SIN ? '#C84B3A' : 'transparent'
              ),
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              tension: 0.4,
            },
            {
              label: es ? 'Con Coogni' : 'With Coogni',
              data: CON_COOGNI,
              borderColor: '#1D9E75',
              backgroundColor: 'rgba(29,158,117,0.06)',
              fill: true,
              borderWidth: 2,
              pointRadius: MONTHS.map((_, i) => i === DETECCION_CON ? 7 : 0),
              pointBackgroundColor: MONTHS.map((_, i) =>
                i === DETECCION_CON ? '#1D9E75' : 'transparent'
              ),
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: (items: any[]) =>
                  es
                    ? `Mes ${items[0].dataIndex * 3}`
                    : `Month ${items[0].dataIndex * 3}`,
                label: (ctx: any) => {
                  const val = ctx.parsed.y
                  if (val === null || val === undefined) return null
                  const name = ctx.datasetIndex === 0
                    ? (es ? 'Sin Coogni' : 'Without Coogni')
                    : (es ? 'Con Coogni' : 'With Coogni')
                  return ` ${name}: ${val}%`
                },
                afterBody: (items: any[]) => {
                  const i = items[0]?.dataIndex
                  const lines: string[] = []
                  if (i === DETECCION_CON) {
                    lines.push(
                      '',
                      es
                        ? '→ Coogni detecta patrón de deterioro'
                        : '→ Coogni detects decline pattern',
                      es
                        ? '  Intervención temprana iniciada'
                        : '  Early intervention started'
                    )
                  }
                  if (i === DETECCION_SIN) {
                    lines.push(
                      '',
                      es
                        ? '→ Detección con prueba clínica tradicional'
                        : '→ Traditional clinical test detection',
                      es
                        ? '  Deterioro ya establecido'
                        : '  Decline already established'
                    )
                  }
                  if (i > DETECCION_CON) {
                    const ganado = Math.round(CON_COOGNI[i] - SIN_COOGNI[i])
                    if (ganado > 0) {
                      lines.push(
                        '',
                        es
                          ? `  +${ganado} pts preservados con intervención temprana`
                          : `  +${ganado} pts preserved with early intervention`
                      )
                    }
                  }
                  return lines
                },
              },
              backgroundColor: 'rgba(20,20,20,0.92)',
              titleFont: { size: 11 },
              bodyFont: { size: 11 },
              padding: 10,
            },
          },
          scales: {
            x: {
              grid: { color: 'rgba(128,128,128,0.1)' },
              ticks: { font: { size: 10 }, color: '#888780' },
            },
            y: {
              min: 50,
              max: 105,
              grid: { color: 'rgba(128,128,128,0.1)' },
              ticks: {
                font: { size: 10 },
                color: '#888780',
                callback: (v: number) => v + '%',
              },
              title: {
                display: true,
                text: es ? 'Función cognitiva (%)' : 'Cognitive function (%)',
                font: { size: 10 },
                color: '#888780',
              },
            },
          },
        },
      })
    }

    if ((window as any).Chart) {
      init()
    } else {
      script = document.createElement('script')
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js'
      script.onload = init
      document.head.appendChild(script)
    }

    return () => {
      chartRef.current?.destroy()
      chartRef.current = null
    }
  }, [locale])

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-5 shadow-[var(--card-shadow)]">

      {/* Métricas superiores */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          {
            value: '18 meses',
            label: es ? 'Ventana de intervención ganada' : 'Intervention window gained',
            color: 'text-primary',
          },
          {
            value: '~8 pts',
            label: es ? 'Función cognitiva preservada a 3 años' : 'Cognitive function preserved at 3 years',
            color: 'text-primary',
          },
          {
            value: '3×',
            label: es ? 'Detección más temprana' : 'Earlier detection',
            color: 'text-primary',
          },
        ].map((m, i) => (
          <div
            key={i}
            className="rounded-xl bg-muted px-3 py-3 text-center"
          >
            <p className={`text-lg font-semibold ${m.color}`}>{m.value}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap gap-4 mb-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#C84B3A]" />
          {es ? 'Sin Coogni — sin intervención temprana' : 'Without Coogni — no early intervention'}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#1D9E75]" />
          {es ? 'Con Coogni — intervención desde mes 9' : 'With Coogni — intervention from month 9'}
        </span>
      </div>

      {/* Gráfico */}
      <div className="relative w-full h-[220px]">
        <canvas ref={canvasRef} />
      </div>

      {/* Notas inferiores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs">
        <div className="flex items-start gap-2 rounded-lg bg-green-500/5 border border-green-500/15 px-3 py-2">
          <span className="mt-0.5 w-2 h-2 rounded-full bg-[#1D9E75] flex-shrink-0" />
          <div>
            <span className="font-medium text-[#1D9E75]">
              {es ? 'Con Coogni — mes 9' : 'With Coogni — month 9'}
            </span>
            <p className="text-muted-foreground mt-0.5 leading-snug">
              {es
                ? 'La intervención no detiene el deterioro, pero lo ralentiza mientras hay más plasticidad disponible.'
                : 'Intervention does not stop decline, but slows it while more plasticity is available.'}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2 rounded-lg bg-red-500/5 border border-red-500/15 px-3 py-2">
          <span className="mt-0.5 w-2 h-2 rounded-full bg-[#C84B3A] flex-shrink-0" />
          <div>
            <span className="font-medium text-[#C84B3A]">
              {es ? 'Sin Coogni — mes 18' : 'Without Coogni — month 18'}
            </span>
            <p className="text-muted-foreground mt-0.5 leading-snug">
              {es
                ? 'Detección tardía. El deterioro está establecido y el margen de intervención se ha reducido.'
                : 'Late detection. Decline is established and the intervention margin has reduced.'}
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-[10px] text-muted-foreground/60 text-center mt-3 leading-snug">
        {es
          ? 'Representación ilustrativa basada en evidencia sobre intervención temprana en deterioro cognitivo leve. Los datos individuales varían según paciente, diagnóstico e intervención.'
          : 'Illustrative representation based on evidence on early intervention in mild cognitive impairment. Individual data varies by patient, diagnosis and intervention.'}
      </p>
    </div>
  )
}
