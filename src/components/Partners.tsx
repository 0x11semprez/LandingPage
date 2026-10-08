'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Reveal from './Reveal'

// Logos keep their brand colors; dark-only marks (Pasteur, Vision) use their official white variant
const partners: { name: string, src: string, width: number, height: number, url?: string }[] = [
  { name: 'Institut Pasteur', src: '/partner/institut_pasteur.png', width: 813, height: 299, url: 'https://www.pasteur.fr' },
  { name: 'Institut de la Vision', src: '/partner/institut_vision.png', width: 703, height: 331, url: 'https://www.institut-vision.org' },
  { name: 'Aleph Cloud', src: '/partner/aleph_full.png', width: 1161, height: 210, url: 'https://aleph.cloud' },
  { name: 'Gno.land', src: '/partner/gnoland_trim.png', width: 668, height: 160, url: 'https://gno.land' },
  { name: 'Ledger', src: '/partner/ledger_trim.png', width: 1023, height: 344, url: 'https://www.ledger.com' },
  { name: 'Kiln', src: '/partner/kiln.png', width: 2709, height: 1042, url: 'https://www.kiln.fi' },
  { name: 'Ramify', src: '/partner/ramify_official.png', width: 746, height: 218, url: 'https://www.ramify.fr' },
  { name: 'Scaleway', src: '/partner/scaleway.png', width: 2560, height: 500, url: 'https://www.scaleway.com' },
  { name: 'Cryptio', src: '/partner/cryptio_official.png', width: 749, height: 187, url: 'https://cryptio.co' },
  // TODO: add Darwin's website once confirmed
  { name: 'Darwin', src: '/partner/darwin.png', width: 1500, height: 511 },
  // Event partners. AWS and ANDCS use light variants made for the black background.
  { name: 'MIT Hacking Medicine', src: '/events/mit_hacking_medicine.png', width: 356, height: 132, url: 'https://hackingmedicine.mit.edu' },
  { name: 'Ethereum France', src: '/events/ethereum_france.png', width: 800, height: 449, url: 'https://www.ethereum-france.com' },
  { name: 'ANDCS', src: '/partner/andcs_dark.png', width: 1024, height: 583, url: 'https://andcs.org' },
  { name: 'AWS', src: '/partner/aws_dark.png', width: 792, height: 475, url: 'https://aws.amazon.com' },
]

export default function Partners() {
  return (
    <section className='w-full bg-black text-white py-24 md:py-36'>
      <div className='container-custom px-5'>
        <Reveal>
          <h2 className='text-center text-2xl md:text-4xl font-semibold tracking-tight mb-14 md:mb-20'>
            We've built projects and events with them
          </h2>
        </Reveal>
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-12 md:gap-x-14 md:gap-y-16 max-w-6xl mx-auto'>
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className='h-12 md:h-14 w-[40%] sm:w-[28%] md:w-[15%] flex items-center justify-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <a
                href={partner.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={partner.name}
                className='h-full flex items-center justify-center'
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className='h-full w-auto max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300'
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
