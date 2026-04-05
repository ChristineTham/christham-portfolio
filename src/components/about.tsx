'use client'

import React from 'react'
import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'

import { HIDDEN_MOBILE_CLASS, iconpos } from '../styles/utils'

import AboutMDX from '../sections/about.mdx'

import {
  CoffeeIcon,
  ReadingIcon,
  SunglassesIcon,
  WebsiteIcon,
  WineIcon,
  PhotoIcon,
  BooksIcon,
  PawIcon,
  DogIcon,
  FlowerIcon,
  RubikIcon,
} from '../assets/icons'

const Background = '/backgrounds/floral-spring.svg'

const About: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <div>
    <Divider bg="var(--color-divider)" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} factor={factor} />
    <Divider speed={0.1} offset={offset} factor={factor} className="
      pointer-events-none
    ">
      <img
        src={Background}
        alt="about background"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          opacity: 0.1,
        }}
      />
      <UpDown>
        <PawIcon style={iconpos(64, '50%', '75%')} className={HIDDEN_MOBILE_CLASS} />
        <CoffeeIcon style={iconpos(32, '60%', '20%')} className={HIDDEN_MOBILE_CLASS} />
        <ReadingIcon style={iconpos(16, '25%', '5%')} />
        <SunglassesIcon style={iconpos(16, '80%', '80%')} className={HIDDEN_MOBILE_CLASS} />
      </UpDown>
      <UpDownWide>
        <RubikIcon style={iconpos(48, '5%', '80%')} className={HIDDEN_MOBILE_CLASS} />
        <WineIcon style={iconpos(16, '95%', '50%')} />
        <PhotoIcon style={iconpos(16, '85%', '15%')} className={HIDDEN_MOBILE_CLASS} />
        <BooksIcon style={iconpos(16, '45%', '10%')} className={HIDDEN_MOBILE_CLASS} />
      </UpDownWide>
      <FlowerIcon style={iconpos(16, '4%', '20%')} className={HIDDEN_MOBILE_CLASS} />
      <DogIcon style={iconpos(16, '10%', '10%')} />
      <WebsiteIcon style={iconpos(16, '80%', '70%')} />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
