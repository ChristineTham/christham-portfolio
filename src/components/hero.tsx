'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { useColorMode } from '@/hooks/useColorMode'

import Divider from '@/components/divider'
import Inner from '@/components/inner'
import Content from '@/components/content'
import { UpDown, UpDownWide } from '@/components/animations'
import { HIDDEN_MOBILE_CLASS, iconpos } from '@/lib/utils'

const Background = '/backgrounds/garden-tree.svg'

// Loaded only on the client to avoid SSR/CSR hydration mismatches: the typing
// animation produces different output on the server vs. the first client render.
const ReactTyped = dynamic(
  () => import('react-typed').then((m) => m.ReactTyped),
  { ssr: false }
)

import {
  MonitorIcon,
  HeadphoneIcon,
  HeartIcon,
  MusicIcon,
  CameraIcon,
  TurntableIcon,
  PortfolioIcon,
  WebsiteIcon,
  PaletteIcon,
  HomeIcon,
  TravelIcon,
  BicycleIcon,
  NotebookIcon,
  AustraliaIcon,
  SydneyIcon,
  KoalaIcon,
  SpeakerIcon,
  PianoIcon,
  FloralIcon,
  GuitarIcon,
} from '@/assets/icons'

const Hero: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <div>
      <img
        src={Background}
        alt="hero background"
        className="fixed top-0 left-0 w-full opacity-25"
      />
      <Divider speed={0.2} offset={offset} factor={factor} className="
        pointer-events-none
      ">
        <p
          className="
            absolute top-[94%] left-[1%] z-10 text-[12px]
            text-(--color-textMuted)
          "
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
          <WebsiteIcon style={iconpos(48, '60%', '62%')} className={HIDDEN_MOBILE_CLASS} />
          <HomeIcon style={iconpos(48, '10%', '12%')} />
          <HeartIcon style={iconpos(24, '60%', '15%')} className={HIDDEN_MOBILE_CLASS} />
        </UpDown>
        <UpDownWide>
          <PaletteIcon style={iconpos(16, '35%', '5%')} />
          <NotebookIcon style={iconpos(16, '45%', '10%')} className={HIDDEN_MOBILE_CLASS} />
          <BicycleIcon style={iconpos(20, '75%', '8%')} />
          <PortfolioIcon style={iconpos(16, '85%', '20%')} />
          <CameraIcon style={iconpos(16, '30%', '65%')} />
          <MusicIcon style={iconpos(16, '19%', '58%')} />
          <TravelIcon style={iconpos(20, '90%', '50%')} />
          <TurntableIcon style={iconpos(48, '70%', '90%')} />
        </UpDownWide>
        <MonitorIcon style={iconpos(24, '5%', '70%')} className={HIDDEN_MOBILE_CLASS} />
        <HeadphoneIcon style={iconpos(16, '50%', '65%')} className={HIDDEN_MOBILE_CLASS} />
        <SydneyIcon style={iconpos(12, '4%', '20%')} />
        <AustraliaIcon style={iconpos(12, '20%', '5%')} />
        <KoalaIcon style={iconpos(12, '8%', '8%')} />
        <SpeakerIcon style={iconpos(12, '95%', '90%')} className={HIDDEN_MOBILE_CLASS} />
        <PianoIcon style={iconpos(20, '80%', '70%')} className={HIDDEN_MOBILE_CLASS} />
        <FloralIcon style={iconpos(64, '5%', '99%')} />
        <GuitarIcon style={iconpos(24, '40%', '80%')} className={HIDDEN_MOBILE_CLASS} />
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <button
            className="
              absolute top-[1%] left-[1%] mx-auto mb-4 block cursor-pointer
              self-center rounded-[5px] border-0 bg-(--color-text) px-4 py-2
              font-semibold text-(--color-background)
            "
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
            className={`
              mt-2 mb-3 rounded-[5px] p-2 text-4xl tracking-[0.025em]
              text-(--color-heading)
              [text-shadow:rgba(255,255,255,0.15)_0px_5px_35px]
              xs:text-5xl
              sm:text-6xl
              ${isDark ? `bg-black/60` : `bg-black/10`}
            `}
          >
            Hi, I am Chris Tham
          </h1>
          <ReactTyped
            className="
              font-mono text-2xl text-[#b565a7]
              xs:text-4xl
            "
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
