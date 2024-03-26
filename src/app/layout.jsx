import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Restaurant',
  description: 'Online Order Foods',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='[&::-webkit-scrollbar]:hidden'>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
