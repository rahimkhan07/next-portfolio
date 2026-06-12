import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiJavascript,
  SiTailwindcss, SiHtml5, SiCss3, SiMysql, SiPhp,
  SiMongodb, SiFirebase
} from 'react-icons/si'
import Image from 'next/image'

const skills = [
  { icon: <SiReact size={32} color="#61DBFB" />, label: 'ReactJS' },
  { icon: <SiNextdotjs size={32} color="white" />, label: 'NextJS' },
  { icon: <SiJavascript size={32} color="yellow" />, label: 'JavaScript' },
  { icon: <SiNodedotjs size={32} color="green" />, label: 'NodeJS' },
  { icon: <SiTailwindcss size={32} color="#38BDF8" />, label: 'Tailwind' },
  { icon: <SiHtml5 size={32} color="#E34F26" />, label: 'HTML5' },
  { icon: <SiCss3 size={32} color="#1572B6" />, label: 'CSS3' },
  { icon: <SiMysql size={32} color="#00758F" />, label: 'MySQL' },
  { icon: <SiPhp size={32} color="#777BB4" />, label: 'PHP' },
  { icon: <SiMongodb size={32} color="#47A248" />, label: 'MongoDB' },
  { icon: <SiFirebase size={32} color="#FFCA28" />, label: 'Firebase' },
]

const timeline = [
  {
    year: '2022',
    title: 'Started Web Development',
    desc: 'Began learning HTML, CSS & JavaScript. Built first static websites.',
  },
  {
    year: '2023',
    title: 'Learned React & NodeJS',
    desc: 'Dived into modern frameworks. Built full-stack projects with REST APIs.',
  },
  {
    year: '2024',
    title: 'Freelance Projects',
    desc: 'Delivered multiple client projects including e-commerce and landing pages.',
  },
  {
    year: '2025',
    title: 'Next.js & Advanced Stack',
    desc: 'Adopted Next.js, Tailwind CSS, and cloud tools for production-ready apps.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020421] text-white font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-16 flex flex-col md:flex-row items-center gap-10">
        {/* Photo */}
        <div className="flex-shrink-0">
          <Image
            src="/img2.jpg"
            alt="Rahim Khan"
            width={220}
            height={220}
            className="rounded-2xl shadow-lg shadow-blue-800/40 object-cover"
          />
        </div>

        {/* Bio */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
            <span className="w-2 h-12 bg-blue-700 rounded-l-md inline-block"></span>
            About Me
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-6">
            Hi! I&apos;m <strong className="text-white">Rahim Khan</strong>, a passionate{' '}
            <strong className="text-blue-400">Frontend Developer</strong> based in{' '}
            <strong className="text-white">Lucknow, Uttar Pradesh</strong>. I craft modern,
            responsive web applications with clean code and great user experiences. With 2+ years
            of hands-on experience and happy clients, I love turning ideas into reality.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-sm text-gray-300">
            <span className="bg-[#050941] px-4 py-2 rounded-full shadow shadow-blue-500/30">
              📧 i.raheem727@gmail.com
            </span>
            <span className="bg-[#050941] px-4 py-2 rounded-full shadow shadow-blue-500/30">
              📞 (+91) 7275138280
            </span>
            <span className="bg-[#050941] px-4 py-2 rounded-full shadow shadow-blue-500/30">
              📍 Lucknow, India
            </span>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-start gap-5">
            <a href="https://github.com/rahimkhan07" target="_blank" rel="noopener noreferrer"
              className="hover:text-gray-400 transition">
              <SiGithub size={26} />
            </a>
            <a href="https://www.linkedin.com/in/rahim-r72/" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-400 transition">
              <SiLinkedin size={26} />
            </a>
            <a href="mailto:i.raheem727@gmail.com" className="hover:text-red-400 transition">
              <SiGmail size={26} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-3">
          <span className="w-2 h-10 bg-blue-700 rounded-l-md inline-block"></span>
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center sm:justify-start gap-5">
          {skills.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#050941] px-5 py-4 rounded-xl
                         shadow shadow-blue-500/20 hover:scale-105 transition-transform duration-300 w-20"
            >
              {s.icon}
              <p className="text-xs text-gray-300 mt-2 text-center">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-3">
          <span className="w-2 h-10 bg-blue-700 rounded-l-md inline-block"></span>
          My Journey
        </h2>
        <div className="relative border-l-2 border-blue-800 pl-6 space-y-10">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              {/* dot */}
              <span className="absolute -left-[1.45rem] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-blue-400"></span>
              <span className="text-blue-400 text-sm font-semibold">{item.year}</span>
              <h3 className="text-lg font-bold mt-1">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GitHub Section ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-3">
          <span className="w-2 h-10 bg-blue-700 rounded-l-md inline-block"></span>
          GitHub Activity
        </h2>

        {/* Contribution graph */}
        <div className="bg-[#050941] border border-blue-900/40 rounded-2xl p-6 sm:p-8 mb-8 overflow-x-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-5 font-semibold">Contribution Graph</p>
          <img
            src="https://ghchart.rshah.org/1d4ed8/rahimkhan07"
            alt="Rahim Khan GitHub contribution chart"
            className="w-full min-w-[600px] rounded-lg"
          />
          <div className="mt-4 flex justify-end">
            <a
              href="https://github.com/rahimkhan07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
            >
              <SiGithub size={14} /> View full profile →
            </a>
          </div>
        </div>

        {/* GitHub Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#050941] border border-blue-900/40 rounded-2xl p-4 overflow-hidden">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">GitHub Stats</p>
            <img
              src="https://github-readme-stats.vercel.app/api?username=rahimkhan07&show_icons=true&theme=tokyonight&hide_border=true&bg_color=050941&title_color=60a5fa&icon_color=60a5fa&text_color=e2e8f0&rank_icon=github"
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </div>
          <div className="bg-[#050941] border border-blue-900/40 rounded-2xl p-4 overflow-hidden">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">Top Languages</p>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahimkhan07&layout=compact&theme=tokyonight&hide_border=true&bg_color=050941&title_color=60a5fa&text_color=e2e8f0"
              alt="Top Languages"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Streak stats */}
        <div className="bg-[#050941] border border-blue-900/40 rounded-2xl p-4 overflow-hidden">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">Contribution Streak</p>
          <img
            src="https://streak-stats.demolab.com?user=rahimkhan07&theme=tokyonight&hide_border=true&background=050941&ring=3b82f6&fire=3b82f6&currStreakLabel=60a5fa"
            alt="GitHub Streak"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* ── Download CV ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want to know more?</h2>
        <p className="text-gray-400 mb-6">Download my resume to see the full picture.</p>
        <a
          href="/RahimKhan.pdf"
          download
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg
                     shadow hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </section>

      <Footer />
    </div>
  )
}
