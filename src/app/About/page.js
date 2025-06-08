import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si'



const page = () => {


  return (
    <>
      <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Navbar />

        <div className="showcase about-section grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <div className="contect-about">
            <h2 className='text-center '><span className="about-badge"></span> <b>About mySelf :</b></h2> <br />
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple"> <strong>Rahim</strong> </span>
              from <span className="purple"> <strong>Lucknow - Uttar Pradesh</strong></span>
              <br />
              Frontend developer, I create web pages with UI / UX user interface,

              <br />
              I have 2 years of experience and many happy clients with the project that I created for them.
              <br />
              <br />

              <i class="fa-solid fa-envelope"></i> i.raheem727@gmail.com
              <br />
              <i class="fas fa-phone"></i> 7275138280

            </p>
            <br />
            <h3><strong><span className="about-badge"></span>Aslo You Can Find Me On:</strong> </h3>
            <div className="abot-icon mx-6">
              <a href="https://github.com/rahimkhan07"><SiGithub size={25}   className='hover:text-gray-400 cursor-pointer my-[2vh] ' /></a> 
              <a href="https://www.linkedin.com/in/rahim-r72/"><SiLinkedin size={25}   className='hover:text-gray-400 cursor-pointer my-[2vh]' /></a> 
              <a href="mailto:i.raheem72@gmail.com"><SiX size={25} className='hover:text-gray-400 cursor-pointer my-[2vh]' /></a> 
            </div>

          </div>
          <div className="item-center px-[22vh]" >
            <img src="img2.jpg" alt="" width={"270vh"} style={{ borderRadius: "2vh" }} />
          </div>
        </div>
        <br />



        <Footer />
      </div>
    </>
  )
}

export default page
