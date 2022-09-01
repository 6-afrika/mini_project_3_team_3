import React from 'react'
import axios from "axios";
import Image from 'next/dist/client/image';

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
        
      
        <img   src={image} alt="DataUSA Chart" />
        
      </div>
    );
  }
  
  export default Chart;