import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Chart from "../components/Chart";
import WeatherChart from "../components/WeatherChart";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [cityName, setCityName] = useState();
  const [weatherChart, setWeatherChart] = useState();

  useEffect(() => {
    console.log(`City Name: ${cityName}`);
    console.log(`Weather Chart URL: ${weatherChart}`);
  }, [cityName, weatherChart]);
  return (
    <>
      <Navbar />
      {/* <WeatherChart /> */}
      <Hero />
      <Features setCityName={setCityName} cityName={cityName} setWeatherChart={setWeatherChart} weatherChart={weatherChart} />
      <Chart weatherChart={weatherChart} />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
