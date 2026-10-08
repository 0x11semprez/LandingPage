export type PocEvent = {
  title: string
  date: string
  year: number
  pole: 'Artificial Intelligence' | 'Software' | 'Blockchain' | 'Cybersecurity'
  image: string
}

// Newest first
export const events: PocEvent[] = [
  { title: 'Hackathon Google', date: 'July 5, 2025', year: 2025, pole: 'Artificial Intelligence', image: '/ai/hackathon-google.jpeg' },
  { title: 'Hackathon ETHGlobal Cannes', date: 'July 4, 2025', year: 2025, pole: 'Blockchain', image: '/p2p/ethglobal.jpg' },
  { title: 'Hackathon Mistral', date: 'April 19, 2025', year: 2025, pole: 'Artificial Intelligence', image: '/ai/mistral-hackathon.jpeg' },
  { title: 'InCyber Forum', date: 'April 1, 2025', year: 2025, pole: 'Cybersecurity', image: '/cyber/incyber.png' },
  { title: 'Krypto Tour Lyon Fair', date: 'October 11, 2024', year: 2024, pole: 'Blockchain', image: '/p2p/krypto-tour.png' },
  { title: 'AI Fair, French Ministry of the Interior', date: 'October 8, 2024', year: 2024, pole: 'Artificial Intelligence', image: '/ai/siami.jpeg' },
  { title: 'Vivatech Fair', date: 'May 22, 2024', year: 2024, pole: 'Software', image: '/soft/vivatech.jpg' },
  { title: 'CTF Pathwar', date: 'May 25, 2023', year: 2023, pole: 'Cybersecurity', image: '/cyber/pathwar.png' },
  { title: 'Hackathon Haks', date: 'May 12, 2023', year: 2023, pole: 'Blockchain', image: '/p2p/haks.jpg' },
  { title: 'Hackathon NASA Space Apps Challenge', date: 'October 3, 2021', year: 2021, pole: 'Software', image: '/soft/nasa_hackathon_3.png' },
  { title: 'European Cyber Cup', date: 'September 8, 2021', year: 2021, pole: 'Cybersecurity', image: '/cyber/ec2.jpg' },
  { title: 'Hackathon Facebook', date: 'November 2018', year: 2018, pole: 'Software', image: '/soft/hackathon_facebook.jpeg' },
]

export type EventFormat = {
  title: string
  description: string
  examples: string[]
}

// Kinds of events PoC runs or joins. Research projects can go beyond the five poles (e.g. health).
export const eventFormats: EventFormat[] = [
  {
    title: 'Workshops',
    description: 'Hands-on sessions run by each pole to learn a technology from scratch.',
    examples: [],
  },
  {
    title: 'Hackathons',
    description: 'Teams of students build a working prototype in a few days.',
    examples: ['MIT Hacking Medicine', 'Ramify'],
  },
  {
    title: 'Conferences',
    description: 'Talks and conferences PoC takes part in.',
    examples: ['Ethereum France', 'ANDCS'],
  },
  {
    title: 'Afterworks',
    description: 'Informal evenings where members, alumni and partners meet.',
    examples: [],
  },
  {
    title: 'Research projects',
    description: 'Long-term open-source research, including fields outside our five poles.',
    examples: ['Health'],
  },
]
