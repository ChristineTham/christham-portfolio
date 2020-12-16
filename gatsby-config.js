require('dotenv').config({
  path: '.env'
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `christham.gtsb.io`,
    siteTitleAlt: `Chris Tham - Portfolio`,
    siteHeadline: `Chris Tham - Portfolio`,
    siteUrl: `https://christham.gtsb.io`,
    siteDescription: `Chris Tham portfolio website written in Gatsby`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@chris1tham`
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-cara',
      // See the theme's README for all available options
      options: {}
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chris Tham - Portfolio',
        short_name: 'christham.gtsb.io',
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
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    shouldAnalyseBundle && {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        reportFilename: '_bundle.html',
        openAnalyzer: false
      }
    }
  ].filter(Boolean)
}
