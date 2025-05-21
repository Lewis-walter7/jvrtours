import Modal from '@/app/components/modal/Modal'
import useOurMissionModal from '@/app/hooks/useOurMissionModal'
import React from 'react'

const OurMissionModal = () => {

  const ourMissionModal = useOurMissionModal()

  const body = (
      <div>
        Hello
      </div>
    )
  return (
    <Modal 
      isOpen={ourMissionModal.isOpen}
      onClose={ourMissionModal.onClose}
      title='Our Mission'
      body={body}
    />
  )
}

export default OurMissionModal