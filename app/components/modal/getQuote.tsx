'use client'

import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import useQuoteModal from '@/app/hooks/useQuoteModal'

const GetQuote = () => {
    const quoteModal = useQuoteModal()

    const [people, setPeople] = useState(2);
  const [days, setDays] = useState(3);
  const [places, setPlaces] = useState(2);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    // Simple formula: tweak to match your real pricing logic
    const newCost = (people * 100) + (days * 80) + (places * 150);
    setCost(newCost);
  }, [people, days, places]);

    const body = (
  <div className="space-y-4">
    {/* People */}
    <div>
      <label className="block text-sm font-medium">Number of People: {people}</label>
      <input
        type="range"
        min={1}
        max={10}
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
        className="w-full"
      />
    </div>

    {/* Days */}
    <div>
      <label className="block text-sm font-medium">Number of Days: {days}</label>
      <input
        type="range"
        min={1}
        max={14}
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        className="w-full"
      />
    </div>

    {/* Places */}
    <div>
      <label className="block text-sm font-medium">Number of Places: {places}</label>
      <input
        type="range"
        min={1}
        max={5}
        value={places}
        onChange={(e) => setPlaces(Number(e.target.value))}
        className="w-full"
      />
    </div>

    {/* Result */}
    <div className="text-lg font-semibold text-green-600">
      Estimated Cost: ${cost.toLocaleString()}
    </div>

    <button
      //onClick={onClose}
      className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      Request Quote
    </button>
  </div>
);

  return (
    <Modal 
        isOpen ={quoteModal.isOpen}
        onClose={quoteModal.onClose}
        title= 'Get Free Quote'
        body={body}
    />
  )
}

export default GetQuote