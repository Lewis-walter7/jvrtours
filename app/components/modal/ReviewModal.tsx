import React from 'react'
import Modal from './Modal'
import useReviewModal from '@/app/hooks/useReviewModal'

const ReviewModal = () => {

    const reviewModal = useReviewModal()

    const body = (
        <div className='flex flex-col gap-4'>
            <input 
                type='text' 
                placeholder='Your Name' 
                className='border p-2 rounded-md'
            />
            <input 
                type='text' 
                placeholder='Your Country' 
                className='border p-2 rounded-md'
            />
            <textarea 
                placeholder='Your Review' 
                className='border p-2 rounded-md h-32'
            />
        </div>
    )
  return (
    <>
        <Modal 
            title='Add Your Review'
            onClose={reviewModal.onClose}
        />
    </>
  )
}

export default ReviewModal