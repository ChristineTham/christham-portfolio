/** @jsx jsx */
import { jsx } from 'theme-ui'

import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider'
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner'
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content'
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations'

import { hidden, iconpos } from '../styles/utils'

import AboutMDX from '../sections/about.mdx'

import Background from '../assets/backgrounds/floral-spring.svg'

import CocktailIcon from '../assets/icons/cocktail.svg'
import CoffeeIcon from '../assets/icons/coffee.svg'
import ReadingIcon from '../assets/icons/reading.svg'
import SunglassesIcon from '../assets/icons/sunglasses.svg'
import WebsiteIcon from '../assets/icons/website.svg'
import WineIcon from '../assets/icons/wine.svg'
import PhotoIcon from '../assets/icons/photo.svg'
import IceCreamIcon from '../assets/icons/ice-cream.svg'
import BooksIcon from '../assets/icons/books.svg'
import PawIcon from '../assets/icons/paw-print.svg'
import DogIcon from '../assets/icons/dog.svg'
import FlowerIcon from '../assets/icons/flower.svg'
import RubikIcon from '../assets/icons/Rubik.svg'

const About: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <div>
    <Divider bg="divider" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} factor={factor} />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <img
        src={Background}
        alt="about background"
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          opacity: 0.3
        }}
      />
      <UpDown>
        <PawIcon sx={iconpos(64, '50%', '75%', hidden)} />
        <CoffeeIcon sx={iconpos(32, '60%', '20%', hidden)} />
        <ReadingIcon sx={iconpos(16, '25%', '5%')} />
        <SunglassesIcon sx={iconpos(16, '80%', '80%', hidden)} />
      </UpDown>
      <UpDownWide>
        <RubikIcon sx={iconpos(48, '5%', '80%', hidden)} />
        <WineIcon sx={iconpos(16, '95%', '50%')} />
        <PhotoIcon sx={iconpos(16, '85%', '15%', hidden)} />
        <BooksIcon sx={iconpos(16, '45%', '10%', hidden)} />
      </UpDownWide>
      <FlowerIcon sx={iconpos(16, '4%', '20%', hidden)} />
      <CocktailIcon sx={iconpos(16, '70%', '60%')} />
      <DogIcon sx={iconpos(16, '10%', '10%')} />
      <IceCreamIcon sx={iconpos(16, '20%', '30%', hidden)} />
      <WebsiteIcon sx={iconpos(16, '80%', '70%')} />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
