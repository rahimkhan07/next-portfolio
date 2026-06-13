import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiX } from 'react-icons/si'

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around min-h-screen px-4 sm:px-6 lg:px-12 py-8">

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Link href="/Gallery" className="relative group block w-[250px]">
          <Image
            src="/img2.jpg"
            alt="Rahim"
            width={250}
            height={200}
            className="rounded-lg shadow-lg object-cover w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
                          rounded-b-lg px-4 py-3 flex items-center justify-between
                          group-hover:from-blue-900/80 transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-white text-sm font-semibold tracking-wide">Rahim&apos;s Diary</span>
            </div>
            <span className="text-blue-300 text-xs font-medium group-hover:translate-x-1 transition-transform duration-200">
              View →
            </span>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <small className="text-[var(--text-muted)] mb-2 block">
          Find me on{" "}
          <a href="https://www.linkedin.com/in/rahim-r72/" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-400">
            <SiX size={16} className="inline-block" />
          </a>
        </small>

        <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
          I&apos;m <span className="text-blue-400">RAHIM</span>
        </h3>

        <p className="text-base sm:text-lg text-[var(--text-muted)] mb-6 px-2 sm:px-0">
          A passionate <strong className="text-[var(--text-primary)]">Web App Developer</strong> focused on
          building modern, scalable applications and continuously exploring new tools and frameworks to stay
          ahead in the evolving tech landscape. Strong collaborator with a growth mindset and a commitment to
          delivering quality user experiences.
        </p>

        <a href="/RahimKhan.pdf" download>
          <span className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Get CV
          </span>
        </a>
      </div>
    </div>
  )
}

export default HomePage
