import React, { useState } from 'react'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';
import { UseBusList } from '../hooks/buscontrolprovider'


function Login() {
  const [useremail, setuseremail]=useState('')
  const [password, setpassword]=useState('')
  const Navigate=useNavigate();
  const {login}=UseBusList()

  const loginProcess=async(user,password)=>{
    if(user==='' || password===''){
      alert("fill usernameoremail and password")
    }else{
      const data={
        email:user,
        password:password
      }
      login(data)
    }
  }


  return (
    <div className='loginbox'>
      <div className='login'>
        <h2>Login</h2>
      </div>
      <div className='logindetails'>
        <div className='userNameoremail'>
          <label>UserEmail: </label>
          <input type='txt' required={true} placeholder='Enter userEmail' value={useremail} onChange={(e)=>setuseremail(e.target.value)}/>
        </div>
        <div className='loginpassword'>
          <label>Login password:</label>
          <input type='password' required={true} placeholder='Enter New password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <div className='submitbutton'>
          <button onClick={()=>loginProcess(useremail, password)}>Submit</button>
          <p onClick={()=>Navigate('/signup')}>Create account </p>
        </div>
      </div>

    </div>
  )
} 

export default Login
