import * as React from "react"
import ProjectCard from "./project-card"

type ProjectCardMdxProps = {
  link: string
  title: string
  bg: string
  children?: React.ReactNode
  [key: string]: unknown
}

const MdxComponents = {
  ProjectCard: ({ link, title, bg, children, ...props }: ProjectCardMdxProps) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
}

export default MdxComponents
