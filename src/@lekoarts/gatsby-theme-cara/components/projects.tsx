/** @jsx jsx */
import { jsx } from 'theme-ui'
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'

import Background from '../assets/backgrounds/river.svg'
import ProjectCard from './project-card'

// import ProjectsMDX from '../sections/projects.mdx'

import WrenchIcon from '../assets/icons/adjustable-wrench.svg'
import AgendaIcon from '../assets/icons/agenda.svg'
import BlueprintIcon from '../assets/icons/blueprint.svg'
import CheckListIcon from '../assets/icons/check-list.svg'
import CoffeeIcon from '../assets/icons/coffee.svg'
import CloudIcon from '../assets/icons/computing-cloud.svg'
import FolderIcon from '../assets/icons/folders.svg'
import GearsIcon from '../assets/icons/gears.svg'
import GraphicsIcon from '../assets/icons/graphics.svg'
import NotebookIcon from '../assets/icons/notebook2.svg'
import WorkflowIcon from '../assets/icons/workflow.svg'

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
        <WrenchIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '85%',
            top: '75%'
          }}
        />
        <AgendaIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '70%',
            top: '20%'
          }}
        />
        <BlueprintIcon
          sx={{
            position: 'absolute',
            width: 48,
            left: '25%',
            top: '5%'
          }}
        />
        <CheckListIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '17%',
            top: '60%'
          }}
        />
      </UpDown>
      <UpDownWide>
        <CoffeeIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '20%',
            top: '90%'
          }}
        />
        <CloudIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '90%',
            top: '30%'
          }}
        />
        <FolderIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '70%',
            top: '90%'
          }}
        />
        <GearsIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '18%',
            top: '75%'
          }}
        />
        <GraphicsIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '75%',
            top: '10%'
          }}
        />
        <NotebookIcon
          sx={{
            position: 'absolute',
            width: 48,
            left: '45%',
            top: '10%'
          }}
        />
      </UpDownWide>
      <WorkflowIcon
        sx={{
          position: 'absolute',
          width: 16,
          left: '4%',
          top: '20%'
        }}
      />
      <WrenchIcon
        sx={{
          position: 'absolute',
          width: 16,
          left: '80%',
          top: '60%'
        }}
      />
      <AgendaIcon
        sx={{
          position: 'absolute',
          width: 16,
          left: '10%',
          top: '10%'
        }}
      />
      <BlueprintIcon
        sx={{
          position: 'absolute',
          width: 16,
          left: '29%',
          top: '26%'
        }}
      />
      <CheckListIcon
        sx={{
          position: 'absolute',
          width: 16,
          left: '75%',
          top: '30%'
        }}
      />
      <CoffeeIcon
        sx={{
          position: 'absolute',
          width: 16,
          left: '80%',
          top: '70%'
        }}
      />
    </Divider>
  </div>
)

export default Projects
