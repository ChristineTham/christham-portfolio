'use client'

import React, { createContext, useContext, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue } from "motion/react"

interface ParallaxContextValue {
  scrollY: ReturnType<typeof useMotionValue<number>>
  containerRef: React.RefObject<HTMLDivElement | null>
}

const ParallaxContext = createContext<ParallaxContextValue | null>(null)

interface ParallaxProps {
  pages: number
  children: React.ReactNode
}

export function Parallax({ pages, children }: ParallaxProps) {
  // ref is kept solely to measure the viewport height (clientHeight) inside
  // ParallaxLayer transforms — it is not used as a scroll container.
  const ref = useRef<HTMLDivElement>(null)
  // Track the native window / page scroll instead of a custom overflow div.
  // This is the most reliable approach across all browsers and devices: the
  // inner 500 vh content naturally makes the page scrollable, and touch /
  // wheel events are handled by the browser without any custom container.
  const { scrollY } = useScroll()

  return (
    <ParallaxContext.Provider value={{ scrollY, containerRef: ref }}>
      {/*
        This div has height: 100vh so that containerRef.current.clientHeight
        equals the viewport height (used in ParallaxLayer transform maths).
        It does NOT have overflow:scroll — the page scrolls natively.
      */}
      <div
        ref={ref}
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        {/*
          500 vh inner div overflows the 100 vh outer div (overflow: visible).
          Browsers extend the document scrollable height to accommodate this,
          making the page scroll natively by the correct amount.
        */}
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
  const fallback = useMotionValue(0)
  if (process.env.NODE_ENV !== "production" && !ctx) {
    console.warn("ParallaxLayer must be used inside a Parallax component.")
  }
  const scrollY = ctx ? ctx.scrollY : fallback

  // Replicates @react-spring/parallax behaviour:
  //   translateY = -(scrollY - offset * viewportHeight) * speed
  // speed=0  → layer scrolls with the page (no parallax)
  // speed>0  → layer scrolls slower than the page (appears to lag behind)
  // speed<0  → layer scrolls faster than the page (appears to rush ahead)
  const containerRef = ctx?.containerRef
  const y = useTransform(scrollY, (v: number) => {
    // Use clientHeight when available (after mount). Fall back to 0 so that
    // the initial server-rendered value and the first client render agree —
    // reading window.innerHeight here would cause a hydration mismatch because
    // it is defined on the client but not on the server.
    const viewportHeight = containerRef?.current?.clientHeight ?? 0
    return -(v - offset * viewportHeight) * speed
  })

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
