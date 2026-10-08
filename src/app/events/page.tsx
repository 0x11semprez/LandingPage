'use client'

import Image from 'next/image'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import { eventFormats, events } from '@/data/events'
import { eventHighlights } from '@/data/stats'
import Reveal from '@/components/Reveal'

const years = [...new Set(events.map(event => event.year))]

export default function EventsPage() {
  return (
    <main>
      <section className='relative min-h-screen flex flex-col items-center overflow-hidden bg-background-main'>
        <PageHeader
          title='Events'
          subtitle='Workshops, hackathons, conferences, afterworks and research projects where PoC Innovation students build, compete and share their work.'
        />

        <div className='container-custom px-5 mb-16 md:mb-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14'>
          {eventHighlights.map(item => (
            <a
              key={item.name}
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={item.name}
              className='h-8 md:h-10 flex items-center opacity-80 hover:opacity-100 transition-opacity'
            >
              {/* brightness-0: flat black marks on the white page */}
              <Image src={item.logo} alt={item.name} width={item.width} height={item.height} className='h-full w-auto brightness-0' />
            </a>
          ))}
        </div>

        <ScrollReveal className='w-full'>
          <div className='container-custom px-5 mb-24 md:mb-32'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
              {eventFormats.map((format, revealIndex) => (
                <Reveal key={format.title} index={revealIndex}>
                  <div className='h-full rounded-2xl border-2 border-black p-6 flex flex-col'>
                    <h2 className='text-xl md:text-2xl font-semibold tracking-tight text-foreground'>{format.title}</h2>
                    <p className='mt-3 text-sm text-muted-foreground'>{format.description}</p>
                    {format.examples.length > 0 && (
                      <>
                        <p className='mt-6 text-xs font-medium uppercase tracking-widest text-muted-foreground'>For example</p>
                        <ul className='mt-3 flex flex-wrap gap-2'>
                          {format.examples.map(example => (
                            <li key={example} className='rounded-full border border-foreground/15 px-3 py-1 text-sm text-foreground'>{example}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {years.map(year => (
          <ScrollReveal key={year} className='w-full'>
            <div className='container-custom px-5 mb-20 md:mb-28'>
              <h2 className='text-2xl md:text-4xl font-semibold tracking-tight text-foreground mb-8 md:mb-10'>{year}</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {events.filter(event => event.year === year).map((event, revealIndex) => (
                  <Reveal key={event.title} index={revealIndex}>
                    <article className='flex flex-col'>
                      <div className='relative aspect-[4/3] overflow-hidden rounded-xl bg-foreground/5'>
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                          className='object-cover'
                        />
                      </div>
                      <p className='mt-4 text-sm text-muted-foreground'>
                        {event.date}
                        {' · '}
                        {event.pole}
                      </p>
                      <h3 className='mt-1 text-lg font-medium text-foreground'>{event.title}</h3>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}

        <Footer />
      </section>
    </main>
  )
}
