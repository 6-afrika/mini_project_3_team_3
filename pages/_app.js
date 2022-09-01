import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Chart from '../components/Chart';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Component {...pageProps} />
      <Chart />

    </>
  );
}

export default MyApp
