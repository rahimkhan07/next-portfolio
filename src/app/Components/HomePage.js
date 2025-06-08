// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// const HomePage = () => {
//   return (
//     <>

//       <div className="showcase">
//         <div className="headimg">
//           <img src="img2.jpg" alt="img" />
//         </div> <br />

//         <div className="content">
//           <h3><strong>Hi, I'm RAHIM</strong></h3>
//           <p>
//                <strong></strong> passionate <strong> Web App Developer</strong> focused on building modern, scalable applications and continuously exploring new
//             tools and frameworks to stay ahead in the evolving tech landscape. Strong collaborator with a growth mindset
//             and a commitment to delivering quality user experiences.
//           </p>
//           <Link href="./HireMe">
//             <button className='hirebtn'><b>Get CV</b></button>
//           </Link>
//         </div>

//       </div>



//     </>
//   )
// }

// export default HomePage



import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiX } from 'react-icons/si'

const HomePage = () => {
  return (
    <div className="showcase flex flex-col items-center justify-center px-0 py-10 md:flex-row md:justify-around bg-gray min-h-screen">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image 
          src="/img2.jpg" 
          alt="img" 
          width={400} 
          height={300} 
          className="rounded-lg shadow-lg object-cover" 
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
      {/* <small className="text-center "> Find me on : <a href="https://www.linkedin.com/in/rahim-r72/"><SiX size={12}/> </a> </small> */}
        <h3 className="text-3xl font-bold text-white-800 mb-4">Hi, I'm <span className="hover:text-300 text-white-600">RAHIM</span></h3>
        {/* <hr  width={210} className="line-hr" /> <br /> */}
        <p className="text-lg text-white-600 mb-6">
          A passionate <strong className="text-white-600">Web App Developer</strong> focused on building modern, scalable applications and continuously exploring new tools and frameworks to stay ahead in the evolving tech landscape. Strong collaborator with a growth mindset and a commitment to delivering quality user experiences.
        </p>
        <a href="/rahim-cv.pdf" download>
          <p className="getin-btn inline-block  text-white font-semibold px-6 py-3 rounded-lg shadow  transition">
            Get CV
          </p>
        </a>
      </div>

    </div>
  )
}

export default HomePage
