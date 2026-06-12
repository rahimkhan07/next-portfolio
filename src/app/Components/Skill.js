import React from 'react'
import Image from 'next/image';
import { SiNextdotjs, SiReact, SiNodedotjs, SiFirebase, SiJavascript, SiMysql, SiPhp, SiBootstrap, SiTailwindcss, SiGithub, SiHtml5, SiCss3, SiMongodb } from 'react-icons/si'

const Skill = () => {
    return (
        <>
            {/* <div className="skill-container">
                <h1><span className="about-badge py-10"></span> Professional Skillset</h1> <br />
                <div className="skill-box">
                    <div className="skill hover:mt-[-2px]">
                        <SiReact size={40} color="#61DBFB" />
                        <small>ReactJS</small>

                    </div>
                    <div className="skill hover:mt-[-2px]">
                        <SiNextdotjs size={40} color="white" />
                        <small>NextJS</small>
                    </div>
                    <div className="skill hover:mt-[-2px]">
                        <SiJavascript size={40} color='yellow' />
                        <h2>JS</h2>
                    </div>
                    
                </div> <br />

                <div className="skill-box">
                    <div className="skill hover:mt-[-2px]">
                        <SiNodedotjs size={40} color='green' />
                        <h2>NodeJs</h2>
                    </div>
                    <div className="skill hover:mt-[-2px]">
                        <SiMysql size={45} color="00758F" />
                        <small>MySql</small>
                    </div>
                    <div className="skill hover:mt-[-2px]">
                        <SiPhp size={40} color='#777BB4' />
                        <h2>php</h2>
                    </div>
                    
                    
                </div> <br />

                <div className="skill-box">
                    <div className="skill hover:mt-[-2px]">
                        <SiTailwindcss size={40} color='#38BDF8' />
                        <h2>Tailwind</h2>
                    </div>
                    <div className="skill hover:mt-[-2px]">
                        <SiHtml5 size={40} color='#E34F26' />
                        <h2>HTML</h2>
                    </div>
                    <div className="skill hover:mt-[-2px]">
                        <SiCss3 size={40} color='#1572B6' />
                        <h2>CSS</h2>
                    </div>
                </div> <br /> <br />

                <h1 style={{ textAlign: "center" }}><span className="about-badge"></span>Tools I use</h1> <br />
                <div className="tools">

                    <div className="skill hover:mt-[-2px]">
                        <SiGithub size={40} color='white' />
                        <h2>GitHub</h2>
                    </div>
                    <div className="skill hover:mt-[-2px]">
                        <SiFirebase size={40} color="#FFCA28" />
                        <h2>Firebase</h2>
                    </div>
                    <div className="skill hover:mt-[-1px]">
                        <SiMongodb size={40} color='#47A248'/>
                        <h2>MongoDB</h2>
                    </div>

                </div>



            </div> */}

            <div className="px-4 py-10 sm:px-6 lg:px-20 max-w-7xl mx-auto">
                {/* Professional Skillset Heading */}
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
                    <span className="w-2 h-10 bg-blue-800 rounded-l-md"></span>
                    Professional Skillset
                </h1>

                {/* Skills Grid */}
                <div className="flex flex-wrap justify-center items-center gap-6 p-6 ">
                    {[
                        { icon: <SiReact size={40} color="#61DBFB" />, label: "ReactJS" },
                        { icon: <SiNextdotjs size={40} color="white" />, label: "NextJS" },
                        { icon: <SiJavascript size={40} color="yellow" />, label: "JavaScript" },
                        { icon: <SiNodedotjs size={40} color="green" />, label: "NodeJS" },
                        { icon: <SiMysql size={40} color="#00758F" />, label: "MySQL" },
                        { icon: <SiPhp size={40} color="#777BB4" />, label: "PHP" },
                        { icon: <SiTailwindcss size={40} color="#38BDF8" />, label: "Tailwind" },
                        { icon: <SiHtml5 size={40} color="#E34F26" />, label: "HTML" },
                        { icon: <SiCss3 size={40} color="#1572B6" />, label: "CSS" },
                    ].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center  p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                            {tech.icon}
                            <p className="text-white mt-2 text-sm sm:text-base">{tech.label}</p>
                        </div>
                    ))}
                </div>

                {/* Tools Heading */}
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center justify-center gap-2">
                    <span className="w-2 h-10 bg-blue-800 rounded-l-md"></span>
                    Tools I Use
                </h1>

                {/* Tools Grid */}
                <div className="flex flex-wrap justify-center items-center gap-6 p-6 ">
                    {[
                        { icon: <SiGithub size={40} color="white" />, label: "GitHub" },
                        { icon: <SiFirebase size={40} color="#FFCA28" />, label: "Firebase" },
                        { icon: <SiMongodb size={40} color="#47A248" />, label: "MongoDB" },
                    ].map((tool, index) => (
                        <div key={index} className="flex flex-col items-center  p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                            {tool.icon}
                            <p className="text-white mt-2 text-sm sm:text-base">{tool.label}</p>
                        </div>
                    ))}
                </div>

            </div>


        </>
    )
}

export default Skill
