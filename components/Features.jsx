import React, { useEffect } from "react";
import { useState } from "react";
import MainImage from "../public/assets/MainImage.png";
import Image from "next/image";
import { data } from "autoprefixer";
import axios from "axios";

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
  const [cityData, setCityData] = useState();

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
      .get(`http:// ec2-13-57-225-181.us-west-1.compute.amazonaws.com/weather-forecast`, {
        params: { city_name: cityName },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err.message));

    await axios
      .get(`http://localhost:7000/city-details`, {
        params: { city_name: cityName },
      })
      .then((res) => setCityData(res.data))
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
            className="ml-20"
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

      <div className=" my-4  ">
        <div className="flex items-center py-4">
          <div className=" flex justify-center gap-8 w-full mt-6">
            {/* <!-- Product Tile Start --> */}
            <div className="w-80 h-64 rounded-lg hover:bg-gray-100 shadow-lg bg-white">
              <Image
                src={MainImage}
                alt="an image that shows the weather"
              ></Image>
              <p>{data.temp}</p>
            </div>

            <div className="w-80 h-64 rounded-lg hover:bg-gray-100 shadow-lg bg-white items-center justify-center">
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
              <h3>{cityName}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
