import React, { useEffect, useState } from 'react'
import '../styles/signup.css'
import { UseBusList } from '../hooks/buscontrolprovider'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setusername] = useState('');
    const [useremail, setuseremail] = useState('');
    const Navigate=useNavigate();
    const [emailindicator, setemailindicator] = useState(true);
    const [indicator, setindicator] = useState(false);
    const [secpass, setsecpass] = useState('');
    const [conpass, setconpass] = useState('');
    const {signup}=UseBusList()

    const submit =async() => {
        if (emailindicator){
            if(secpass===conpass){
               const data={
            name:username,
            email:useremail,
            password:secpass
           }
           console.log(data)
           signup(data) 
            }
            else{
                setindicator(true)
            }
        } else {
            setindicator(true)
        }
    }
    const checkemail = (email) => {
        if (email.includes('@gmail.com') || email === '') {
            setemailindicator(true)
        } else {
            setemailindicator(false)
        }
    }
    return (
        <div className='signupbox'>
            <div className='signup'>
                <h2>Signup</h2>
            </div>
            <div className='signupdetails'>
                <div className='userName'>
                    <label>UserName: </label>
                    <input type='txt' required placeholder='Enter user Name' value={username} onChange={(e) => setusername(e.target.value)} />
                </div>
                <div className='email'>
                    <label>Email: </label>
                    <input type='txt' required placeholder='Enter Email id' value={useremail} onChange={(e) => {setuseremail(e.target.value);checkemail(e.target.value)}}/>
                    {emailindicator ? null : <p style={{ color: 'red' }}>Email is incorrect</p>}
                </div>
                <div className='password'>
                    <label>Create Password: </label>
                    <input type='password' required placeholder='Enter New Password' value={secpass} onChange={(e) => setsecpass(e.target.value)} />
                </div>
                <div className='correctpassword'>
                    <label>Confirm Password: </label>
                    <input type='password' required placeholder='Enter correct password' value={conpass} onChange={(e) => setconpass(e.target.value)} />
                    {indicator ? <p style={{ color: "red" }}>Incorrect Password</p> : null}
                </div>
                <div className='statement'>
                    <button className='submit' onClick={() => submit()}>Submit</button>
                    <p onClick={()=>Navigate('/login')}>Already has account?</p>
                </div>
            </div>
        </div>
    )
}

export default Signup
