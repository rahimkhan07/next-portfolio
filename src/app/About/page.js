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
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-[family-name:var(--font-geist-sans)]">
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
          <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-xl mb-6">
            Hi! I&apos;m <strong className="text-white">Rahim Khan</strong>, a passionate{' '}
            <strong className="text-blue-400">Frontend Developer</strong> based in{' '}
            <strong className="text-white">Lucknow, Uttar Pradesh</strong>. I craft modern,
            responsive web applications with clean code and great user experiences. With 2+ years
            of hands-on experience and happy clients, I love turning ideas into reality.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-sm text-[var(--text-muted)]">
            <span className="bg-[var(--bg-card)] px-4 py-2 rounded-full shadow shadow-blue-500/30">
              📧 i.raheem727@gmail.com
            </span>
            <span className="bg-[var(--bg-card)] px-4 py-2 rounded-full shadow shadow-blue-500/30">
              📞 (+91) 9682700047
            </span>
            <span className="bg-[var(--bg-card)] px-4 py-2 rounded-full shadow shadow-blue-500/30">
              📍 Lucknow, India
            </span>
          </div>

          {/* Social links */}
          <div className="flex justify-center md:justify-start gap-5">
            <a href="https://github.com/rahimkhan07" target="_blank" rel="noopener noreferrer"
              className="hover:text-[var(--text-muted)] transition">
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
              className="flex flex-col items-center bg-[var(--bg-card)] px-5 py-4 rounded-xl
                         shadow shadow-blue-500/20 hover:scale-105 transition-transform duration-300 w-20"
            >
              {s.icon}
              <p className="text-xs text-[var(--text-muted)] mt-2 text-center">{s.label}</p>
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
              <p className="text-[var(--text-muted)] text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GitHub Section ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="w-2 h-10 bg-blue-700 rounded-l-md inline-block"></span>
          GitHub Activity
        </h2>

        {/* Compact single card */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden">

          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <SiGithub size={16} className="text-[var(--text-muted)]" />
              <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">rahimkhan07</span>
            </div>
            <a href="https://github.com/rahimkhan07" target="_blank" rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-blue-300 transition flex items-center gap-1">
              View profile →
            </a>
          </div>

          <div className="p-4 sm:p-5 space-y-4">
            {/* Contribution graph — compact */}
            <div className="overflow-x-auto rounded-xl bg-[var(--bg-card2)] p-3">
              <img
                src="https://ghchart.rshah.org/1d4ed8/rahimkhan07"
                alt="GitHub contributions"
                className="w-full min-w-[500px] h-24 object-fill rounded-lg"
              />
            </div>

            {/* Stats row — 3 compact pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* GitHub Stats */}
              <div className="sm:col-span-1 rounded-xl overflow-hidden bg-[var(--bg-card2)] p-0.5">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=rahimkhan07&show_icons=true&hide_title=true&hide_border=true&bg_color=00000000&icon_color=60a5fa&text_color=94a3b8&rank_icon=github&hide=contribs"
                  alt="GitHub Stats"
                  className="w-full rounded-xl"
                />
              </div>
              {/* Top Languages */}
              <div className="sm:col-span-1 rounded-xl overflow-hidden bg-[var(--bg-card2)] p-0.5">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahimkhan07&layout=compact&hide_border=true&bg_color=00000000&title_color=60a5fa&text_color=94a3b8&langs_count=4"
                  alt="Top Languages"
                  className="w-full rounded-xl"
                />
              </div>
              {/* Streak */}
              <div className="sm:col-span-1 rounded-xl overflow-hidden bg-[var(--bg-card2)] p-0.5">
                <img
                  src="https://streak-stats.demolab.com?user=rahimkhan07&hide_border=true&background=00000000&ring=3b82f6&fire=60a5fa&currStreakLabel=60a5fa&sideLabels=94a3b8&dates=94a3b8&currStreakNum=f0f4ff&sideNums=f0f4ff"
                  alt="GitHub Streak"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Download CV ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want to know more?</h2>
        <p className="text-[var(--text-muted)] mb-6">Download my resume to see the full picture.</p>
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

