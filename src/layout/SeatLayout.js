import React from 'react'
import seatarr from '../components/Seatseleter'

const SeatLayout = ({data}) => {
  return (
    <div>
      <div>
        <h2>Lower:</h2>
         {seatarr.Seatgenetater(data?.availableSeat?.lower,'L',data.busType)}
      </div>
      <div>
        <h2>Upper:</h2>
         {seatarr.Seatgenetater(data?.availableSeat?.upper,'U',data.busType)}
      </div>
    </div>
  )
}

export default SeatLayout
