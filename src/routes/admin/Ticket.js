import React from 'react'
import { UseBusList } from '../../hooks/buscontrolprovider'

function Ticket() {
  const {ticket}=UseBusList()
  console.log(ticket)
  return (
    <div className='adTicket'>
      <table className='adtable'>
        <tr>
        <th>BusName</th>
        <th>BusNumber</th>
        <th>seatCount</th>
        <th>arrival</th>
        <th>departure</th>
        <th>bookingDate</th>
        <th>travellerDetails</th>
        <th>date</th>
        </tr>
      {ticket.length? ticket.map((input, index)=>{
        return(
          <tr key={index}>
            <td>{input.busName}</td>
            <td>{input.busNumber}</td>
            <td>{input.seatNumber.length}</td>
            <td>{input.arrival}</td>
            <td>{input.departure}</td>
            <td>{input.bookingDate}</td>
            <td>{input.travellerDetails.length}</td>
            <td>{input.date}</td>
          </tr>

        )
      }):<tr><th>ticket is not found</th></tr>}
      </table>
    </div>
  )
}

export default Ticket
