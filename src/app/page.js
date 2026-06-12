"use client"
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import GetIntouch from "./Components/GetIntouch";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* pt-24 clears the fixed navbar */}
      <main className="pt-24 font-[family-name:var(--font-geist-sans)]">
        <HomePage />
        <Skill />
        <Projects />
        <GetIntouch />
        <Footer />
      </main>
    </>
  );
}
