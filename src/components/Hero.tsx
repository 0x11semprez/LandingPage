'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function Hero() {
  return (
    <div className='container-custom relative z-10 min-h-svh flex flex-col items-center justify-center pt-24 md:pt-[112px] pb-16 text-center'>
      <div className='flex flex-col items-center justify-center w-full gap-8 md:gap-10'>
        <motion.h1
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-6xl px-5 leading-[1.15]'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          Engineering open-source research projects
          <br className='hidden sm:block' /> and events that help humanity.
        </motion.h1>
        <motion.video
          className='w-full max-w-6xl aspect-video rounded-3xl object-cover grayscale'
          src='/videos/hero-2026-10-08.mp4'
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
        />
      </div>
    </div>
  )
}
