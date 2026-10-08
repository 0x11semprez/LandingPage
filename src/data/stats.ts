// Association-wide figures, shared by the home page Association section and the poles diagram
export const associationStats = {
  activeMembers: { value: 25, suffix: '+' },
  completedProjects: { value: 125, suffix: '+' },
  events: { value: 300, suffix: '+' },
  alumni: { value: 500, suffix: '+' },
}

export function formatStat(stat: { value: number, suffix: string }) {
  return `${stat.value}${stat.suffix}`
}

// Where alumni went after PoC, shown under the alumni figure
export const alumniDestinations = [
  { name: 'University College London', logo: '/alumni/ucl.png', width: 800, height: 225, url: 'https://www.ucl.ac.uk' },
  { name: 'Google', logo: '/alumni/google.png', width: 794, height: 262, url: 'https://about.google' },
  { name: 'Kiln', logo: '/partner/kiln.png', width: 2709, height: 1042, url: 'https://www.kiln.fi' },
  { name: 'Cryptio', logo: '/partner/cryptio_official.png', width: 749, height: 187, url: 'https://cryptio.co' },
]

// Events PoC took part in, shown under the events figure
export const eventHighlights = [
  { name: 'MIT Hacking Medicine', logo: '/events/mit_hacking_medicine.png', width: 356, height: 132, url: 'https://hackingmedicine.mit.edu' },
  { name: 'Ramify', logo: '/partner/ramify_official.png', width: 746, height: 218, url: 'https://www.ramify.fr' },
  { name: 'Ethereum France', logo: '/events/ethereum_france.png', width: 800, height: 449, url: 'https://www.ethereum-france.com' },
  { name: 'ANDCS', logo: '/events/andcs.png', width: 1024, height: 583, url: 'https://andcs.org' },
  { name: 'AWS', logo: '/events/aws.png', width: 792, height: 475, url: 'https://aws.amazon.com' },
]
