import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import PoleDetail from '@/components/PoleDetail'
import { poles } from '@/data/poles'

type PolePageProps = {
  params: Promise<{ pole: string }>
}

export function generateStaticParams() {
  return poles.map(pole => ({ pole: pole.key }))
}

export async function generateMetadata({ params }: PolePageProps): Promise<Metadata> {
  const { pole: poleKey } = await params
  const pole = poles.find(item => item.key === poleKey)
  return pole ? { title: `${pole.title} - PoC Innovation`, description: pole.description } : {}
}

export default async function PolePage({ params }: PolePageProps) {
  const { pole: poleKey } = await params
  const pole = poles.find(item => item.key === poleKey)
  if (!pole) {
    notFound()
  }

  return (
    <main>
      <section className='relative min-h-screen flex flex-col items-center overflow-hidden bg-background-main'>
        <PoleDetail poleKey={pole.key} />
        <Footer />
      </section>
    </main>
  )
}
