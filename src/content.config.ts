import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const Projects = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/Projects',
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
