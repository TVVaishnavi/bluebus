import React, { useState } from 'react'
import '../style/Seats.css'
import { UseBusList } from '../hooks/buscontrolprovider'

const Seatgenetater = (data,key,type) => {
const {selected,setselected,addrow,romoverow}=UseBusList()

const handleonclick=(seat)=>{
   const seats=[...selected,seat]
   setselected(seats)
   addrow()
}

const handlechangeclick=(seat)=>{
    const seats=selected.filter((a)=>a !== seat)
    setselected(seats)
    romoverow()
}

const changecolor=(data,seat)=>{
   const exist=data.includes(seat)
   return exist
}

const slp=(seat,key,dis)=>{
   return(
    <div className='sleeperseat' style={{backgroundColor:changecolor(selected,key+seat)?'#21a0e9':'#ffff',cursor:dis?' ':'pointer'}} onClick={()=>changecolor(selected,key+seat)?handlechangeclick(key+seat):handleonclick(key+seat)}>{key+seat}</div>
   )
}

const sideslp=(seat,key,dis)=>{
    return(
        <div className='sleeperseatside' style={{backgroundColor:changecolor(selected,key+seat)?'#21a0e9':'#ffff',cursor:dis?' ':'pointer'}} onClick={()=>changecolor(selected,key+seat)?handlechangeclick(key+seat):handleonclick(key+seat)}>{key+seat}</div>
    )
}

const Rigset=(seat,key,dis)=>{
   return(
    <div className='rigset' style={{backgroundColor:changecolor(selected,key+seat)?'#21a0e9':'#ffff',cursor:dis?' ':'pointer'}}  onClick={()=>changecolor(selected,key+seat)?handlechangeclick(key+seat):handleonclick(key+seat)} >{key+seat}</div>
   )
}

const Lefset=(seat,key,dis)=>{
    return(
        <div className='lefset' style={{backgroundColor:changecolor(selected,key+seat)?'#21a0e9':'#ffff',cursor:dis?' ':'pointer'}} onClick={()=>changecolor(selected,key+seat)?handlechangeclick(key+seat):handleonclick(key+seat)}>{key+seat}</div>
    )
}
  return (
    <>
    {type==='Sleeper'?<div className='sleeperbox'>
      <div className='slpfirst'>{data?.first.length?data.first.map((seatnum)=>slp(seatnum,key+'N')):null}</div>
      <div className='slpsec'>{data?.second.length?data.second.map((seatnum)=>sideslp(seatnum,key+'S')):null}</div>
    </div>:<div className='setbox'>
        <div className='seterfirst'>{data?.first.length?data.first.map((seatnum)=>Rigset(seatnum,'R'+key)):null}</div>
        <br></br>
        <div className='setersec'>{data?.second.length?data.second.map((seatnum)=>Lefset(seatnum,'L'+key)):null}</div>
        </div>}
    </>
  )
}

const SeatLayout=(data,key,type)=>{
  console.log(data)
  const {selected,setselected,addrow,romoverow}=UseBusList()

const handleonclick=(seat)=>{
   const seats=[...selected,seat]
   setselected(seats)
   addrow()
}

const handlechangeclick=(seat)=>{
    const seats=selected.filter((a)=>a !== seat)
    setselected(seats)
    romoverow()
}

const changecolor=(data,seat)=>{
   const exist=data.includes(seat)
   return exist
}

  const slp=(seat,key,dis)=>{
    return(
     <div className='sleeperseat' style={{backgroundColor:changecolor(selected,key+seat)?'#21a0e9':'#ffff',cursor:dis?' ':'pointer',fontSize:'10px'}} onClick={()=>changecolor(selected,key+seat)?handlechangeclick(key+seat):handleonclick(key+seat)}>{key+seat}</div>
    )
 }
 
 const sideslp=(seat,key,dis)=>{
     return(
         <div className='sleeperseatside' style={{backgroundColor:changecolor(selected,key+seat)?'#21a0e9':'#ffff',cursor:dis?' ':'pointer',fontSize:'10px'}} onClick={()=>changecolor(selected,key+seat)?handlechangeclick(key+seat):handleonclick(key+seat)}>{key+seat}</div>
     )
 }
 
 const Rigset=(seat,key,dis)=>{
    return(
     <div className='rigset' style={{backgroundColor:changecolor(selected,key+seat)?'#21a0e9':'#ffff',cursor:dis?' ':'pointer',fontSize:'10px'}}  onClick={()=>changecolor(selected,key+seat)?handlechangeclick(key+seat):handleonclick(key+seat)} >{key+seat}</div>
    )
 }
 
 const Lefset=(seat,key,dis)=>{
     return(
         <div className='lefset' style={{backgroundColor:changecolor(selected,key+seat)?'#21a0e9':'#ffff',cursor:dis?' ':'pointer',fontSize:'10px'}} onClick={()=>changecolor(selected,key+seat)?handlechangeclick(key+seat):handleonclick(key+seat)}>{key+seat}</div>
     )
 }
  return(
    <>
    {type==='Sleeper'?<div className='sleeperbox'>
      <div className='slpfirst' style={{fontSize:'10px'}}>{data?.first.length?data.first.map((seatnum)=>slp(seatnum,key,true)):null}</div>
      <div className='slpsec'>{data?.second.length?data.second.map((seatnum)=>sideslp(seatnum,'S'+key,true)):null}</div>
    </div>:<div className='setbox'>
        <div className='seterfirst' style={{fontSize:'10px'}}>{data?.first.length?data.first.map((seatnum)=>Rigset(seatnum,'R'+key,true)):null}</div>
        <br></br>
        <div className='setersec' style={{fontSize:'10px'}}>{data?.second.length?data.second.map((seatnum)=>Lefset(seatnum,'L'+key,true)):null}</div>
        </div>}
    </>
  )
}

export default {Seatgenetater,SeatLayout}