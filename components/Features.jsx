import React from 'react'
import { useState } from 'react';
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
        <section className="  py-20 mt-15 h-screen w-screen">

            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center text-black">Features</h1>
                <p className="text-center text-gray-400 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>


            <div className='flex justify-between mr-20'>
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

            <div className="container mb-25 mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-screen-lg justify-center items-center">

                <div className="flex flex-col ml-5 mt-4 rounded-md shadow-md bg-white lg:mb-16">
                    <div className="p-6 flex flex-col">


                    </div>
                    <h3 className="mt-5 mb-2 text-[16px] font-semibold">Weather card</h3>
                    <p className="mb-5 text-gray-400 font-light text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                </div>


                <div className="flex flex-col ml-5 mt-4 rounded-md shadow-md bg-white lg:mb-16">
                    <div className="p-6 flex flex-col">


                        {imgURL && (
                            <div className=' flex items-center justify-center shadow-md relative w-16 h-16  bg-white rounded-full'>
                                <Image src={imgURL} width={50} height={50} alt="Generated Avatar" />
                            </div>
                        )}




                    </div>
                    <h3 className="mt-5 mb-2 text-[16px] font-semibold">Business Consulting</h3>
                    <p className="mb-5 text-gray-400 font-light text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                </div>

            </div>

        </section >
    )
}

export default Features