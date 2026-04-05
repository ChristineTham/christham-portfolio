'use client'

import Image from 'next/image'
import React from 'react'

type ProjectCardProps = {
  link: string
  title: string
  children?: React.ReactNode
  image?: string
  bg: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ link, title, children, image = 'portfolio.jpg', bg }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="
        relative block w-full rounded-lg px-4 py-2 text-white no-underline
        shadow-lg transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:text-white hover:shadow-xl
        xs:px-8 xs:py-4
      "
      style={{
        background: bg || 'none',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
    >
      <Image
        src={`/portfolio/${image}`}
        alt={image.replace(/\.jpg$/, '')}
        width={800}
        height={533}
        loading="eager"
        style={{ width: '100%', height: 'auto' }}
      />
      <div
        className="
          pt-2 text-2xl leading-none font-medium tracking-wide
          xs:text-3xl
        "
      >
        {title}
      </div>
      <div
        className="
          text-sm opacity-80
          xs:text-base
        "
        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
      >
        {children}
      </div>
    </a>
  )
}

export default ProjectCard
