import Modal from '@/app/components/modal/Modal'
import useAboutUsModal from '@/app/hooks/useAboutUsModal'
import React from 'react'

const AboutModal = () => {
    const aboutModal = useAboutUsModal()
  return (
    <Modal 
        isOpen={aboutModal.isOpen}
        title='About Us'
        onClose={aboutModal.onClose}
    />    
  )
}

export default AboutModal