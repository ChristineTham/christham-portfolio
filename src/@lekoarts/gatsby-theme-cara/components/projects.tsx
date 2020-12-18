/** @jsx jsx */
import { jsx } from 'theme-ui'
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import SVG from '@lekoarts/gatsby-theme-cara/src/components/svg'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'

import Background from '../assets/backgrounds/floral-spring.svg'
import ProjectCard from './project-card'

// import ProjectsMDX from '../sections/projects.mdx'

const Projects: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 2 }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, #f7caca 0%, #93a9d1 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `rosely4 !important` }
          }}
        >
          {/* <ProjectsMDX /> */}
          <ProjectCard
            title="Learning Jamstack"
            link="https://learning-jamstack.now.sh"
            bg="linear-gradient(to right, #F0047F 0%, #ec809e 100%)"
            image="learning-jamstack.jpg"
          >
            My adventures learning how to build websites and apps in 2020 using the Jamstack architecture, auto workflows and modern build
            tools.
          </ProjectCard>
          <ProjectCard
            title="ChrisTham.net"
            link="https://christham.net"
            bg="linear-gradient(to right, #b565a7 0%, #be9cc1 100%)"
            image="christham.jpg"
          >
            My personal web site.
          </ProjectCard>
          <ProjectCard
            title="Hello COVID19"
            link="https://hello-covid19.surge.sh"
            bg="linear-gradient(to right, #615f5f 0%, #85677b 100%)"
            image="hello-covid19.jpg"
          >
            This is a simple web app to display real time information about the spread of CoViD-19 around the world.
          </ProjectCard>
          <ProjectCard
            title="Hello Tham"
            link="https://hellotham.com"
            bg="linear-gradient(to right, #660099 0%, #cc3366 100%)"
            image="hellotham.jpg"
          >
            My company web site.
          </ProjectCard>
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <img
        src={Background}
        alt="background"
        sx={{
          position: 'fixed',
          left: 0,
          top: '25%',
          width: '100%',
          opacity: 0.3
        }}
      />
      <UpDown>
        <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Projects
