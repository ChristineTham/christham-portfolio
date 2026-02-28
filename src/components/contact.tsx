import React from 'react'
import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'

import Footer from './footer'
import { hidden, iconpos } from '../styles/utils'

import ContactMDX from '../sections/Contact'

import Background from '../assets/backgrounds/lake.svg'

import AgendaIcon from '../assets/icons/agenda.svg?react'
import CheckListIcon from '../assets/icons/check-list.svg?react'
import EmailIcon from '../assets/icons/email.svg?react'
import PhoneIcon from '../assets/icons/smartphone.svg?react'
import IDCardIcon from '../assets/icons/id-card.svg?react'
import MapIcon from '../assets/icons/map.svg?react'
import MessageIcon from '../assets/icons/message.svg?react'
import SendIcon from '../assets/icons/send.svg?react'
import PostItIcon from '../assets/icons/post-it.svg?react'


const Contact: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <div>
    <Divider fill="#be9cc1" speed={0.2} offset={offset} factor={factor}>
      <div className="absolute bottom-0 w-full transform matrix(1, 0, 0, -1, 0, 0) scale-y-[-1]">
        <div className="relative h-full [&>svg]:w-full [&>svg]:h-[40vh] [&>svg>path]:animate-wave">
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
        src={Background.src}
        alt="contact background"
        className="fixed left-0 top-[10%] w-full opacity-20"
      />
      <UpDown>
        <AgendaIcon {...iconpos(16, '70%', '20%', hidden)} />
        <CheckListIcon {...iconpos(16, '25%', '5%')} />
      </UpDown>
      <UpDownWide>
        <EmailIcon {...iconpos(16, '95%', '50%')} />
        <PhoneIcon {...iconpos(16, '85%', '15%')} />
        <IDCardIcon {...iconpos(48, '45%', '10%', hidden)} />
      </UpDownWide>
      <MapIcon {...iconpos(16, '4%', '20%')} />
      <MessageIcon {...iconpos(16, '70%', '60%')} />
      <SendIcon {...iconpos(16, '20%', '25%')} />
      <PostItIcon {...iconpos(16, '80%', '70%')} />
    </Divider>
  </div>
)

export default Contact
