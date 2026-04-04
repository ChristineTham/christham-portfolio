import React from 'react'
import styled from '@emotion/styled'

const FooterEl = styled.footer`
  text-align: center;
  display: block;
  position: absolute;
  bottom: 0;
  color: var(--color-textMuted);
  padding: 1rem 0.5rem;
  @media (min-width: 400px) {
    padding: 2rem 1rem;
  }
`

const FooterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: var(--color-text);
  font-weight: 600;
  a {
    color: var(--color-text);
  }
`

const Footer: React.FC = () => {
  return (
    <FooterEl>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <FooterFlex>
        <img width="30" height="30" src="/logo.svg" alt="Hello Tham Logo" />
        {` `}
        <a
          aria-label="Link to the theme's GitHub repository"
          css={{ marginLeft: '0.5rem' }}
          href="https://github.com/ChristineTham/christham-portfolio"
        >
          Website
        </a>
        &nbsp;by&nbsp;
        <a aria-label="Link to the theme author's website" href="https://hellotham.com">
          Hello Tham Pty Ltd
        </a>
      </FooterFlex>
    </FooterEl>
  )
}

export default Footer
