import './globals.css'

export const metadata = {
  title: 'Online Restaurant',
  description: 'Online Order Foods',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='[&::-webkit-scrollbar]:hidden'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
