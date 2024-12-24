import React from 'react'
import { UseBusList } from '../hooks/buscontrolprovider'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdSwap } from "react-icons/io";
import '../style/Busdetail.css'

function BusDetails() {
  const Navigate=useNavigate()
   const {handlebuslist}=UseBusList()
   const {_id}=useParams()
   console.log(_id)
   const detail=handlebuslist(_id)
   console.log(detail)
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
    <div className='busDetailbody'>

       {detail[0]?<div className='busdetailbox'><div>
            <h3>{detail?.busName}</h3>
            <h3>{detail[0]?.arrival} <span> <IoMdSwap /> </span> {detail[0]?.departure}</h3>
        </div>
        <div>
            <h3>{`${formatTime(detail[0]?.arriveTime)} - ${formatTime(detail[0]?.departureTime)}`}</h3>
        </div>
        <div>
          <h3>{`${detail[0].date}`}</h3>
        </div>
        <div>
            <h4><p>{`SeatsAvailable:${detail[0]?.availableSeat?.length}`}</p></h4>
        </div>
       <div>
         <h3>{detail[0].stoppings}</h3>
       </div>
       <div>
        <h3><p>{detail[0].inAC?"Ac":"Non-Ac"}</p></h3>
       </div>
       <div>
        <h3>{detail[0].busNumber}</h3>
       </div>
       <div>
        <button  className='book'onClick={()=>Navigate(`/bookticket/${detail[0]._id}`)}>BookTicket</button>
        </div></div>:<p>page is error</p>}
    </div>
  )
}

export default BusDetails
