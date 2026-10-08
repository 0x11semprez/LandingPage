'use client'

import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  value: number
  suffix?: string
  delay?: number
}

// Counts from 0 to value the first time it scrolls into view
export default function CountUp({ value, suffix = '', delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.8 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return
    }
    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: latest => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, value, delay])

  return (
    <span ref={ref} className='tabular-nums'>
      {display}
      {suffix}
    </span>
  )
}
