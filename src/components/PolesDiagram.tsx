'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import CountUp from './CountUp'
import Reveal from './Reveal'
import WriteOnLogo from './WriteOnLogo'
import { poles as poleData } from '@/data/poles'
import { associationStats } from '@/data/stats'

// Hub diagram: PoC in the center, a branch to each pole bubble and one down to the totals.
// Clicking a bubble paints the section in that pole's color and shows its summary.
const CORE_RADIUS = 95
const POLE_RADIUS = 85
const POLE_DISTANCE = 270

type Pole = {
  key: string
  label: string[]
  color: string
  href?: string
}

// Bubble labels split over lines; colors come from the shared pole data
const labels: Record<string, string[]> = {
  ai: ['Artificial', 'Intelligence'],
  cyber: ['Cyber', 'security'],
}

const poles: Pole[] = poleData.map(pole => ({
  key: pole.key,
  label: labels[pole.key] ?? [pole.title],
  color: pole.color,
  href: `/innovation/${pole.key}`,
}))

function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180
}

function pointAt(from: { x: number, y: number }, distance: number, degrees: number) {
  return { x: from.x + distance * Math.cos(toRadians(degrees)), y: from.y + distance * Math.sin(toRadians(degrees)) }
}

function poleAngle(index: number) {
  return -90 + (360 / poles.length) * index
}

// Bottom of the SVG: the branch runs from the PoC circle down to the totals below
const BRANCH_END = 420

// '50+' -> 50
function statValue(value?: string) {
  return value ? Number.parseInt(value, 10) || 0 : 0
}

// First row: quick figures. Workshops are summed from each pole.
const headlineTotals = [
  { value: poleData.length, suffix: '', label: 'Poles' },
  { ...associationStats.activeMembers, label: 'Active members' },
  { value: poleData.reduce((sum, pole) => sum + statValue(pole.workshops?.value), 0), suffix: '+', label: 'Workshops held' },
]

// Second row: figures developed with a description.
// Descriptions are the ones from the former Association section.
const detailedTotals: { value: number, suffix: string, label: string, description: string }[] = [
  {
    ...associationStats.completedProjects,
    label: 'Completed projects',
    description: 'PoC runs many projects, independently or in collaboration with companies.',
  },
  {
    ...associationStats.events,
    label: 'Events',
    description: 'For students and professionals all over France.',
  },
  {
    ...associationStats.alumni,
    label: 'Alumni worldwide',
    description: 'From start-ups to tech giants, our alumni spread the PoC DNA all around the globe.',
  },
]

// Same size for every figure, both rows
const numberClass = 'text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight'

// Same block appearance as Reveal.tsx, for SVG groups (y is in SVG units).
// Visibility is tracked on the <svg> itself: iOS Safari does not report
// intersections for inner <g> elements, which left the bubbles hidden on phones.
function svgReveal(index: number, isInView: boolean) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }
}

const origin = { x: 0, y: 0 }

function MultilineText({ lines, x, y, lineHeight, ...props }: { lines: string[], x: number, y: number, lineHeight: number } & React.SVGProps<SVGTextElement>) {
  return (
    <text x={x} y={y - ((lines.length - 1) * lineHeight) / 2} textAnchor='middle' dominantBaseline='middle' {...props}>
      {lines.map((line, index) => (
        <tspan key={line} x={x} dy={index === 0 ? 0 : lineHeight}>{line}</tspan>
      ))}
    </text>
  )
}

type PoleNodeProps = {
  pole: Pole
  index: number
  isSelected: boolean
  isInView: boolean
  onSelect: () => void
}

function PoleNode({ pole, index, isSelected, isInView, onSelect }: PoleNodeProps) {
  const angle = poleAngle(index)
  const center = pointAt(origin, POLE_DISTANCE, angle)
  const spokeStart = pointAt(origin, CORE_RADIUS, angle)
  const spokeEnd = pointAt(origin, POLE_DISTANCE - POLE_RADIUS, angle)

  return (
    <motion.g {...svgReveal(index + 1, isInView)}>
      <line x1={spokeStart.x} y1={spokeStart.y} x2={spokeEnd.x} y2={spokeEnd.y} stroke='#0a0a0a' strokeWidth={2.5} />
      <g
        role='button'
        tabIndex={0}
        aria-pressed={isSelected}
        aria-label={pole.label.join(' ')}
        className='cursor-pointer outline-none hover:opacity-85 transition-opacity'
        onClick={onSelect}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onSelect()
          }
        }}
      >
        {/* On its own color the selected bubble gets a white outline so it stays visible */}
        <circle cx={center.x} cy={center.y} r={POLE_RADIUS} fill={pole.color} stroke={isSelected ? 'white' : '#0a0a0a'} strokeWidth={isSelected ? 5 : 2.5} />
        <MultilineText lines={pole.label} x={center.x} y={center.y} lineHeight={24} fill='white' className='text-[20px] font-semibold' />
      </g>
    </motion.g>
  )
}

export default function PolesDiagram() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const selectedPole = poles.find(pole => pole.key === selectedKey)
  const selectedDetails = poleData.find(pole => pole.key === selectedKey)
  const svgRef = useRef<SVGSVGElement>(null)
  const isInView = useInView(svgRef, { once: true, amount: 0.2 })

  return (
    <section className='w-full text-foreground'>
      <div
        className={`w-full pt-24 md:pt-32 transition-colors duration-500 ${selectedPole ? 'text-white' : ''}`}
        style={{ backgroundColor: selectedPole?.color ?? '#ffffff' }}
      >
        <div className='container-custom px-5 flex flex-col items-center text-center'>
          <Reveal>
            <h2 className='text-3xl md:text-5xl font-semibold tracking-tight'>
              {selectedDetails?.title ?? 'Five poles, one center'}
            </h2>
            <p className={`mt-5 max-w-2xl text-md md:text-lg ${selectedPole ? 'text-white/85' : 'text-muted-foreground'}`}>
              {selectedDetails?.description ?? 'Each pole has its own expertise, all connected at PoC. Click a pole to learn more.'}
            </p>
          </Reveal>
          {selectedPole?.href && (
            <Link
              href={selectedPole.href}
              className='mt-6 rounded-lg bg-white px-4 py-2 text-sm font-semibold hover:bg-white/85 transition-colors'
              style={{ color: selectedPole.color }}
            >
              {`Discover ${selectedDetails?.title ?? 'the pole'} →`}
            </Link>
          )}

          <svg
            ref={svgRef}
            viewBox='-380 -380 760 800'
            className='mt-12 md:mt-16 w-full max-w-[900px] h-auto block'
            role='group'
            aria-label='PoC Innovation poles: Artificial Intelligence, Software, Blockchain, Cybersecurity and Hardware'
          >
            <line x1={0} y1={CORE_RADIUS} x2={0} y2={BRANCH_END} stroke='#0a0a0a' strokeWidth={2.5} />

            {poles.map((pole, index) => (
              <PoleNode
                key={pole.key}
                pole={pole}
                index={index}
                isSelected={pole.key === selectedKey}
                isInView={isInView}
                onSelect={() => setSelectedKey(current => (current === pole.key ? null : pole.key))}
              />
            ))}

            {/* Clicking PoC resets the section to white */}
            <motion.g className='cursor-pointer' onClick={() => setSelectedKey(null)} {...svgReveal(0, isInView)}>
              <circle r={CORE_RADIUS} fill='white' stroke='#0a0a0a' strokeWidth={2.5} />
              {/* Letters write themselves once, when the diagram scrolls into view */}
              {isInView && <WriteOnLogo x={-62} y={-21.5} width={124} height={43} />}
            </motion.g>
          </svg>
        </div>
      </div>

      {/* Black band reached by the branch coming down from PoC */}
      <div className='w-full bg-black text-white pt-16 md:pt-24 pb-20 md:pb-28'>
        <div className='container-custom px-5 grid grid-cols-3 gap-6 md:gap-14 text-center'>
          {headlineTotals.map((total, index) => (
            <motion.div
              key={total.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={numberClass}>
                <CountUp value={total.value} suffix={total.suffix} delay={index * 0.12} />
              </p>
              <p className='mt-2 text-sm md:text-base text-white/60'>{total.label}</p>
            </motion.div>
          ))}
        </div>

        <div className='h-16 md:h-24' />

        <div className='container-custom px-5 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12'>
          {detailedTotals.map((total, index) => (
            <motion.div
              key={total.label}
              className='flex flex-col items-center text-center'
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={numberClass}>
                <CountUp value={total.value} suffix={total.suffix} delay={index * 0.12} />
              </p>
              <p className='mt-3 text-lg md:text-xl font-semibold'>{total.label}</p>
              <p className='mt-3 text-sm md:text-base text-white/75'>{total.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
