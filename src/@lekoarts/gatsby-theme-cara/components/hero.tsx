/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, useColorMode } from 'theme-ui'

import Typed from 'react-typed'
import 'react-typed/dist/animatedCursor.css'

import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'
import { hidden, iconpos } from '../styles/utils'

// import Intro from '../sections/intro.mdx'

import MonitorIcon from '../assets/icons/monitor.svg'
import HeadphoneIcon from '../assets/icons/headphones.svg'
import HeartIcon from '../assets/icons/heart.svg'
// import EaselIcon from '../assets/icons/easel.svg'
import MusicIcon from '../assets/icons/musicnote.svg'
import CameraIcon from '../assets/icons/photo-camera.svg'
import TurntableIcon from '../assets/icons/turntable.svg'
import PortfolioIcon from '../assets/icons/portfolio.svg'
import WebsiteIcon from '../assets/icons/website.svg'
import PaletteIcon from '../assets/icons/paint-palette.svg'
import HomeIcon from '../assets/icons/home.svg'
import TravelIcon from '../assets/icons/travelling.svg'
import BicycleIcon from '../assets/icons/bicycle.svg'
import NotebookIcon from '../assets/icons/notebook.svg'
import AustraliaIcon from '../assets/icons/australia.svg'
import SydneyIcon from '../assets/icons/opera-house.svg'
import KoalaIcon from '../assets/icons/koala.svg'
import SpeakerIcon from '../assets/icons/speaker.svg'
import PianoIcon from '../assets/icons/piano2.svg'
import FloralIcon from '../assets/icons/floral-spring.svg'
import GuitarIcon from '../assets/icons/guitar.svg'

import Background from '../assets/backgrounds/garden-tree.svg'

const Hero: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = () => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <div>
      {/* <div
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: '#f7caca',
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23be9cc1' fill-opacity='0.3'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      /> */}
      <img
        src={Background}
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
            onClick={toggleColorMode}
            type="button"
            aria-label="Toggle dark mode"
          >
            {isDark ? `Light Theme` : `Dark Theme`}
          </button>
          {/* <Intro /> */}
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
          <Typed
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
