import Modal from '@/app/components/modal/Modal'
import useWhyChooseUsModal from '@/app/hooks/useWhyChooseUsModal'
import React from 'react'

const WhyChooseUsModal = () => {
  const whyChooseUsModal = useWhyChooseUsModal()

  const body = (
      <div>
        Hello
      </div>
    )
  return (
    <Modal
      isOpen={whyChooseUsModal.isOpen}
      title='Why Choose Us'
      onClose={whyChooseUsModal.onClose}
      body={body}
      />
  )
}

export default WhyChooseUsModal