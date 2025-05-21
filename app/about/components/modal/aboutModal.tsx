import Modal from '@/app/components/modal/Modal'
import useAboutUsModal from '@/app/hooks/useAboutUsModal'
import React from 'react'

const AboutModal = () => {
    const aboutModal = useAboutUsModal()

    const body = (
      <div>
        Hello
      </div>
    )
  return (
    <Modal 
        isOpen={aboutModal.isOpen}
        title='About Us'
        onClose={aboutModal.onClose}
        body={body}
    />    
  )
}

export default AboutModal