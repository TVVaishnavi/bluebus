import React from 'react'
import { UseBusList } from '../hooks/buscontrolprovider'

function Ticketview() {
    const {ticket,Cancleticket}=UseBusList()
    const handlecancle=(data)=>{
        Cancleticket(data)
    }
  return (
    <div>
       {ticket.length? ticket.map((input, index)=>{
        return(
          <div key={index}>
            <div>{input.busNumber}</div>
            <div>{input.seatCount}</div>
            <div>{input.arrival}</div>
            <div>{input.departure}</div>
            <div>{input.bookingdate}</div>
            <div>{input.travellerdetails}</div>
            <div>{input.email}</div>
            <div><button onClick={()=>handlecancle(input)}>Cancel</button></div>
          </div>
        )
      }):<p>ticket is not found</p>}
    </div>
  )
}

export default Ticketview
