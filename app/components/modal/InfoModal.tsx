import useInfoModal from '@/app/hooks/useInfoModal';
import React, { useEffect, useState } from 'react'



const InfoModal = () => {
    const infoModal = useInfoModal()

    const [showModal, setShowModal] = useState(infoModal.isOpen);
     useEffect(() => {
        setShowModal(infoModal.isOpen)
    }, [infoModal.isOpen])

    const handleClose = () => {
        infoModal.onClose()
    }

    if(showModal) {
      return (
        <div>InfoModal</div>
     )
    } else {
      return null
    }
}

export default InfoModal