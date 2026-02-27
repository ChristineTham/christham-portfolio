/** @jsxImportSource theme-ui */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui'
import React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "./layout"
import Hero from "./hero"
import Projects from "./projects"
import About from "./about"
import Contact from "./contact"

const Cara = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
