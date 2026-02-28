import React from "react"

const Footer: React.FC = () => {
  return (
    <div className="text-center block absolute bottom-0 text-textMuted px-4 py-8 sm:px-6 sm:py-12 w-full left-0">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <div className="flex justify-center items-center mt-6 text-text font-semibold [&>a]:text-text">
        <img width="30" height="30" src="/logo.svg" alt="Hello Tham Logo" />
        {` `}
        <a aria-label="Link to the theme's GitHub repository" className="ml-2 hover:underline" href="https://github.com/ChristineTham/christham-portfolio">
          Website
        </a>
        <div className="mx-2">by</div>
        {` `}
        <a aria-label="Link to the theme author's website" className="hover:underline" href="https://hellotham.com">
          Hello Tham Pty Ltd
        </a>
      </div>
    </div>
  )
}

export default Footer
