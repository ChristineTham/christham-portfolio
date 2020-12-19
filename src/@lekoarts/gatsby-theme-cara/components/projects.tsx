/** @jsx jsx */
import { jsx } from 'theme-ui'
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'

import ProjectCard from './project-card'
import { iconpos } from '../styles/utils'

import Background from '../assets/backgrounds/river.svg'

// import ProjectsMDX from '../sections/projects.mdx'

import WrenchIcon from '../assets/icons/adjustable-wrench.svg'
import RubikIcon from '../assets/icons/Rubik.svg'
import BlueprintIcon from '../assets/icons/blueprint.svg'
import AtomIcon from '../assets/icons/atom.svg'
import PuzzleIcon from '../assets/icons/puzzle.svg'
import CloudIcon from '../assets/icons/computing-cloud.svg'
import FolderIcon from '../assets/icons/folders.svg'
import GearsIcon from '../assets/icons/gears.svg'
import GraphicsIcon from '../assets/icons/graphics.svg'
import NotebookIcon from '../assets/icons/notebook2.svg'
import WorkflowIcon from '../assets/icons/workflow.svg'
import CalculatorIcon from '../assets/icons/calculator.svg'
import ChipIcon from '../assets/icons/chip.svg'
import CompassIcon from '../assets/icons/compass.svg'
import ProgrammingIcon from '../assets/icons/programming.svg'

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
            gridGap: [2, 4, 4, 5],
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
          <ProjectCard
            title="Travels Through A Lens"
            link="https://travel.christham.net"
            bg="linear-gradient(to right, #64bfa4 0%, #919bc9 100%)"
            image="travel.jpg"
          >
            This is a web site that documents my travel adventures.
          </ProjectCard>
          <ProjectCard
            title="Visual Voyager"
            link="https://visualvoyager.net"
            bg="linear-gradient(to right, #27272a 0%, #a49e9e 100%)"
            image="visualvoyager.jpg"
          >
            Explore the world we live in, as seen through our unique perspectives and experiences.
          </ProjectCard>
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <img
        src={Background}
        alt="projects background"
        sx={{
          position: 'fixed',
          left: 0,
          top: '25%',
          width: '100%',
          opacity: 0.3
        }}
      />
      <UpDown>
        <WrenchIcon sx={iconpos(16, '85%', '75%')} />
        <RubikIcon sx={iconpos(16, '70%', '20%')} />
        <BlueprintIcon sx={iconpos(48, '25%', '5%')} />
        <PuzzleIcon sx={iconpos(16, '17%', '60%')} />
      </UpDown>
      <UpDownWide>
        <AtomIcon sx={iconpos(64, '20%', '90%')} />
        <CloudIcon sx={iconpos(16, '90%', '30%')} />
        <FolderIcon sx={iconpos(48, '70%', '90%')} />
        <GearsIcon sx={iconpos(48, '18%', '75%')} />
        <GraphicsIcon sx={iconpos(16, '75%', '10%')} />
        <NotebookIcon sx={iconpos(48, '45%', '10%')} />
      </UpDownWide>
      <WorkflowIcon sx={iconpos(16, '4%', '20%')} />
      <CompassIcon sx={iconpos(16, '80%', '60%')} />
      <ProgrammingIcon sx={iconpos(16, '10%', '10%')} />
      <BlueprintIcon sx={iconpos(16, '29%', '26%')} />
      <CalculatorIcon sx={iconpos(16, '75%', '30%')} />
      <ChipIcon sx={iconpos(16, '80%', '70%')} />
    </Divider>
  </div>
)

export default Projects
