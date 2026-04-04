import type { Metadata } from "next"
import "../styles/global.css"

export const metadata: Metadata = {
  title: "Chris Tham - Portfolio",
  description: "Chris Tham Portfolio is a single page website showcasing my other websites",
  metadataBase: new URL("https://portfolio.christham.net"),
  openGraph: {
    title: "Chris Tham - Portfolio",
    description: "Chris Tham Portfolio is a single page website showcasing my other websites",
    url: "https://portfolio.christham.net",
    type: "website",
    images: [{ url: "/portfolio.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Tham - Portfolio",
    description: "Chris Tham Portfolio is a single page website showcasing my other websites",
    creator: "@chris1tham",
    images: ["/portfolio.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Injected before page render to apply stored color mode without flash */}
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        {children}
      </body>
    </html>
  )
}
