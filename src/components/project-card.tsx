/** @jsxImportSource theme-ui */
import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui'
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
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        borderRadius: `lg`,
        px: [3, 4],
        py: [2, 3],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        '&:hover': {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`
        },
        display: 'block'
      }}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        sx={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        {imageSrc ? (
            <img
                src={imageSrc.src}
                alt={title}
                sx={{
                    width: '100%',
                    opacity: 0.9,
                    borderRadius: 'lg',
                    marginBottom: 2
                }}
            />
        ) : null}
        <div
            sx={{
            letterSpacing: `wide`,
            pt: 2,
            fontSize: [4, 5],
            fontWeight: `medium`,
            lineHeight: 1
            }}
        >
            {title}
        </div>
      </a>
      <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`, fontSize: [0, 1] }}>{children}</div>
    </div>
  )
}

export default ProjectCard
