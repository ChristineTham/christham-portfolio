import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

type ProjectCardProps = {
  link: string
  title: string
  children?: React.ReactNode
  image?: string
  bg: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ link, title, children, image = 'portfolio.jpg', bg }) => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allFile(filter: { extension: { eq: "jpg" }, sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  `)

  type EdgeType = {
    node: { base: string }
  }
  const images = data.allFile.edges.map((item: EdgeType) => item.node.base)
  const index = images.indexOf(image)

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="w-full shadow-lg relative no-underline rounded-lg px-4 py-2 xs:px-8 xs:py-4 text-white block transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:text-white"
      style={{
        background: bg || 'none',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
    >
      <GatsbyImage
        image={data.allFile.edges[index].node.childImageSharp.gatsbyImageData}
        alt={image.replace(/.jpg$/, '')}
        loading="eager"
      />
      <div
        className="tracking-wide pt-2 text-2xl xs:text-3xl font-medium leading-none"
      >
        {title}
      </div>
      <div
        className="opacity-85 text-sm xs:text-base"
        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
      >
        {children}
      </div>
    </a>
  )
}

export default ProjectCard
