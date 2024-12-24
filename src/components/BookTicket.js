import React, { useEffect, useState } from 'react';
import { UseBusList } from '../hooks/buscontrolprovider';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdSwap } from "react-icons/io";
import '../style/Bookticket.css';
import SeatLayout from '../layout/SeatLayout';


function BookTicket() {
    const Navigate=useNavigate()
    const { handlebuslist, BookTicket,row,setrow,selected} = UseBusList()
    const { num } = useParams()
    const detail = handlebuslist(num)

    const handleFormChange = (index, event) => {
        let data = [...row]
        data[index][event.target.name] = event.target.value
        setrow(data)
    }

    const getemail = () => {
        const data = JSON.parse(localStorage.getItem('userdetail'))
        if(data==null){
            Navigate('/login')
        }
        else{
            return data.email
        }
        
    }

    const handlebook = () => {
        const email=getemail()
        const data = {
            busNumber: detail[0].busNumber,
            busName:detail[0].busName,
            seatNumbers: selected,
            arrival: detail[0].arrival,
            departure: detail[0].departure,
            bookingDate: detail[0].date,
            travellerDetails: row,
            email:email
        }
        BookTicket(data)
        setrow([])
        console.log(data)
    }


    return (
        <div className='bookticket'>

            {detail.length ? <div className='ticketdetail'>
                <div className='bookbusdetail'>
                    <div>
                        <h3>{detail[0]?.arrival} <span> <IoMdSwap /> </span> {detail[0]?.departure}</h3>
                    </div>
                    <div>
                        <h3>{`${detail[0]?.arriveTime} - ${detail[0]?.departureTime}  ${detail[0].date}`}</h3>
                    </div>
                    <div>
                        <h4><p>{`Avb:${detail[0]?.availableSeat?.length}`}</p></h4>
                    </div>
                    <div>
                        <h3>{detail[0].stoppings}</h3>
                    </div>
                    <div>
                        <h3><p>{detail[0].inAC ? "Ac" : "Non-Ac"}</p></h3>
                    </div>
                    <div>
                        <h3>{detail[0].busNumber}</h3>
                    </div>
                </div>
                <div className='seat'>
                    <SeatLayout data={detail[0]} />
                </div>
                <div className='form'>
                    <table>
                        <tr>
                            <th>Name:</th>
                            <th>age: </th>
                            <th>Gender: </th>
                        </tr>
                        {row?.map((input, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input name='name' placeholder='Name' value={input.name} onChange={(e) => handleFormChange(index, e)} />
                                    </td>
                                    <td>
                                        <input name='age' placeholder='Age' value={input.age} onChange={(e) => handleFormChange(index, e)} />
                                    </td>
                                    <td>
                                        <input name='gender' placeholder='Gender' value={input.gender} onChange={(e) => handleFormChange(index, e)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                    <button className='submitticket' onClick={() => handlebook()}>BookTicket</button>
                </div></div> : <p>ticket is loading</p>}


        </div>
    )
}

export default BookTicket
