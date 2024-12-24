import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { UseBusList } from '../hooks/buscontrolprovider';
import logo from '../image/logo.png';
import '../style/Header.css';
import { RiAccountCircleFill } from "react-icons/ri";


function Header() {
  const Navigate=useNavigate()
  const {userLogin,logout,admin,getTickets}= UseBusList()
  const [hidden,sethidden]=useState(true)
  return (
    <div className='header'>
      <div><img className='logo' src={logo}/></div>
      <div className='headername'>
        <h1>BlueBus</h1>
      </div>
      <div className='headerleftside'>
        {admin?null:<div onClick={()=>Navigate('/home')}>home</div>}
        {userLogin?<><button className='account' onClick={()=>hidden?sethidden(false):sethidden(true)}><RiAccountCircleFill size={40}/></button></>:<><div className='button' onClick={()=>Navigate('/signup')}>Signup</div>
        <div className='button' onClick={()=>Navigate('/Login')}>Login</div></>}
      </div>
      <nav style={{display:hidden?'none':'flex'}} className='option'>

        {admin?null:<div onClick={()=>{
         getTickets()
         Navigate('/ticket')
        }}>Tickets</div>}
        <div onClick={()=>{logout()
          sethidden(true)}
        }>Logout</div>
      </nav>
        {/* <Option ishidden={hidden}/>  */}
    </div>
  )
}

export default Header
