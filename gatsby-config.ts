import type { GatsbyConfig, PluginRef } from "gatsby";
import "dotenv/config";

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `portfolio.christham.net`,
    siteTitleAlt: `Chris Tham - Portfolio`,
    siteHeadline: `Chris Tham - Portfolio`,
    siteUrl: `https://portfolio.christham.net`,
    siteDescription: `Chris Tham Portfolio is a single page website showcasing my other websites`,
    siteLanguage: `en`,
    siteImage: `/portfolio.jpg`,
    author: `@chris1tham`
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `src/sections`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'assets',
        path: `src/assets/`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chris Tham - Portfolio',
        short_name: 'portfolio.christham.net',
        description: 'Chris Tham portfolio website written in Gatsby',
        start_url: '/',
        background_color: '#27272a',
        theme_color: '#f7caca',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-theme-ui`,
    'gatsby-plugin-netlify'
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;
