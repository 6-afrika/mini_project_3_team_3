import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { TbTemperatureCelsius } from 'react-icons/tb';

import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdPartlySunny,
  IoMdSnow,
  IoMdThunderstorm,
} from 'react-icons/io';

import { BsCloudDrizzleFill, BsCloudHaze2Fill, BsThermometer } from 'react-icons/bs';



const Features = ({ setCityName, cityName, setWeatherChart, weatherChart }) => {
  const filters = [
    "adventurer",
    "croodles",
    "female",
    "human",
    "identicon",
    "big-smile",
    "bottts",
    "avataaars",
    "jdenticon",
    "gridy",
    "micah",
  ];
  const [filter, setFilter] = useState(filters[0]);
  const [imgURL, setImgURL] = useState("");
  const [cityData, setCityData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false);
  const date = new Date();
  let iconvalue;


  function renderSwitch(param) {

    if (param.toLowerCase().includes('cloud')) {
      iconvalue = <IoMdCloudy />
    } else if (param.toLowerCase().includes('clear')) {
      iconvalue = <IoMdSunny className="text-[#ffde33]" />
    } else if (param.toLowerCase().includes('partly')) {
      iconvalue = <IoMdPartlySunny />
    } else if (param.toLowerCase().includes('rain')) {
      iconvalue = <IoMdRainy />
    } else if (param.toLowerCase().includes('haze')) {
      iconvalue = <BsCloudHaze2Fill />
    } else if (param.toLowerCase().includes("drizzle")) {
      iconvalue = <BsCloudDrizzleFill />

    } else if (param.toLowerCase().includes("snow")) {
      iconValue = <IoMdSnow />
    }
    else if (param.toLowerCase().includes(thunderstorm)) {
      icon = <IoMdThunderstorm />
    }
    else {
      iconvalue = <BsThermometer />
    }

  };


  useEffect(() => {
    console.log(`Filter Set: ${filter}`);
    console.log(`Avatar Url: ${imgURL}`);
  }, [filter, imgURL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setImgURL(`https://avatars.dicebear.com/api/${filter}/${cityName}.svg`);
    const temps = [];
    const dates = [];

    const weatherData = await axios
      .get(`http://localhost:7000/weather-forecast`, {
        params: { city_name: cityName },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err.message));

    weatherData.forEach((data) => {
      temps.push(data.Temperature);
      dates.push(
        new Date(data.Date).toLocaleDateString("en-US", { weekday: "long" })
      );
    });
    setWeatherChart(
      `https://image-charts.com/chart?cht=bvo&chf=b0,lg,90,03a9f4,0,3f51b5,1|&chs=700x333&chd=a:${temps.join(
        ","
      )}&chan=1000,easeInCubic&chxt=x,y&chg=20,20&chxl=0:|${dates.join("|")}`
    );

    await axios.get(`http://localhost:7000/city-details/?city_name=${cityName}`).then((response) => {
      setCityData(response.data)
    })

    await axios.get(`http://localhost:7000/current-weather/?city_name=${cityName}`).then((response) => {
      setCurrentWeather(response.data)
    })

    setIsSubmitted(!isSubmitted)
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setImgURL(`https://avatars.dicebear.com/api/${filter}/${cityName}.svg`);
  };

  return (

    <section id="features" className="  py-20 mt-15  w-screen">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-black">Features</h1>
        <p className="text-center text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="flex justify-center items-center gap-40 mr-20 mt-10">
        <form onSubmit={handleSubmit}>
          <input
            className="ml-20 shadow-md border-2 border-black border-rounded-md"
            placeholder="Enter your city here"
            onChange={(e) => setCityName(e.target.value)}
            type="text"
          />
        </form>
        <div className="flex gap-2">
          <h6 className="font-semibold">Select a sprite here: </h6>
          <select onChange={handleFilterChange}>
            {filters.map((filter, index) => (
              <option key={index} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isSubmitted && <div className=" my-4  ">
        <div className="flex items-center py-4">
          <div className=" flex justify-center gap-8 w-full mt-6">
            {/* <!-- Product Tile Start --> */}
            <div className=" w-80 h-64 rounded-lg text-gray-600 bg-bg-img hover:bg-gray-100 shadow-lg ">
              <div className='flex items-center gap-x-5'>
                <div className="ml-3 mt-5">
                  <div className="capitalize text-xl font-semibold"> {currentWeather.data[0].city_name} {currentWeather.data[0].country_code}</div>
                  {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
                </div>
              </div>
              <div className="my-5 ">
                <div className="flex justify-center items-center text-4xl">

                  <div className="text-[20px]">
                    {renderSwitch(currentWeather.data[0].weather.description)}
                    {iconvalue}
                  </div>
                  {currentWeather.data[0].temp}
                </div>
                <div className="flex justify-center items-center text-xl">
                  <TbTemperatureCelsius />

                </div>
                <div className="capitalize text-center">
                  {currentWeather.data[0].weather.description}
                </div>
              </div>

            </div>

            <div className="flex flex-col w-80 h-64 rounded-lg hover:bg-gray-100 shadow-lg  items-center justify-center">
              {imgURL && (
                <div className="flex items-center justify-center shadow-sm relative w-16 h-16  bg-white rounded-full">
                  <Image
                    src={imgURL}
                    width={50}
                    height={50}
                    alt="Generated Avatar"
                  />
                </div>
              )}
              <h3 className="font-semibold text-gray-600">City Name: {cityData[0].name}</h3>
              <h3 className="font-semibold text-gray-600">City Population: {cityData[0].population}</h3>
              <h3 className="font-semibold text-gray-600">City Elevation: {cityData[0].elevation}</h3>
            </div>
          </div>
        </div>
      </div>}
    </section>
  );
};

export default Features;
