"use client"
import Image from "next/image";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import GetIntouch from "./Components/GetIntouch";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
// import Loader from "./Components/Loader";

export default function Home() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g. fetch, animation, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Loader />
      </div>
    );
  }


  return (
    <>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] scroll-smooth">
        
      <Navbar className="navbar-r" />
      <HomePage/>
      <Skill/> <br />
      <Projects/> 
      <GetIntouch/>
      <Footer/>
    </div>
    </>
  
  );
}
