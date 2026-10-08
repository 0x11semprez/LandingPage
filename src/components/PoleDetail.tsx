'use client'

import type { Pole } from '@/data/poles'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { events } from '@/data/events'
import { poles } from '@/data/poles'
import ContactModal from './ContactModal'
import Reveal from './Reveal'

function StatBlock({ value, label, description }: { value: string, label: string, description: string }) {
  return (
    <div className='rounded-2xl border border-white/25 p-6'>
      <p className='text-5xl md:text-6xl font-semibold tracking-tight text-white'>{value}</p>
      <p className='mt-3 font-medium text-white'>{label}</p>
      <p className='mt-2 text-sm text-white/85'>{description}</p>
    </div>
  )
}

function SubsectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className='text-xl md:text-2xl font-semibold tracking-tight text-white mb-6'>{children}</h3>
}

function PolePanel({ pole, onContact }: { pole: Pole, onContact: () => void }) {
  const poleEvents = events.filter(event => event.pole === pole.eventPole)

  return (
    <div className='space-y-16 md:space-y-20'>
      {/* Overview */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
        <div className='lg:col-span-7'>
          <p className='text-sm font-medium uppercase tracking-widest text-white/80'>{pole.subtitle}</p>
          <h2 className='mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white'>{pole.title}</h2>
          <p className='mt-5 text-lg text-white/85 max-w-2xl'>{pole.description}</p>
          {pole.contacts.length > 0 && (
            <button
              type='button'
              onClick={onContact}
              className='mt-8 cursor-pointer bg-white hover:bg-white/85 transition-colors duration-200 rounded-lg px-4 py-2 text-sm font-semibold'
              style={{ color: pole.color }}
            >
              Contact the team
            </button>
          )}
        </div>
        {pole.leads && (
          <div className='lg:col-span-5 flex items-center gap-4 rounded-2xl border border-white/25 p-4'>
            <div className='relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-white/10'>
              <Image src={pole.leads.image} alt={pole.leads.names} fill sizes='80px' className='object-cover' />
            </div>
            <div className='text-left'>
              <p className='text-sm text-white/85'>{pole.leads.role}</p>
              <p className='font-medium text-white'>{pole.leads.names}</p>
            </div>
          </div>
        )}
      </div>

      {/* Workshops */}
      <Reveal>
        <SubsectionTitle>Workshops</SubsectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {pole.workshops
            ? <StatBlock {...pole.workshops} />
            : <StatBlock value='—' label='Workshops' description='First workshops coming soon.' />}
          {pole.completedProjects
            ? <StatBlock {...pole.completedProjects} />
            : <StatBlock value='—' label='Completed projects' description='First projects coming soon.' />}
        </div>
      </Reveal>

      {/* Current project */}
      <Reveal>
        <SubsectionTitle>Current project</SubsectionTitle>
        <div className='rounded-2xl border-2 border-white p-6 md:p-8'>
          <p className='text-sm text-white/85'>This wave</p>
          <p className='mt-2 text-2xl font-semibold text-white'>{pole.currentProject ?? 'To be announced'}</p>
        </div>
      </Reveal>

      {/* Past projects */}
      <Reveal>
        <SubsectionTitle>Past projects</SubsectionTitle>
        {pole.pastProjects.length > 0
          ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {pole.pastProjects.map((project, revealIndex) => (
                  <Reveal key={project.id} index={revealIndex}>
                    <a
                      href={project.repoUrl ?? 'https://github.com/PoCInnovation'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex flex-col'
                    >
                      <div className='relative aspect-video overflow-hidden rounded-xl bg-white/10'>
                        <Image
                          src={project.heroImage.src}
                          alt={project.heroImage.alt}
                          fill
                          sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                          className='object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      </div>
                      <p className='mt-4 text-lg font-medium text-white group-hover:underline underline-offset-4'>{project.title}</p>
                      <p className='mt-2 text-sm text-white/85 line-clamp-3'>{project.description}</p>
                      <p className='mt-3 text-xs text-white/85'>{project.tools.join(' · ')}</p>
                      <p className='mt-2 text-xs text-white/85'>{project.contributors.join(', ')}</p>
                    </a>
                  </Reveal>
                ))}
              </div>
            )
          : <p className='text-white/85'>No past projects yet.</p>}
      </Reveal>

      {/* Events */}
      {poleEvents.length > 0 && (
        <div>
          <SubsectionTitle>Events</SubsectionTitle>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {poleEvents.map((event, revealIndex) => (
              <Reveal key={event.title} index={revealIndex}>
                <div>
                  <div className='relative aspect-[4/3] overflow-hidden rounded-xl bg-white/10'>
                    <Image src={event.image} alt={event.title} fill sizes='(min-width: 640px) 33vw, 100vw' className='object-cover' />
                  </div>
                  <p className='mt-3 text-sm text-white/85'>{event.date}</p>
                  <p className='font-medium text-white'>{event.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

type PoleDetailProps = {
  poleKey: Pole['key']
}

export default function PoleDetail({ poleKey }: PoleDetailProps) {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const active = poles.find(pole => pole.key === poleKey) ?? poles[0]

  return (
    // The whole page takes the pole's color, matching the home diagram
    <div className='w-full text-white' style={{ backgroundColor: active.color }}>
      <div className='container-custom px-5 pt-32 md:pt-40 pb-24 md:pb-36'>
        <motion.div
          className='text-left'
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <PolePanel pole={active} onContact={() => setIsContactOpen(true)} />
        </motion.div>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title={`Contact the ${active.title} team`}
        contacts={active.contacts}
      />
    </div>
  )
}
