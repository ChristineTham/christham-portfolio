/** @jsx jsx */
import { jsx } from 'theme-ui'

import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'
import { hidden } from '@lekoarts/gatsby-theme-cara/src/styles/utils'

// import HeroBG from './herobg'

import Intro from '../sections/intro.mdx'

import MonitorIcon from '../../../icons/monitor.svg'
import HeadphoneIcon from '../../../icons/headphones.svg'
import HeartIcon from '../../../icons/heart.svg'
import LoveIcon from '../../../icons/love.svg'
import MusicIcon from '../../../icons/musicnote.svg'
import CameraIcon from '../../../icons/photo-camera.svg'
import TurntableIcon from '../../../icons/turntable.svg'
import PortfolioIcon from '../../../icons/portfolio.svg'
import WebsiteIcon from '../../../icons/website.svg'
import PaletteIcon from '../../../icons/paint-palette.svg'
import HomeIcon from '../../../icons/home.svg'
import TravelIcon from '../../../icons/travelling.svg'
import BicycleIcon from '../../../icons/bicycle.svg'
import NotebookIcon from '../../../icons/notebook.svg'
import AustraliaIcon from '../../../icons/australia.svg'
import SydneyIcon from '../../../icons/opera-house.svg'
import KoalaIcon from '../../../icons/koala.svg'
import SpeakerIcon from '../../../icons/speaker.svg'
import PianoIcon from '../../../icons/piano.svg'
import MountainIcon from '../../../icons/mountain.svg'
import GuitarIcon from '../../../icons/guitar.svg'

const Hero: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <div>
    {/* <div
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
        // backgroundColor: '#f7caca',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundImage: '/landscape.jpg'
        // backgroundImage: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23be9cc1' fill-opacity='0.3'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E`
      }}
    /> */}
    <img
      src="/landscape.jpg"
      alt="background"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
      }}
    />
    <Divider speed={0.2} offset={offset} factor={factor}>
      <p
        sx={{
          color: 'text-muted',
          fontSize: '12px',
          position: 'absolute',
          top: '92%',
          left: '1%',
          zIndex: 10
        }}
      >
        <em>Kawaii Flat</em> Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {' '}
          www.flaticon.com
        </a>
        <br />
        <a href="https://www.vecteezy.com/free-vector/abstract">Abstract Vectors by Vecteezy (wichan yodsawai)</a>
      </p>
      <UpDown>
        <WebsiteIcon
          sx={{
            position: 'absolute',
            width: 48,
            left: '60%',
            top: '62%'
          }}
        />
        <HomeIcon
          sx={{
            position: 'absolute',
            width: 48,
            display: hidden,
            left: '10%',
            top: '12%'
          }}
        />
        <HeartIcon
          sx={{
            position: 'absolute',
            width: 24,
            display: hidden,
            left: '60%',
            top: '15%'
          }}
        />
      </UpDown>
      <UpDownWide>
        <PaletteIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '28%',
            top: '5%'
          }}
        />
        <NotebookIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '45%',
            top: '10%'
          }}
        />
        <BicycleIcon
          sx={{
            position: 'absolute',
            width: 20,
            left: '75%',
            top: '8%'
          }}
        />
        <PortfolioIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '80%',
            top: '20%'
          }}
        />
        <CameraIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '30%',
            top: '65%'
          }}
        />
        <MusicIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '19%',
            top: '58%'
          }}
        />
        <TravelIcon
          sx={{
            position: 'absolute',
            width: 20,
            left: '90%',
            top: '50%'
          }}
        />
        <TurntableIcon
          sx={{
            position: 'absolute',
            width: 16,
            left: '70%',
            top: '90%'
          }}
        />
      </UpDownWide>
      <MonitorIcon
        sx={{
          position: 'absolute',
          width: 24,
          left: '5%',
          top: '70%'
        }}
      />
      <HeadphoneIcon
        sx={{
          position: 'absolute',
          width: 16,
          left: '50%',
          top: '65%'
        }}
      />
      <LoveIcon
        sx={{
          position: 'absolute',
          width: 12,
          left: '38%',
          top: '30%'
        }}
      />
      <SydneyIcon
        sx={{
          position: 'absolute',
          width: 12,
          left: '4%',
          top: '20%'
        }}
      />
      <AustraliaIcon
        sx={{
          position: 'absolute',
          width: 12,
          left: '20%',
          top: '5%'
        }}
      />
      <KoalaIcon
        sx={{
          position: 'absolute',
          width: 12,
          left: '8%',
          top: '8%'
        }}
      />
      <SpeakerIcon
        sx={{
          position: 'absolute',
          width: 12,
          left: '95%',
          top: '90%'
        }}
      />
      <PianoIcon
        sx={{
          position: 'absolute',
          width: 20,
          left: '80%',
          top: '70%'
        }}
      />
      <MountainIcon
        sx={{
          position: 'absolute',
          width: 64,
          left: '5%',
          top: '90%'
        }}
      />
      <GuitarIcon
        sx={{
          position: 'absolute',
          width: 24,
          left: '40%',
          top: '80%'
        }}
      />
      {/* <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" /> */}
    </Divider>
    <Content sx={{ variant: 'texts.bigger' }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
