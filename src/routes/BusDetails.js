import React from 'react'
import { UseBusList } from '../hooks/buscontrolprovider'
import { useNavigate, useParams } from 'react-router-dom'
import { IoMdSwap } from "react-icons/io";

function BusDetails() {
  const Navigate=useNavigate()
   const {handlebuslist}=UseBusList()
   const {_id}=useParams()
   const detail=handlebuslist(_id)

  return (
    <div className='busDetail'>
       {detail?<><div>
            <h3>{detail?.arrival} <span> <IoMdSwap /> </span> {detail?.departure}</h3>
        </div>
        <div>
            <h3>{`${detail?.arivetime} - ${detail?.departuretime}  ${detail.date}`}</h3>
        </div>
        <div>
            <h4><p>{`Avb:${detail?.avaiableSeat?.length}`}</p></h4>
        </div>
       <div>
         <h3>{detail.stoppings}</h3>
       </div>
       <div>
        <h3><p>{detail.inAC?"Ac":"Non-Ac"}</p></h3>
       </div>
       <div>
        <h3>{detail.busNumber}</h3>
       </div>
       <div>
        <button onClick={()=>Navigate(`/bookticket${detail._id}`)}>BookTicket</button>
        </div></>:<p>page is error</p>}
    </div>
  )
}

export default BusDetails
