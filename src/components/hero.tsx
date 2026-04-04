import React from 'react'
import { ReactTyped } from "react-typed"
import { useColorMode } from '../hooks/useColorMode'
import { fonts, rosely } from '../theme/tokens'

import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'
import { hidden, iconpos } from '../styles/utils'

import MonitorIcon from '../assets/icons/monitor.svg'
import HeadphoneIcon from '../assets/icons/headphones.svg'
import HeartIcon from '../assets/icons/heart.svg'
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

  return (
    <div>
      <img
        src={Background}
        alt="hero background"
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0.25,
        }}
      />
      <Divider speed={0.2} offset={offset} factor={factor}>
        <p
          css={{
            color: 'var(--color-textMuted)',
            fontSize: '12px',
            position: 'absolute',
            top: '94%',
            left: '1%',
            zIndex: 10,
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
          <WebsiteIcon css={iconpos(48, '60%', '62%', hidden)} />
          <HomeIcon css={iconpos(48, '10%', '12%')} />
          <HeartIcon css={iconpos(24, '60%', '15%', hidden)} />
        </UpDown>
        <UpDownWide>
          <PaletteIcon css={iconpos(16, '35%', '5%')} />
          <NotebookIcon css={iconpos(16, '45%', '10%', hidden)} />
          <BicycleIcon css={iconpos(20, '75%', '8%')} />
          <PortfolioIcon css={iconpos(16, '85%', '20%')} />
          <CameraIcon css={iconpos(16, '30%', '65%')} />
          <MusicIcon css={iconpos(16, '19%', '58%')} />
          <TravelIcon css={iconpos(20, '90%', '50%')} />
          <TurntableIcon css={iconpos(48, '70%', '90%')} />
        </UpDownWide>
        <MonitorIcon css={iconpos(24, '5%', '70%', hidden)} />
        <HeadphoneIcon css={iconpos(16, '50%', '65%', hidden)} />
        <SydneyIcon css={iconpos(12, '4%', '20%')} />
        <AustraliaIcon css={iconpos(12, '20%', '5%')} />
        <KoalaIcon css={iconpos(12, '8%', '8%')} />
        <SpeakerIcon css={iconpos(12, '95%', '90%', hidden)} />
        <PianoIcon css={iconpos(20, '80%', '70%', hidden)} />
        <FloralIcon css={iconpos(64, '5%', '99%')} />
        <GuitarIcon css={iconpos(24, '40%', '80%', hidden)} />
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <button
            css={{
              color: 'var(--color-background)',
              border: 'none',
              backgroundColor: 'var(--color-text)',
              cursor: 'pointer',
              alignSelf: 'center',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              fontWeight: 600,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '1rem',
              borderRadius: '5px',
              position: 'absolute',
              top: '1%',
              left: '1%',
            }}
            onClick={() => {
              const next = isDark ? `light` : `dark`
              setColorMode(next)
            }}
            type="button"
            aria-label="Toggle dark mode"
          >
            {isDark ? `Light Theme` : `Dark Theme`}
          </button>
          <h1
            css={{
              fontSize: '2.25rem',
              '@media (min-width: 400px)': { fontSize: '3rem' },
              '@media (min-width: 600px)': { fontSize: '4rem' },
              marginTop: '0.5rem',
              marginBottom: '-0.5rem',
              textShadow: 'rgba(255, 255, 255, 0.15) 0px 5px 35px',
              letterSpacing: '0.025em',
              color: 'var(--color-heading)',
              backgroundColor: isDark ? '#000000a0' : '#00000020',
              padding: '0.5rem',
              borderRadius: '5px',
            }}
          >
            Hi, I am Chris Tham
          </h1>
          <ReactTyped
            css={{
              fontSize: '1.5rem',
              '@media (min-width: 400px)': { fontSize: '2.25rem' },
              color: rosely.rosely10,
              fontFamily: fonts.mono,
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
