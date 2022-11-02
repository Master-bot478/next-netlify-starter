import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bem vindo!" />
        <p className="description">
          https://webbot.me/599aedc4babc6524cad7daa4fd95bf082bc43c7087f624d90c07ea1b99bdf2b6
        </p>
      </main>

      <Footer />
    </div>
  )
}
