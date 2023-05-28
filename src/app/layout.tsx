import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog',
  description: 'HyeonJi',
  icons:{
    icon: './favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='w-16 m:w-32 lg:w-48'>
          <nav>
            <Link href={""}>HyeonJi</Link>
            <Link href={""}>home</Link>
            <Link href={""}>about</Link>
            <Link href={""}>posts</Link>
            <Link href={""}>contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
