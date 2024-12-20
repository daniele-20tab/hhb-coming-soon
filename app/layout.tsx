import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Historical Household Budgets',
  description: 'HHB is a research project aimed at investigating the long-run evolution of living standards around the world by means of household budgets.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
