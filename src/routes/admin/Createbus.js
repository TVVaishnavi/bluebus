import React, { useState } from 'react'
import { UseBusList } from '../../hooks/buscontrolprovider'
import '../../style/Createbus.css'
import seatarr from '../../components/Seatseleter'
import seatdata from '../../data/Busseats'

function Createbus() {
    const [busName, setBusName] = useState('')
    const [busNumber, setbusNumber] = useState('')
    const [busLayer,setbusLayer]=useState()
    let totalSeat;
    let availableSeat={}
    const [bustype, setbustype] = useState('Setter')
    const [inAC, setinAc] = useState(true)
    const [arrival, setarrival] = useState('')
    const [departure, setdepature] = useState('')
    const [stoppings, setstoppings] = useState('')
    const [arriveTime, setarriveTime] = useState('')
    const [departureTime, setdepartureTime] = useState('')
    const [date, setdate] = useState('')

    const { CreateBus } = UseBusList()

    const handlecreatebus = () => {
        const obj = {
            busName, busNumber, totalSeat:totalSeat, availableSeat:availableSeat,busType:bustype, inAC, arrival, departure, stoppings, arriveTime, departureTime, date
        }
        //console.log(obj)
        CreateBus(obj)
    }

    const seats = (data) => {
        return(
            <div>
            <div>
                <h4>Lower:</h4>
                {seatarr.SeatLayout(data?.seats?.lower, 'L', data.busType)}
            </div>
            {data.seats.upper?<div>
                <h4>Upper:</h4>
                {seatarr.SeatLayout(data?.seats?.upper, 'U', data.busType)}
            </div>:null}
        </div>
        )
    }

    const setava=(data)=>{
        availableSeat=data.seats
        totalSeat=data.totalseat
        return seats(data)
    }

    return (
        <div className='newbus'>
            <div>
                <label>busName:</label>
                <input name='busName' type='text' placeholder='busName' value={busName} onChange={(e) => setBusName(e.target.value)}></input>
            </div>
            <div>
                <label>busNumber:</label>
                <input name='busNumber' type='text' placeholder='busNumber' value={busNumber} onChange={(e) => setbusNumber(e.target.value)}></input>
            </div>
            <div>
                <label>bustype:</label>
                <select id='bus' value={bustype} onChange={(e) => setbustype(e.target.value)} >
                    <option>Setter</option>
                    <option>Sleeper</option>
                </select>
                
            </div>
            <div><label>buLayer:</label>
                {bustype==='Setter'?<><select id='buslayer' value={busLayer} onChange={(e)=>setbusLayer(Number(e.target.value))}><option>1</option><option>2</option></select></>:2}</div>
                {bustype==='Sleeper'?setava(seatdata.Sleeper)
                :busLayer===2?setava(seatdata.doubleSetter):setava(seatdata.Setter)}
            <div>
                <label>arrival</label>
                <input name='arrival' type='text' placeholder='arrival' value={arrival} onChange={(e) => setarrival(e.target.value.toLocaleLowerCase())}></input>
            </div>
            <div>
                <label>departure: </label>
                <input name='departure' type='text' placeholder='departure' value={departure} onChange={(e) => setdepature(e.target.value.toLocaleLowerCase())}></input>
            </div>
            <div>
                <label>stoppings: </label>
                <input name='stoppings' type='text' placeholder='stoppings' value={stoppings} onChange={(e) => setstoppings(e.target.value)}></input>
            </div>
            <div>
                <label>arriveTime: </label>
                <input name='arriveTime' type='time' placeholder='arriveTime' value={arriveTime} onChange={(e) => setarriveTime(e.target.value)}></input>
            </div>
            <div>
                <label>departureTime: </label>
                <input name='departureTime' type='time' placeholder='departureTime' value={departureTime} onChange={(e) => setdepartureTime(e.target.value)}></input>
            </div>
            <div>
                <label>date: </label>
                <input name='date' type='date' placeholder='date' value={date} onChange={(e) => setdate(e.target.value)}></input>
            </div>
            <button className='savebut' onClick={()=>handlecreatebus()}>Create</button>
        </div>
    )
}

export default Createbus
