import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import {Open_Sans} from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const sans = Open_Sans({subsets: ['latin']})

export const metadata = {
  title: 'Blog',
  description: 'HyeonJi',
  icons:{
    icon: './favicon.ico'
  }
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={sans.className}>
      {/* mx-auto : content 중앙 정렬 */}
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header/>
        {/* grow : content full 로 채우는 느낌 */}
        {/* grow : flex 내부에서 100% */}
        <main className='grow'>{children}</main>
        <Footer/>
      </body> 
    </html>
  )
}
