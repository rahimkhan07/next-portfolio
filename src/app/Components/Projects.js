'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { Star, GitFork, Circle, ExternalLink } from 'lucide-react';

// ── GitHub Repos ─────────────────────────────────────────
const repos = [
  {
    name: "ramraj",
    desc: "CSS project — updated last week.",
    lang: "CSS",
    langColor: "#563d7c",
    stars: 0,
    forks: 0,
    url: "https://github.com/rahimkhan07/ramraj",
  },
  {
    name: "techbiomatic-react",
    desc: "TypeScript React project — updated last month.",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "https://github.com/rahimkhan07/techbiomatic-react",
  },
  {
    name: "aks",
    desc: "TypeScript project — updated May 10.",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "https://github.com/rahimkhan07/aks",
  },
  {
    name: "AK",
    desc: "Public repo — updated May 9.",
    lang: "—",
    langColor: "#8b949e",
    stars: 0,
    forks: 0,
    url: "https://github.com/rahimkhan07/AK",
  },
  {
    name: "Apna",
    desc: "JavaScript project — updated May 9.",
    lang: "JavaScript",
    langColor: "#f7df1e",
    stars: 0,
    forks: 0,
    url: "https://github.com/rahimkhan07/Apna",
  },
  {
    name: "next-portfolio",
    desc: "Personal portfolio built with Next.js 15, Tailwind CSS & dark mode.",
    lang: "JavaScript",
    langColor: "#f7df1e",
    stars: 0,
    forks: 0,
    url: "https://github.com/rahimkhan07/next-portfolio",
  },
];

// ── Projects ─────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "E-commerce App",
    desc: "Full React shopping app with cart, filters & product pages.",
    tag: "React",
    image: "/e-com.png",
    viewUrl: "https://example.com",
    githubUrl: "https://github.com/rahimkhan07",
  },
  {
    id: 2,
    title: "Weather App",
    desc: "Live weather with city search powered by OpenWeatherMap API.",
    tag: "API",
    image: "/weather.png",
    viewUrl: "https://68486c686b967ddbecd17e4c--stellar-treacle-0c5183.netlify.app/",
    githubUrl: "https://github.com/rahimkhan07",
  },
  {
    id: 3,
    title: "News App",
    desc: "Category-based news aggregator with infinite scroll.",
    tag: "API",
    image: "/newsapp.png",
    viewUrl: "https://example.com",
    githubUrl: "https://github.com/rahimkhan07",
  },
  {
    id: 4,
    title: "RentCar Website",
    desc: "Car rental landing page with booking form & animations.",
    tag: "UI",
    image: "/rentcar.png",
    viewUrl: "https://example.com",
    githubUrl: "https://github.com/rahimkhan07",
  },
  {
    id: 5,
    title: "Recipe App",
    desc: "Find recipes by ingredients using Spoonacular API.",
    tag: "React",
    image: "/Recipe-App.png",
    viewUrl: "https://example.com",
    githubUrl: "https://github.com/rahimkhan07",
  },
];

const tagColors = {
  React: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  API:   "bg-purple-500/15 text-purple-400 border-purple-500/30",
  UI:    "bg-pink-500/15 text-pink-400 border-pink-500/30",
};

const filters = ['all', 'frontend', 'components'];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'frontend') return p.id % 2 === 0;
    if (filter === 'components') return p.id % 2 !== 0;
    return true;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pb-24">

      {/* ══════════════════════════════════════════
          GITHUB REPOS
      ══════════════════════════════════════════ */}
      <div className="mb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-[var(--text-primary)]">
            <span className="w-2 h-10 bg-blue-700 rounded-l-md" />
            GitHub Repos
          </h2>
          <a href="https://github.com/rahimkhan07" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300
                       bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-xl transition">
            <SiGithub size={14} /> View all →
          </a>
        </div>

        {/* Repo cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <a key={i} href={repo.url} target="_blank" rel="noopener noreferrer"
              className="group flex flex-col bg-[var(--bg-card)] border border-[var(--border)]
                         rounded-2xl overflow-hidden hover:border-blue-500/50
                         hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5
                         transition-all duration-300">

              {/* OG preview image */}
              <div className="relative w-full h-36 overflow-hidden bg-[var(--bg-card2)]">
                <img
                  src={`https://opengraph.githubassets.com/1/rahimkhan07/${repo.name}`}
                  alt={repo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Repo name on image */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <SiGithub size={13} className="text-white/80" />
                  <span className="text-white text-xs font-bold tracking-wide">{repo.name}</span>
                </div>
                {/* Public badge */}
                <span className="absolute top-2 right-2 text-[10px] font-semibold bg-white/10 backdrop-blur-sm
                                 border border-white/20 text-white px-2 py-0.5 rounded-full">
                  Public
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-4">
                <p className="text-xs text-[var(--text-muted)] leading-relaxed flex-1 mb-4 line-clamp-2">
                  {repo.desc}
                </p>

                {/* Bottom row */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Circle size={10} fill={repo.langColor} stroke="none" />
                    <span className="text-xs text-[var(--text-muted)]">{repo.lang}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Star size={11} className="text-yellow-400" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <GitFork size={11} />
                    <span>{repo.forks}</span>
                  </div>
                  <ExternalLink size={12} className="ml-auto text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MY PROJECTS
      ══════════════════════════════════════════ */}
      <div>
        {/* Header + filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-[var(--text-primary)]">
            <span className="w-2 h-10 bg-blue-700 rounded-l-md" />
            My Projects
          </h2>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer
                  ${filter === f
                    ? 'bg-blue-600 text-white shadow shadow-blue-500/30'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:bg-blue-600/15 hover:text-[var(--text-primary)]'
                  }`}>
                {f === 'all' ? 'All' : f === 'frontend' ? 'Front-End' : 'Components'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id}
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden
                         hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10
                         hover:-translate-y-1 transition-all duration-300">

              {/* Thumbnail */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={project.image} alt={project.title} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Tag */}
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full
                                  border backdrop-blur-sm ${tagColors[project.tag] ?? tagColors.React}`}>
                  {project.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{project.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-5 line-clamp-2">{project.desc}</p>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link href={project.viewUrl} target="_blank"
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white
                               text-xs font-semibold px-4 py-2 rounded-xl transition">
                    <FiExternalLink size={13} /> Live Demo
                  </Link>
                  <Link href={project.githubUrl} target="_blank"
                    className="flex items-center gap-1.5 bg-[var(--bg-card2)] border border-[var(--border)]
                               text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-blue-500/40
                               text-xs font-semibold px-4 py-2 rounded-xl transition">
                    <SiGithub size={13} /> Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
