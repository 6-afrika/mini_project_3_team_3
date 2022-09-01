import React from 'react'
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link'



const Footer = () => {
    const Icons = [
        { name: "FaTwitter", link: "#" },
        { name: "FaGithub", link: "#" },
        { name: "FaLinkedinIn", link: "#" },
        { name: "FaInstagram", link: "#" },
        { name: "logo-instagram", link: "#" },
    ];
    return (
        <footer className='bg-[#395CB0] text-white h-60'>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8 mt-[100px]"
            >
                <span >© 2022 App. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
                <div className="text-white ">


                    <button className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-gray-500
        duration-300 "
                    >
                        <FaFacebook />
                    </button>

                    <button className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-gray-500
        duration-300 "
                    >
                        <FaTwitter />
                    </button>

                    <button className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-gray-500
        duration-300 "
                    >
                        <FaGithub />
                    </button>

                    <button className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-gray-500
        duration-300 "
                    >
                        <FaInstagram />
                    </button>

                    <button className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-gray-500
        duration-300 "
                    >
                        <FaLinkedinIn />
                    </button>

                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <a>
                        <div className='rounded-full shadow-sm shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-white'
                                size={15}
                            />
                        </div>
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer