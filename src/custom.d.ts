declare module '*.svg' {
  import type React from 'react'
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.mdx' {
  import type { MDXComponents } from 'mdx/types'
  const content: React.FC<{ components?: MDXComponents }>
  export default content
}

declare module '*.css' {
  const content: Record<string, string>
  export default content
}
