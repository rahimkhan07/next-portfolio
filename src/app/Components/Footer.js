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

    return() => {
      clearInterval(timer);
    };
  },[]);


  const formatDate =(date) => {
    const day = date.getDate().toString().padStart(2,'0');
    const month = (date.getMonth() + 1).toString().padStart(2,'0');
    const year = date.getFullYear();

    return`${day}/${month}/${year}`;
  }


 
  return (
    <>
    
      <div className="gap-10 w-full md:w-10vh lg:w-20vh" >
        <hr />
        <footer className=" text-white py-10 px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0" >
            <div className="text-3xl font-bold p-5">
              <Link href="/">
                <span className="text-white hover:text-gray-300 transition">
                 <span className="about-badge"></span> R.Khan
                </span>
              </Link>

            </div>
           
            <div className="text-center p-5">
              {/* <h2 className="text-lg font-bold mb-2">Quick Links</h2> */}
              <ul className="space-y-1">
                <ol><Link href="/About" className="hover:text-gary-300">About</Link></ol>
                <ol><Link href="/service" className="hover:text-gary-300">Service</Link></ol>
                <ol><Link href="/contact" className="hover:text-gary-300">Contact</Link></ol>
              </ul>
            </div>

            <div className="text-center ">
              {/* <h2 className="text-lg font-bold mb-2">Social Links</h2> */}
              <div className="flex gap-8 p-5 y-1" >
                <a href="https://www.linkedin.com/in/rahim-r72/" target="_blank" rel="nooperener noreferrer" className="hover:text-gray-400">
                  <SiLinkedin size={24} />
                </a>
                <a href="https://github.com/rahimkhan07" target="_blank" rel="nooperener noreferrer" className="hover:text-gray-400">
                  <SiGithub size={24} />
                </a>
                <a href="mailto:i.raheem72@gmail.com" className="hover:text-gray-400">
                  <SiGmail size={24} />
                </a>
                <a href="" className="hover:text-gray-400">
                  <SiX size={24} />
                </a>
              </div>
              <div className="date">
                Date: {formatDate(currentDate)}
              </div>
            </div>


          </div>

          <div className="copyright text-center bg-gray-800 p-3 my-12">
            <h2>designed by: RAHIM</h2>
          </div>
        </footer>

      </div>
    </>
  )
}

export default Footer
