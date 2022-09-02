import React from 'react'
import { useState } from 'react';
import MainImage from '../public/assets/MainImage.png'
import Image from 'next/image'


const Features = () => {
    const filters = ["adventurer", "croodles", "female", "human", "identicon", "big-smile", "bottts", "avataaars", "jdenticon", "gridy", "micah"]
    const [filter, setFilter] = useState(filters[0]);
    const [imgURL, setImgURL] = useState("");
    const [seed, setSeed] = useState("");

    const handleInputChange = (event) => {
        setSeed(() => {
            if (event.target.value.length > 0) {
                setImgURL(
                    `https://avatars.dicebear.com/api/${filter}/${event.target.value}.svg`
                )
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
        <section id="features" className="  py-20 mt-15 h-screen w-screen">

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
                        onChange={handleInputChange}
                        placeholder="Enter your city here"
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

                <  div className="flex items-center py-4">
                    {/* <!-- The left line --> */}
                    <div className="flex-grow h-px bg-gray-400"></div>
                    <div />

                    <div className=" flex justify-center gap-8 w-full mt-6">
                        {/* <!-- Product Tile Start --> */}
                        <div className="w-80 h-64 rounded-lg hover:bg-gray-100 shadow-lg bg-white">

                            <Image width={50} height={50} src={MainImage} alt="an image that shows the weather" />


                        </div>
                        {/* <!-- Product Tile End -->

                           <!-- Product Tile Start --> */}
                        <div className="w-80 h-64 rounded-lg hover:bg-gray-100 shadow-lg bg-white">
                            {imgURL && (<div className="block h-64 rounded-lg shadow-lg hover:bg-gray-100 bg-white">
                                <Image src={imgURL} width={50} height={50} alt="Generated Avatar" />
                            </div>
                            )}

                        </div>

                    </div>
                </div>

            </div>

        </section >
    )
}

export default Features