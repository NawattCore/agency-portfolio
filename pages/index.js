
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Team from '../components/Team'
import Clients from '../components/Clients'
import Footer from '../components/Footer'
import { loadTranslations } from '../utils/i18n'

export default function Home() {
  return (
    <div className='bg-white'>
      <Head><title>Agency — Home</title></Head>
      <Header />
      <main>
        <Hero />
        <Team />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const messages = await loadTranslations(locale || 'en')
  return { props: { messages }, revalidate: 60 }
}
