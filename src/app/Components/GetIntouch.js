import React from 'react'
import Navbar from './Navbar';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

const GetIntouch = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "62b155bb-f6d1-4f1a-ad88-4c1cf7047056");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <> <br /> <br /> <br /> <br />
            <div className="grid grid-rows-[15rem_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-18 lg:p-20 gap-10 font-[family-name:var(--font-geist-sans)] scroll-smooth">

                <section className="text-white w-full">
                    {/* Title */}
                    <div className="flex justify-center p-6 sm:p-8 ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 text-center">
                            <span className="w-2 h-10 bg-blue-800 rounded-l-md"></span>
                            Contact
                        </h1>
                    </div> <br /> <br />

                    {/* Grid Layout: Left (Contact Info) | Right (Form) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

                        {/* Left - Contact Info */}
                        <div className="flex flex-col items-center md:items-start gap-6">
                            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row flex-wrap justify-center md:justify-start gap-6">
                                {/* Email */}
                                <div className="flex items-center gap-3 bg-[#020421] px-6 py-3 rounded-md shadow-lg shadow-blue-500/40 w-full sm:w-auto">
                                    <Mail className="text-white" size={20} />
                                    <span className="text-gray-300 text-sm sm:text-base">i.raheem727@gmail.com</span>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-3 bg-[#020421] px-6 py-3 rounded-md shadow-lg shadow-blue-500/40 w-full sm:w-auto">
                                    <Phone className="text-white" size={20} />
                                    <span className="text-gray-300 text-sm sm:text-base">(+91) 7275138280</span>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-3 bg-[#020421] px-6 py-3 rounded-md shadow-lg shadow-blue-500/40 w-full sm:w-auto">
                                <MapPin className="text-white" size={20} />
                                <span className="text-gray-300 text-sm sm:text-base">Lucknow, Uttar Pradesh, India</span>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center md:justify-start gap-6 mt-6 border-t border-white pt-6 w-full">
                                <a href="#" className="hover:text-blue-500 transition"><Facebook size={22} /></a>
                                <a href="#" className="hover:text-blue-500 transition"><Twitter size={22} /></a>
                                <a href="#" className="hover:text-blue-500 transition"><Linkedin size={22} /></a>
                                <a href="#" className="hover:text-blue-500 transition"><MessageCircle size={22} /></a>
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div className="bg-[#050941] shadow-lg shadow-[#050941]/50 px-4 sm:px-8 py-6 sm:py-8 rounded-md text-center w-full">
                            <div className="get-conn mb-6">
                                <small className="text-gray-300 text-sm sm:text-base">Write your query here</small>
                            </div>

                            <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:gap-6">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    className="p-3 rounded-md bg-[#020421] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    name="phone"
                                    className="p-3 rounded-md bg-[#020421] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your query"
                                    name="query"
                                    className="p-3 rounded-md bg-[#020421] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                />
                                <input
                                    type="submit"
                                    value="Send"
                                    className="cursor-pointer bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition-colors w-full sm:w-[200px] mx-auto"
                                />
                            </form>
                            <span className="block mt-4 text-gray-400">{result}</span>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default GetIntouch
