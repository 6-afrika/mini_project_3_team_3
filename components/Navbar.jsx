import React from 'react'
import { WiDayFog } from "react-icons/wi"
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react'
import { useEffect } from 'react'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])
    const handleToggle = () => {
        setNav(prevValue => !prevValue)
    }
    return (
        <nav className={shadow ? 'fixed w-full top-0 left-0  shadow-xl  z-[100] bg-[#395CB0]' : 'fixed w-full top-0 left-0 z-[100] bg-[#395CB0]'}>
            <div className='flex justify-between items-center w-full h-full  px-2 2xl:px-16'>
                <div className='font-bold ml-10 text-2xl gap-3 cursor-pointer flex items-center font-sans 
        text-white'>
                    <div className='rounded-full bg-white shadow-s shadow-white p-3 mb-2 mt-2'>
                        <WiDayFog className='text-black' />
                    </div>

                    Weather Daily
                </div>
                <div>
                    <ul className='mr-20 hidden md:flex text-white cursor-pointer'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:text-gray-400'>Home</li>
                        </Link>
                        <Link href='/#features'>
                            <li className='ml-10 text-sm uppercase hover:text-gray-400'>City Weather</li>
                        </Link>
                        <Link href='/#chart'>
                            <li className='ml-10 text-sm uppercase hover:text-gray-400'>Hourly Weather</li>
                        </Link>
                        <Link href='/#footer'>
                            <li className='ml-10 text-sm uppercase hover:text-gray-400'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleToggle} className='md:hidden'>
                        <AiOutlineMenu size={25} className='text-white' />
                    </div>
                </div>
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 width-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500 ' : 'fixed left-[-100%] top-0  ease-in duration-500 '}>
                    <div className='mt-[10px] ml-[20px] mr-[10px]'>
                        <div className='flex w-full items-center justify-between '>
                            <div className='rounded-full bg-white shadow-s shadow-white p-3 mb-2 mt-2'>
                                <WiDayFog className='text-black' />
                            </div>
                            <div onClick={handleToggle} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>

                        </div>
                        <div className=' ml-[10px] border-b border-gray-300 my-4 '>
                            <p className='w-[85%] md:w-[90%] py-4 ml-[10px] font-semibold'>Check out your city's weather here</p>
                        </div>
                    </div>
                    <div className='ml-[20px] py-4 flex flex-col'>
                        <ul className='uppercase cursor-pointer'>
                            <Link href="/">
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-gray-400'>Home</li>
                            </Link>
                            <Link href="/#features">
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-gray-400'>City Weather</li>
                            </Link>
                            <Link href="/#chart">
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-gray-400'>Hourly Weather</li>
                            </Link>
                            <Link href="/#footer">
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-gray-400'>About</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest'>Contact Us</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />

                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />

                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />

                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar