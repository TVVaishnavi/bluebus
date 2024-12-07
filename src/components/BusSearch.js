import React, {useState}from 'react'
import { AiOutlineSwap } from "react-icons/ai";
import { UseBusList } from '../hooks/buscontrolprovider';
import { useNavigate } from 'react-router-dom';


function BusSearch() {
    const [From, setFrom]= useState('')
    const [To, setTo]= useState('')
    const [startDate, setstartDate]= useState('')
    const {BusSearch}=UseBusList()
    const swapLocation=()=>{
        setFrom(To);
        setTo(From);
    }
    const searchBus=async()=>{
        if(From!=='' && To!==''){
            const data={
                arrival: From,
                departure: To,
                date: startDate
            }
            BusSearch(data)
        }else{
            alert("fill the travel details")
        }
        
    }
  return (
    <div className='background'>
    <div className='container'>
      <h1 className='title'> Welcome To Blue Bus...</h1>
      <div className='search-bar'>
        <label for="from">FROM: </label>
        <input type='text' id='from' placeholder='Type a place' value={From} 
        onChange={(e)=>setFrom(e.target.value)}/>
                <button className='swap'onClick={swapLocation}><AiOutlineSwap size={30}/></button>
        <label for="to">TO: </label>
        <input type='text' id='to' placeholder='Type a Place' value={To}
        onChange={(e)=>setTo(e.target.value)}/>
        
        <label for="date">Date: </label>
        <input type='date' id='date' placeholder='MM/DD/YYYY' value={startDate} 
        onChange={(e)=>setstartDate(e.target.value)}/>
        
        <button type='submit'className='search-icon' onClick={()=>searchBus()}>Search</button>

      </div>
    </div>
    </div>
  )
}

export default BusSearch
