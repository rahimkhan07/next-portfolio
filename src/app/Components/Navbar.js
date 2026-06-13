"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

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

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl
                 bg-[#020421]/90 backdrop-blur-md border border-blue-900/40
                 rounded-2xl shadow-lg shadow-blue-900/30 px-5 py-3"
    >
      <div className="flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-wide hover:text-blue-400 transition"
        >
          R.KHAN
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition
                  ${pathname === link.href
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-300 hover:bg-blue-800/50 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-blue-800/40 transition"
        >
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300
              ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-opacity duration-300
              ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300
              ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden mt-3 flex flex-col gap-1 border-t border-blue-900/40 pt-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition
                  ${pathname === link.href
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-300 hover:bg-blue-800/50 hover:text-white'
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
