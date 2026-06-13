"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SiGithub, SiLinkedin, SiGmail, SiX } from 'react-icons/si'

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const day   = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year  = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <footer className="w-full border-t border-[var(--border)] mt-8 px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand */}
        <div className="text-2xl sm:text-3xl font-bold">
          <Link href="/"
            className="text-[var(--text-primary)] hover:text-blue-400 transition flex items-center gap-2">
            R.Khan
          </Link>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-[var(--text-muted)]">
          {[['About', '/About'], ['Services', '/Service'], ['Contact', '/Contact'], ['Blog', '/Blog']].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="hover:text-blue-400 transition">{label}</Link>
            </li>
          ))}
        </ul>

        {/* Social + date */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/rahim-r72/" target="_blank" rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-blue-400 transition"><SiLinkedin size={22} /></a>
            <a href="https://github.com/rahimkhan07" target="_blank" rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"><SiGithub size={22} /></a>
            <a href="mailto:i.raheem72@gmail.com"
              className="text-[var(--text-muted)] hover:text-red-400 transition"><SiGmail size={22} /></a>
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"><SiX size={22} /></a>
          </div>
          <span className="text-xs text-[var(--text-muted)]">{formatDate(currentDate)}</span>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-[var(--text-muted)]">
        © 2025 Rahim Khan. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
