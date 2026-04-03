import React from 'react'
import styled from '@emotion/styled'
import Divider from '../elements/divider'
import Inner from '../elements/inner'
import Content from '../elements/content'
import { UpDown, UpDownWide, waveAnimation } from '../styles/animations'

import Footer from './footer'
import { hidden, iconpos } from '../styles/utils'

import ContactMDX from '../sections/contact.mdx'

import Background from '../assets/backgrounds/lake.svg'

import AgendaIcon from '../assets/icons/agenda.svg'
import CheckListIcon from '../assets/icons/check-list.svg'
import EmailIcon from '../assets/icons/email.svg'
import PhoneIcon from '../assets/icons/smartphone.svg'
import IDCardIcon from '../assets/icons/id-card.svg'
import MapIcon from '../assets/icons/map.svg'
import MessageIcon from '../assets/icons/message.svg'
import SendIcon from '../assets/icons/send.svg'
import PostItIcon from '../assets/icons/post-it.svg'

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact: React.FC<{ offset: number; factor?: number }> = ({ offset, factor = 1 }) => (
  <div>
    <Divider fill="#be9cc1" speed={0.2} offset={offset} factor={factor}>
      <div css={{ position: `absolute`, bottom: 0, width: `100%`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <InnerWave css={{ position: `relative`, height: `100%`, '& svg': { width: `100%`, height: `40vh` } }}>
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
        </InnerWave>
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
        css={{
          position: 'fixed',
          left: 0,
          top: '10%',
          width: '100%',
          opacity: 0.2,
        }}
      />
      <UpDown>
        <AgendaIcon css={iconpos(16, '70%', '20%', hidden)} />
        <CheckListIcon css={iconpos(16, '25%', '5%')} />
      </UpDown>
      <UpDownWide>
        <EmailIcon css={iconpos(16, '95%', '50%')} />
        <PhoneIcon css={iconpos(16, '85%', '15%')} />
        <IDCardIcon css={iconpos(48, '45%', '10%', hidden)} />
      </UpDownWide>
      <MapIcon css={iconpos(16, '4%', '20%')} />
      <MessageIcon css={iconpos(16, '70%', '60%')} />
      <SendIcon css={iconpos(16, '20%', '25%')} />
      <PostItIcon css={iconpos(16, '80%', '70%')} />
    </Divider>
  </div>
)

export default Contact
