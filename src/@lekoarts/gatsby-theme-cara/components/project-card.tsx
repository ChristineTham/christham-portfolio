/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import { GatsbyImage } from 'gatsby-plugin-image'

type ProjectCardProps = {
  link: string
  title: string
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
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
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
        }
      }}
    >
      <GatsbyImage image={data.allFile.edges[index].node.childImageSharp.gatsbyImageData} alt={image.replace(/.jpg$/, '')} loading="eager" />
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
      <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`, fontSize: [0, 1] }}>{children}</div>
    </a>
  )
}

export default ProjectCard
