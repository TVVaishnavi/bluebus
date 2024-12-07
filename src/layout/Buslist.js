import React from 'react'
import '../styles/busSearch.css'
import { useNavigate } from 'react-router-dom'

function Buslist({data}) {
    console.log(data)
    const Navigate=useNavigate()
  return (
    <div className='buslist' onClick={()=>Navigate(`/busdetails:${data._id}`)}>
        <div>
            <h3>{data?.arrival} <span> icon </span> {data?.departure}</h3>
        </div>
        <div>
            <h3>{`${data?.arivetime} - ${data?.departuretime}  ${data.date}`}</h3>
        </div>
        <div>
            <h4><p>{`Avb:${data?.avaiableSeat?.length}`}</p></h4>
        </div>
    </div>
  )
}

export default Buslist
