import Modal from '@/app/components/modal/Modal'
import useOurMissionModal from '@/app/hooks/useOurMissionModal'
import React from 'react'

const OurMissionModal = () => {

  const ourMissionModal = useOurMissionModal()
  return (
    <Modal 
      isOpen={ourMissionModal.isOpen}
      onClose={ourMissionModal.onClose}
      title='Our Mission'
    />
  )
}

export default OurMissionModal