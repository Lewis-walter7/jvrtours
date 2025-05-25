import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './reviewSlider'
import useReviewModal from '@/app/hooks/useReviewModal'

const Review = () => {

    const reviewModal = useReviewModal()
  return (
    <div className=" pt-20 pb-20 mb-6 justify-center items-center flex flex-col bg-[#13357b]">
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <h1 className='text-2xl font-semibold text-white'>
                    What Our Customers Say About Us
                </h1>
                <p className='text-white mt-4'>
                    We take pride in providing exceptional service and support to our customers. Here are some of the reviews from our satisfied clients.
                </p>

                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p className='text-2xl font-bold text-white'>
                            4.88
                        </p>
                        <p className='mb-2 text-white'>
                            Overall Rating
                        </p>
                        <div className='flex items-center space-x-1 text-white'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <div>
                        <button 
                            onClick={reviewModal.onOpen}
                            className='bg-white text-[#13357b] px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300'
                         >
                            Add Review
                        </button>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden'>
                <ReviewSlider />
            </div>
        </div>
    </div>
  )
}

export default Review