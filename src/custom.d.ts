declare module '*.svg' {
  import type React from 'react'
  const content: React.FC<React.SVGProps<SVGSVGElement>> & { defaultProps?: { viewBox?: string } }
  export default content
}
declare module '*.mdx' {
  const content: JSX
  export default content
}

declare module '*.jpg' {
  const content: ImageData
  export default content
}
