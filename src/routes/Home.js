import React from 'react'
import BusSearch from '../components/BusSearch'
import BookTicket from '../components/BookTicket'
import Createbus from './admin/Createbus'
import '../style/Home.css'


function Home() {
  return (
      
      <div className='home'>
        <div className='container'>   
        <h1 className='title'> <div>Welocome To </div><span className='titlename'>Blue Bus</span></h1>
       </div>
        <BusSearch/>
      </div>
      
  )
}

export default Home

