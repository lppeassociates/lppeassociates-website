import './globals.css'

export const metadata = {
  title: 'LP & PE Associates',
  description: 'Professional services and business support'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
