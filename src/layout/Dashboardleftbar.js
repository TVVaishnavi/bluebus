import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UseBusList } from '../hooks/buscontrolprovider'
import '../styles/Leftbar.css'

const Dashboardleftbar = () => {
    const Navigate=useNavigate()
    const {getuser,getTickets,getBus}=UseBusList()
  return (
    <div className='container'>
      <div className='sidebar' onClick={()=>{
        getBus()
        Navigate('/dashboard/bus')}}>Bus</div>
      <div className='sidebar' onClick={()=>{
        getTickets()
        Navigate('/dashboard/ticket')}}>Tickets</div>
      <div className='sidebar' onClick={()=>{
        getuser()
        Navigate('/dashboard/user')}}>User</div>
    </div>
  ) 
}

export default Dashboardleftbar
