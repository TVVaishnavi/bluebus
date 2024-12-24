import React from 'react'
import seatarr from '../components/Seatseleter'
import seatLayout from "../data/Busseats"

const SeatLayout = ({data}) => {

  const findLayout=(Bustype,datae)=>{
    if(Bustype==="Sleeper"){
       return seatLayout.Sleeper.seats
    }
    else if(Bustype==="Setter"){
      if(datae.availableSeat.upper && datae.availableSeat.lower){
        return seatLayout.Setter.seats
      }else if(datae.availableSeat.lower){
        return seatLayout.doubleSetter.seats
      }
    }
  }

  return (
    <div>
      <div>
        <h2>Lower:</h2>
         {seatarr.Seatgenetater(findLayout(data.Bustype,data).lower,'L',data.Bustype,data.bookedSeat)}
      </div>
      <div>
        <h2>Upper:</h2>
         {seatarr.Seatgenetater(findLayout(data.Bustype,data).upper,'U',data.Bustype,data.bookedSeat)}
      </div>
    </div>
  )
}

export default SeatLayout
