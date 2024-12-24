import React from 'react'
import '../style/Header.css'

function Option({ishidden}) {
  return (
    <ul  className='options'>
      <li>Account</li>
      <li>Tickets</li>
      <li>Logout</li>
    </ul>
  )
}

export default Option