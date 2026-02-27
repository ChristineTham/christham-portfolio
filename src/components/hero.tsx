/** @jsxImportSource theme-ui */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, useColorMode } from 'theme-ui'
import React from 'react'
import { ReactTyped } from "react-typed"

import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'
import { hidden, iconpos } from '../styles/utils'

import MonitorIcon from '../assets/icons/monitor.svg?react'
import HeadphoneIcon from '../assets/icons/headphones.svg?react'
import HeartIcon from '../assets/icons/heart.svg?react'
// import EaselIcon from '../assets/icons/easel.svg?react'
import MusicIcon from '../assets/icons/musicnote.svg?react'
import CameraIcon from '../assets/icons/photo-camera.svg?react'
import TurntableIcon from '../assets/icons/turntable.svg?react'
import PortfolioIcon from '../assets/icons/portfolio.svg?react'
import WebsiteIcon from '../assets/icons/website.svg?react'
import PaletteIcon from '../assets/icons/paint-palette.svg?react'
import HomeIcon from '../assets/icons/home.svg?react'
import TravelIcon from '../assets/icons/travelling.svg?react'
import BicycleIcon from '../assets/icons/bicycle.svg?react'
import NotebookIcon from '../assets/icons/notebook.svg?react'
import AustraliaIcon from '../assets/icons/australia.svg?react'
import SydneyIcon from '../assets/icons/opera-house.svg?react'
import KoalaIcon from '../assets/icons/koala.svg?react'
import SpeakerIcon from '../assets/icons/speaker.svg?react'
import PianoIcon from '../assets/icons/piano2.svg?react'
import FloralIcon from '../assets/icons/floral-spring.svg?react'
import GuitarIcon from '../assets/icons/guitar.svg?react'

import Background from '../assets/backgrounds/garden-tree.svg'

const Hero: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  return (
    <div>
      <img
        src={Background.src}
        alt="hero background"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0.25
        }}
      />
      <Divider speed={0.2} offset={offset} factor={factor}>
        <p
          sx={{
            color: 'textMuted',
            fontSize: '12px',
            position: 'absolute',
            top: '94%',
            left: '1%',
            zIndex: 10
          }}
        >
          <em>Kawaii Flat</em> Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Author">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {' '}
            www.flaticon.com
          </a>
        </p>
        <UpDown>
          <WebsiteIcon sx={iconpos(48, '60%', '62%', hidden)} />
          <HomeIcon sx={iconpos(48, '10%', '12%')} />
          <HeartIcon sx={iconpos(24, '60%', '15%', hidden)} />
        </UpDown>
        <UpDownWide>
          <PaletteIcon sx={iconpos(16, '35%', '5%')} />
          <NotebookIcon sx={iconpos(16, '45%', '10%', hidden)} />
          <BicycleIcon sx={iconpos(20, '75%', '8%')} />
          <PortfolioIcon sx={iconpos(16, '85%', '20%')} />
          <CameraIcon sx={iconpos(16, '30%', '65%')} />
          <MusicIcon sx={iconpos(16, '19%', '58%')} />
          <TravelIcon sx={iconpos(20, '90%', '50%')} />
          <TurntableIcon sx={iconpos(48, '70%', '90%')} />
        </UpDownWide>
        <MonitorIcon sx={iconpos(24, '5%', '70%', hidden)} />
        <HeadphoneIcon sx={iconpos(16, '50%', '65%', hidden)} />
        {/* <EaselIcon sx={iconpos(12, '30%', '30%', hidden)} /> */}
        <SydneyIcon sx={iconpos(12, '4%', '20%')} />
        <AustraliaIcon sx={iconpos(12, '20%', '5%')} />
        <KoalaIcon sx={iconpos(12, '8%', '8%')} />
        <SpeakerIcon sx={iconpos(12, '95%', '90%', hidden)} />
        <PianoIcon sx={iconpos(20, '80%', '70%', hidden)} />
        <FloralIcon sx={iconpos(64, '5%', '99%')} />
        <GuitarIcon sx={iconpos(24, '40%', '80%', hidden)} />
        {/* <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" /> */}
      </Divider>
      <Content sx={{ variant: 'texts.bigger' }} speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <button
            sx={{
              variant: `buttons.toggle`,
              fontWeight: `semibold`,
              display: `block`,
              mx: `auto`,
              mb: 3,
              borderRadius: 5,
              position: 'absolute',
              top: '1%',
              left: '1%'
            }}
            onClick={() => {
              const next = isDark ? `light` : `dark`
              setColorMode(next)
              document.documentElement.classList.value = `theme-ui-${next}`
            }}
            type="button"
            aria-label="Toggle dark mode"
          >
            {isDark ? `Light Theme` : `Dark Theme`}
          </button>
          <h1
            sx={{
              fontSize: [6, 7, 8],
              mt: 2,
              mb: -2,
              textShadow: 'rgba(255, 255, 255, 0.15) 0px 5px 35px',
              letterSpacing: 'wide',
              color: 'heading',
              bg: isDark ? '#000000a0' : '#00000020',
              p: 2,
              borderRadius: 5
            }}
          >
            Hi, I am Chris Tham
          </h1>
          <ReactTyped
            sx={{
              fontSize: [4, 6],
              color: 'rosely10',
              fontFamily: 'mono'
            }}
            strings={['artist', 'consultant', 'cyclist', 'designer', 'musician', 'photographer', 'world traveller']}
            typeSpeed={100}
            backSpeed={50}
            backDelay={2000}
            loop
          />
        </Inner>
      </Content>
    </div>
  )
}

export default Hero
