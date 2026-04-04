import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="text-center block absolute bottom-0 text-[var(--color-textMuted)] p-2 xs:p-4 w-full">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <div className="flex justify-center items-center mt-4 text-[var(--color-text)] font-semibold [&_a]:text-[var(--color-text)]">
        <img width="30" height="30" src="/logo.svg" alt="Hello Tham Logo" />
        {` `}
        <a
          aria-label="Link to the theme's GitHub repository"
          className="ml-2"
          href="https://github.com/ChristineTham/christham-portfolio"
        >
          Website
        </a>
        &nbsp;by&nbsp;
        <a aria-label="Link to the theme author's website" href="https://hellotham.com">
          Hello Tham Pty Ltd
        </a>
      </div>
    </footer>
  )
}

export default Footer
