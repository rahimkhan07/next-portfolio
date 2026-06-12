import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    category: 'React',
    date: 'May 10, 2025',
    title: 'Getting Started with React Hooks',
    excerpt:
      'Understand useState, useEffect, and custom hooks through real-world examples. Hooks changed how we write React components — here\'s what you need to know.',
    image: '/newsapp.png',
    readTime: '5 min read',
  },
  {
    id: 2,
    category: 'Next.js',
    date: 'May 22, 2025',
    title: 'Next.js 15 — What\'s New',
    excerpt:
      'Next.js 15 ships with improved caching, Turbopack stability, and better server actions. Let\'s explore what changed and how it affects your projects.',
    image: '/e-com.png',
    readTime: '6 min read',
  },
  {
    id: 3,
    category: 'CSS',
    date: 'June 1, 2025',
    title: 'Mastering Tailwind CSS Layouts',
    excerpt:
      'Flexbox and Grid via utility classes make responsive design fast. This guide walks through common layout patterns you\'ll use every day.',
    image: '/rentcar.png',
    readTime: '4 min read',
  },
  {
    id: 4,
    category: 'JavaScript',
    date: 'June 5, 2025',
    title: 'Async/Await Deep Dive',
    excerpt:
      'Promises are powerful, but async/await makes asynchronous code readable. We\'ll cover error handling, parallel execution, and common pitfalls.',
    image: '/weather.png',
    readTime: '7 min read',
  },
  {
    id: 5,
    category: 'Node.js',
    date: 'June 8, 2025',
    title: 'Building REST APIs with Express',
    excerpt:
      'From routing to middleware to error handling — a practical walkthrough for building clean, maintainable REST APIs with Node.js and Express.',
    image: '/Recipe-App.png',
    readTime: '8 min read',
  },
  {
    id: 6,
    category: 'Career',
    date: 'June 10, 2025',
    title: 'How I Got My First Freelance Client',
    excerpt:
      'Landing your first client as a developer feels daunting. Here\'s the honest story of what worked, what didn\'t, and what I\'d do differently.',
    image: '/about.png',
    readTime: '5 min read',
  },
]

const categories = ['All', 'React', 'Next.js', 'JavaScript', 'CSS', 'Node.js', 'Career']

const categoryColors = {
  React: 'bg-cyan-900 text-cyan-300',
  'Next.js': 'bg-gray-800 text-gray-200',
  JavaScript: 'bg-yellow-900 text-yellow-300',
  CSS: 'bg-blue-900 text-blue-300',
  'Node.js': 'bg-green-900 text-green-300',
  Career: 'bg-purple-900 text-purple-300',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#020421] text-white font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          <span className="w-2 h-14 bg-blue-700 rounded-l-md inline-block"></span>
          Blog
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
          Thoughts, tutorials, and insights on web development, design, and everything in between.
        </p>
      </section>

      {/* ── Category Filter (static display) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer
                         bg-[#050941] text-gray-300 hover:bg-blue-700 hover:text-white
                         transition-colors duration-200"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-12">
        <div className="rounded-2xl overflow-hidden bg-[#050941] shadow-lg shadow-blue-800/30
                        flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-56 sm:h-72 md:h-auto">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-10 flex flex-col justify-center md:w-1/2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4
                              ${categoryColors[posts[0].category] ?? 'bg-blue-900 text-blue-300'}`}>
              {posts[0].category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{posts[0].title}</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6">{posts[0].excerpt}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{posts[0].date}</span>
              <span>{posts[0].readTime}</span>
            </div>
            <button
              className="mt-6 self-start bg-blue-600 hover:bg-blue-700 text-white
                         font-semibold px-6 py-2.5 rounded-lg transition"
            >
              Read Article →
            </button>
          </div>
        </div>
      </section>

      {/* ── All Posts Grid ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-20">
        <h2 className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-700 rounded-l-md inline-block"></span>
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-[#050941] rounded-xl overflow-hidden shadow shadow-blue-800/20
                         hover:scale-[1.02] hover:shadow-blue-600/30 transition-all duration-300
                         flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-44 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full
                                ${categoryColors[post.category] ?? 'bg-blue-900 text-blue-300'}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm flex-1 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-blue-900/40">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                    Read more →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-[#050941] py-14 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Stay in the loop</h2>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Subscribe to get the latest articles delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#020421] text-white placeholder-gray-500 px-4 py-3
                         rounded-lg border border-blue-900 focus:outline-none focus:ring-2
                         focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3
                         rounded-lg transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
