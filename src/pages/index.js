import React from "react"
import './index.css'
import Project from "../components/body/Projects/projects"
// Something with emotion/styled is preventing me from using it properly. I guess its time to do it the good ol' fashioned way
import Navbar from "../components/Navbar/Navbar"
import Welcome from "../components/body/Welcome/welcome"
import Contact from "../components/body/Contact/contact"
import Experience from "../components/body/Experience/experience"
import Skills from "../components/body/Skill/skills"
import Otherskill from "../components/body/OtherSkills/otherskill"



export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Project />
      <Experience />
      <Skills />
      <Otherskill />
      <Contact />
    </div>
  )
}
