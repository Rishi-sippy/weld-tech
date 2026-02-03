import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Madhu Steel & Wooden Fabrication | Palampur',
  description: 'Steel fabrication, welding and wooden work in Palampur. Welder & helper jobs available.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
