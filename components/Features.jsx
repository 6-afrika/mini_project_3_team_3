import React from 'react'
import { useState } from 'react';
import axios from "axios";
import MainImage from '../public/assets/MainImage.png'
import Image from 'next/image'
import { data } from 'autoprefixer';


const Features = () => {
    const filters = ["adventurer", "croodles", "female", "human", "identicon", "big-smile", "bottts", "avataaars", "jdenticon", "gridy", "micah"]
    const [filter, setFilter] = useState(filters[0]);
    const [imgURL, setImgURL] = useState("");
    const [seed, setSeed] = useState("");
    const url = `http://localhost:7000/current-weather/?city_name=${seed}`

    const [weather, setWeather] = useState()

    const handleInputChange = (event) => {
        setSeed(() => {
            if (event.key === "Enter") {
                if (event.target.value.length >= 0) {
                    setImgURL(`https://avatars.dicebear.com/api/${filter}/${event.target.value}.svg`)
                    axios.get(url).then((response) => {
                        setWeather(response.data)
                        console.log(response.data)

                    })
                    setSeed('')
                }


            }

            return event.target.value;
        })


    }

    const handleFilterChange = (event) => {
        setFilter(() => {
            setImgURL(
                `https://avatars.dicebear.com/api/${event.target.value}/${seed}.svg`
            );
        })

    };

    return (
        <section id="features" className="  py-20 mt-15  w-screen">

            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center text-black">Features</h1>
                <p className="text-center text-gray-400 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>


            <div className='flex justify-center items-center gap-40 mr-20 mt-10'>
                <div>
                    <input
                        className="ml-20"
                        value={seed}
                        onChange={event => setSeed(event.target.value)}
                        placeholder="Enter your city here"
                        onKeyPress={handleInputChange}
                        type="text"
                    />
                </div>
                <div className='flex gap-2'>
                    <h6 className="font-semibold">Select a sprite here:  </h6>
                    <select onChange={handleFilterChange} >
                        {filters.map((value, index) => (
                            <option value={value} key={index}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>



            <div className=" my-4  ">

                <div className="flex items-center py-4">
                    {/* <!-- The left line --> */}

                </div>

                <div className=" flex justify-center gap-8 w-full mt-6">
                    {/* <!-- Product Tile Start --> */}
                    <div className="w-80 h-64 rounded-lg hover:bg-gray-100 shadow-lg bg-white">

                        <Image src={MainImage} alt="an image that shows the weather"></Image>
                        <p>{data.temp}jkll</p>


                    </div>

                    <div className="w-80 h-64 rounded-lg hover:bg-gray-100 shadow-lg bg-white">
                        {imgURL && (<div className="flex items-center justify-center shadow-sm relative w-16 h-16  bg-white rounded-full">
                            <Image src={imgURL} width={50} height={50} alt="Generated Avatar" />

                        </div>
                        )}

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features