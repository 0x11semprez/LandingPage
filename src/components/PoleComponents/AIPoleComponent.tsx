import type { FeaturedProject } from './FeaturedProjects'
import React from 'react'
import LargeEventCard from '../PoleCards/LargeEventCard'
import EventImageCard from '../PoleCards/MediumEventCard'
import ProfileCard from '../PoleCards/ProfileCard'
import StatsCard from '../PoleCards/StatsCard'
import FeaturedProjects from './FeaturedProjects'

type AIPoleComponentProps = {
  onOpenContactModal: () => void
  isPriority?: boolean
}

export default function AIPoleComponent({ onOpenContactModal, isPriority = false }: AIPoleComponentProps) {
  const featuredProjects: FeaturedProject[] = [
    {
      id: 'cyrebro',
      title: 'Cyrebro',
      description:
        'AI-based medical pre-consultation assistant, developed with the Institut de l’Audition and the Institut Pasteur. Conversational intake, automated summaries and medical consistency checks.',
      tools: ['Python', 'Transformers', 'MedGamma'],
      contributors: [
        'Léandre Ramos',
        'Sacha Henneveux',
        'Antoine Béal',
        'Manmohit-Singh Lal',
      ],
      heroImage: { src: '/ai/cyrebro.png', alt: 'Cyrebro hero' },
      repoUrl: 'https://github.com/PoCInnovation/cyrebro',
    },
    {
      id: 'open-zero',
      title: 'Open-Zero',
      description:
        'Open-Zero is an open-source research project that reproduces DeepMind\'s AlphaZero and MuZero methods to train a chess AI, using deep reinforcement learning (notably the A3C algorithm).',
      tools: ['PyTorch', 'Python', 'AC3'],
      contributors: ['Gino Ambigaipalan', 'Jean-Baptiste Debize', 'Nell Fauveau', 'Bogdan Guillemoles'],
      heroImage: { src: '/ai/open-zero.png', alt: 'Open-Zero hero' },
      repoUrl: 'https://github.com/PoCInnovation/Open-Zero',
    },
    {
      id: 'infinalys',
      title: 'Infinalys',
      description:
        'Infinalys is a stock forecasting web app combining market data visualization with predictions from a deep learning AI. Easy to deploy with Docker, it offers a modern, interactive interface to explore financial trends.',
      tools: ['React', 'Yahoo finance', 'TensorFlow', 'Docker'],
      contributors: ['Alexandre Chetrit', 'Coline Seguret', 'Grégoire Brasseur', 'Robin Christol', 'Paul Monnery'],
      heroImage: { src: '/ai/infinalys.png', alt: 'Infinalys hero' },
      repoUrl: 'https://github.com/PoCInnovation/Infinalys2',
    },
    {
      id: 'deep-poc',
      title: 'Deep-PoC',
      description:
        'Deep-PoC is a deepfake detection tool that uses AI to identify manipulated content (images or videos). It analyzes and flags visual forgeries to fight disinformation and malicious use.',
      tools: ['Python', 'PyTorch', 'Django', 'Matplotlib'],
      contributors: ['Mikael Vallenet', 'Valentin De Matos', 'Victor Guyot'],
      heroImage: { src: '/ai/deep-poc.png', alt: 'Deep-PoC hero' },
      repoUrl: 'https://github.com/PoCInnovation/Deep-PoC',
    },
  ]

  return (
    <div className='w-full'>
      {/* Mobile: single column */}
      <div className='grid grid-cols-1 gap-4 md:hidden px-4'>
        <ProfileCard
          name='Manmohit-Singh Lal and Sacha Henneveux'
          role='AI Leads'
          imageSrc='/ai/ia_respo.png'
          imageAlt='Manmohit-Singh Lal and Sacha Henneveux, AI Leads'
          onContactClick={onOpenContactModal}
          priority={isPriority}
        />
        <StatsCard
          number='20+'
          title='Completed projects'
          description="From multimodal AI models to deepfake detection. These projects blend applied research and technical innovation."
        />
        <StatsCard
          number='50+'
          title='Introductory workshops held'
          description="Workshops covering all the fundamentals: generative AI, image processing, NLP, supervised and unsupervised learning..."
        />
        <EventImageCard
          imageSrc='/ai/hackathon-google.jpeg'
          imageAlt='Hackathon Google'
          title='Hackathon Google'
          date='July 5, 2025'
          priority={isPriority}
        />
        <EventImageCard
          imageSrc='/ai/siami.jpeg'
          imageAlt="AI Fair, French Ministry of the Interior"
          title="AI Fair, French Ministry of the Interior"
          date='October 8, 2024'
          priority={isPriority}
        />
        <LargeEventCard
          imageSrc='/ai/mistral-hackathon.jpeg'
          imageAlt='Hackathon Mistral'
          title='Hackathon Mistral'
          date='April 19, 2025'
          priority={isPriority}
        />
      </div>

      {/* Medium screens (md to xl): 2 columns layout using full width */}
      <div className='hidden md:grid md:grid-cols-2 xl:hidden gap-4 px-4 grid-rows-2'>
        {/* Profile Card spans 2 rows */}
        <div className='row-span-2'>
          <ProfileCard
            name='Manmohit-Singh Lal and Sacha Henneveux'
            role='AI Leads'
            imageSrc='/ai/ia_respo.png'
            imageAlt='Manmohit-Singh Lal and Sacha Henneveux, AI Leads'
            onContactClick={onOpenContactModal}
            priority
          />
        </div>

        {/* Right column cards */}
        <StatsCard
          number='20+'
          title='Completed projects'
          description="From multimodal AI models to deepfake detection. These projects blend applied research and technical innovation."
        />
        <StatsCard
          number='50+'
          title='Introductory workshops held'
          description="Workshops covering all the fundamentals: generative AI, image processing, NLP, supervised and unsupervised learning..."
        />

        {/* Event Cards in bottom row */}
        <EventImageCard
          imageSrc='/ai/siami.jpeg'
          imageAlt="AI Fair, French Ministry of the Interior"
          title="AI Fair, French Ministry of the Interior"
          date='October 8, 2024'
          priority={isPriority}
        />
        <EventImageCard
          imageSrc='/ai/hackathon-google.jpeg'
          imageAlt='Hackathon Google'
          title='Hackathon Google'
          date='July 5, 2025'
          priority={isPriority}
        />

        {/* Large Event Card spans full width */}
        <div className='col-span-2'>
          <LargeEventCard
            imageSrc='/ai/mistral-hackathon.jpeg'
            imageAlt='Hackathon Mistral'
            title='Hackathon Mistral'
            date='April 19, 2025'
            priority
          />
        </div>
      </div>

      {/* Large screens (xl and above): 4 equal columns using full viewport width */}
      <div className='hidden xl:grid xl:grid-cols-4 gap-4 2xl:gap-6 px-4 2xl:px-8'>
        {/* Profile Card - Column 1 */}
        <div className='col-span-1'>
          <ProfileCard
            name='Manmohit-Singh Lal and Sacha Henneveux'
            role='AI Leads'
            imageSrc='/ai/ia_respo.png'
            imageAlt='Manmohit-Singh Lal and Sacha Henneveux, AI Leads'
            onContactClick={onOpenContactModal}
            priority
          />
        </div>

        {/* Stats Cards - Column 2 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <StatsCard
            number='20+'
            title='Completed projects'
            description="From multimodal AI models to deepfake detection. These projects blend applied research and technical innovation."
          />
          <StatsCard
            number='50+'
            title='Introductory workshops held'
            description="Workshops covering all the fundamentals: generative AI, image processing, NLP, supervised and unsupervised learning..."
          />
        </div>

        {/* Event Cards - Column 3 */}
        <div className='col-span-1 grid grid-rows-2 gap-4 2xl:gap-6'>
          <EventImageCard
            imageSrc='/ai/hackathon-google.jpeg'
            imageAlt='Hackathon Google'
            title='Hackathon Google'
            date='July 5, 2025'
            priority
          />
          <EventImageCard
            imageSrc='/ai/siami.jpeg'
            imageAlt="AI Fair, French Ministry of the Interior"
            title="AI Fair, French Ministry of the Interior"
            date='October 8, 2024'
            priority
          />
        </div>

        {/* Large Event Card - Column 4 */}
        <div className='col-span-1'>
          <LargeEventCard
            imageSrc='/ai/mistral-hackathon.jpeg'
            imageAlt='Hackathon Mistral'
            title='Hackathon Mistral'
            date='April 19, 2025'
            priority
          />
        </div>
      </div>

      <div className='w-full px-4'>
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </div>
  )
}
