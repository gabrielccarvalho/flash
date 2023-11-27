import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Flashcards',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={GeistSans.className} lang="en">
      <body className="antialiased bg-mirage-50 text-mirage-950">
        {children}
      </body>
    </html>
  )
}
