import React, { useEffect, useState } from 'react'
import { BusSearch } from '../components/BusSearch'
import '../style/Buslist.css'


const Modify = ({data,handlemodify}) => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [startdate, setDate] = useState('')
    const handlesave= ()=>{
        if(from!=='' && to!==''){
            const data={
                arrival: from,
                departure: to,
                date: startdate
            }
            handlemodify(data)
        }else{
            alert("fill the travel details")
        }
    }
    useEffect(()=>{
        setFrom(data?.from)
        setTo(data?.to)
        setDate(data?.startdate)
    },[])
    return (
        <div className='modify'>
            <div>
                <label>From: </label>
                <input type='text' placeholder='from' value={from} onChange={(e)=>setFrom(e.target.value)}/>
            </div>
            <div>
                <label>To: </label>
                <input type='text' placeholder='to' value={to} onChange={(e)=>setTo(e.target.value)}/>
            </div>
            <div>
                <label>Date: </label>
                <input type='date' id='date' placeholder='MM/DD/YYYY' value={startdate} 
        onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <button onClick={()=>handlesave()}>save</button>
        </div>
    )
}

export default Modify
