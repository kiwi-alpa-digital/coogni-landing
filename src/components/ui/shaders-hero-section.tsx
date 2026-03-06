"use client"

import { PulsingBorder, MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-neutral-900"
    >
      {/* SVG Filters */}
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feFlood floodColor="#ffffff" floodOpacity="0.3" result="glowColor" />
            <feComposite in="glowColor" in2="coloredBlur" operator="in" />
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#ffffff" floodOpacity="0.2" result="glowColor" />
            <feComposite in="glowColor" in2="blur" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* Background Shaders */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          style={{ width: "100%", height: "100%" }}
          colors={["#8B6914", "#C4A35A", "#E8D5B7", "#6B4E2A"]}
          speed={0.2}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-black/10" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export function PulsingCircle() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-28 w-28 sm:h-36 sm:w-36">
        {/* Pulsing Border Circle */}
        <PulsingBorder
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            position: "absolute",
            inset: 0,
          }}
          colors={["#cc3333", "#cc9933", "#99cc33"]}
          speed={0.8}
        />

        {/* Rotating Text Around the Pulsing Border */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text className="fill-white/70 text-[11px] font-medium tracking-[0.2em] uppercase">
              <textPath href="#circlePath">
                Precisión clínica • IA predictiva • Colaboración • Datos seguros •
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
