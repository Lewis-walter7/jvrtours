import useInfoModal from '@/app/hooks/useInfoModal'
import React from 'react'
import Modal from './Modal'
import { usePlaceStore } from '@/app/hooks/usePlaceStore'

const InfoModal = () => {

    const infoModal= useInfoModal()
    const selectedPlace = usePlaceStore()

  return (
    <Modal 
        isOpen ={infoModal.isOpen}
        onClose={infoModal.onClose}
        title= {selectedPlace.selectedPlace?.name}
    />
  )
}

export default InfoModal