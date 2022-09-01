import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Component {...pageProps} />

    </>
  );
}

export default MyApp
