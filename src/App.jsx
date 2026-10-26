import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Achievements from "./sections/Achievements";

import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <main >
        <Hero />
        <About />
        <Education />
        <Experience />
        <Achievements />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}


