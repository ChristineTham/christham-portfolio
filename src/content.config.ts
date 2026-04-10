import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const Projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/Projects',
  }),
  schema: ({ image }) =>
    z.object({
      weight: z.number().int().nonnegative().optional(),
      draft: z.boolean().default(false),
      title: z.string(),
      link: z.url(),
      image: image(),
    }),
})

const Sections = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/Sections',
  }),
})

export const collections = {
  Projects,
  Sections,
}
