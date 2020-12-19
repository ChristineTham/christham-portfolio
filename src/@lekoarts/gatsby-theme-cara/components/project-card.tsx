/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

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
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)

  type EdgeType = {
    node: { childImageSharp: { fluid: { originalName: string } } }
  }
  const images = data.allFile.edges.map((item: EdgeType) => item.node.childImageSharp.fluid.originalName)
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
        px: 4,
        py: [3, 3],
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
      <Img fluid={data.allFile.edges[index].node.childImageSharp.fluid} alt={image.replace(/.jpg$/, '')} />
      <div
        sx={{
          letterSpacing: `wide`,
          pt: 4,
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
