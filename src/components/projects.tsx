'use client'

import React from 'react'
import Divider from '@/components/divider'
import Inner from '@/components/inner'
import Content from '@/components/content'
import { UpDown, UpDownWide } from '@/components/animations'

import { iconpos } from '@/lib/utils'

import ProjectsMDX from '@/sections/projects.mdx'

import {
  WrenchIcon,
  RubikIcon,
  BlueprintIcon,
  AtomIcon,
  PuzzleIcon,
  CloudIcon,
  FolderIcon,
  GearsIcon,
  GraphicsIcon,
  Notebook2Icon as NotebookIcon,
  WorkflowIcon,
  CalculatorIcon,
  ChipIcon,
  CompassIcon,
  ProgrammingIcon,
} from '@/assets/icons'

const Background = '/backgrounds/river.svg'

const Projects: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 2 }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, #f7caca 0%, #93a9d1 100%)"
      clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor} className="
      pointer-events-none
    ">
      <img
        src={Background}
        alt="projects background"
        style={{
          position: 'fixed',
          left: 0,
          top: '25%',
          width: '100%',
          opacity: 0.3,
        }}
      />
      <UpDown>
        <WrenchIcon style={iconpos(16, '85%', '75%')} />
        <RubikIcon style={iconpos(16, '70%', '20%')} />
        <BlueprintIcon style={iconpos(48, '25%', '5%')} />
        <PuzzleIcon style={iconpos(16, '17%', '60%')} />
      </UpDown>
      <UpDownWide>
        <AtomIcon style={iconpos(64, '20%', '90%')} />
        <CloudIcon style={iconpos(16, '90%', '30%')} />
        <FolderIcon style={iconpos(48, '70%', '90%')} />
        <GearsIcon style={iconpos(48, '18%', '75%')} />
        <GraphicsIcon style={iconpos(16, '75%', '10%')} />
        <NotebookIcon style={iconpos(48, '45%', '10%')} />
      </UpDownWide>
      <WorkflowIcon style={iconpos(16, '4%', '20%')} />
      <CompassIcon style={iconpos(16, '80%', '60%')} />
      <ProgrammingIcon style={iconpos(16, '10%', '10%')} />
      <BlueprintIcon style={iconpos(16, '29%', '26%')} />
      <CalculatorIcon style={iconpos(16, '75%', '30%')} />
      <ChipIcon style={iconpos(16, '80%', '70%')} />
    </Divider>
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div className="
          projects-grid grid grid-cols-1 gap-2
          xs:gap-8
          sm:grid-cols-2
          md:gap-16
        ">
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
  </div>
)

export default Projects
