import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Footer from '../components/Footer';
import '../styles/globals.css'
import Chart from '../components/Chart';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Chart />
      <Footer />
      <Component {...pageProps} />
     

    </>
  );
}

export default MyApp
