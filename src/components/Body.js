import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Signup from '../routes/signup';
import Login from '../routes/login';
import Notfound from '../routes/notfound';
import Home from '../routes/Home';
import SearchBuslist from '../routes/SearchBuslist';
import BusDetails from '../routes/BusDetails';
import BookTicket from './BookTicket';
import Bus from '../routes/admin/Bus';
import Ticket from '../routes/admin/Ticket';
import User from '../routes/admin/User';
import Createbus from '../routes/admin/Createbus';
import Editbus from '../routes/admin/Editbus';
import Ticketview from '../routes/Ticketview';
import Adminhome from '../routes/admin/Adminhome';

function Body() {
  return (
    <div className='body'>
      <Routes>
        <Route path='/'>
             <Route path='home' index element={<Home/>}/>
             <Route path='search' element={<SearchBuslist/>}/>
             <Route path='busdetails/:_id' element={<BusDetails/>}/>
             <Route path='bookticket/:num' element={<BookTicket/>}/>
             <Route path='ticket' element={<Ticketview/>}/>
             
        </Route>
        <Route path='/adminhome' element={<Adminhome/>}>
            <Route path='bus' element={<Bus/>}/>
            <Route path='createBus' element={<Createbus/>}/>
            <Route path='ticket' element={<Ticket/>}/>
            <Route path='editbus' element={<Editbus/>}/>
            <Route path='user' element={<User/>}/>
            
        </Route>
        <Route path ='/signup' element={<Signup/>}/>
        <Route path ='/login' element={<Login/>}/>
        <Route path ='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default Body
