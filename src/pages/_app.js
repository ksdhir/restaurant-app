import '@/styles/globals.css'

import Footer from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className="h-16" />
        <main className="flex-grow mb-8">
          <div className='container mx-auto p-4'>
            <Component {...pageProps} />
          </div>
        </main>
        <Footer className="h-16" />
      </div>
    </>
  )
}
