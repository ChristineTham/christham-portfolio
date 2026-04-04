import React, { createContext, useContext, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue } from "motion/react"

interface ParallaxContextValue {
  scrollY: ReturnType<typeof useMotionValue<number>>
}

const ParallaxContext = createContext<ParallaxContextValue | null>(null)

interface ParallaxProps {
  pages: number
  children: React.ReactNode
}

export function Parallax({ pages, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ container: ref })

  return (
    <ParallaxContext.Provider value={{ scrollY }}>
      <div
        ref={ref}
        style={{
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <div style={{ height: `${pages * 100}vh`, position: "relative" }}>
          {children}
        </div>
      </div>
    </ParallaxContext.Provider>
  )
}

interface ParallaxLayerProps {
  offset: number
  speed: number
  factor?: number
  children?: React.ReactNode
  className?: string
}

export function ParallaxLayer({
  offset,
  speed,
  factor = 1,
  children,
  className,
}: ParallaxLayerProps) {
  const ctx = useContext(ParallaxContext)
  // Each unit of scroll moves the viewport by 100vh worth of pixels.
  // A layer with speed S scrolls at rate S relative to the scroll container:
  //   y = scrollY * (1 - speed)   (0 = fixed, 1 = normal scroll)
  //
  // useMotionValue is called unconditionally (rules of hooks) and used as a
  // stable zero-value fallback when ParallaxLayer is rendered outside a
  // Parallax container (e.g. during SSR or tests).
  const fallback = useMotionValue(0)
  if (process.env.NODE_ENV !== "production" && !ctx) {
    console.warn("ParallaxLayer must be used inside a Parallax component.")
  }
  const scrollY = ctx ? ctx.scrollY : fallback
  const y = useTransform(scrollY, (v: number) => v * (1 - speed))

  return (
    <motion.div
      style={{
        position: "absolute",
        top: `${offset * 100}vh`,
        height: `${factor * 100}vh`,
        width: "100%",
        y,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
