import React from 'react'
import axios from "axios";
import Image from 'next/image';

import { useEffect, useState } from "react";

function Chart() {
    const [image, setImage] = useState("");
  
    useEffect(() => {
      const callChart = async () => {
        let yearPopulations = [];
        let yearDates = [];
        const dataUSA = await axios.get(
          `https://datausa.io/api/data?drilldowns=Nation&measures=Population`
        );
        dataUSA.data.data.forEach((year) => {
          yearPopulations.push(year.Population);
          yearDates.push(year.Year);
        });
        setImage(
          `https://image-charts.com/chart?cht=bvo&chf=b0,lg,90,03a9f4,0,3f51b5,1|&chs=700x333&chd=a:${yearPopulations.join(
            ","
          )}&chan=1000,easeInCubic&chxt=x,y&chg=20,20&chxl=0:|${yearDates.join(
            "|"
          )}`
        );
      };
      callChart();
    }, []);
  
    return (
      <div className="charter">

         <div className=" my-4  ">
         <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center text-black">Get Your Weather Forcast Here</h1>
                <p className="text-center text-gray-400 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>

                <  div className="flex items-center py-4">
                            {/* <!-- The left line --> */}
                  <div className="flex-grow h-px bg-gray-400"></div> 
                   <div/>

                    <div className=" flex justify-center gap-8 w-full mt-6">
      
                   <Image src={image} alt="DataUSA Chart" />
                  </div>
               </div>
         </div>
      </div>
    );
  }
  
  export default Chart;