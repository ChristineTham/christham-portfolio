import type { MDXComponents } from "mdx/types"
import ProjectCard from "./src/components/project-card"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ProjectCard,
    ...components,
  }
}
