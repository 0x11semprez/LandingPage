'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { events } from '@/data/events'
import { poles } from '@/data/poles'

type Milestone = {
  id: string
  date: string
  title: string
  caption?: string
  color: string
  image?: string
}

const poleColor = (title: string) => poles.find(pole => pole.title === title)?.color ?? '#0a0a0a'

// Oldest first, framed by the founding and today. Founding date is a placeholder until the team confirms it.
const milestones: Milestone[] = [
  { id: 'founding', date: '[Year to be completed]', title: 'PoC Innovation is founded', color: '#0a0a0a' },
  ...[...events].reverse().map(event => ({
    id: event.title,
    date: event.date,
    title: event.title,
    caption: event.pole,
    color: poleColor(event.pole),
    image: event.image,
  })),
  { id: 'today', date: 'Today', title: 'Five poles, one center', caption: poles.map(pole => pole.title).join(' · '), color: '#0a0a0a' },
]

export default function Chronology() {
  const containerRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 70%', 'end 70%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <ol ref={containerRef} className='relative'>
      {/* Track, then the black line drawn as you scroll */}
      <div className='absolute top-0 bottom-0 left-[15px] md:left-1/2 w-[2.5px] -translate-x-1/2 bg-foreground/10' />
      <motion.div
        className='absolute top-0 bottom-0 left-[15px] md:left-1/2 w-[2.5px] -translate-x-1/2 bg-foreground origin-top'
        style={{ scaleY: progress }}
      />

      {milestones.map((milestone, index) => {
        const isLeft = index % 2 === 0
        return (
          <li key={milestone.id} className='relative grid grid-cols-[32px_1fr] md:grid-cols-[1fr_64px_1fr] items-start pb-14 md:pb-20 last:pb-0'>
            <motion.span
              className='col-start-1 md:col-start-2 row-start-1 justify-self-center mt-1 h-6 w-6 rounded-full border-[2.5px] border-foreground'
              style={{ backgroundColor: milestone.color }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className={`col-start-2 row-start-1 pl-4 md:pl-0 ${isLeft ? 'md:col-start-1 md:text-right md:pr-8' : 'md:col-start-3 md:pl-8'}`}
              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className='text-sm text-muted-foreground'>{milestone.date}</p>
              <p className='mt-1 text-xl md:text-2xl font-semibold tracking-tight text-foreground'>{milestone.title}</p>
              {milestone.caption && (
                <p className='mt-1 text-sm font-medium' style={{ color: milestone.color }}>{milestone.caption}</p>
              )}
              {milestone.image && (
                <div className={`relative mt-4 aspect-[4/3] w-full max-w-sm overflow-hidden rounded-xl border-[2.5px] border-foreground ${isLeft ? 'md:ml-auto' : ''}`}>
                  <Image src={milestone.image} alt={milestone.title} fill sizes='(min-width: 768px) 384px, 100vw' className='object-cover' />
                </div>
              )}
            </motion.div>
          </li>
        )
      })}
    </ol>
  )
}
