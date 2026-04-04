/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react'
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
      css={{
        width: `100%`,
        boxShadow: `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `0.5rem`,
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        '@media (min-width: 400px)': {
          paddingLeft: '2rem',
          paddingRight: '2rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        },
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        display: 'block',
        '&:hover': {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)`,
        },
      }}
    >
      <GatsbyImage
        image={data.allFile.edges[index].node.childImageSharp.gatsbyImageData}
        alt={image.replace(/.jpg$/, '')}
        loading="eager"
      />
      <div
        css={{
          letterSpacing: `0.025em`,
          paddingTop: '0.5rem',
          fontSize: '1.5rem',
          '@media (min-width: 400px)': { fontSize: '1.875rem' },
          fontWeight: 500,
          lineHeight: 1,
        }}
      >
        {title}
      </div>
      <div
        css={{
          opacity: 0.85,
          textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
          fontSize: '0.875rem',
          '@media (min-width: 400px)': { fontSize: '1rem' },
        }}
      >
        {children}
      </div>
    </a>
  )
}

export default ProjectCard
