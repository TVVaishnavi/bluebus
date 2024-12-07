import React, {useState} from 'react'
import { UseBusList } from '../hooks/buscontrolprovider'
import { useParams } from 'react-router-dom'
import { IoMdSwap } from "react-icons/io";

function BookTicket() {
    const [seatCount, setSeatCount]=useState(1)
    const [row, setrow]=useState([{name:'',age:'',gender:''}])

    const addrow=()=>{
        const newrow={name:'',age:'',gender:''}
        setrow([...row,newrow])
    }

    const romoverow=()=>{
        const arr=row
        arr.pop()
        setrow(arr)
    }
    const handleFormChange = (index, event)=>{
        let data=[...row]
        data[index][event.target.name] = event.target.value
        setrow(data)
    }

    const {handlebuslist}=UseBusList()
   const {num}=useParams()
   const detail=handlebuslist(num)
  return (
    <div className='ticket'>

        {detail?<><div className='busdetail'>
            <div>
            <h3>{detail?.arrival} <span> <IoMdSwap /> </span> {detail?.departure}</h3>
        </div>
        <div>
            <h3>{`${detail?.arivetime} - ${detail?.departuretime}  ${detail.date}`}</h3>
        </div>
        <div>
            <h4><p>{`Avb:${detail?.avaiableSeat?.length}`}</p></h4>
        </div>
       <div>
         <h3>{detail.stoppings}</h3>
       </div>
       <div>
        <h3><p>{detail.inAC?"Ac":"Non-Ac"}</p></h3>
       </div>
       <div>
        <h3>{detail.busNumber}</h3>
       </div>
        </div>
        <div className='seat'>
           <label seat="seatcount">seatCount:</label>
           <div>
            <button disabled={seatCount===1} onClick={()=>{
                romoverow()
                setSeatCount(seatCount-1)}}>-</button><spam>{`${seatCount}`}</spam>
            <button disabled={seatCount>=40} onClick={()=>{
                addrow()
                setSeatCount(seatCount+1)}}>+</button>
           </div>
        </div> 
        <div className='form'>
            <table>
                <tr>
                    <th>Name:</th>
                    <th>age: </th>
                    <th>Gender: </th>
                </tr>
                {row?.map((input,index)=>{
                return(
                    <tr key={index}>
                        <td>
                            <input name='name' placeholder='Name' value={input.name} onChange={(e)=>handleFormChange(index, e)}/>
                        </td>
                        <td>
                            <input name='age' placeholder='Age' value={input.age} onChange={(e)=>handleFormChange(index, e)}/>
                        </td>
                        <td>
                            <input  name='gender' placeholder='Gender' value={input.gender} onChange={(e)=>handleFormChange(index, e)}/>
                        </td>
                    </tr>
                )
                })}
            </table>
        </div></>:<p>ticket is loading</p>}
        
      
    </div>
  )
}

export default BookTicket
