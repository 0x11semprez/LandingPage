'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { poles } from '@/data/poles'
import WriteOnLogo from './WriteOnLogo'

const linkClass = 'text-foreground hover:text-foreground/60 transition-colors duration-200 text-sm md:text-[15px]'

function PolesMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close on navigation
  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setIsOpen(false)
  }, [pathname])

  // Close on outside click or Escape
  useEffect(() => {
    if (!isOpen) {
      return
    }
    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  return (
    <div ref={menuRef} className='relative'>
      <button
        type='button'
        aria-haspopup='menu'
        aria-expanded={isOpen}
        onClick={() => setIsOpen(open => !open)}
        className={`cursor-pointer flex items-center gap-1 ${linkClass}`}
      >
        Poles
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div role='menu' className='absolute left-1/2 -translate-x-1/2 top-full mt-4 w-60 rounded-xl border border-foreground/10 bg-white p-2 shadow-lg'>
          {poles.map(pole => (
            <Link
              key={pole.key}
              role='menuitem'
              href={`/innovation/${pole.key}`}
              aria-current={pathname === `/innovation/${pole.key}` ? 'page' : undefined}
              className='block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-foreground/5 aria-[current=page]:font-semibold'
            >
              {pole.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/genesis', label: 'Genesis' },
  { href: '/photobook', label: 'Photobook' },
]

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close on navigation
  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setIsOpen(false)
  }, [pathname])

  return (
    <div className='md:hidden'>
      <button
        type='button'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(open => !open)}
        className='cursor-pointer p-2 -mr-2 text-foreground'
      >
        {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
      </button>
      {isOpen && (
        <div className='absolute inset-x-0 top-full border-t border-foreground/10 bg-white shadow-lg'>
          <div className='container-custom flex flex-col py-4'>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className='py-3 text-base text-foreground'>
                {link.label}
              </Link>
            ))}
            <div className='pt-3 pb-1 text-xs uppercase tracking-wider text-muted'>Poles</div>
            {poles.map(pole => (
              <Link key={pole.key} href={`/innovation/${pole.key}`} className='py-2 pl-3 text-base text-foreground'>
                {pole.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function GlassyNavbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  // Bumped each time the menu comes back, to replay the logo write-on
  const [logoRevealKey, setLogoRevealKey] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      else if (!isVisible) {
        setIsVisible(true)
        setLogoRevealKey(key => key + 1)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isVisible])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <nav className='container-custom flex items-center justify-between h-16 md:h-[72px]'>
        <Link href='/' className='cursor-pointer flex items-center'>
          {/* Letters write themselves on load and whenever the menu reappears */}
          <WriteOnLogo key={logoRevealKey} className='h-6 md:h-7 w-auto' />
        </Link>
        <div className='hidden md:flex items-center gap-8'>
          <Link href='/' className={linkClass}>
            Home
          </Link>
          <PolesMenu />
          <Link href='/events' className={linkClass}>
            Events
          </Link>
          <Link href='/genesis' className={linkClass}>
            Genesis
          </Link>
          <Link href='/photobook' className={linkClass}>
            Photobook
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  )
}

export default GlassyNavbar
