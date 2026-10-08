'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function Hero() {
  return (
    // Fills the first screen: the video stretches to take the space left under the title
    <div className='container-custom relative z-10 w-full h-svh min-h-[560px] flex flex-col items-center gap-6 md:gap-8 pt-24 md:pt-[120px] pb-6 md:pb-10 text-center'>
      <motion.h1
        className='shrink-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-6xl px-5 leading-[1.15] text-balance'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease }}
      >
        Engineering open-source research projects
        <br className='hidden xl:block' />
        {' '}
        and events that help humanity.
      </motion.h1>
      <motion.video
        className='w-full max-w-6xl flex-1 min-h-0 rounded-2xl md:rounded-3xl object-cover grayscale'
        src='/videos/hero-2026-10-08.mp4'
        poster='/videos/hero-poster.jpg'
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
  )
}
