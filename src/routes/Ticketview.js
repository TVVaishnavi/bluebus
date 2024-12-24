import React from 'react'
import { UseBusList } from '../hooks/buscontrolprovider'
import '../style/Ticket.css'
import { useNavigate } from 'react-router-dom'

function Ticketview() {
    const Navigate=useNavigate()
    const {ticket,Cancleticket}=UseBusList()
    const handlecancle=(data)=>{
        Cancleticket(data)
    }
  return (
    <div className='ticketbody'>
      <div className='ticketbox'>
       {ticket.length? ticket.map((input)=>{
        console.log(input)
        return(
          <div className='ticket'>
            <div>BusName: {input.busName}</div>
            <div>BusNumber: {input.busNumber}</div>
            <div>Seat:{input.seatCount}</div>
            <div>SeatNumber: {input.seatNumber}</div>
            <div>From: {input.arrival}</div>
            <div>To: {input.departure}</div>
            <div>BookingDate: {input.bookingDate}</div>
            <div>Traveller: {input.travellerDetails.length}</div>
            <div>Date: {input.date}</div>
            <div>Email: {input.email}</div>
            <button className='cancle' onClick={()=>Navigate(-1)}>Back</button>
            <button className='cancel' onClick={()=>handlecancle(input)}>Cancel</button>
          </div>
        )
      }):<p>ticket is not found</p>}
    </div>
    </div>
  )
}

export default Ticketview
