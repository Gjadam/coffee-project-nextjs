import './globals.css'

// Components
import ScrollToTop from '@/components/modules/ScrollToTop/ScrollToTop'
import Cursor from '../components/modules/Cursor/Cursor'

// AOS config
import AOSInit from '@/utils/aos'

export const metadata = {
  title: 'باریستا | صفحه اصلی',
  description: 'Bitter coffee online store',
  icons: {
    icon: '/images/png/favicon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body>
        <AOSInit />
        {children}
        <Cursor />
        <ScrollToTop />
      </body>
    </html>
  )
}
