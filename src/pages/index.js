import React from "react"
import './index.css'
import About from "../components/body/about"
// Something with emotion/styled is preventing me from using it properly. I guess its time to do it the good ol' fashioned way
import Navbar from "../components/Navbar/Navbar"
import Welcome from "../components/body/Welcome/welcome"
import Home2 from "../components/body/home"
import Funfact from "../components/body/Funfact/funfact"
import Contact from "../components/body/Contact/contact"



export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      {/* <h1>Monika</h1> */}
      <Home2 />
      <Funfact />
      <Contact />
    </div>
  )
}
