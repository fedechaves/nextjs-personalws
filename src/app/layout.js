import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from "@/components/AuthProvider/AuthProvider"

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Fede Chaves',
  description: 'Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <AuthProvider>
          <div className='container'>
            <Navbar/>
            {children}
            <Footer/>
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
