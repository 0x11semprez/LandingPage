'use client'

import type { SVGProps } from 'react'
import { motion, useInView } from 'framer-motion'
import { useId, useRef } from 'react'

// Centerlines of each letter of logo_poc_black.png (547x191), in the order a pen would draw them.
// A thick stroke follows each line and reveals the logo underneath, so the letters write themselves.
const LETTER_STROKES = [
  // P: up the stem, along the bar, around the bowl, out to the top stub
  'M29,191 L29,113.5 L86,113.5 A43,43 0 0 0 86,26.5 L50,26.5',
  // O: from the left end, over the top and around to the bottom end
  'M192,92 A64,64 0 1 1 256,156 L256,191',
  // C: from the top end, around the left and bottom, out to the right end
  'M450,0 L450,24 A68,68 0 1 0 518,92 L547,92',
]

const STROKE_WIDTH = 60
const DURATION = 0.7
const STAGGER = 0.25

type WriteOnLogoProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & {
  // Wait until the logo scrolls into view before writing it (for logos below the fold, like the footer)
  playOnView?: boolean
}

// Remount (change its key) to replay the effect. Works as a standalone <svg> or nested in another SVG (pass x/y/width/height).
export default function WriteOnLogo({ playOnView = false, ...props }: WriteOnLogoProps) {
  const maskId = `poc-write-${useId().replace(/:/g, '')}`
  const svgRef = useRef<SVGSVGElement>(null)
  const isInView = useInView(svgRef, { once: true, amount: 0.8 })
  const shouldPlay = !playOnView || isInView

  return (
    <svg ref={svgRef} viewBox='0 0 547 191' role='img' aria-label='PoC' {...props}>
      <mask id={maskId} maskUnits='userSpaceOnUse' x={0} y={0} width={547} height={191}>
        {LETTER_STROKES.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill='none'
            stroke='white'
            strokeWidth={STROKE_WIDTH}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: shouldPlay ? 1 : 0 }}
            transition={{ duration: DURATION, delay: index * STAGGER, ease: [0.65, 0, 0.35, 1] }}
          />
        ))}
      </mask>
      <image href='/logo_poc_black.png' width={547} height={191} mask={`url(#${maskId})`} />
    </svg>
  )
}
