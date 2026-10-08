'use client'

import { motion } from 'framer-motion'
import Chronology from '@/components/Chronology'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Reveal from '@/components/Reveal'

// Draft content: story paragraphs are placeholders until the team writes the real history.
const story = [
  'PoC Innovation started as a group of students who wanted to go beyond coursework and build real things. [Founding year, founders and first project to be completed.]',
  'Over the years, the association grew into expertise poles — Artificial Intelligence, Software, Blockchain, Cybersecurity and now Hardware — each running 6-month project waves where students research, build and publish open-source work.',
  'Today, PoC Innovation brings together motivated students from across France, takes part in hackathons and events, and builds open-source projects meant to help humanity.',
]

function SectionTitle({ eyebrow, title }: { eyebrow: string, title: string }) {
  return (
    <div className='mb-10 md:mb-14'>
      <p className='text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3'>{eyebrow}</p>
      <h2 className='text-3xl md:text-5xl font-semibold tracking-tight text-foreground'>{title}</h2>
    </div>
  )
}

export default function GenesisPage() {
  return (
    <main>
      <section className='relative min-h-screen flex flex-col items-center overflow-hidden bg-background-main'>
        <div className='container-custom relative z-10 mt-36 md:mt-56 mb-20 md:mb-32 text-center'>
          <motion.h1
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Genesis
          </motion.h1>
          <motion.p
            className='text-md md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto px-5'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            The story of PoC Innovation and the memories we made along the way.
          </motion.p>
        </div>

        <ScrollReveal className='w-full'>
          <div id='story' className='container-custom px-5 max-w-3xl mb-24 md:mb-36'>
            <SectionTitle eyebrow='01 · Story' title='How it started' />
            <div className='space-y-6 text-lg md:text-xl leading-relaxed text-foreground/80'>
              {story.map((paragraph, revealIndex) => (
                <Reveal key={paragraph} index={revealIndex}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className='w-full'>
          <div id='memories' className='container-custom px-5 max-w-5xl mb-24 md:mb-36'>
            <SectionTitle eyebrow='02 · Chronology' title='Moments that shaped us' />
            <Chronology />
          </div>
        </ScrollReveal>

        <Footer />
      </section>
    </main>
  )
}
