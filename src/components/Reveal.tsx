'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  // Position in a list: each block appears slightly after the previous one
  index?: number
  className?: string
}

// Block appearance used site-wide: fades in while rising slightly, the first time it scrolls into view
export default function Reveal({ children, index = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
