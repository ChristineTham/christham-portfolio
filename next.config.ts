import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const svgrOptions = {
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
}

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Turbopack config (used by default in Next.js 16 for both dev and production)
  turbopack: {
    rules: {
      // Apply SVGR to all SVG files imported from the icons directory
      "./src/assets/icons/*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: svgrOptions,
          },
        ],
        as: "*.js",
      },
    },
  },
  // Webpack config kept for compatibility (used when --no-turbopack is passed)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      include: [/src[\\/]assets[\\/]icons/],
      use: [
        {
          loader: "@svgr/webpack",
          options: svgrOptions,
        },
      ],
    })
    return config
  },
}

export default withMDX(nextConfig)
