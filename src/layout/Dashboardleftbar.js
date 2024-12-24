import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UseBusList } from '../hooks/buscontrolprovider'


const Dashboardleftbar = () => {
    const Navigate=useNavigate()
    const {getuser,getTickets,getBus}=UseBusList()
  return (
    <div className='dashcontainer'>
      <div className='sidebar' onClick={()=>{
        getBus()
        Navigate('/Adminhome/bus')}}>Bus</div>
      <div className='sidebar' onClick={()=>{
        getTickets()
        Navigate('/Adminhome/ticket')}}>Tickets</div>
      <div className='sidebar' onClick={()=>{
        getuser()
        Navigate('/Adminhome/user')}}>User</div>
    </div>
  ) 
}

export default Dashboardleftbar
