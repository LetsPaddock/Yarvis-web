import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://yarvis-web.railway.app' : 'http://localhost:3000'),
  title: 'Yarvis - Screensaver',
  description: 'Experience the future of screensavers on macOS with Yarvis',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Yarvis - Screensaver',
    description: 'Experience the future of screensavers on macOS with Yarvis',
    images: ['/yarvis-banner.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yarvis - Screensaver',
    description: 'Experience the future of screensavers on macOS with Yarvis',
    images: ['/yarvis-banner.png'],
  },
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
      <body className="bg-[#f8f8f8] dark:bg-black text-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
} 