'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Reveal from '@/components/Reveal'

const photos = [
  { src: '/poc_home.jpg', caption: 'PoC Innovation', width: 6562, height: 4469 },
  { src: '/soft/hackathon_facebook.jpeg', caption: 'Hackathon Facebook · 2018', width: 1280, height: 1280 },
  { src: '/cyber/ec2.jpg', caption: 'European Cyber Cup · 2021', width: 4032, height: 3024 },
  { src: '/ai/siami.jpeg', caption: 'AI Fair, French Ministry of the Interior · 2024', width: 1280, height: 1707 },
  { src: '/p2p/haks.jpg', caption: 'Hackathon Haks · 2023', width: 6562, height: 4469 },
  { src: '/soft/nasa_hackathon.jpg', caption: 'NASA Hackathon', width: 2000, height: 1000 },
  { src: '/ai/mistral-hackathon.jpeg', caption: 'Hackathon Mistral · 2025', width: 800, height: 600 },
  { src: '/p2p/ethglobal.jpg', caption: 'Hackathon ETHGlobal Cannes · 2025', width: 1920, height: 1280 },
  { src: '/ai/hackathon-google.jpeg', caption: 'Hackathon Google · 2025', width: 4032, height: 3024 },
  { src: '/cyber/ec2_2.jpg', caption: 'European Cyber Cup · 2021', width: 4032, height: 3024 },
  { src: '/soft/vivatech.jpg', caption: 'Vivatech Fair · 2024', width: 400, height: 400 },
  { src: '/poc_home_2.jpg', caption: 'PoC Innovation', width: 1024, height: 683 },
]

export default function PhotobookPage() {
  return (
    <main>
      <section className='relative min-h-screen flex flex-col items-center overflow-hidden bg-black'>
        <div className='container-custom relative z-10 mt-36 md:mt-56 mb-16 md:mb-24 text-center'>
          <motion.h1
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Photobook
          </motion.h1>
        </div>

        <ScrollReveal className='w-full'>
          <div className='container-custom px-5 pb-24 md:pb-36'>
            <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6'>
              {photos.map((photo, revealIndex) => (
                <Reveal key={photo.src} index={revealIndex} className='break-inside-avoid'>
                  <figure className='mb-4 md:mb-6 break-inside-avoid'>
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      width={photo.width}
                      height={photo.height}
                      sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                      className='w-full h-auto rounded-xl'
                    />
                    <figcaption className='mt-2 text-sm text-white/60'>{photo.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
      <Footer />
    </main>
  )
}
