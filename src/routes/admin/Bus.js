import React, { useEffect, useState } from 'react'
import { UseBusList } from '../../hooks/buscontrolprovider'
import { Navigate, useNavigate } from 'react-router-dom'
import '../../style/bus.css'
import { IoMdAdd } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";

function Bus() {
  const { bus, deletebus, seteditbus ,searchbus,getBus} = UseBusList()
  const Navigate = useNavigate()
  const [busNo, setBusNo] = useState('')
  console.log(bus)
  const formatTime = (time) => {
    console.log(time)
    const [hour, minute] = time.split(':');
    let formattedHour = parseInt(hour, 10);
    const period = formattedHour >= 12 ? 'PM' : 'AM';
    if (formattedHour > 12) {
      formattedHour -= 12;
    } else if (formattedHour === 0) {
      formattedHour = 12;
    }
    return `${formattedHour}:${minute} ${period}`;
  };

  const search =()=>{
    const data={
      busNumber:busNo
    }
      searchbus(data)
  }
  
  useEffect(()=>{
    if(busNo<=0){
     getBus()
  }
  },[])
  

  return (
    <div className='bus'>
      <div className='busheader'>
        <div className='adsearch'>
          <label for="busNo">BusNo: </label>
          <input type='text' id='busNo' placeholder='Busnumer' value={busNo} onChange={(e)=>setBusNo(e.target.value)}/>
          <button type='submit' className='aSearch' onClick={()=>search()}><RiSearchLine size={30}/></button>
        </div>
        <button className='create' onClick={() => Navigate('/adminhome/createBus')}>NewBus<IoMdAdd size={20} /></button>
      </div>
      {bus.length ? bus.map((input, index) => {
        return (
          <div key={index} className='busli'>

            <div className='info'>
              <div>{input.busName}</div>
              <div>{input.busNumber}</div>
              <div>{input.totalSeat}</div>
              <div>{input.avaiableSeat}</div>
              <div>{input.bookedSeat}</div>
              <div>{input.inAC}</div>
              <div>{input.arrival}</div>
              <div>{input.departure}</div>
              <div>{input.stoppings}</div>
              <div>{formatTime(input.arriveTime)}</div>
              <div>{formatTime(input.departureTime)}</div>
              <div>{input.date}</div>

              <div className='row'><button className='edit' onClick={() => {
                seteditbus(input)
                Navigate('/adminhome/editbus')
              }}>Edit <MdEditSquare size={25} /></button><button className='delete' onClick={() => { deletebus(input._id) }}>Delete <CgTrash size={25} /></button></div>
            </div>
          </div>
        )
      }) : <p>bus is not found</p>}
    </div>
  )
}

export default Bus
