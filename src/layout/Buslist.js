import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Buslist.css'
import { IoMdSwap } from "react-icons/io";

function Buslist({data}) {
    const Navigate=useNavigate()
    const [showSeat, setShowwSeat]=useState(false)

    const toggleSeats=()=>{
        setShowwSeat(!showSeat)
    }

    console.log(data)
    const formatTime = (time) => {
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
    
    
  return (
    <div className='buslist' onClick={()=>Navigate(`/busdetails/${data._id}`)}>
        <div className='busName'>
            <h3>{data?.busName}</h3>
        </div>
        <div className='place'>
            <h3>{data?.arrival} <span><IoMdSwap /></span>{data?.departure}</h3>
        </div>
        <div className='time'>
            <h3>{`${formatTime(data?.arriveTime)} - ${formatTime(data?.departureTime)}`}</h3>
        </div>
        <div date>
            <h3>{`${data.date}`}</h3>
        </div>
        <div seat>
            <h4><p>{`${data?.availableSeat?.length}`}</p></h4>
        </div> 
    </div>
  )
}

export default Buslist
