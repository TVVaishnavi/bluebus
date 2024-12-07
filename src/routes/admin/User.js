import React from 'react'
import { UseBusList } from '../../hooks/buscontrolprovider'

function User() {
  const {userList}=UseBusList()
  return (
    <div>
      {userList.length? userList.map((input, index)=>{
        return(
          <div key={index}>
          <div>{input.name}</div>
          <div>{input.email}</div>
       </div>
        )
      }):<p>not found</p>}
    </div>
  )
}

export default User
