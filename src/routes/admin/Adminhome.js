import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboardleftbar from '../../layout/Dashboardleftbar'
import '../../style/Dashboard.css'

function Adminhome() {
  return (
    <div className='maincontainer'>
      <Dashboardleftbar/>
      <div className='dashmain' onScroll={true}>
         <Outlet/>
      </div>
    </div>
  )
}

export default Adminhome
