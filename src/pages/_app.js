import '@/styles/globals.css'

import Footer from '@/components/Footer'
import { Header } from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className="h-16" />
        <main className="flex-grow p-8">
          <Component {...pageProps} />
        </main>
        <Footer className="h-16" />
      </div>
    </>
  )
}
