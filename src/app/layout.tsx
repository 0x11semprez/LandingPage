import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Poppins } from 'next/font/google'
import React from 'react'
import GlassyNavbar from '@/components/Navbar'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.poc-innovation.fr'),
  icons: {
    icon: '/poc_icon.png',
  },
  title: 'PoC - Student Innovation Center',
  description:
    'Discover our student association dedicated to innovation and to turning ideas into concrete projects.',
  openGraph: {
    title: 'PoC - Student Innovation Center',
    description:
      'Discover our student association dedicated to innovation and to turning ideas into concrete projects.',
    images: ['/logo_poc.png'],
    url: 'https://www.poc-innovation.fr/',
    siteName: 'PoC Innovation',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PoC - Student Innovation Center',
    description:
      'Discover our student association dedicated to innovation and to turning ideas into concrete projects.',
    images: ['/logo_poc.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={poppins.variable}>
      <body className='font-sans antialiased'>
        <GlassyNavbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
