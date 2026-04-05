'use client'

import React, { createContext, useContext, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, type MotionValue } from "motion/react"

interface ParallaxContextValue {
  scrollY: ReturnType<typeof useMotionValue<number>>
  viewportHeight: ReturnType<typeof useMotionValue<number>>
}

const ParallaxContext = createContext<ParallaxContextValue | null>(null)

interface ParallaxProps {
  pages: number
  children: React.ReactNode
}

export function Parallax({ pages, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ container: ref })
  // Starts at 0 (SSR-safe). Updated to the real clientHeight after mount so
  // that ParallaxLayer transforms recalculate from the correct initial value
  // without causing a hydration mismatch.
  const viewportHeight = useMotionValue(0)

  useEffect(() => {
    if (ref.current) {
      viewportHeight.set(ref.current.clientHeight)
    }
  }, [viewportHeight])

  return (
    <ParallaxContext.Provider value={{ scrollY, viewportHeight }}>
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
  style?: React.CSSProperties
}

export function ParallaxLayer({
  offset,
  speed,
  factor = 1,
  children,
  className,
  style,
}: ParallaxLayerProps) {
  const ctx = useContext(ParallaxContext)
  // useMotionValue is called unconditionally (rules of hooks) and used as a
  // stable zero-value fallback when ParallaxLayer is rendered outside a
  // Parallax container (e.g. during SSR or tests).
  const fallbackScroll = useMotionValue(0)
  const fallbackVH = useMotionValue(0)
  if (process.env.NODE_ENV !== "production" && !ctx) {
    console.warn("ParallaxLayer must be used inside a Parallax component.")
  }
  const scrollY = ctx ? ctx.scrollY : fallbackScroll
  const viewportHeight = ctx ? ctx.viewportHeight : fallbackVH

  // Replicates @react-spring/parallax behaviour:
  //   translateY = -(scrollY - offset * viewportHeight) * speed
  // speed=0  → layer scrolls with the page (no parallax)
  // speed>0  → layer scrolls slower than the page (appears to lag behind)
  // speed<0  → layer scrolls faster than the page (appears to rush ahead)
  //
  // viewportHeight is a MotionValue that is set to containerRef.clientHeight
  // after mount. By including it as an input to useTransform, the transform
  // recalculates as soon as the real viewport height is known, which corrects
  // the initial icon positions without requiring the user to scroll first.
  const y = useTransform(
    [scrollY, viewportHeight] as MotionValue<number>[],
    (values: number[]) => -(values[0] - offset * values[1]) * speed
  )

  return (
    <motion.div
      style={{
        position: "absolute",
        top: `${offset * 100}vh`,
        height: `${factor * 100}vh`,
        width: "100%",
        y,
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
