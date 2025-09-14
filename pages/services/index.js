import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <main className='p-6'>
        {/* Your other content goes here */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <p className="text-center text-gray-600">Add your content here...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}