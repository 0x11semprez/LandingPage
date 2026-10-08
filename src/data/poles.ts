import type { ContactPerson } from '@/components/ContactModal'
import type { FeaturedProject } from '@/components/PoleComponents/FeaturedProjects'
import type { PocEvent } from './events'
import { aiProjects, blockchainProjects, cyberProjects, softwareProjects } from './projects'

export type PoleStat = {
  value: string
  label: string
  description: string
}

export type Pole = {
  key: 'ai' | 'software' | 'blockchain' | 'cyber' | 'hardware'
  title: string
  eventPole: PocEvent['pole'] | 'Hardware'
  subtitle: string
  description: string
  color: string
  leads?: { names: string, role: string, image: string }
  contacts: ContactPerson[]
  workshops?: PoleStat
  completedProjects?: PoleStat
  // Project running this wave; undefined until the pole announces it
  currentProject?: string
  pastProjects: FeaturedProject[]
}

// Pole colors are picked so white text on them stays readable (WCAG AA, at least 4.5:1 down to 85% white)
export const poles: Pole[] = [
  {
    key: 'ai',
    title: 'Artificial Intelligence',
    eventPole: 'Artificial Intelligence',
    subtitle: 'Innovating with data',
    description: 'We explore machine learning, generative AI and many other architectures to build useful, innovative tools.',
    color: '#B42318',
    leads: { names: 'Manmohit-Singh Lal and Sacha Henneveux', role: 'AI Leads', image: '/ai/ia_respo.png' },
    contacts: [
      { name: 'Manmohit-Singh Lal', email: 'manmohit.singh-lal@poc-innovation.fr', linkedinUrl: 'https://www.linkedin.com/in/manmohit-singh-l-300b50356/' },
      { name: 'Sacha Henneveux', email: 'sacha.henneveux@poc-innovation.fr', linkedinUrl: 'https://www.linkedin.com/in/sacha-henneveux-084052304' },
    ],
    workshops: { value: '50+', label: 'Introductory workshops held', description: 'Workshops covering all the fundamentals: generative AI, image processing, NLP, supervised and unsupervised learning...' },
    completedProjects: { value: '20+', label: 'Completed projects', description: 'From multimodal AI models to deepfake detection. These projects blend applied research and technical innovation.' },
    pastProjects: aiProjects,
  },
  {
    key: 'software',
    title: 'Software',
    eventPole: 'Software',
    subtitle: 'Coding to simplify',
    description: 'Web, mobile and desktop development: we build useful, high-performance, open-source technical solutions.',
    color: '#1D4ED8',
    leads: { names: 'Laurent Gonzalez and Milo Kowalska', role: 'Software Leads', image: '/soft/soft_respo.png' },
    contacts: [
      { name: 'Laurent Gonzalez', email: 'laurent.gonzalez@poc-innovation.fr', linkedinUrl: 'https://www.linkedin.com/in/laurent-gonzalez-epitech/' },
      { name: 'Milo Kowalska', email: 'milo.kowalska@poc-innovation.fr', linkedinUrl: 'https://www.linkedin.com/in/milo-kowalska-6a22472a3/' },
    ],
    workshops: { value: '100+', label: 'Introductory workshops held', description: 'Discover the most used frameworks, languages, databases, testing, deployment and much more.' },
    completedProjects: { value: '30+', label: 'Completed projects', description: 'From serverless SDKs to API generation and front-end migration, our projects explore the latest tools and frameworks.' },
    pastProjects: softwareProjects,
  },
  {
    key: 'blockchain',
    title: 'Blockchain',
    eventPole: 'Blockchain',
    subtitle: 'Building the decentralized web',
    description: 'Design of apps, smart contracts and decentralized protocols on Ethereum, Layer 2, Solana and more.',
    color: '#166534',
    leads: { names: 'Aurelien Demeusy and Jules Lordet', role: 'Blockchain Leads', image: '/p2p/p2p_respo.png' },
    contacts: [
      { name: 'Aurelien Demeusy', email: 'aurelien.demeusy@poc-innovation.fr', linkedinUrl: 'https://www.linkedin.com/in/aurelien-demeusy/' },
      { name: 'Jules Lordet', email: 'jules.lordet@poc-innovation.fr', linkedinUrl: 'https://www.linkedin.com/in/jules-lordet-9798a12b3/' },
    ],
    workshops: { value: '75+', label: 'Introductory workshops held', description: 'Workshops covering all the basics: Ethereum, Solidity smart contracts, token management, DAOs, security and on-chain interactions.' },
    completedProjects: { value: '25+', label: 'Completed projects', description: 'Our members build open-source dApps: DeFi protocols, crowdfunding, DAO tools and decentralized storage.' },
    pastProjects: blockchainProjects,
  },
  {
    key: 'cyber',
    title: 'Cybersecurity',
    eventPole: 'Cybersecurity',
    subtitle: 'Defend, test, understand',
    description: 'Analysis, pentesting, auditing and defensive tooling to strengthen the security of digital systems.',
    color: '#6D28D9',
    leads: { names: 'Timothée Pasteau-Berthaud', role: 'Cybersecurity Lead', image: '/cyber/timo.png' },
    contacts: [
      { name: 'Timothée Pasteau-Berthaud', email: 'timothee.pasteau-berthaud@poc-innovation.fr', linkedinUrl: 'https://www.linkedin.com/company/poc-innovation' },
    ],
    workshops: { value: '45+', label: 'Introductory workshops held', description: 'Our workshops cover cybersecurity fundamentals: forensics, ransomware, reverse engineering, cryptography and more.' },
    completedProjects: { value: '25+', label: 'Completed projects', description: 'From malware reverse engineering to building RATs, our projects cover both offensive and defensive cybersecurity.' },
    pastProjects: cyberProjects,
  },
  {
    // New pole: description, leads, stats and projects to be filled in by the team
    key: 'hardware',
    title: 'Hardware',
    eventPole: 'Hardware',
    subtitle: 'New pole',
    description: 'Our newest pole. Its first projects and workshops are being prepared.',
    color: '#B03A0A',
    contacts: [],
    pastProjects: [],
  },
]
