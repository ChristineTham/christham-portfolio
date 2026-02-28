import React, { useState, useEffect } from 'react'
import { ReactTyped } from "react-typed"

import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'
import { hidden, iconpos } from '../styles/utils'

import MonitorIcon from '../assets/icons/monitor.svg?react'
import HeadphoneIcon from '../assets/icons/headphones.svg?react'
import HeartIcon from '../assets/icons/heart.svg?react'
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
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial color mode based on local storage or system preference
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, [])

  const toggleColorMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  }

  return (
    <div>
      <img
        src={Background.src}
        alt="hero background"
        className="fixed top-0 left-0 w-full opacity-25"
      />
      <Divider speed={0.2} offset={offset} factor={factor}>
        <p
          className="text-textMuted text-xs absolute top-[94%] left-[1%] z-10"
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
          <WebsiteIcon className={iconpos(48, '60%', '62%', hidden)} />
          <HomeIcon className={iconpos(48, '10%', '12%')} />
          <HeartIcon className={iconpos(24, '60%', '15%', hidden)} />
        </UpDown>
        <UpDownWide>
          <PaletteIcon className={iconpos(16, '35%', '5%')} />
          <NotebookIcon className={iconpos(16, '45%', '10%', hidden)} />
          <BicycleIcon className={iconpos(20, '75%', '8%')} />
          <PortfolioIcon className={iconpos(16, '85%', '20%')} />
          <CameraIcon className={iconpos(16, '30%', '65%')} />
          <MusicIcon className={iconpos(16, '19%', '58%')} />
          <TravelIcon className={iconpos(20, '90%', '50%')} />
          <TurntableIcon className={iconpos(48, '70%', '90%')} />
        </UpDownWide>
        <MonitorIcon className={iconpos(24, '5%', '70%', hidden)} />
        <HeadphoneIcon className={iconpos(16, '50%', '65%', hidden)} />
        <SydneyIcon className={iconpos(12, '4%', '20%')} />
        <AustraliaIcon className={iconpos(12, '20%', '5%')} />
        <KoalaIcon className={iconpos(12, '8%', '8%')} />
        <SpeakerIcon className={iconpos(12, '95%', '90%', hidden)} />
        <PianoIcon className={iconpos(20, '80%', '70%', hidden)} />
        <FloralIcon className={iconpos(64, '5%', '99%')} />
        <GuitarIcon className={iconpos(24, '40%', '80%', hidden)} />
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor} className="text-lg md:text-xl lg:text-2xl">
        <Inner>
          <button
            className="btn-toggle z-50"
            onClick={toggleColorMode}
            type="button"
            aria-label="Toggle dark mode"
          >
            {isDark ? `Light Theme` : `Dark Theme`}
          </button>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-8 mb-[-0.5rem] tracking-wide text-heading p-2 rounded-lg ${isDark ? 'bg-black/60' : 'bg-black/10'}`}
            style={{ textShadow: 'rgba(255, 255, 255, 0.15) 0px 5px 35px' }}
          >
            Hi, I am Chris Tham
          </h1>
          <ReactTyped
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rosely10 font-mono"
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
