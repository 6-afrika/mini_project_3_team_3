import React from 'react'
import MainImage from '../public/assets/MainImage.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <section class="relative mt-40 ml-30 md:ml-20  sm:ml-0">
            <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h2 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        A Simple Weather Application
                    </h2>
                    <p class="text-gray-700 text-lg text-center lg:text-left mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet nisl eu justo bibendum fringilla maximus luctus magna. Praesent urna dolor, dapibus ut blandit pellentesque, fringilla lobortis nulla. Ut bibendum turpis ac est condimentum auctor. Mauris eu sapien quis lorem tristique luctus. Integer quis nibh cursus, consectetur magna placerat, pulvinar sem. Morbi semper feugiat tempor. Vestibulum vitae turpis lacinia, euismod est in, blandit lacus. Mauris sed est in lectus ultrices vestibulum.

                    </p>

                </div>
                <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0  mr-[-60px]">
                    <Image className="" src={MainImage} width={400} height={400} alt="" />
                </div>
            </div>

        </section>

    )
}

export default Hero