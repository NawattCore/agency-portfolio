
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { fetchServices } from '../../utils/api'
import { loadTranslations } from '../../utils/i18n'

export default function ServicePage({ service }) {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{service?.attributes?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: service?.attributes?.description || '' }} />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params, locale }) {
  const messages = await loadTranslations(locale || 'en')
  let service = null
  try {
    const res = await fetchServices(locale)
    service = res.data?.find(s => s.attributes.slug === params.id) || null
  } catch (e) {}
  return { props: { service, messages }, revalidate: 60 }
}
