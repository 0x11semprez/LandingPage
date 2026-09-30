import type { FeaturedProject } from './FeaturedProjects'
import React from 'react'
import LargeEventCard from '../PoleCards/LargeEventCard'
import EventImageCard from '../PoleCards/MediumEventCard'
import ProfileCard from '../PoleCards/ProfileCard'
import StatsCard from '../PoleCards/StatsCard'
import FeaturedProjects from './FeaturedProjects'

type P2PPoleComponentProps = {
  onOpenContactModal: () => void
  isPriority?: boolean
}

export default function P2PPoleComponent({ onOpenContactModal, isPriority = false }: P2PPoleComponentProps) {
  const featuredProjects: FeaturedProject[] = [
    {
      id: 'mev-tracker',
      title: 'MEV Tracker',
      description:
        'A program that analyzes pending transactions on the Ethereum blockchain and determines whether they were sent by a bot. It relies on an AI model trained to detect bot-issued transactions.',
      tools: ['PyTorch', 'NumPy', 'Python', 'Go'],
      contributors: [
        'Alexandre Grare',
        'Elyes Toumi',
        'Onsager He',
      ],
      heroImage: { src: '/p2p/mev-tracker.png', alt: 'MEV Tracker hero' },
      repoUrl: 'https://github.com/PoCInnovation/MEV-Tracker',
    },
    {
      id: 'dao',
      title: 'Superfluid-DAO',
      description:
        'Superfluid DAO lets users create and interact with a DAO where participation is essential. Using the Superfluid protocol, users must stay actively involved or risk losing tokens. This encourages active involvement and participatory governance within the community.',
      tools: ['Solidity', 'Foundry'],
      contributors: ['Mehdi Djendar', 'mounia ARJDAL', 'Lyam Gomès', 'Martin Saldinger'],
      heroImage: { src: '/p2p/superfluid-dao.png', alt: 'Superfluid DAO hero' },
      repoUrl: 'https://github.com/PoCInnovation/Superfluid-DAO',
    },
    {
      id: 'price-sensor',
      title: 'Price Sensor',
      description:
        'Price Sensor is a price sensor implementation for the Mangrove protocol. Its abstract design makes it easy to integrate into different kinds of smart offers.',
      tools: ['Solidity', 'Mangrove'],
      contributors: ['Martin Saldinger', 'Nathan Flattin', 'Ismaël Fall'],
      heroImage: { src: '/p2p/price-sensor.png', alt: 'NFT Marketplace hero' },
      repoUrl: 'https://github.com/PoCInnovation/Price-Sensor',
    },
    {
      id: 'poc-ether',
      title: 'PoCEther',
      description:
        'PoCEther is a blockchain security challenge platform. It lets users explore and solve hands-on exercises covering various vulnerabilities and attacks on smart contracts.',
      tools: ['Solidity', 'Truffle', 'React'],
      contributors: ['Lucas Louis', 'Matéo Viel'],
      heroImage: { src: '/p2p/pocether.png', alt: 'Bridge Protocol hero' },
      repoUrl: 'https://github.com/PoCInnovation/PoCEther',
    },
  ]

  return (
    <div className='w-full'>
      {/* Mobile: single column */}
      <div className='grid grid-cols-1 gap-4 md:hidden px-4'>
        <ProfileCard
          name='Aurelien Demeusy and Jules Lordet'
          role='Blockchain Leads'
          imageSrc='/p2p/p2p_respo.png'
          imageAlt='Aurelien Demeusy and Jules Lordet, Blockchain Leads'
          onContactClick={onOpenContactModal}
          priority={isPriority}
        />
        <StatsCard
          number='25+'
          title='Completed projects'
          description='Our members build open-source dApps: DeFi protocols, crowdfunding, DAO tools and decentralized storage.'
        />
        <StatsCard
          number='75+'
          title='Introductory workshops held'
          description='Workshops covering all the basics: Ethereum, Solidity smart contracts, token management, DAOs, security and on-chain interactions.'
        />
        <EventImageCard
          imageSrc='/p2p/ethglobal.jpg'
          imageAlt='Hackathon ETHGlobal Cannes'
          title='Hackathon ETHGlobal Cannes'
          date='July 4, 2025'
          priority={isPriority}
        />
        <EventImageCard
          imageSrc='/p2p/haks.jpg'
          imageAlt='Hackathon Haks'
          title='Hackathon Haks'
          date='May 12, 2023'
          priority={isPriority}
        />
        <LargeEventCard
          imageSrc='/p2p/krypto-tour.png'
          imageAlt='Krypto Tour Lyon Fair'
          title='Krypto Tour Lyon Fair'
          date='October 11, 2024'
          priority={isPriority}
        />
      </div>

      {/* Medium screens (md to xl): 2 columns layout using full width */}
      <div className='hidden md:grid md:grid-cols-2 xl:hidden gap-4 px-4 grid-rows-2'>
        {/* Profile Card spans 2 rows */}
        <div className='row-span-2'>
          <ProfileCard
            name='Aurelien Demeusy and Jules Lordet'
            role='Blockchain Leads'
            imageSrc='/p2p/p2p_respo.png'
            imageAlt='Aurelien Demeusy and Jules Lordet, Blockchain Leads'
            onContactClick={onOpenContactModal}
          />
        </div>

        {/* Right column cards */}
        <StatsCard
          number='25+'
          title='Completed projects'
          description='Our members build open-source dApps: DeFi protocols, crowdfunding, DAO tools and decentralized storage.'
        />
        <StatsCard
          number='75+'
          title='Introductory workshops held'
          description='Workshops covering all the basics: Ethereum, Solidity smart contracts, token management, DAOs, security and on-chain interactions.'
        />

        {/* Event Cards in bottom row */}
        <EventImageCard
          imageSrc='/p2p/ethglobal.jpg'
          imageAlt='Hackathon ETHGlobal Cannes'
          title='Hackathon ETHGlobal Cannes'
          date='July 4, 2025'
          priority={isPriority}
        />
        <EventImageCard
          imageSrc='/p2p/haks.jpg'
          imageAlt='Hackathon Haks'
          title='Hackathon Haks'
          date='May 12, 2023'
          priority={isPriority}
        />

        {/* Large Event Card spans full width */}
        <div className='col-span-2'>
          <LargeEventCard
            imageSrc='/p2p/krypto-tour.png'
            imageAlt='Krypto Tour Lyon Fair'
            title='Krypto Tour Lyon Fair'
            date='October 11, 2024'
            priority={isPriority}
          />
        </div>
      </div>

      {/* Large screens (xl and above): 4 equal columns using full viewport width */}
      <div className='hidden xl:grid xl:grid-cols-4 gap-4 2xl:gap-6 px-4 2xl:px-8'>
        {/* Profile Card - Column 1 */}
        <div className='col-span-1'>
          <ProfileCard
            name='Aurelien Demeusy and Jules Lordet'
            role='Blockchain Leads'
            imageSrc='/p2p/p2p_respo.png'
            imageAlt='Aurelien Demeusy and Jules Lordet, Blockchain Leads'
            onContactClick={onOpenContactModal}
          />
        </div>

        {/* Stats Cards - Column 2 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <StatsCard
            number='25+'
            title='Completed projects'
            description='Our members build open-source dApps: DeFi protocols, crowdfunding, DAO tools and decentralized storage.'
          />
          <StatsCard
            number='75+'
            title='Introductory workshops held'
            description='Workshops covering all the basics: Ethereum, Solidity smart contracts, token management, DAOs, security and on-chain interactions.'
          />
        </div>

        {/* Event Cards - Column 3 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <EventImageCard
            imageSrc='/p2p/ethglobal.jpg'
            imageAlt='Hackathon ETHGlobal Cannes'
            title='Hackathon ETHGlobal Cannes'
            date='July 4, 2025'
            priority={isPriority}
          />
          <EventImageCard
            imageSrc='/p2p/haks.jpg'
            imageAlt='Hackathon Haks'
            title='Hackathon Haks'
            date='May 12, 2023'
            priority={isPriority}
          />
        </div>

        {/* Large Event Card - Column 4 */}
        <div className='col-span-1'>
          <LargeEventCard
            imageSrc='/p2p/krypto-tour.png'
            imageAlt='Krypto Tour Lyon Fair'
            title='Krypto Tour Lyon Fair'
            date='October 11, 2024'
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
