import type { FeaturedProject } from '@/components/PoleComponents/FeaturedProjects'

export const aiProjects: FeaturedProject[] = [
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

export const softwareProjects: FeaturedProject[] = [
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

export const blockchainProjects: FeaturedProject[] = [
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

export const cyberProjects: FeaturedProject[] = [
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
