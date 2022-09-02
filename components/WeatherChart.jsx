import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const WeatherChart = () => {
  const [image, setImage] = useState();
  const [cityName, setCityName] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const temps = [];
    const dates = [];

    const weatherData = await axios
      .get(`http:// ec2-13-57-225-181.us-west-1.compute.amazonaws.com/weather-forecast`, {
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

    setImage(
      `https://image-charts.com/chart?cht=bvo&chf=b0,lg,90,03a9f4,0,3f51b5,1|&chs=700x333&chd=a:${temps.join(
        ","
      )}&chan=1000,easeInCubic&chxt=x,y&chg=20,20&chxl=0:|${dates.join("|")}`
    );
  };

  return (
    <div className="w-full mt-16 flex flex-col gap-4 h-full">
      <h1 className="text-2xl">Weather Chart</h1>
      <form onSubmit={handleSearch}>
        <label>
          City Name
          <br />
          <input
            className="border-2"
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setCityName(e.target.value)}
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-1">
          Search
        </button>
      </form>

      {image && (
        <Image src={image} alt="Weather Chart Image" width={100} height={200} />
      )}
    </div>
  );
};

export default WeatherChart;
