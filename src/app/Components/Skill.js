import React from 'react'
import { SiNextdotjs, SiReact, SiNodedotjs, SiFirebase, SiJavascript, SiMysql, SiPhp, SiTailwindcss, SiGithub, SiHtml5, SiCss3, SiMongodb } from 'react-icons/si'

const Skill = () => {
    return (
        <div className="px-4 py-10 sm:px-6 lg:px-20 max-w-7xl mx-auto">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2 text-[var(--text-primary)]">
                <span className="w-2 h-10 bg-blue-700 rounded-l-md"></span>
                Professional Skillset
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-6 p-6">
                {[
                    { icon: <SiReact size={40} color="#61DBFB" />, label: "ReactJS" },
                    { icon: <SiNextdotjs size={40} color="currentColor" />, label: "NextJS" },
                    { icon: <SiJavascript size={40} color="#F7DF1E" />, label: "JavaScript" },
                    { icon: <SiNodedotjs size={40} color="#3C873A" />, label: "NodeJS" },
                    { icon: <SiMysql size={40} color="#00758F" />, label: "MySQL" },
                    { icon: <SiPhp size={40} color="#777BB4" />, label: "PHP" },
                    { icon: <SiTailwindcss size={40} color="#38BDF8" />, label: "Tailwind" },
                    { icon: <SiHtml5 size={40} color="#E34F26" />, label: "HTML" },
                    { icon: <SiCss3 size={40} color="#1572B6" />, label: "CSS" },
                ].map((tech, index) => (
                    <div key={index}
                        className="flex flex-col items-center bg-[var(--bg-card)] border border-[var(--border)]
                                   p-4 rounded-xl shadow-sm hover:scale-105 transition-transform duration-300">
                        {tech.icon}
                        <p className="text-[var(--text-primary)] mt-2 text-sm sm:text-base">{tech.label}</p>
                    </div>
                ))}
            </div>

            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center justify-center gap-2 text-[var(--text-primary)]">
                <span className="w-2 h-10 bg-blue-700 rounded-l-md"></span>
                Tools I Use
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-6 p-6">
                {[
                    { icon: <SiGithub size={40} color="currentColor" />, label: "GitHub" },
                    { icon: <SiFirebase size={40} color="#FFCA28" />, label: "Firebase" },
                    { icon: <SiMongodb size={40} color="#47A248" />, label: "MongoDB" },
                ].map((tool, index) => (
                    <div key={index}
                        className="flex flex-col items-center bg-[var(--bg-card)] border border-[var(--border)]
                                   p-4 rounded-xl shadow-sm hover:scale-105 transition-transform duration-300">
                        {tool.icon}
                        <p className="text-[var(--text-primary)] mt-2 text-sm sm:text-base">{tool.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill
