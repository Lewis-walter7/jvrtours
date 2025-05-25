'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Testimonial } from '@/app/types/testimonial';


const ReviewSlider = () => {
    const [reviews, setReviews] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch('/api/reviews');
                if (!res.ok) {
                    throw new Error(`Failed to fetch reviews: ${res.statusText}`);
                }
                const data = await res.json();
                setReviews(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                console.error("Error fetching reviews:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-[300px] md:w-[450px] w-[350px]"><p>Loading reviews...</p></div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-[300px] md:w-[450px] w-[350px] text-red-500"><p>Error: {error}</p></div>;
    }

    if (reviews.length === 0) {
        return <div className="flex justify-center items-center h-[300px] md:w-[450px] w-[350px]"><p>No reviews available at the moment.</p></div>;
    }

    return (
        <Swiper
            autoplay={{
                delay: 2500,
            }}
            loop={true}
            effect={'cards'} 
            grabCursor={true} 
            modules={[EffectCards]} 
            className="md:w-[450px] w-[350px] h-[300px]">
                {reviews.map((testimonial, index) => {                    
                    const key = testimonial.id ? testimonial.id : index;
                    return (
                        <SwiperSlide 
                            key={key}
                            className='bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-full'
                        >
                            <div className='w-[80%} mx-auto mt-10'>
                                <p className='text-xs sm:text-sm md:text-base font-semibold'>
                                    {testimonial.reviewText}
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
                                                src={'/wolf.png'} 
                                                width={60}
                                                height={60}
                                                alt="Reviewer Image"
                                                className='rounded-full'
                                            />
                                        </div>
                                        <div>
                                            <p className='text-sm lg:text-lgfont-semibold'>
                                                {testimonial.name}
                                            </p>
                                            
                                            <p className='text-sm lg:text-lgfont-semibold'>
                                                {testimonial.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                    })}
        </Swiper>
    )
}

export default ReviewSlider