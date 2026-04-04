import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

// Transform .svg imports into minimal React function components so tests that
// import icon-heavy modules (e.g. src/assets/icons/index.ts) don't fail on
// the raw SVG source that Vite would otherwise return.
const svgMockPlugin: Plugin = {
  name: 'svg-mock',
  transform(_code, id) {
    if (id.endsWith('.svg')) {
      return {
        code: `
import * as React from 'react';
const SvgMock = (props) => React.createElement('svg', { viewBox: '0 0 100 100', ...props });
SvgMock.defaultProps = { viewBox: '0 0 100 100' };
export default SvgMock;
`,
      }
    }
  },
}

export default defineConfig({
  plugins: [
    svgMockPlugin,
    react(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
})
