import React from 'react'
import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'

import { iconpos } from '../styles/utils'

import Background from '../assets/backgrounds/river.svg'

import ProjectsMDX from '../sections/Projects'

import WrenchIcon from '../assets/icons/adjustable-wrench.svg?react'
import RubikIcon from '../assets/icons/Rubik.svg?react'
import BlueprintIcon from '../assets/icons/blueprint.svg?react'
import AtomIcon from '../assets/icons/atom.svg?react'
import PuzzleIcon from '../assets/icons/puzzle.svg?react'
import CloudIcon from '../assets/icons/computing-cloud.svg?react'
import FolderIcon from '../assets/icons/folders.svg?react'
import GearsIcon from '../assets/icons/gears.svg?react'
import GraphicsIcon from '../assets/icons/graphics.svg?react'
import NotebookIcon from '../assets/icons/notebook2.svg?react'
import WorkflowIcon from '../assets/icons/workflow.svg?react'
import CalculatorIcon from '../assets/icons/calculator.svg?react'
import ChipIcon from '../assets/icons/chip.svg?react'
import CompassIcon from '../assets/icons/compass.svg?react'
import ProgrammingIcon from '../assets/icons/programming.svg?react'

const Projects: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 2 }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, #f7caca 0%, #93a9d1 100%)"
      clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 [&>h2]:col-span-full [&>h2]:!text-rosely4">
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <img
        src={Background.src}
        alt="projects background"
        className="fixed left-0 top-1/4 w-full opacity-30"
      />
      <UpDown>
        <WrenchIcon {...iconpos(16, '85%', '75%')} />
        <RubikIcon {...iconpos(16, '70%', '20%')} />
        <BlueprintIcon {...iconpos(48, '25%', '5%')} />
        <PuzzleIcon {...iconpos(16, '17%', '60%')} />
      </UpDown>
      <UpDownWide>
        <AtomIcon {...iconpos(64, '20%', '90%')} />
        <CloudIcon {...iconpos(16, '90%', '30%')} />
        <FolderIcon {...iconpos(48, '70%', '90%')} />
        <GearsIcon {...iconpos(48, '18%', '75%')} />
        <GraphicsIcon {...iconpos(16, '75%', '10%')} />
        <NotebookIcon {...iconpos(48, '45%', '10%')} />
      </UpDownWide>
      <WorkflowIcon {...iconpos(16, '4%', '20%')} />
      <CompassIcon {...iconpos(16, '80%', '60%')} />
      <ProgrammingIcon {...iconpos(16, '10%', '10%')} />
      <BlueprintIcon {...iconpos(16, '29%', '26%')} />
      <CalculatorIcon {...iconpos(16, '75%', '30%')} />
      <ChipIcon {...iconpos(16, '80%', '70%')} />
    </Divider>
  </div>
)

export default Projects
