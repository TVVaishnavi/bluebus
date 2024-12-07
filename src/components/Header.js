import React from 'react';
import'../styles/Header.css';
import {Link, useNavigate} from 'react-router-dom';
import { UseBusList } from '../hooks/buscontrolprovider';
import Account from '../layout/Account.js';
import { IoHome } from "react-icons/io5";

function Header() {
  const Navigate=useNavigate()
  const {userLogin,logout}= UseBusList()
  return (
    <div className='header'>
      <div className='headername'>
        <h1>BlueBus</h1>
      </div>
      <div className='headerleftside'>
        <button onClick={()=>Navigate('/home')}><IoHome size={30} /></button>
        <button onClick={()=>Navigate('/dashboard')}>Dashboad</button>
        <button onClick={()=>logout()}>Logout</button>
        {userLogin?<Account/>:<><button className='button' onClick={()=>Navigate('/signup')}>Signup</button>
        <button className='button' onClick={()=>Navigate('/Login')}>Login</button></>}
      </div>
    </div>
  )
}

export default Header
