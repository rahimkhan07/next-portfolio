"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SiGit, SiGithub, SiLinkedin, SiGmail, SiX, SiDatefns } from 'react-icons/si'

const Footer = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);


  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }



  return (
    <>

      <div className="w-full px-4 sm:px-6 lg:px-12" style={{marginBottom:"-15vh"}}>
        {/* <hr className="border-gray-700 mb-8" /> */}

        <footer className="text-white py-8 sm:py-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">

            {/* Logo / Brand */}
            <div className="text-2xl sm:text-3xl font-bold p-2 sm:p-5">
              <Link href="/">
                <span className="text-white hover:text-gray-300 transition flex items-center gap-2">
                  <span className="about-badge"></span> R.Khan
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="text-center p-2 sm:p-5">
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/About" className="hover:text-gray-300 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/Service" className="hover:text-gray-300 transition">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="hover:text-gray-300 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links and Date */}
            <div className="text-center p-2 sm:p-5 space-y-4">
              <div className="flex justify-center gap-6 sm:gap-8">
                <a href="https://www.linkedin.com/in/rahim-r72/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                  <SiLinkedin size={24} />
                </a>
                <a href="https://github.com/rahimkhan07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                  <SiGithub size={24} />
                </a>
                <a href="mailto:i.raheem72@gmail.com" className="hover:text-gray-400 transition">
                  <SiGmail size={24} />
                </a>
                <a href="#" className="hover:text-gray-400 transition">
                  <SiX size={24} />
                </a>
              </div>
              <div className="text-sm text-gray-400">
                Date: {formatDate(currentDate)}
              </div>
            </div>
          </div>
 
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
            © 2025 Rahim. All rights reserved.
          </div>
        </footer>
      </div>

    </>
  )
}

export default Footer
