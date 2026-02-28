import React from 'react'
import { getImage } from '../util/images'

type ProjectCardProps = {
  link: string
  title: string
  image?: string
  bg: string
  children: React.ReactNode
}

const ProjectCard: React.FC<ProjectCardProps> = ({ link, title, children, image = 'portfolio.jpg', bg }) => {
  const imageSrc = getImage(image)

  return (
    <div
      className="w-full shadow-lg relative rounded-lg px-4 py-3 sm:px-6 sm:py-4 text-white block transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:text-white hover:-translate-y-1 hover:shadow-xl"
      style={{ background: bg || 'none' }}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="no-underline text-inherit block"
      >
        {imageSrc ? (
            <img
                src={imageSrc.src}
                alt={title}
                className="w-full opacity-90 rounded-lg mb-2"
            />
        ) : null}
        <div className="tracking-wide pt-2 text-xl md:text-2xl font-medium leading-none">
            {title}
        </div>
      </a>
      <div className="opacity-85 text-sm md:text-base mt-2" style={{ textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    </div>
  )
}

export default ProjectCard
