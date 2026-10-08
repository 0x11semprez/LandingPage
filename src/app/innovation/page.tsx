'use client'

import Link from 'next/link'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import { poles } from '@/data/poles'
import Reveal from '@/components/Reveal'

export default function InnovationPage() {
  return (
    <main>
      <section className='relative min-h-screen flex flex-col items-center overflow-hidden bg-background-main'>
        <PageHeader
          title='Poles'
          subtitle='Organized into five expertise poles, PoC Innovation runs in 6-month project waves to foster skill growth, collaboration and innovation.'
        />
        <ScrollReveal className='w-full'>
          <div className='container-custom px-5 pb-24 md:pb-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {poles.map((pole, revealIndex) => (
              <Reveal key={pole.key} index={revealIndex}>
                <Link
                  href={`/innovation/${pole.key}`}
                  className='group h-full flex flex-col rounded-2xl border border-foreground/10 p-6 md:p-8 text-left transition-colors duration-200 hover:border-foreground/40'
                >
                  <p className='text-sm font-medium uppercase tracking-widest' style={{ color: pole.color }}>{pole.subtitle}</p>
                  <h2 className='mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground'>{pole.title}</h2>
                  <p className='mt-4 text-muted-foreground'>{pole.description}</p>
                  <span className='mt-6 text-sm font-medium text-foreground group-hover:underline underline-offset-4'>Discover the pole →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </ScrollReveal>
        <Footer />
      </section>
    </main>
  )
}
