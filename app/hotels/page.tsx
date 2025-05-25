import React from 'react'
import RecommendedHotels from './components/RecommendaHotel'

import { hotels } from './data'
const HotelPage = () => {
  return (
    <>
        <RecommendedHotels
            hotels={hotels}
        />
    </>
    
  )
}

export default HotelPage