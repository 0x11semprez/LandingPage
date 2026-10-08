'use client'

import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import Partners from '@/components/Partners'
import PolesDiagram from '@/components/PolesDiagram'

export default function Home() {
  return (
    <main>
      <section className='relative min-h-screen flex flex-col items-center overflow-hidden bg-background-main'>
        <Hero />
        <Partners />
        <PolesDiagram />
        <Footer />
      </section>
    </main>
  )
}
