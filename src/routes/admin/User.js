import React from 'react'
import { UseBusList } from '../../hooks/buscontrolprovider'
import '../../style/user.css'

function User() {
  const { userList } = UseBusList()
  return (
    <div className='user'>
      <table className='table'>
        <tr className='tableheader'>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {userList.length ? userList.map((input, index) => {
          return (
            <tr key={index}>
              <td>{input.name}</td>
              <td>{input.email}</td>
            </tr>
          )
        }):<tr>
          <td>not found</td>
          <td>not found</td>
          </tr>}
      </table>

    </div>
  )
}

export default User
