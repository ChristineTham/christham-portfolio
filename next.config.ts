import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  webpack(config) {
    // Handle SVG imports from the icons directory as React components via SVGR
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      include: [/src[\\/]assets[\\/]icons/],
      use: [
        {
          loader: "@svgr/webpack",
          options: {
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
          },
        },
      ],
    })
    return config
  },
}

export default withMDX(nextConfig)
