import React from 'react'
import Image from 'next/image';
import { SiNextdotjs, SiReact, SiNodedotjs, SiFirebase, SiJavascript, SiMysql, SiPhp, SiBootstrap, SiTailwindcss, SiGithub, SiHtml5, SiCss3, SiMongodb } from 'react-icons/si'

const Skill = () => {
    return (
        <>
            <div className="showcase skill-container ">
                <h1><span className="about-badge"></span> Professional Skillset</h1> <br />
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
                    {/* <div className="skill hover:mt-[-2px]">
                        <SiBootstrap size={40} color='#7952B3' />
                        <h2>Bootstrap</h2>
                    </div> */}
                    
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



            </div>
        </>
    )
}

export default Skill
