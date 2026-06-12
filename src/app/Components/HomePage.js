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
    <div className="flex flex-col md:flex-row items-center justify-around min-h-screen px-4 sm:px-6 lg:px-12 py-8">
  
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
    <Image 
      src="/img2.jpg" 
      alt="Rahim" 
      width={250} 
      height={200} 
      className="rounded-lg shadow-lg object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <small className="text-gray-300 mb-2 block">
      Find me on{" "}
      <a href="https://www.linkedin.com/in/rahim-r72/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
        <SiX size={16} className="inline-block" />
      </a>
    </small>

    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
      I&apos;m <span className="hover:text-blue-400 text-blue-300">RAHIM</span>
    </h3>

    <p className="text-base sm:text-lg text-gray-400 mb-6 px-2 sm:px-0">
      A passionate <strong className="text-white">Web App Developer</strong> focused on building modern, scalable applications and continuously exploring new tools and frameworks to stay ahead in the evolving tech landscape. Strong collaborator with a growth mindset and a commitment to delivering quality user experiences.
    </p>

    <a href="/RahimKhan.pdf" download>
      <p className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        Get CV
      </p>
    </a>
  </div>
  
</div>

  )
}

export default HomePage
