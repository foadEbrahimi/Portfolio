import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Journy from "./components/Journy";
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-hidden bg-natural-1">
      <Navbar />
      <Hero />
      <Journy />
      <Works />
      <About />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
}
