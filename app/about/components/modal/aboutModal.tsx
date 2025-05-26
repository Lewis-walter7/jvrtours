import Modal from '@/app/components/modal/Modal'
import useAboutUsModal from '@/app/hooks/useAboutUsModal'
import React from 'react'

const AboutModal = () => {
    const aboutModal = useAboutUsModal()

    const body = (
      <div>
        <p className="mb-4">
        Welcome to our world — where passion meets purpose. We’re a team of thinkers, builders, and doers who believe in making a meaningful impact through our work.
        </p>

        <p className="mb-4">
          Founded with a simple mission — to deliver exceptional services that solve real problems — we’ve grown into a trusted name by consistently putting people first. Whether it's our clients, team, or community, we lead with empathy, innovation, and excellence.
        </p>

        <p className="mb-4">
          Our services span across industries and are designed to empower businesses and individuals to thrive in an ever-changing digital landscape. We don't just deliver projects; we build relationships and long-term value.
        </p>

        <p className="mb-4">
          Thank you for taking the time to learn more about us. We invite you to explore our services, connect with our team, and see how we can create something great together.
        </p>

        <p className="font-semibold">Let’s build something amazing.</p>
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