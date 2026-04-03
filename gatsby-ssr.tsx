import * as React from 'react'
import { wrapRootElement as wrap } from './src/wrap-root-element'

// Inline script injected before page render to apply the stored color mode
// class before React hydrates, preventing a flash of the wrong theme.
const noFlashScript = `
(function() {
  try {
    var mode = localStorage.getItem('color-mode');
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`

export const onRenderBody = ({ setPreBodyComponents }: any) => {
  setPreBodyComponents([
    <script
      key="color-mode-no-flash"
      dangerouslySetInnerHTML={{ __html: noFlashScript }}
    />,
  ])
}

export const wrapRootElement = wrap
