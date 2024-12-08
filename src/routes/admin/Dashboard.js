import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Dashboardleftbar from '../../layout/Dashboardleftbar'
import '../../styles/Dashboard.css'

function Dashboard() {
    const Navigate=useNavigate()
  return (
    <div className='maincontainer'>
      <Dashboardleftbar/>
      <div>
         <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
