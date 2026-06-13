"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/Blog', label: 'Blog' },
  { href: '/About', label: 'About Us' },
  { href: '/Service', label: 'Services' },
  { href: '/Contact', label: 'Contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { dark, toggle } = useTheme()

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl
                    rounded-2xl shadow-lg px-5 py-3
                    bg-[var(--nav-bg)] backdrop-blur-md border border-[var(--nav-border)]"
         style={{ boxShadow: 'var(--shadow)' }}>

      <div className="flex items-center justify-between">
        {/* Brand */}
        <Link href="/"
          className="font-bold text-xl tracking-wide text-[var(--text-primary)] hover:text-blue-500 transition">
          R.KHAN
        </Link>

        {/* Desktop links + toggle */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition
                    ${pathname === link.href
                      ? 'bg-blue-700 text-white'
                      : 'text-[var(--text-muted)] hover:bg-blue-600/20 hover:text-[var(--text-primary)]'
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-3 p-2 rounded-xl border border-[var(--border)]
                       bg-[var(--bg-card2)] hover:bg-blue-600/20
                       text-[var(--text-primary)] transition"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme toggle mobile */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-xl border border-[var(--border)]
                       bg-[var(--bg-card2)] text-[var(--text-primary)] transition"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-blue-600/20 transition"
          >
            <span className={`block h-0.5 w-6 bg-[var(--text-primary)] rounded transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[var(--text-primary)] rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[var(--text-primary)] rounded transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden mt-3 flex flex-col gap-1 border-t border-[var(--border)] pt-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition
                  ${pathname === link.href
                    ? 'bg-blue-700 text-white'
                    : 'text-[var(--text-muted)] hover:bg-blue-600/20 hover:text-[var(--text-primary)]'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
