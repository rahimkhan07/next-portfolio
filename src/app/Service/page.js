// import React from 'react'

// const page = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default page

import { Code, PenTool, BarChart3 } from "lucide-react"; // icons
import Navbar from "../Components/Navbar";

const services = [
    {
        id: 1,
        icon: <Code size={40} className="text-cyan-400 mx-auto" />,
        title: "Web Development",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veriam quia voluptas nostrum?",
    },
    {
        id: 2,
        icon: <PenTool size={40} className="text-cyan-400 mx-auto" />,
        title: "Graphic Design",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veriam quia voluptas nostrum?",
    },
    {
        id: 3,
        icon: <BarChart3 size={40} className="text-cyan-400 mx-auto" />,
        title: "Digital Marketing",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veriam quia voluptas nostrum?",
    },
];

export default function Services() {
    return (
        <>

            <div className="grid grid-rows-[10rem_1fr_0px] items-center justify-items-center min-h-screen  pb-0 font-[family-name:var(--font-geist-sans)] scroll-smooth">
                <Navbar className="navbar-r" />
                <section className="text-white py-16 px-6 md:px-20">
                    {/* Heading */} 
                    <div className="flex justify-center p-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 text-center">
                            <span className="w-2 h-10 bg-blue-800 rounded-l-md "></span>
                            Our Services
                        </h1>
                    </div>
                    
                    
                    

                    {/* Cards */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-[#1e293b] p-8 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300"
                            >
                                {service.icon}
                                <h3 className="text-xl font-semibold mt-4 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                                <button className="bg-cyan-400 text-black font-bold px-6 py-2 rounded-full hover:bg-cyan-500 transition">
                                    Read More
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </>
    );
}
