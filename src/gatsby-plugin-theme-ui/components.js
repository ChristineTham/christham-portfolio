import React from 'react'
import ProjectCard from '../@lekoarts/gatsby-theme-cara/components/project-card.tsx'

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, image, children }) => (
    <ProjectCard link={link} title={title} bg={bg} image={image}>
      {children}
    </ProjectCard>
  )
}

export default components
