import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UseBusList } from '../hooks/buscontrolprovider'

const Dashboardleftbar = () => {
    const Navigate=useNavigate()
    const {getuser,getTickets,getBus}=UseBusList()
  return (
    <div>
      <p onClick={()=>{
        getBus()
        Navigate('/dashboard/bus')}}>Bus</p>
      <p onClick={()=>{
        getTickets()
        Navigate('/dashboard/ticket')}}>Tickets</p>
      <p onClick={()=>{
        getuser()
        Navigate('/dashboard/user')}}>User</p>
    </div>
  ) 
}

export default Dashboardleftbar
