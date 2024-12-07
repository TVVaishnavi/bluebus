import React from 'react'
import { UseBusList } from '../hooks/buscontrolprovider'
import Buslist from '../layout/Buslist'
import '../styles/busSearch.css'

function SearchBuslist() {
    const {searchresult}=UseBusList()
    console.log(searchresult)
  return (
    <div>
       {searchresult.length? searchresult.map((data)=>{
        return <Buslist data={data}/>
       }): null}
    </div>
  )
}

export default SearchBuslist
