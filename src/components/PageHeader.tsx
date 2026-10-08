'use client'

import { motion } from 'framer-motion'

type PageHeaderProps = {
  title: string
  subtitle: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className='container-custom relative z-10 mt-36 md:mt-56 mb-16 md:mb-24 text-center'>
      <motion.h1
        className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {title}
      </motion.h1>
      <motion.p
        className='text-md md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto px-5'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
