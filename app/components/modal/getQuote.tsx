import React from 'react'
import Modal from './Modal'
import useQuoteModal from '@/app/hooks/useQuoteModal'

const GetQuote = () => {
    const quoteModal = useQuoteModal()
  return (
    <Modal 
        isOpen ={quoteModal.isOpen}
        onClose={quoteModal.onClose}
        title= 'Get Free Quote'
    />
  )
}

export default GetQuote