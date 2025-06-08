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
      viewUrl: 'https://example.com/mongodb',
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
      <br /> <br /> <br />
      <div className='mt-82 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] md:mt-[60vh]'>
        <h1 className="text-3xl font-bold mb-2 "><span className="about-badge"></span> My Projects</h1>
        <small>My Recent Work</small>


        {/* Filter Buttons */}
        <div className="project-btns">
          <button onClick={() => setFilter('all')} className="btns">All</button>
          <button onClick={() => setFilter('frontend')} className="btns">Front-End</button>
          <button onClick={() => setFilter('components')} className="btns">Components</button>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="cards rounded-lg shadow-md overflow-hidden">
              <div className="relative h-50 w-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
                <div className="flex gap-3">
                  <Link
                    href={project.viewUrl}
                    className="proj-btn"
                  >
                    <FiExternalLink size={25} />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="proj-btn"
                  >
                    <SiGithub size={25} />
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
