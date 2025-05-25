import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import db from "../../db/testimonial.json";
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

export type testimonial = {
    name: string;
    message: string;
    location: string;
    image: string;
}

const ReviewSlider = async () => {
    const response = await fetch('/api/reviews');
    let reviews = await response.json();


  return (
    <div>
        <Swiper
            autoplay={{
                delay: 2500,
            }}
            loop={true}
            effect={'cards'} 
            grabCursor={true} 
            modules={[EffectCards]} 
            className="md:w-[450px] w-[350px] h-[300px]">
                {reviews.map((testimonial: testimonial, i: number) => {
                    return (
                        <SwiperSlide 
                            key={i}
                            className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full'
                        >
                            <div className='w-[80%} mx-auto mt-10'>
                                <p className='text-xs sm:text-sm md:text-base font-semibold'>
                                    {testimonial.message}
                                </p>
                                <div className='mt-3 flex flex-colflex items-center space-x-1 text-yellow-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='mt-8'>
                                    <div className='flex items-center space-x-4'>
                                        <div>
                                            <Image 
                                                src="/jeff.png"
                                                width={50}
                                                height={50}
                                                alt="Reviewer Image"
                                                className='rounded-full'
                                            />
                                        </div>
                                        <div>
                                            <p className='text-sm lg:text-lgfont-semibold'>
                                                {testimonial.name}
                                            </p>
                                            
                                            <p className='text-sm lg:text-lgfont-semibold'>
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                    })}
        </Swiper>
    </div>
  )
}

export default ReviewSlider