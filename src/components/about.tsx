import React from 'react'
import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'

import { hidden, iconpos } from '../styles/utils'

import AboutMDX from '../sections/About'

import Background from '../assets/backgrounds/floral-spring.svg'

// import CocktailIcon from '../assets/icons/cocktail.svg?react'
import CoffeeIcon from '../assets/icons/coffee.svg?react'
import ReadingIcon from '../assets/icons/reading.svg?react'
import SunglassesIcon from '../assets/icons/sunglasses.svg?react'
import WebsiteIcon from '../assets/icons/website.svg?react'
import WineIcon from '../assets/icons/wine.svg?react'
import PhotoIcon from '../assets/icons/photo.svg?react'
// import IceCreamIcon from '../assets/icons/ice-cream.svg?react'
import BooksIcon from '../assets/icons/books.svg?react'
import PawIcon from '../assets/icons/paw-print.svg?react'
import DogIcon from '../assets/icons/dog.svg?react'
import FlowerIcon from '../assets/icons/flower.svg?react'
import RubikIcon from '../assets/icons/Rubik.svg?react'

const About: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <div>
    <Divider bg="var(--color-divider)" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} factor={factor} />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <img
        src={Background.src}
        alt="about background"
        className="fixed left-0 top-0 w-full opacity-10"
      />
      <UpDown>
        <PawIcon {...iconpos(64, '50%', '75%', hidden)} />
        <CoffeeIcon {...iconpos(32, '60%', '20%', hidden)} />
        <ReadingIcon {...iconpos(16, '25%', '5%')} />
        <SunglassesIcon {...iconpos(16, '80%', '80%', hidden)} />
      </UpDown>
      <UpDownWide>
        <RubikIcon {...iconpos(48, '5%', '80%', hidden)} />
        <WineIcon {...iconpos(16, '95%', '50%')} />
        <PhotoIcon {...iconpos(16, '85%', '15%', hidden)} />
        <BooksIcon {...iconpos(16, '45%', '10%', hidden)} />
      </UpDownWide>
      <FlowerIcon {...iconpos(16, '4%', '20%', hidden)} />
      {/* <CocktailIcon {...iconpos(16, '70%', '60%')} /> */}
      <DogIcon {...iconpos(16, '10%', '10%')} />
      {/* <IceCreamIcon {...iconpos(16, '20%', '30%', hidden)} /> */}
      <WebsiteIcon {...iconpos(16, '80%', '70%')} />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
