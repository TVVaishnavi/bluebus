import React from 'react'
import BusSearch from '../components/BusSearch'
import '../styles/Home.css'
import BookTicket from '../components/BookTicket'
import Createbus from './admin/Createbus'


function Home() {
  return (
      
      <div>
        <BusSearch/>
        <Createbus/>
      </div>
      
  )
}

export default Home

