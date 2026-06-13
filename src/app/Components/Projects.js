'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, title: 'E-commerce App',   image: '/e-com.png',      viewUrl: 'https://example.com',             githubUrl: 'https://github.com/rahimkhan07' },
    { id: 2, title: 'Weather App',      image: '/weather.png',    viewUrl: 'https://68486c686b967ddbecd17e4c--stellar-treacle-0c5183.netlify.app/', githubUrl: 'https://github.com/rahimkhan07' },
    { id: 3, title: 'News App',         image: '/newsapp.png',    viewUrl: 'https://example.com',             githubUrl: 'https://github.com/rahimkhan07' },
    { id: 4, title: 'RentCar Website',  image: '/rentcar.png',    viewUrl: 'https://example.com',             githubUrl: 'https://github.com/rahimkhan07' },
    { id: 5, title: 'Recipe App',       image: '/Recipe-App.png', viewUrl: 'https://example.com',             githubUrl: 'https://github.com/rahimkhan07' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'frontend') return p.id % 2 === 0;
    if (filter === 'components') return p.id % 2 !== 0;
    return true;
  });

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 pb-20">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 mb-8 text-[var(--text-primary)]">
        <span className="w-2 h-10 bg-blue-700 rounded-l-md"></span>
        My Projects
      </h1>

      {/* Filter Buttons */}
      <div className="flex gap-3 sm:gap-4 mb-10 flex-wrap">
        {['all', 'frontend', 'components'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer capitalize
              ${filter === f
                ? 'bg-blue-600 text-white'
                : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:bg-blue-600/20 hover:text-[var(--text-primary)]'
              }`}
          >
            {f === 'all' ? 'All' : f === 'frontend' ? 'Front-End' : 'Components'}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden
                       shadow hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
            <div className="relative h-48 w-full">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h2 className="text-base sm:text-lg font-semibold mb-3 text-[var(--text-primary)]">
                {project.title}
              </h2>
              <div className="flex gap-3">
                <Link href={project.viewUrl} target="_blank"
                  className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                  <FiExternalLink size={18} color="white" />
                </Link>
                <Link href={project.githubUrl} target="_blank"
                  className="p-2 bg-[var(--bg-card2)] border border-[var(--border)] rounded-lg hover:bg-blue-600/20 transition">
                  <SiGithub size={18} className="text-[var(--text-primary)]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
