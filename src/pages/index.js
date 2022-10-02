import React from "react"
import './index.css'
// Something with emotion/styled is preventing me from using it properly. I guess its time to do it the good ol' fashioned way
import Navbar from "../components/Navbar/Navbar"
import Welcome from "../components/body/Welcome/welcome"
import Contact from "../components/body/Contact/contact"
import Experience from "../components/body/Experience/experience"
import Skills from "../components/body/Skill/skills"
import Otherskill from "../components/body/OtherSkills/otherskill"
import Projects2 from "../components/body/Projects/projects2"



export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      {/* <Project /> */}
      <Projects2 />
      <Experience />
      <Skills />
      <Otherskill />
      <Contact />
    </div>
  )
}
