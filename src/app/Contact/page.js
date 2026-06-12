// import React from 'react'

// const page = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default page

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import Navbar from "../Components/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar className="navbar-r" />
            <div className="pt-24 min-h-screen px-4 sm:px-8 lg:px-20 pb-20 font-[family-name:var(--font-geist-sans)] scroll-smooth">
                <section className=" text-white py-1 px-6">
                    {/* Title */}
                    <div className="flex justify-center p-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 text-center">
                            <span className="w-2 h-10 bg-blue-800 rounded-l-md"></span>
                            Contact
                        </h1>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center gap-6 mb-10">
                        <div className="flex flex-wrap justify-center gap-6">
                            {/* Email */}
                            <div className="flex items-center gap-3 bg-[#020421] px-6 py-3 rounded-md shadow-lg shadow-blue-500/40">
                                <Mail className="text-white-500" size={20} />
                                <span className="text-white-400">i.raheem727@gmail.com</span>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 bg-[#020421] px-6 py-3 rounded-md shadow-lg shadow-blue-500/40">
                                <Phone className="text-white-500" size={20} />
                                <span className="text-white-400">(+91) 7275138280</span>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3 bg-[#020421] px-6 py-3 rounded-md shadow-lg shadow-blue-500/40">
                            <MapPin className="text-white-500" size={20} />
                            <span className="text-white-400">Lucknow, Uttar Pradesh, India</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-6 border-t border-white pt-6">
                        <a href="#" className="hover:text-blue-500 transition">
                            <Facebook size={22} />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition">
                            <Twitter size={22} />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition">
                            <Linkedin size={22} />
                        </a>
                        <a href="#" className="hover:text-blue-500 transition">
                            <MessageCircle size={22} />
                        </a>
                    </div>
                </section>
            </div>
        </>

    );
}
