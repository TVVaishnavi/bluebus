import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Dashboardleftbar from '../../layout/Dashboardleftbar'

function Dashboard() {
    const Navigate=useNavigate()
  return (
    <div>
      <Dashboardleftbar/>
      <div>
         <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
