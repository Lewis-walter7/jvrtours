import Modal from '@/app/components/modal/Modal'
import useWhyChooseUsModal from '@/app/hooks/useWhyChooseUsModal'
import React from 'react'

const WhyChooseUsModal = () => {
  const whyChooseUsModal = useWhyChooseUsModal()
  return (
    <Modal
      isOpen={whyChooseUsModal.isOpen}
      title='Why Choose Us'
      onClose={whyChooseUsModal.onClose}
      />
  )
}

export default WhyChooseUsModal