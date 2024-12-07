import React, { useState } from 'react'
import { UseBusList } from '../../hooks/buscontrolprovider'

function Bus() {
  const {bus}=UseBusList()
  return (
    <div> 
      <div>
        
      </div>
      {bus.length? bus.map((input, index)=>{
        return(
          <div key={index}>
            <div><button>edit</button><button>delete</button></div>
            <div>{input.busNumber}</div>
            <div>{input.totalSeat}</div>
            <div>{input.avaiableSeat.length}</div>
            <div>{input.bookedseat.length}</div>
            <div>{input.inAC}</div>
            <div>{input.arrival}</div>
            <div>{input.departure}</div>
            <div>{input.stopings}</div>
            <div>{input.arivetime}</div>
            <div>{input.departuretime}</div>
            <div>{input.date}</div>
          </div>
        )
      }):<p>bus is not found</p>}
    </div>
  )
}

export default Bus
