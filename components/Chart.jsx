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
        <section id="chart" className="   mt-8 h-screen w-screen">
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2 pb-5">
                <h1 className="text-3xl text-center text-black">Get your hourly weather here</h1>
                <p className="text-center text-gray-400 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>

            <img className="mx-auto" src={image} alt="DataUSA Chart" />

        </section>
    );
}

export default Chart;