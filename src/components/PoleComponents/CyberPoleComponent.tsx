import type { FeaturedProject } from './FeaturedProjects'
import React from 'react'
import LargeEventCard from '../PoleCards/LargeEventCard'
import EventImageCard from '../PoleCards/MediumEventCard'
import ProfileCard from '../PoleCards/ProfileCard'
import StatsCard from '../PoleCards/StatsCard'
import FeaturedProjects from './FeaturedProjects'

type CyberPoleComponentProps = {
  onOpenContactModal: () => void
  isPriority?: boolean
}

export default function CyberPoleComponent({ onOpenContactModal, isPriority = false }: CyberPoleComponentProps) {
  const featuredProjects: FeaturedProject[] = [
    {
      id: 'whitecomet-research',
      title: 'Whitecomet-Research',
      description:
        'Whitecomet-Research is a malware research project. Its goal is to study different techniques for evading antivirus software, such as polymorphic and metamorphic programs.',
      tools: ['C', 'Polymorphism', 'Metamorphism'],
      contributors: [
        'Edouard Sengeissen',
        'Loïc Titren',
        'Roman Gascoin',
      ],
      heroImage: { src: '/cyber/whitecomet-research.png', alt: 'WhiteComet Research hero' },
      repoUrl: 'https://github.com/PoCInnovation/Whitecomet-Research',
    },
    {
      id: 'smartshark',
      title: 'Smartshark',
      description:
        'SmartShark is a machine-learning intrusion detection system (IDS) that recognizes DDoS (Distributed Denial-of-Service) attacks, which can cripple a network, and MITM (Man-In-The-Middle) attacks, which spy on your connection and steal sensitive data, to counter them more effectively.',
      tools: ['TensorFlow', 'Python', 'tshark', 'Flask'],
      contributors: ['Valentin De Matos', 'Quentin Fringhian'],
      heroImage: { src: '/cyber/smartshark.png', alt: 'Smartshark hero' },
      repoUrl: 'https://github.com/PoCInnovation/SmartShark',
    },
    {
      id: 'reverse-malware',
      title: 'Reverse-Malware',
      description:
        'Reverse-Malware aims to analyze, reverse engineer and defeat the obfuscation of a virus. It then produces a research report presenting the analysis methods and findings about that virus.',
      tools: ['JS', 'Esprima', 'Escodegen'],
      contributors: ['Georges Kypriadis', 'Thomas Pommier', 'Tom Sancho', 'Yanis Boumedad', 'Lenny Vongphouthone'],
      heroImage: { src: '/cyber/reverse-malware.png', alt: 'Reverse Malware hero' },
      repoUrl: 'https://github.com/PoCInnovation/Reverse-Malware',
    },
    {
      id: 'sharkticon',
      title: 'Sharkticon',
      description:
        'Sharkticon is an intrusion detection system using anomaly detection and machine learning, which lets it detect attacks it has never seen before.',
      tools: ['TensorFlow', 'PyShark', 'Python'],
      contributors: ['Mikaël Vallenet', 'Evan Sabre'],
      heroImage: { src: '/cyber/sharkticon.png', alt: 'Sharkticon hero' },
      repoUrl: 'https://github.com/PoCInnovation/Sharkticon',
    },
  ]

  return (
    <div className='w-full'>
      {/* Mobile: single column */}
      <div className='grid grid-cols-1 gap-4 md:hidden px-4'>
        <ProfileCard
          name='Timothée Pasteau-Berthaud'
          role='Cybersecurity Lead'
          imageSrc='/cyber/timo.png'
          imageAlt='Cybersecurity Lead'
          onContactClick={onOpenContactModal}
          priority={isPriority}
        />
        <StatsCard
          number='25+'
          title='Completed projects'
          description='From malware reverse engineering to building RATs, our projects cover both offensive and defensive cybersecurity.'
        />
        <StatsCard
          number='45+'
          title='Introductory workshops held'
          description='Our workshops cover cybersecurity fundamentals: forensics, ransomware, reverse engineering, cryptography and more.'
        />
        <EventImageCard
          imageSrc='/cyber/ec2.jpg'
          imageAlt='European Cyber Cup'
          title='European Cyber Cup'
          date='September 8, 2021'
          priority={isPriority}
        />
        <EventImageCard
          imageSrc='/cyber/incyber.png'
          imageAlt='InCyber Forum'
          title='InCyber Forum'
          date='April 1, 2025'
          priority={isPriority}
        />
        <LargeEventCard
          imageSrc='/cyber/pathwar.png'
          imageAlt='CTF Pathwar'
          title='CTF Pathwar'
          date='May 25, 2023'
          priority={isPriority}
        />
      </div>

      {/* Medium screens (md to xl): 2 columns layout using full width */}
      <div className='hidden md:grid md:grid-cols-2 xl:hidden gap-4 px-4 grid-rows-2'>
        {/* Profile Card spans 2 rows */}
        <div className='row-span-2'>
          <ProfileCard
            name='Timothée Pasteau-Berthaud'
            role='Cybersecurity Lead'
            imageSrc='/cyber/timo.png'
            imageAlt='Cybersecurity Lead'
            onContactClick={onOpenContactModal}
          />
        </div>

        {/* Right column cards */}
        <StatsCard
          number='25+'
          title='Completed projects'
          description='From malware reverse engineering to building RATs, our projects cover both offensive and defensive cybersecurity.'
        />
        <StatsCard
          number='45+'
          title='Introductory workshops held'
          description='Our workshops cover cybersecurity fundamentals: forensics, ransomware, reverse engineering, cryptography and more.'
        />

        {/* Event Cards in bottom row */}
        <EventImageCard
          imageSrc='/cyber/incyber.png'
          imageAlt='InCyber Forum'
          title='InCyber Forum'
          date='April 1, 2025'
          priority={isPriority}
        />
        <EventImageCard
          imageSrc='/cyber/ec2.jpg'
          imageAlt='European Cyber Cup'
          title='European Cyber Cup'
          date='September 8, 2021'
          priority={isPriority}
        />

        {/* Large Event Card spans full width */}
        <div className='col-span-2'>
          <LargeEventCard
            imageSrc='/cyber/pathwar.png'
            imageAlt='CTF Pathwar'
            title='CTF Pathwar'
            date='May 25, 2023'
            priority={isPriority}
          />
        </div>
      </div>

      {/* Large screens (xl and above): 4 equal columns using full viewport width */}
      <div className='hidden xl:grid xl:grid-cols-4 gap-4 2xl:gap-6 px-4 2xl:px-8'>
        {/* Profile Card - Column 1 */}
        <div className='col-span-1'>
          <ProfileCard
            name='Timothée Pasteau-Berthaud'
            role='Cybersecurity Lead'
            imageSrc='/cyber/timo.png'
            imageAlt='Cybersecurity Lead'
            onContactClick={onOpenContactModal}
          />
        </div>

        {/* Stats Cards - Column 2 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <StatsCard
            number='25+'
            title='Completed projects'
            description='From malware reverse engineering to building RATs, our projects cover both offensive and defensive cybersecurity.'
          />
          <StatsCard
            number='45+'
            title='Introductory workshops held'
            description='Our workshops cover cybersecurity fundamentals: forensics, ransomware, reverse engineering, cryptography and more.'
          />
        </div>

        {/* Event Cards - Column 3 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <EventImageCard
            imageSrc='/cyber/ec2.jpg'
            imageAlt='European Cyber Cup'
            title='European Cyber Cup'
            date='September 8, 2021'
            priority={isPriority}
          />
          <EventImageCard
            imageSrc='/cyber/incyber.png'
            imageAlt='InCyber Forum'
            title='InCyber Forum'
            date='April 1, 2025'
            priority={isPriority}
          />
        </div>

        {/* Large Event Card - Column 4 */}
        <div className='col-span-1'>
          <LargeEventCard
            imageSrc='/cyber/pathwar.png'
            imageAlt='CTF Pathwar'
            title='CTF Pathwar'
            date='May 25, 2023'
            priority={isPriority}
          />
        </div>
      </div>

      <div className='w-full px-4'>
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </div>
  )
}
