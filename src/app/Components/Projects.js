'use client';
// import React from 'react'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce App',
      image: '/e-com.png',
      viewUrl: 'https://example.com/firebase',
      githubUrl: 'https://github.com/yourname/firebase-app',
    },
    {
      id: 2,
      title: 'Weather App',
      image: '/weather.png',
      viewUrl: 'https://68486c686b967ddbecd17e4c--stellar-treacle-0c5183.netlify.app/',
      githubUrl: 'https://github.com/yourname/mongodb-dashboard',
    },
    {
      id: 3,
      title: 'News App',
      image: '/newsapp.png',
      viewUrl: 'https://example.com/xampp',
      githubUrl: 'https://github.com/yourname/xampp-panel',
    },
    {
      id: 4,
      title: 'rentCar Website',
      image: '/rentcar.png',
      viewUrl: 'https://example.com/php-api',
      githubUrl: 'https://github.com/yourname/php-api',
    },
    {
      id: 5,
      title: 'Recipe App',
      image: '/Recipe-app.png',
      viewUrl: 'https://example.com/php-api',
      githubUrl: 'https://github.com/yourname/php-api',
    },
    {
      id: 6,
      title: 'PHP API',
      image: '/images/php.png',
      viewUrl: 'https://example.com/php-api',
      githubUrl: 'https://github.com/yourname/php-api',
    },

  ];


  // Filter logic
  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'frontend') return project.id % 2 === 0;
    if (filter === 'components') return project.id % 2 !== 0;
  });



  return (
    <>

      <div className="grid grid-rows-[auto_auto_auto_1fr] items-center justify-items-center p-4 sm:p-8 md:p-16 pb-20 gap-8 sm:gap-12 font-[family-name:var(--font-geist-sans)]">

        {/* Heading */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2">
            <span className="w-2 h-10 bg-blue-800 rounded-l-md"></span>
            My Projects
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 sm:gap-6">
          <button onClick={() => setFilter('all')} className="btns px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer">
            All
          </button>
          <button onClick={() => setFilter('frontend')} className="btns px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer">
            Front-End
          </button>
          <button onClick={() => setFilter('components')} className="btns px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer">
            Components
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {filteredProjects.map((project) => (
            <div key={project.id} className="cards bg-[#0a0a23] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 text-white">{project.title}</h2>
                <div className="flex gap-4">
                  <Link
                    href={project.viewUrl}
                    className="proj-btn p-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                  >
                    <FiExternalLink size={20} color="white" />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="proj-btn p-2 bg-gray-800 rounded hover:bg-gray-700 transition"
                  >
                    <SiGithub size={20} color="white" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>

  )
}

export default Projects
