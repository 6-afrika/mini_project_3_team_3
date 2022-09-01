import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Footer from '../components/Footer';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
      <Component {...pageProps} />

    </>
  );
}

export default MyApp
