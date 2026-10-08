import React from 'react'
import { aiProjects } from '@/data/projects'
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
        <FeaturedProjects projects={aiProjects} />
      </div>
    </div>
  )
}
