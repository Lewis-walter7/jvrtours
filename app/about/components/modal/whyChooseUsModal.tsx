import Modal from '@/app/components/modal/Modal'
import useWhyChooseUsModal from '@/app/hooks/useWhyChooseUsModal'
import React from 'react'

const WhyChooseUsModal = () => {
  const whyChooseUsModal = useWhyChooseUsModal()

  const body = (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-transform hover:-translate-y-1">
            <div className="text-3xl mb-2">👥</div>
            <h3 className="text-xl font-semibold mb-2">Personalized Itineraries</h3>
            <p>Every trip is tailored to match your style and interests.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-transform hover:-translate-y-1">
            <div className="text-3xl mb-2">🎧</div>
            <h3 className="text-xl font-semibold mb-2">Local Expert Guides</h3>
            <p>Discover hidden gems with passionate local storytellers.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-transform hover:-translate-y-1">
            <div className="text-3xl mb-2">🛫</div>
            <h3 className="text-xl font-semibold mb-2">All-Inclusive Planning</h3>
            <p>Flights, stays, and transport — we handle it all.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-transform hover:-translate-y-1">
            <div className="text-3xl">📞</div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>We're here whenever you need us, wherever you are.</p>
          </div>
      </div>
      </>
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