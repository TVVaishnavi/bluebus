import React, { useEffect, useState } from 'react'
import { UseBusList } from '../hooks/buscontrolprovider'
import Buslist from '../layout/Buslist'
import { FaArrowRight } from "react-icons/fa6"
import Modify from './Modify'
import '../style/Buslist.css'


function SearchBuslist() {
  const { searchresult, searchdet ,BusSearch} = UseBusList()
  const [modi,setmodi]=useState(false)
  const handlesearch=(data)=>{
      BusSearch(data)
      setmodi(false)
  }
  return (
    <div style={{
      width: '100%', minheight: '90vh', backgroundColor: '#dadada',
      display: 'flex', flexDirection: 'column'
    }}>
      <div className='searchname'>
        <h3>{searchdet?.arrival}<span> To </span>{searchdet?.departure}<span> Bus </span></h3>
      </div>
      {modi?<Modify data={searchdet} handlemodify={handlesearch}/>:<div className='box'>
        <h3>{searchdet?.arrival} <FaArrowRight size={15} /> {searchdet?.departure} </h3>
        <h3 className='date'>{searchdet?.date}</h3>
        
        <button onClick={()=>setmodi(true)}>modify</button>
      </div>}
      {searchresult.length ? searchresult.map((data) => {
        return <Buslist data={data} />
      }) : null}

    </div>
  )
}

export default SearchBuslist
