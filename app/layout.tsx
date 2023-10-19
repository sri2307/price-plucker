import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Price Plucker - Effortless Price Tracker for Smart Shoppers',
  description: 'Track product prices effortlessly with Price Plucker and save money on your purchases. Get notified of the best deals and discounts to make informed buying decisions.',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}


export default RootLayout