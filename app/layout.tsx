import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yarvis - State of the Art macOS Screensaver',
  description: 'Experience the future of screensavers on macOS with Yarvis',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-sf-pro">
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
} 