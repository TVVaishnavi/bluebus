import React, { useState } from 'react'
import { UseBusList } from '../../hooks/buscontrolprovider'
import { Navigate, useNavigate } from 'react-router-dom'

function Bus() {
  const {bus,deletebus,seteditbus}=UseBusList()
  const Navigate=useNavigate()
  console.log(bus)
  return (
    <div> 
      <div>
        <button onClick={()=>Navigate('/dashboard/createBus')}>Create</button>
      </div>
      {bus.length? bus.map((input, index)=>{
        return(
          <div key={index}>
            <div><button onClick={()=>{
                 seteditbus(input)
                 Navigate('/dashboard/editbus')
            }}>edit</button><button onClick={()=>{deletebus(input._id)}}>delete</button></div>
            <div>{input.busNumber}</div>
            <div>{input.totalSeat}</div>
            <div>{input.avaiableSeat}</div>
            <div>{input.bookedseat}</div>
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
