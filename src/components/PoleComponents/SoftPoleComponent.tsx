import type { FeaturedProject } from './FeaturedProjects'
import React from 'react'
import LargeEventCard from '../PoleCards/LargeEventCard'
import EventImageCard from '../PoleCards/MediumEventCard'
import ProfileCard from '../PoleCards/ProfileCard'
import StatsCard from '../PoleCards/StatsCard'
import FeaturedProjects from './FeaturedProjects'

type SoftwarePoleComponentProps = {
  onOpenContactModal: () => void
  isPriority?: boolean
}

export default function SoftwarePoleComponent({ onOpenContactModal, isPriority = false }: SoftwarePoleComponentProps) {
  const featuredProjects: FeaturedProject[] = [
    {
      id: 'sveno',
      title: 'Sveno',
      description:
        'A tool that converts any React JS application into a Svelte application. Sveno aims to become a powerful tool able to transpile full projects and help developers.',
      tools: ['Python', 'JS', 'Regex'],
      contributors: [
        'Allan Deleve',
        'Amoz Pay',
        'Baptiste Barbotin',
        'Tom Chaveau',
      ],
      heroImage: { src: '/soft/sveno.png', alt: 'Sveno hero' },
      repoUrl: 'https://github.com/PoCInnovation/Sveno',
    },
    {
      id: 'asyncFlow',
      title: 'AsyncFlow',
      description:
        'A JavaScript library to create serverless cloud tasks right inside your code, supporting Node, Python, Java, Ruby and Go.',
      tools: ['Typescript', 'SWC', 'AWS Lambda'],
      contributors: ['Pierre Riss', 'Loan Riyanto', 'Laurent Gonzalez'],
      heroImage: { src: '/soft/asyncflow.png', alt: 'AsyncFlow hero' },
      repoUrl: 'https://github.com/PoCInnovation/AsyncFlow',
    },
    {
      id: 'ipc',
      title: 'InterPlanetaryCloud',
      description:
        'InterPlanetaryCloud is a web platform giving simple access to decentralized, encrypted file storage and to cloud computing, deploying programs on Aleph VMs.',
      tools: ['Typescript', 'Aleph', 'IPFS'],
      contributors: ['Lucas Louis', 'Reza Rahemtola', 'Adrien Fort', 'And many more!'],
      heroImage: { src: '/soft/ipc.png', alt: 'InterPlanetaryCloud hero' },
      repoUrl: 'https://github.com/PoCInnovation/InterPlanetaryCloud',
    },
    {
      id: 'dagviz',
      title: 'DagViz',
      description:
        'DagViz displays all the information about a CUE program\'s definitions and their dependencies as DAGs, which often reveal bugs, circular dependencies and unoptimized schemas.',
      tools: ['CUE', 'Typescript', 'Go'],
      contributors: ['Ismaël Fall', 'Florian Lauch', 'Adrien Fort'],
      heroImage: { src: '/soft/dagviz.png', alt: 'DabViz hero' },
      repoUrl: 'https://github.com/PoCInnovation/DagViz',
    },
  ]

  return (
    <div className='w-full'>
      {/* Mobile: single column */}
      <div className='grid grid-cols-1 gap-4 md:hidden px-4'>
        <ProfileCard
          name='Laurent Gonzalez and Milo Kowalska'
          role='Software Leads'
          imageSrc='/soft/soft_respo.png'
          imageAlt='Laurent Gonzalez and Milo Kowalska, Software Leads'
          onContactClick={onOpenContactModal}
          priority={isPriority}
        />
        <StatsCard
          number='30+'
          title='Completed projects'
          description="From serverless SDKs to API generation and front-end migration, our projects explore the latest tools and frameworks."
        />
        <StatsCard
          number='100+'
          title='Introductory workshops held'
          description='Discover the most used frameworks, languages, databases, testing, deployment and much more.'
        />
        <EventImageCard
          imageSrc='/soft/nasa_hackathon_3.png'
          imageAlt='Hackathon Nasa'
          title='Hackathon Nasa Space apps challenge'
          date='October 3, 2021'
          priority={isPriority}
        />
        <EventImageCard
          imageSrc='/soft/vivatech.jpg'
          imageAlt='Vivatech Fair'
          title='Vivatech Fair'
          date='May 22, 2024'
          priority={isPriority}
        />
        <LargeEventCard
          imageSrc='/soft/hackathon_facebook.jpeg'
          imageAlt='Hackathon facebook'
          title='Hackathon facebook'
          date='November 2018'
          priority={isPriority}
        />
      </div>

      {/* Medium screens (md to xl): 2 columns layout using full width */}
      <div className='hidden md:grid md:grid-cols-2 xl:hidden gap-4 px-4 grid-rows-2'>
        {/* Profile Card spans 2 rows */}
        <div className='row-span-2'>
          <ProfileCard
            name='Laurent Gonzalez and Milo Kowalska'
            role='Software Leads'
            imageSrc='/soft/soft_respo.png'
            imageAlt='Laurent Gonzalez and Milo Kowalska, Software Leads'
            onContactClick={onOpenContactModal}
          />
        </div>

        {/* Right column cards */}
        <StatsCard
          number='30+'
          title='Completed projects'
          description="From serverless SDKs to API generation and front-end migration, our projects explore the latest tools and frameworks."
        />
        <StatsCard
          number='100+'
          title='Introductory workshops held'
          description='Discover the most used frameworks, languages, databases, testing, deployment and much more.'
        />

        {/* Event Cards in bottom row */}
        <EventImageCard
          imageSrc='/soft/vivatech.jpg'
          imageAlt='Vivatech Fair'
          title='Vivatech Fair'
          date='May 22, 2024'
          priority={isPriority}
        />
        <EventImageCard
          imageSrc='/soft/nasa_hackathon_3.png'
          imageAlt='Hackathon Nasa'
          title='Hackathon Nasa Space apps challenge'
          date='October 3, 2021'
          priority={isPriority}
        />

        {/* Large Event Card spans full width */}
        <div className='col-span-2'>
          <LargeEventCard
            imageSrc='/soft/hackathon_facebook.jpeg'
            imageAlt='Hackathon facebook'
            title='Hackathon facebook'
            date='November 2018'
            priority={isPriority}
          />
        </div>
      </div>

      {/* Large screens (xl and above): 4 equal columns using full viewport width */}
      <div className='hidden xl:grid xl:grid-cols-4 gap-4 2xl:gap-6 px-4 2xl:px-8'>
        {/* Profile Card - Column 1 */}
        <div className='col-span-1'>
          <ProfileCard
            name='Laurent Gonzalez and Milo Kowalska'
            role='Software Leads'
            imageSrc='/soft/soft_respo.png'
            imageAlt='Laurent Gonzalez and Milo Kowalska, Software Leads'
            onContactClick={onOpenContactModal}
          />
        </div>

        {/* Stats Cards - Column 2 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <StatsCard
            number='30+'
            title='Completed projects'
            description="From serverless SDKs to API generation and front-end migration, our projects explore the latest tools and frameworks."
          />
          <StatsCard
            number='100+'
            title='Introductory workshops held'
            description='Discover the most used frameworks, languages, databases, testing, deployment and much more.'
          />
        </div>

        {/* Event Cards - Column 3 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <EventImageCard
            imageSrc='/soft/nasa_hackathon_3.png'
            imageAlt='Hackathon Nasa'
            title='Hackathon Nasa Space apps challenge'
            date='October 3, 2021'
            priority={isPriority}
          />
          <EventImageCard
            imageSrc='/soft/vivatech.jpg'
            imageAlt='Vivatech Fair'
            title='Vivatech Fair'
            date='May 22, 2024'
            priority={isPriority}
          />
        </div>

        {/* Large Event Card - Column 4 */}
        <div className='col-span-1'>
          <LargeEventCard
            imageSrc='/soft/hackathon_facebook.jpeg'
            imageAlt='Hackathon facebook'
            title='Hackathon facebook'
            date='November 2018'
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
