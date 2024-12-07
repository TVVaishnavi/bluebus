import React, { useState } from 'react'
import { UseBusList } from '../../hooks/buscontrolprovider'

function Createbus() {

    const [busNumber,setbusNumber]=useState('')
    const [totalSeat,settotalSeat]=useState(Number)
    const [avaiableSeat,setavaiableSeat]=useState([])
    const [inAC,setinAc]=useState(true)
    const [arrival,setarrival]=useState('')
    const [departure,setdepature]=useState('')
    const [stoppings,setstoppings]=useState('')
    const [arriveTime,setarriveTime]=useState('')
    const [departureTime,setdepartureTime]=useState('')
    const [date,setdate]=useState('')

    const {CreateBus}=UseBusList()

    const handlecreatebus=()=>{
       const obj={
        busNumber,totalSeat,avaiableSeat,inAC,arrival,departure,stoppings,arriveTime,departureTime,date
       }              
         CreateBus(obj)
    }
    const formarray=(num)=>{
       let arr=[]
       for(let i=1;i<=num;i++){
        arr.push(i)
       }
       return arr
    }

  return (
    <div>
        <div>
            <label>busNumber:</label>
            <input name='busNumber' type='text' placeholder='busNumber' value={busNumber} onChange={(e)=>setbusNumber(e.target.value)}></input>
        </div>
        <div>
            <label>totalSeat:</label>
            <input name='totalSeat' type='text' placeholder='totalseat' value={totalSeat} onChange={(e)=>{
                settotalSeat(e.target.value)
                setavaiableSeat(formarray(e.target.value))}}></input>
        </div>
        <div>
            <div>avaiableSeat:{avaiableSeat}</div>
        </div>                                                     
        <div>
            <label>arrival</label>
            <input name='arrival' type='text' placeholder='arrival'value={arrival} onChange={(e)=>setarrival(e.target.value)}></input>
        </div>
        <div>
            <label>departure: </label>
            <input name='departure'type='text' placeholder='departure'value={departure} onChange={(e)=>setdepature(e.target.value)}></input>
        </div>
        <div>
            <label>stoppings: </label>
            <input name = 'stoppings' type='text' placeholder='stoppings' value={stoppings} onChange={(e)=>setstoppings(e.target.value)}></input>
        </div>
        <div>
            <label>arriveTime: </label>
            <input name = 'arriveTime' type='time' placeholder='arriveTime' value={arriveTime} onChange={(e)=>setarriveTime(e.target.value)}></input>
        </div>
        <div>
            <label>departureTime: </label>
            <input name = 'departureTime' type='time' placeholder='departureTime' value={departureTime} onChange={(e)=>setdepartureTime(e.target.value)}></input>
        </div>
        <div>
            <label>date: </label>
            <input  name = 'date' type='date' placeholder='date' value={date} onChange={(e)=>setdate(e.target.value)}></input>
        </div>  
        <div><button onClick={()=>handlecreatebus()}>Create</button></div>    
    </div>
  )
}

export default Createbus
