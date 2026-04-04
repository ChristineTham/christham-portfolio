/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react'
import React from 'react'
import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'

import { hidden, iconpos } from '../styles/utils'

import AboutMDX from '../sections/about.mdx'

import Background from '../assets/backgrounds/floral-spring.svg'

// import CocktailIcon from '../assets/icons/cocktail.svg'
import CoffeeIcon from '../assets/icons/coffee.svg'
import ReadingIcon from '../assets/icons/reading.svg'
import SunglassesIcon from '../assets/icons/sunglasses.svg'
import WebsiteIcon from '../assets/icons/website.svg'
import WineIcon from '../assets/icons/wine.svg'
import PhotoIcon from '../assets/icons/photo.svg'
// import IceCreamIcon from '../assets/icons/ice-cream.svg'
import BooksIcon from '../assets/icons/books.svg'
import PawIcon from '../assets/icons/paw-print.svg'
import DogIcon from '../assets/icons/dog.svg'
import FlowerIcon from '../assets/icons/flower.svg'
import RubikIcon from '../assets/icons/Rubik.svg'

const About: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <div>
    <Divider bg="var(--color-divider)" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} factor={factor} />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <img
        src={Background}
        alt="about background"
        css={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          opacity: 0.1,
        }}
      />
      <UpDown>
        <PawIcon css={iconpos(64, '50%', '75%', hidden)} />
        <CoffeeIcon css={iconpos(32, '60%', '20%', hidden)} />
        <ReadingIcon css={iconpos(16, '25%', '5%')} />
        <SunglassesIcon css={iconpos(16, '80%', '80%', hidden)} />
      </UpDown>
      <UpDownWide>
        <RubikIcon css={iconpos(48, '5%', '80%', hidden)} />
        <WineIcon css={iconpos(16, '95%', '50%')} />
        <PhotoIcon css={iconpos(16, '85%', '15%', hidden)} />
        <BooksIcon css={iconpos(16, '45%', '10%', hidden)} />
      </UpDownWide>
      <FlowerIcon css={iconpos(16, '4%', '20%', hidden)} />
      {/* <CocktailIcon css={iconpos(16, '70%', '60%')} /> */}
      <DogIcon css={iconpos(16, '10%', '10%')} />
      {/* <IceCreamIcon css={iconpos(16, '20%', '30%', hidden)} /> */}
      <WebsiteIcon css={iconpos(16, '80%', '70%')} />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
