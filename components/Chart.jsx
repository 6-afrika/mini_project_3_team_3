import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";

function Chart({ weatherChart }) {
  useEffect(()=>{
    console.log(`CHART: ${weatherChart}`)
  }, [weatherChart])

  return (
    <section className="charter">
      <div className=" my-4  ">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 id="chart" className="text-3xl text-center text-black">
            Get Your Weather Forcast Here
          </h1>
          <p className="text-center text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="flex items-center py-4">
          {/* <!-- The left line --> */}
          <div className="flex-grow h-px bg-gray-400"></div>
          <div />

          <div className=" flex justify-center gap-8 w-full mt-6">
            {weatherChart && (
              <Image
                src={weatherChart}
                alt="Weather Chart Image"
                width={700}
                height={200}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chart;
