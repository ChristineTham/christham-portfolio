'use client'

import React from 'react'
import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'

import Footer from './footer'
import { HIDDEN_MOBILE_CLASS, iconpos } from '../styles/utils'

import ContactMDX from '../sections/contact.mdx'

import {
  AgendaIcon,
  CheckListIcon,
  EmailIcon,
  PhoneIcon,
  IDCardIcon,
  MapIcon,
  MessageIcon,
  SendIcon,
  PostItIcon,
} from '../assets/icons'

const Background = '/backgrounds/lake.svg'

const Contact: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <div>
    <Divider fill="#be9cc1" speed={0.2} offset={offset} factor={factor}>
      <div style={{ position: `absolute`, bottom: 0, width: `100%`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        {/* InnerWave: color is inherited from Divider's fill via currentColor */}
        <div style={{ position: `relative`, height: `100%` }} className="contact-wave-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values={`M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;
                M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;
                M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z`}
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </div>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <img
        src={Background}
        alt="contact background"
        style={{
          position: 'fixed',
          left: 0,
          top: '10%',
          width: '100%',
          opacity: 0.2,
        }}
      />
      <UpDown>
        <AgendaIcon style={iconpos(16, '70%', '20%')} className={HIDDEN_MOBILE_CLASS} />
        <CheckListIcon style={iconpos(16, '25%', '5%')} />
      </UpDown>
      <UpDownWide>
        <EmailIcon style={iconpos(16, '95%', '50%')} />
        <PhoneIcon style={iconpos(16, '85%', '15%')} />
        <IDCardIcon style={iconpos(48, '45%', '10%')} className={HIDDEN_MOBILE_CLASS} />
      </UpDownWide>
      <MapIcon style={iconpos(16, '4%', '20%')} />
      <MessageIcon style={iconpos(16, '70%', '60%')} />
      <SendIcon style={iconpos(16, '20%', '25%')} />
      <PostItIcon style={iconpos(16, '80%', '70%')} />
    </Divider>
  </div>
)

export default Contact
