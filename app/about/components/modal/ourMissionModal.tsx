import Modal from '@/app/components/modal/Modal'
import useOurMissionModal from '@/app/hooks/useOurMissionModal'
import React from 'react'

const OurMissionModal = () => {

  const ourMissionModal = useOurMissionModal()

  const body = (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          At JVR Tours, our mission is to ignite the spirit of exploration and make global travel accessible, enjoyable, and meaningful for everyone. We believe that travel is more than just visiting places — it’s about creating lasting memories and gaining new perspectives.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We are dedicated to crafting enriching travel experiences that combine adventure, culture, and relaxation. Every journey we offer is rooted in quality, sustainability, and local authenticity. Our team of passionate travel experts works tirelessly to deliver personalized service that ensures every detail is taken care of, from the moment you book to the time you return home.
        </p>
        <p className="text-lg text-gray-700">
          Through our commitment to responsible tourism, we aim to positively impact the communities we visit, preserve natural and cultural heritage, and promote global understanding. With JVR Tours, you’re not just exploring the world — you’re helping make it better.
        </p>
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