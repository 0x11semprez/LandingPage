'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function Hero() {
  return (
    // First screen: the video covers the whole viewport and the title sits on top of it in white
    <div className='relative z-10 w-full h-svh min-h-[560px] overflow-hidden bg-black'>
      <motion.video
        className='absolute inset-0 h-full w-full object-cover grayscale'
        src='/videos/hero-2026-10-08.mp4'
        poster='/videos/hero-poster.jpg'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
      />
      {/* Darkens the video so the white title stays readable on its light areas */}
      <div className='absolute inset-0 bg-black/40' />

      <div className='container-custom relative flex h-full items-center justify-center pt-16 md:pt-[72px] text-center'>
        <motion.h1
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-5xl px-5 leading-[1.1] text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          Engineering
          {' '}
          <span className='whitespace-nowrap'>open-source</span>
          {' '}
          research projects and events that help humanity.
        </motion.h1>
      </div>
    </div>
  )
}
