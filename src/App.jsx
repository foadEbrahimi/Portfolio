import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Journy from "./components/Journy";

export default function App() {
  return (
    <div className="bg-natural-1">
      <Navbar />
      <Hero />
      <Journy />
      <Works />
    </div>
  );
}
