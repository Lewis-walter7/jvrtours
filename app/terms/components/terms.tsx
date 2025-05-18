import React from 'react'

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className="mt-2 text-lg">For Safari Adventures Bookings</p>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="prose prose-lg max-w-none text-gray-800">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By booking a tour or using the services of Safari Adventures, you agree to be bound by these Terms and Conditions. These terms apply to all bookings made through our website or authorized agents as of the last updated date: June 7, 2025, 06:07 PM EAT.
          </p>
          <br />
          <h2>2. Booking and Payment</h2>
          <p>
            All bookings require a 25% deposit at the time of reservation, with the remaining balance due 30 days prior to departure. Payments can be made via credit card, bank transfer, or other methods specified on our website. All prices are in USD and subject to change due to currency fluctuations or unforeseen increases in operational costs.
          </p>
          <br />
          <h2>3. Cancellations and Refunds</h2>
          <p>
            Cancellations must be made in writing. Refunds are subject to the following schedule:
            - More than 60 days before departure: 75% refund.
            - 30-60 days before departure: 50% refund.
            - Less than 30 days before departure: No refund.
            No refunds will be issued for no-shows or early departures.
          </p>
          <br />
          <h2>4. Travel Insurance</h2>
          <p>
            We strongly recommend purchasing comprehensive travel insurance to cover trip cancellations, medical emergencies, and lost luggage. Safari Adventures is not liable for any losses or damages not covered by insurance.
          </p>
          <br />
          <h2>5. Liability</h2>
          <p>
            Safari Adventures acts as an intermediary and is not responsible for injuries, losses, or damages caused by third parties, including but not limited to weather conditions, wildlife encounters, or transportation providers. Participants travel at their own risk.
          </p>
          <br />
          <h2>6. Health and Safety</h2>
          <p>
            Travelers must inform us of any medical conditions or dietary restrictions at the time of booking. We reserve the right to refuse service to individuals whose health or behavior may jeopardize the safety of the group.
          </p>
          <br />
          <h2>7. Privacy</h2>
          <p>
            We collect personal information to process bookings and improve our services. Your data will be handled in accordance with our Privacy Policy, available on our website.
          </p>
          <br />
          <h2>8. Changes to Terms</h2>
          <p>
            Safari Adventures reserves the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated "Last Updated" date.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Terms